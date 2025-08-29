---
title: Client & Server
---

Author: DylWithlt

What is a Client? What is a Server?
Starting from the very basics let's start with some general definitions.

# 🏢 Server 
A server is a machine that takes and processes requests and provides resources to other computers that are connected to it. A single server can service multiple other computers at once.

In the context of Roblox a server is a VERY small piece of Roblox's network they set aside in order to host your game or any game you connect to. It may help to think of it as: Server = Roblox Computer

# 🖥️ Client 
A client is a machine that is connected to a server. Client's can also send and receive requests, however they are often not the "authority" on any information and mostly serve to make requests to the server and get updates from the server. 

Clients in Roblox are the players. When you press Play on a game your game "Client" will start up and Roblox will try to connect you to a specific server for you to play on. If one is already there it will connect to that, if none are open it will try to start a new server for you to play on.

# ♓ Relationship 
It's worth noting that the way your browser works is also a client-server relationship. When you press on discover or create your browser client sends a request to Roblox web servers to get the new web page. When you press play it starts your Roblox client which sends a request to Roblox servers to connect you to the game. When you connect to the game and a server to join is not found Roblox will create/allocate a NEW game server for you to connect to. 

The job of the Roblox game server is to keep track of game state. That means every part, every resource exists on Roblox servers. In order to keep all players/clients in the game up to date it has to constantly send information to all players about the updates to things that are happening in the game. That means any movement, physics, properties, or anything changing has to be sent to each client so that they can see the changes on their machine. This delay between the server making a change, and the clients receiving it is called network lag, or "ping".

# ❓ Why You Should Care
I know this stuff can be a headache so let's take a minute to cover the reasons why you should care about all this stuff.

## 🚀 Script Performance 
The first thing you should know is that the resources a phone has to compute any kind of change is far more than the minuscule amount of computing resources that any Roblox GAME server has. We also mentioned that anything that has to change needs to be replicated to all clients. That means that making a lot of changes very fast on the server can cause a lot of network traffic and there's a delay between it happening on the server and seeing it on the client. Not only does that take up resources to make the changes, but it won't even look smooth on the client because of the delay. That means that doing it on the client will look better, feel better, update instantly, and not hog resources on the server. 
My point is this: You should care because it affects performance a lot.

## 👁️ Visibility Control 
The second thing you should know is that things that happen on a client do not happen on a server, but on the server will happen on all clients. What that means is that if there is something you want to show for only one player you can do it on their client. If there is something that you want to happen for all players you either have to tell every client to do it OR you can do it on the server. Another point about this is that a client cannot directly affect another client, if you want multiple players to see the same thing it has to go through the server.
The point is: You should care because it matters to who can see things happen.

## 🔒 Data Protection 
Expanding on the last point let's talk about the source of truth. Source of truth is a fancy way to say "who should we trust has accurate data?" and we care about that because if each client had direct access to data they could do things like get unlimited money or manipulate data that would ruin the fun of the game. That's why we have the server keep track of important information like that because we as scripters can trust the server will do only what we want it to, but the clients can do whatever they want if the client has an exploit. 
The point is that you should care because protecting data and controlling its access is vital to creating good exploit-proof systems.

## 🔑 Contextual Access 
The final point is access. Local scripts have access to certain things that server scripts don't so you will be forced to use both of them in order to do what you need to do. For example, a camera for each client only exists on each player's machine and the server has no knowledge of it. That means we need to use a local script to do anything with the camera. Similarly, a local script has no access to ServerStorage or ServerScriptService. All the contents of each container are never replicated to each client so the client has no idea what is inside them and likewise can't access them. As a final example, some events/properties are client-only as well such as user input, you can't get the keys pressed directly on the server. On the Server, you cannot access the LocalPlayer property of Players. 
The point is that you should care because where your code is running changes what it's capable of.

# Local Scripts & Server Scripts
If you're familiar with Studio you may have seen "script" and something called "localscript". If what we've talked about so far makes sense then you can think of a "script" as a server script and a "localscript" as a client script. That is to say that a server script will only ever run on the server and a client script will only ever run on the client, and furthermore, it will only run in local contexts. A local context is a place in the game specific to a player. The only local contexts in the game in which local scripts can run are Backpack, PlayerGui, Character, and PlayerScripts. All of these are within the Player instance within Players except for Character, however, it is tied to a player.

