---
title: Problem Solving 101
tags:
  - pathfinding
  - character
draft: true
---

> [!tip] Did you know there's a useful studio plugin for pathfinding?
> You can use this [plugin](https://create.roblox.com/store/asset/9019193064/Pathfinder) to test PathfindingService paths between two points, and you can configure things like costs and agent parameters in the widget.

# What is Pathfinding?
In a simple sense, pathfinding is the process of finding a path (or "route") from point **A** to point **B** and can be utilised for many cases in ROBLOX game development. 

There are numerous algorithms for Pathfinding in game development such as [A*](https://en.wikipedia.org/wiki/A*_search_algorithm "A* search algorithm") and [Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm "Dijkstra's algorithm"). 

For Roblox's internal `PathfindingService` they use the A* algorithm on the NavMesh. 

By default, the shortest path is found, but you can add pathfinding modifications to make smarter choices when navigating through different materials, around specific areas, or even through obstacles to adjust it for your specific use cases and games.

# How do you use PathfindingService?

According to ROBLOX documentation at the time of publishing, you should use the `Class.Humanoid.MoveToFinished\|MoveToFinished` event.

### Creating your path 


```lua
local PathfindingService = game:GetService("PathfindingService")
local Players = game:GetService("Players")
local RunService = game:GetService("RunService")
local Workspace = game:GetService("Workspace")

local path = PathfindingService:CreatePath({
	Costs = {
		Water = 20,
	}
})

local player = Players.LocalPlayer
local character = player.Character
local humanoid = character:WaitForChild("Humanoid")

local TEST_DESTINATION = Vector3.new(228.9, 17.8, 292.5)

local waypoints
local nextWaypointIndex
local reachedConnection
local blockedConnection

local function followPath(destination)
	-- Compute the path
	local success, errorMessage = pcall(function()
		path:ComputeAsync(character.PrimaryPart.Position, destination)
	end)

	if success and path.Status == Enum.PathStatus.Success then
		-- Get the path waypoints
		waypoints = path:GetWaypoints()

		-- Detect if path becomes blocked
		blockedConnection = path.Blocked:Connect(function(blockedWaypointIndex)
			-- Check if the obstacle is further down the path
			if blockedWaypointIndex >= nextWaypointIndex then
				-- Stop detecting path blockage until path is re-computed
				blockedConnection:Disconnect()
				-- Call function to re-compute new path
				followPath(destination)
			end
		end)

		-- Detect when movement to next waypoint is complete
		if not reachedConnection then
			reachedConnection = humanoid.MoveToFinished:Connect(function(reached)
				if reached and nextWaypointIndex < #waypoints then
					-- Increase waypoint index and move to next waypoint
					nextWaypointIndex += 1

					local PathfindingService = game:GetService("PathfindingService")
					local Players = game:GetService("Players")
					local RunService = game:GetService("RunService")
					local Workspace = game:GetService("Workspace")

					local path = PathfindingService:CreatePath({
						Costs = {
							Water = 20,
						}
					})

					local player = Players.LocalPlayer
					local character = player.Character
					local humanoid = character:WaitForChild("Humanoid")

					local TEST_DESTINATION = Vector3.new(228.9, 17.8, 292.5)

					local waypoints
					local nextWaypointIndex
					local reachedConnection
					local blockedConnection

					local function followPath(destination)
						-- Compute the path
						local success, errorMessage = pcall(function()
							path:ComputeAsync(character.PrimaryPart.Position, destination)
						end)

						if success and path.Status == Enum.PathStatus.Success then
							-- Get the path waypoints
							waypoints = path:GetWaypoints()

							-- Detect if path becomes blocked
							blockedConnection = path.Blocked:Connect(function(blockedWaypointIndex)
								-- Check if the obstacle is further down the path
								if blockedWaypointIndex >= nextWaypointIndex then
									-- Stop detecting path blockage until path is re-computed
									blockedConnection:Disconnect()
									-- Call function to re-compute new path
									followPath(destination)
								end
							end)

							-- Detect when movement to next waypoint is complete
							if not reachedConnection then
								reachedConnection = humanoid.MoveToFinished:Connect(function(reached)
									if reached and nextWaypointIndex < #waypoints then
										-- Increase waypoint index and move to next waypoint
										nextWaypointIndex += 1


										humanoid:MoveTo(waypoints[nextWaypointIndex].Position)

									else
										reachedConnection:Disconnect()
										blockedConnection:Disconnect()
									end
								end)
							end

							-- Initially move to second waypoint (first waypoint is path start; skip it)
							nextWaypointIndex = 2
							humanoid:MoveTo(waypoints[nextWaypointIndex].Position)
						else
							warn("Path not computed!", errorMessage)
						end
					end

					followPath(TEST_DESTINATION)
					humanoid:MoveTo(waypoints[nextWaypointIndex].Position)

				else
					reachedConnection:Disconnect()
					blockedConnection:Disconnect()
				end
			end)
		end

		-- Initially move to second waypoint (first waypoint is path start; skip it)
		nextWaypointIndex = 2
		humanoid:MoveTo(waypoints[nextWaypointIndex].Position)
	else
		warn("Path not computed!", errorMessage)
	end
end

followPath(TEST_DESTINATION)

```
# My approach

Whilst using the `Class.Humanoid.MoveToFinished\|MoveToFinished` event to detect when the character reaches each waypoint will work in some use cases, in larger games or games with numerous NPCs you may find less optimal performances and stuttering.  

By default, each player's `Class.PlayerScripts` contains a `Class.ModuleScript` named **PlayerModule**. Within `PlayerModule`, you will find another `Class.ModuleScript` called **ClickToMoveController**.  

To determine when to move to the next obstacle, you should use the `IsCurrentWaypointReached` function provided by the **ClickToMoveController** module under `Class.PlayerScripts`.                                                   

An example of this solution is provided below, and can be tested by placing in a LocalScript under StarterCharacterScripts.

> This code can be modified to a module for pathfinding, or coded directly into your systems using the base functions provided.

```lua
local PathfindingService = game:GetService("PathfindingService")
local RunService = game:GetService("RunService")


local localPlayer = game:GetService("Players").LocalPlayer
local controls = require(localPlayer.PlayerScripts.PlayerModule):GetControls()

controls:Disable()

local path = PathfindingService:CreatePath({AgentCanClimb = true, Costs = {Climb = 2, Water = 10}})

local character = script.Parent
local HRP = character:WaitForChild("HumanoidRootPart")
local humanoid = character:WaitForChild("Humanoid")

local ALMOST_ZERO = 0.000001
local GROUND_WAIT = 0.01
local VELOCITY_MULTIPLIER = 0.0625

local destination = Vector3.new(0,0,0) --TODO: Set your desired destination
local waypoints
local nextWaypointIndex
local blockedConnection

local currentWaypointReachedConnection
local currentWaypointPlaneNormal = Vector3.zero
local currentWaypointPlaneDistance = 0

local function disconnectCurrentWaypointReachedConnection()
	if not currentWaypointReachedConnection then return end
	currentWaypointReachedConnection:Disconnect()
	currentWaypointReachedConnection = nil
end

local function isCurrentWaypointReached()

	if humanoid.FloorMaterial == Enum.Material.Air then
		return false
	end

	local reached = false

	-- Check whether we have a plane, if not, we have reached the waypoint
	if currentWaypointPlaneNormal ~= Vector3.zero then
		-- Compute the distance from Humanoid to destination plane
		local dist = currentWaypointPlaneNormal:Dot(humanoid.RootPart.Position) - currentWaypointPlaneDistance
		-- Compute the component of the Humanoid velocity that is towards the plane
		local velocity = -currentWaypointPlaneNormal:Dot(humanoid.RootPart.Velocity)
		-- Compute the threshold from the destination plane based on Humanoid velocity
		local threshold = math.max(1.0, VELOCITY_MULTIPLIER * velocity)
		-- If we are less then threshold in front of the plane (between 0 and threshold) or if we are behind the plane (less then 0), we consider it to be reached
		reached = dist < threshold
	else
		reached = true
	end

	if reached then
		currentWaypointPlaneNormal	= Vector3.zero
		currentWaypointPlaneDistance = 0
		moveToNextWayPoint()
	end
end

local function calculateNextWayPointApproach()
	nextWaypointIndex += 1
	if nextWaypointIndex > #waypoints then
		return false
	end
	local currentWaypoint = waypoints[nextWaypointIndex - 1]
	local nextWaypoint = waypoints[nextWaypointIndex]
	-- Build next destination plane
	-- (plane normal is perpendicular to the y plane and is from next waypoint towards current one (provided the two waypoints are not at the same location))
	-- (plane location is at next waypoint)
	currentWaypointPlaneNormal = currentWaypoint.Position - nextWaypoint.Position

	-- plane normal isn't perpendicular to the y plane when climbing up
	if nextWaypoint.Label ~= "Climb" then
		currentWaypointPlaneNormal = Vector3.new(currentWaypointPlaneNormal.X, 0, currentWaypointPlaneNormal.Z)
	end
	if currentWaypointPlaneNormal.Magnitude > ALMOST_ZERO then
		currentWaypointPlaneNormal	= currentWaypointPlaneNormal.Unit
		currentWaypointPlaneDistance = currentWaypointPlaneNormal:Dot(nextWaypoint.Position)
	end

	return true
end

local function resetWaypointData()
	humanoid:Move(Vector3.zero)
	currentWaypointPlaneNormal	= Vector3.zero
	currentWaypointPlaneDistance = 0
	disconnectCurrentWaypointReachedConnection()
end

function waitForGround()
	while humanoid.FloorMaterial == Enum.Material.Air do
		task.wait(GROUND_WAIT)
	end
end

function moveToNextWayPoint()
	if calculateNextWayPointApproach() then
		disconnectCurrentWaypointReachedConnection()
		currentWaypointReachedConnection = RunService.Heartbeat:Connect(isCurrentWaypointReached)
		local nextWaypointPosition = waypoints[nextWaypointIndex].Position
		local nextWaypointAction = waypoints[nextWaypointIndex].Action
		humanoid:Move(nextWaypointPosition - HRP.Position)	
		if nextWaypointAction == Enum.PathWaypointAction.Jump then
			humanoid:ChangeState(Enum.HumanoidStateType.Jumping)
			while humanoid.FloorMaterial ~= Enum.Material.Air do
				task.wait(GROUND_WAIT)
			end
			waitForGround()

			humanoid:Move(nextWaypointPosition - HRP.Position)
		end
	else
		resetWaypointData()
	end
end

local function findStartingPoint(waypoints)
	nextWaypointIndex = 1
	while nextWaypointIndex + 1 <= #waypoints do
		local dist = waypoints[nextWaypointIndex + 1].Position - humanoid.RootPart.Position
		dist = Vector3.new(dist.x, 0, dist.z)
		if dist.magnitude >= 2 then
			return
		end
		nextWaypointIndex = nextWaypointIndex + 1
	end
end

local function followPath()
	-- Compute the path
	waitForGround()
	local success, errorMessage = pcall(function()
		path:ComputeAsync(character.PrimaryPart.Position, destination)
	end)

	if not success or path.Status ~= Enum.PathStatus.Success then
		warn("Path not computed!", errorMessage)
		return
	end
	-- Get the path waypoints
	waypoints = path:GetWaypoints()

	-- Detect if path becomes blocked
	blockedConnection = path.Blocked:Connect(function(blockedWaypointIndex)
		-- Check if the obstacle is further down the path
		if blockedWaypointIndex >= nextWaypointIndex then
			-- Stop detecting path blockage until path is re-computed
			blockedConnection:Disconnect()
			resetWaypointData()
			-- Call function to re-compute new path
			followPath()
		end
	end)

	findStartingPoint(waypoints)
	moveToNextWayPoint()
end


followPath()
```