# 🛜  Remotes
We've talked a lot about telling the server to do this or telling the clients to do that. By this point, it should make sense conceptually for you, but you might need to learn how to do it. That's where remotes come in. Remotes are ways for the server and client to communicate back and forth with each other. There are two types of remotes, RemoteEvent and RemoteFunction. A RemoteEvent will send a message to the server or client and a remote function will send a message and importantly, it will wait for a response before continuing the script. Generally, you'll want to use RemoteEvents wherever you can and RemoteFunctions in rare circumstances when you need to get information from the server on the client or vice versa. As mentioned your script will wait for a response so it's best to avoid remote functions when you can. 

In order for a server or client to receive these signals they will need to have common access to the instance inside the game. Commonly, people use ReplicatedStorage because its entire purpose is to store things that both the Server and Client can access. 

https://create.roblox.com/docs/reference/engine/classes/RemoteEvent
https://create.roblox.com/docs/reference/engine/classes/RemoteFunction

## Remote Event Example
General use for a remote event:
```lua
-- on server
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local event = ReplicatedStorage.MyRemoteEventInstance

-- This event receives signals when the event is fired from the client.
-- We can receive arguments as parameters here.
event.OnServerEvent:Connect(function(player, arg1, arg2) -- player is always automatically given

  -- This is how we can send a signal to a specific player using the same event.
  event:FireClient(player, "Arg1", "Arg2") -- we can pass arguments here.

  -- This is how we can send a signal to ALL players.
  event:FireAllClients("Arg1", "Arg2")
end)
```

```lua
-- on client
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local event = ReplicatedStorage.MyRemoteEventInstance

-- This event receives signals when the event is fired from the server.
-- We can receive arguments as parameters here.
event.OnClientEvent:Connect(function(arg1, arg2)

  -- This is how we can send a signal to the server from a client.
  event:FireServer("Arg1", "Arg2") -- we can pass arguments here.
end)
```

## Remote Function Example
General use for a remote function:
```lua
-- on server
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local remoteFunc = ReplicatedStorage.MyRemoteFunctionInstance

-- This event receives signals when the event is fired from the client.
-- We can receive arguments as parameters here.
remoteFunc.OnServerInvoke = function(player, arg1, arg2) -- player is always automatically given

  -- This is how we can send a signal to a specific player using the same event.
  local returnedValue = remoteFunc:InvokeClient(player, "Arg1", "Arg2") -- we can pass arguments here.
  print(returnedValue)

  return "This data will be returned to the client"
end)
```

```lua
-- on client
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local event = ReplicatedStorage.MyRemoteFunctionInstance

-- This event receives signals when the event is fired from the server.
-- We can receive arguments as parameters here.
remoteFunc.OnClientInvoke = function(arg1, arg2)

  -- This is how we can send a signal to the server from a client.
  local returnedValue = remoteFunc:InvokeServer("Arg1", "Arg2") -- we can pass arguments here.
  print(returnedValue)  

  return "A value" -- this value gets returned to the server.
end)
```

# Network Ownership
If we talk about client/server it makes sense to mention Network Ownership. At this point, you should have a solid grasp on what a client and server are and what it means for something to change on a client vs a server. You should understand what I was talking about when I mentioned "source of truth" as well.

Network ownership means the client or the server has control of the changes made to a BasePart or assembly. We mentioned before that changes on a client will not happen on other people's screens and we also said the server is the source of truth for most things. Network ownership lets you bend that rule by allowing the server to grant a specific client ownership over a part/assembly. By default, the player is the network owner of its own Character. That means that when the character moves around or plays animations it will replicate to the server and the server will replicate it to each client. You can do this with any part or assembly you want. It's worth mentioning that network ownership will not work if the assembly is anchored. A good example of a reason you would do this is to give a player network ownership of a car so the physics are processed locally and it looks a lot smoother.