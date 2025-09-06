---
title: Vectors
---

This article will be about trying to think about vectors in a new way in order to make it easier to visualize and understand how to use vectors and in what situations you use them.

# Foundation
First in order to understand vectors we need to start thinking about numbers in a different way. Normally how most people learn to think of numbers is as quantities, describing a certain number of things. This isn't incorrect however in order to think about operations and transformations in numbers in a way that prepares us for vectors we need to start thinking of numbers in terms of grids. The most simple representation of a grid for a number is a number line, representing numbers growing and shrinking as they go left and right on a number line.

[text](../../assets/vectors_foundation_1.webm)

Try to think of it as it's relation to the origin, like this example.

<video src="https://cdn.discordapp.com/attachments/1209961115212185690/1209974311499206706/brave_CQK4Th5adK.mp4?ex=68b2c3a4&is=68b17224&hm=39955d6e25bde52a618e4129fef69e85286c5efbd82fd24ba409f8d405ad66be&" controls width="100%"></video>


# 1D Operations
Now that you're thinking as numbers as 1d vectors let's see how adding them or subtracting them might look to get you in the correct frame of mind.
This example shows how adding 2 + 2 = 4

![](https://cdn.discordapp.com/attachments/1209961115212185690/1210010978125877258/image.png?ex=68b2e5ca&is=68b1944a&hm=802639b351500e35c534e353460ce0d7aba69cbee69730fd31ab3ec41b733377&)  

This example shows how 2 - 3 = -1. (the same as 2 + -3 = -1)  

![](https://cdn.discordapp.com/attachments/1209961115212185690/1210011180563824666/image.png?ex=68b2e5fa&is=68b1947a&hm=31b7e853e6eb5a18fcb1f37c189d4069bb160eb75e820e0d5fe697ecc38ceace&)  

multiplication

<video src="https://cdn.discordapp.com/attachments/1209961115212185690/1210012700713951263/brave_C4QENPBcAk.mp4?ex=68b2e764&is=68b195e4&hm=5e465acba0418b290fa69c235504a6687c1a69a6b4570943d7964e0ec3f703f4&" controls width="100%"></video>
https://drive.google.com/file/d/1uC9l2lQN-ARkwVuynCABuRaINWCuw_dD/view?usp=drive_link
# Adding A New Dimension
Now we're working up to a new dimension and we'll start using the y Axis, however you'll come to find it works exactly the same way. Let's go over some examples.
First things first let's show the first example again but in the new dimension to orient ourselves.

<video src="https://cdn.discordapp.com/attachments/1209961115212185690/1210013606494736404/brave_iEk7dfy2XD.mp4?ex=68b2e83c&is=68b196bc&hm=0a6941612ad9b6ae9ecf6626b70fd9ebb1affce345cab8cc304bc1f95581356d&" controls width="100%"></video>

Notice how our number describes a position in the grid as well as the line from 0, 0 to the point. There is no difference between the two only how we think about it.
One final example to nail the point home. Notice how this point is also described as the offset on the X axis and an offset on the Y axis.

<video src="https://cdn.discordapp.com/attachments/1209961115212185690/1210014400036216862/brave_MlGc1l3fRM.mp4?ex=68b2e8f9&is=68b19779&hm=682a473938b53e95e8ff3756226976a90c8813ccfd5414f8d531c19f6f8f30aa&" controls width="100%"></video>

# Operations
Now we're going to start manipulating our vectors with math, before we continue let's quickly go over the difference between a scalar and a vector.

A vector is a measure with a magnitude, and direction. That means it has a length (magnitude) and a direction (the axis the magnitude travels down, you can think of it like rotation or the "way" the line goes from the origin).

A scalar is a measure with just a magnitude, meaning it's only a measure of quantity, which if you've been paying attention is exactly what a 1d vector is. Technically the fact that its negative or positive does not describe its direction because no matter what it's on the same axis.

Now we'll go over some simple operations we perform on 2d vectors with both scalars and vectors.

# Vector + Vector
Adding two vectors is one of the simplest operations to perform. The math works like this:

(x1, y1) + (x2, y2) = (x1 + x2, y1 + y2)
(x = 1, y = 2) + (x = 3, y = 4) = (x = 1 + 3, y = 2 + 4) = (x = 4, y = 6)

Vectors are offsets from the origin just as numbers are, but when you add them you change that new origin to the end of the other vector.

<video src="https://cdn.discordapp.com/attachments/1209961115212185690/1210020626933489666/brave_LkrL01uVyC.mp4?ex=68b2eec6&is=68b19d46&hm=b76e24c7d8d59fbd7d304098b630a8f59342020f7c6d86c10548dfa19ece152a&" controls width="100%"></video>

[desmos](<https://www.desmos.com/calculator/m7j2jyhwuw>)

# Vector - Vector
This is very similar to addition, except it flips the vector 180 degrees.

(x = 1, y = 2) + (x = 3, y = 4) = (x = 1 - 3, y = 2 - 4) = (x = -2, y = -2)

<video src="https://cdn.discordapp.com/attachments/1209961115212185690/1210021659189186630/brave_TfsRH8Dgmo.mp4?ex=68b2efbc&is=68b19e3c&hm=bc95733209efb70305f1c0bcccdbef3875a0f6cb56bf5463ab785ee50232ad55&" controls width="100%"></video>

[desmos](<https://www.desmos.com/calculator/uk9ookz8t0>)

# Vector * Scalar
Vector times a scalar multiplies each number by the scalar like so:

(x = 1, y = 2) * 2 = (x = 1 * 2, y = 2 * 2) = (x = 2, y = 4)

This isn't quite useful on its own but combined with normalization it can be very powerful. We'll cover that soon.

<video src="https://cdn.discordapp.com/attachments/1209961115212185690/1210022870743253002/brave_e4SwaXXho2.mp4?ex=68b2f0dd&is=68b19f5d&hm=45460dcd5067a1b97ba9bb10411fa49ea7ab57bab48a5287eaec154598e6cc50&" controls width="100%"></video>

[desmos](<https://www.desmos.com/calculator/jklk8iyhgx>)

I won't be doing division however division is just the inverse of multiplication anyways so you should be able to extrapolate it.

# Magnitude
Let's dive a bit deeper on magnitude. It was stated before that vectors have magnitude and direction and magnitude is the "length" of the vector. You probably know what this means conceptually but let's talk about some ways it can be problematic and how you get it. When written in mathematics the magnitude of a vector is commonly written with | | bars. For example, magnitude of v = | v | or `|| v ||`.

First, how to get it. Getting the length of a vector is easy, all we need is our good pal Pythagoras a^2 + b^2 = c^2 and we can reason that the magnitude is just sqrt(x^2 + y^2).

Now the problem with doing this in code is that it can be very expensive to perform square root operations for a computer. Everytime in Roblox when we use .Magnitude to get the length of a vector we're performing this square root operation. Checking the distance between objects usually isn't that bad but if you're doing it many many times really fast it can be a drain on resources. Have no fear there's a solution that we'll get to later after we've learned about Dot products. 

Until then here's a video of the triangle that forms so you can better see the relationship with Pythagoras.

<video src="https://cdn.discordapp.com/attachments/1209961115212185690/1210025831251050526/brave_QM9fFQcwov.mp4?ex=68b2f39f&is=68b1a21f&hm=473fdafdcd277303e2547c1c56a34341b5a089c07d5697918ed4bd761cb298cb&" controls width="100%"></video>

# Useful Operation: Vector - Vector
Okay now we're finally getting to some useful stuff after laying all this groundwork. One of the most simple operations performed on vectors to vectors is subtraction. In normal 1d mathematics subtraction will give us the "difference" between two numbers, with vectors it does the same thing. Let's go through an example to understand better how this can be useful.

Imagine you have two objects in your game world and each one has a position. As we've learned positions are just Vectors that store numbers describing where they are in the world.

![](https://cdn.discordapp.com/attachments/1209961115212185690/1210027518695055440/image.png?ex=68b2f531&is=68b1a3b1&hm=8a004cada2eff0425e0618892c313a122194e9e0163a272aa5ef834c789b9865&)

What do we get when we subtract these two positions from each other (purple - green)? We get some strange point way over here, but remember what I said before, subtraction describes the difference between two numbers and it describes the difference between two vectors and has the same magnitude as the distance between each. That point purple - green is the offset from zero that 0,0 is from black. We can prove that too. If we take black and add it to green we will get purple exactly!

![](https://cdn.discordapp.com/attachments/1209961115212185690/1210028281160798298/image.png?ex=68b2f5e7&is=68b1a467&hm=955d9289095a458deb7ff7f11e2f97b963b4699e00b0e49ac74012bd858c2f27&)

![](https://cdn.discordapp.com/attachments/1209961115212185690/1210028453739503616/image.png?ex=68b2f610&is=68b1a490&hm=63a5c89e4a9a5b9ec0b8a128ff9dd3c75ea901e8042c266079293c8d63331db5&)

Taking this even further if we want the midpoint between purple and green all we have to do is divide black by 2 and add it back to green. 

<video src="https://cdn.discordapp.com/attachments/1209961115212185690/1210028712431460422/brave_XErIWb3WDT.mp4?ex=68b2f64e&is=68b1a4ce&hm=4ac6cd6f60f43a9c81b76c82c14b2114faf3280ba932ffc1cd6996285db9d962&" controls width="100%"></video>

Understanding how these different transformations can get you exactly what you need to solve your problem will make you capable of coming up with your own ideas and solutions to very difficult and complex tasks.
### The Point: vector a - vector b = difference of b to a, vector pointing direction b is to a, and has magnitude of the distance between b to a.

# Normalization
Normalization is the act of making your vectors magnitude exactly 1 unit long.  This is useful because any number multiplied by 1 is itself. Let's go over a thought experiment in order to answer why this can be useful to you.

Imagine you are trying to code a gun and you're going to use a hitscan raycast technique. That means when you click the bullet will travel instantly in the direction your mouse is pointing. This also means you need to get a vector with the magnitude long enough to detect your target. We can use the mouse.Hit position as the place our mouse is in the game world and we have a reference to the gun position or the head position. (checking line of sight) What we can do to get a vector that's in the direction of the head to the mouse is (mouse.Hit.Position - head.Position). This should give us a vector the difference of those two positions as discussed in the previous section. However the mouse ray is going to stop right BEFORE our target meaning we can't detect hits this way. One thing we COULD do is just increase our ray a little bit further by multiplying it by 1.2 or even double it with * 2. Right? However this isn't always ideal. 

What we really want is a way to control exactly how far our gun can hit. What we can do is take the Unit vector (normalized vector) of the difference between each vector and multiply it by whatever number we want. The reason we call it a Unit vector is because it's a basic unit of all other vectors because 1 multiplied by anything can make it whatever length we want! 

 (mouse.Hit.Position - head.Position).Unit * 300 is a common way to get a ray direction.

For fun the math behind a unit vector is just each number in the vector divided by the magnitude of the vector. 

unit = v / | v |

### The Point: Normalizing a vector can get you a vector with the same direction but change the magnitude to whatever you want (or simplify operations).

<video src="https://cdn.discordapp.com/attachments/1209961115212185690/1210034470124523671/brave_6uIKL0aeOZ.mp4?ex=68b2fbab&is=68b1aa2b&hm=ba1271c60c8c74126a34034e617d84367ebe890ed2c2db837214eb976f242203&" controls width="100%"></video>

[desmos](<https://www.desmos.com/calculator/zykgjopc0m>)

# Dot Product - Vector * Vector
Finally let's talk about Dot products and Cross products. When multiplying vectors together we perform a Dot operation. That means we're NOT doing:

NOT DOING
```
a = (x = 1, y = 2)
b = (x = 3, y = 4)
a * b ~= (a.x * b.x, a.y * b.y)
```

Instead the math gives a scalar as a result. 
```
a * b = a.x * b.x + a.y * b.y
      = |a| * |b| * cos(theta)
```
This means a dot product is equivalent to the length of a times the length of b times the cos of theta.  Theta being the angle between each vector. Let's talk about how this can be useful a bit and then show some examples.

## Uses of Dot Products
1. Finding the angle between two vectors.
2. Finding the squared magnitude of one vector.
3. Finding the projection of one vector onto another.

### Finding The Angle Between Two Vectors
The most simple use case for handling vectors is finding the cos of the angle between the two vectors. Which you can use to get the actual angle between the two vectors. Let's go over some examples to demonstrate how it works.

![](https://cdn.discordapp.com/attachments/1209961115212185690/1210266951130026084/image.png?ex=68b32b6e&is=68b1d9ee&hm=16c6f7f1b91049a516a7cfe5489208168cf02e3ddcf44e52e49c283c44637521&)

In this case the u:Dot(v) will result in `||u||` * `||v||` * cos( θ ). We can get the actual angle from that by dividing by `|u| * |v|` and taking the acos of the result. `|u|` and `|v|` being the magnitude of each vector. If we want to simplify our calculation we can normalize u and v which makes each length exactly 1. That would make the equation `1 * 1 * cos(θ) ` and anything by 1 is itself so it simplifies down to just cos(θ). If you know trigonometry a little bit you may already see how this can be useful already. This will give you the angle between each vector:

local a = math.acos(u.Unit:Dot(v.Unit))

That being said acos can be an expensive calculation just as sqrt can be. Sometimes we don't even need to know the actual angle we just need to compare it with a number. The way cos works is it's a number from 1 to -1 with 1 being angle 0 degrees and -1 being angle 180 degrees. That means if, for example, we wanted to know if the angle was behind a player and we knew the vector that pointed forward from where they were facing (hint hint CFrame.LookVector) we can tell if the cos between pointing forward and pointing to the monster or enemy or whatever is greater than 0 then they're in front of the player.

That being said acos can be an expensive calculation just as sqrt can be. Sometimes we don't even need to know the actual angle we just need to compare it with a number. The way cos works is it's a number from 1 to -1 with 1 being angle 0 degrees and -1 being angle 180 degrees. That means if, for example, we wanted to know if the angle was behind a player and we knew the vector that pointed forward from where they were facing (hint hint CFrame.LookVector) we can tell if the cos between pointing forward and pointing to the monster or enemy or whatever is greater than 0 then they're in front of the player.

ex: 
```lua
local v = part.CFrame.LookVector -- vector looking straight ahead
local u = (enemy.Position - part.CFrame.Position).Unit -- vector from part pointing towards enemy
v:Dot(u) > 0 -- is behind?
-- equivalent to: cos(angle between v and u) > 0
```
It's best to avoid expensive calculations when you can.

### Finding The Squared Magnitude
Remember before we talked about how the Pythagorean theorem gives us a square root formula to find the length of a vector and we can skip it in certain circumstances using Dot products? Now I'll tell you how.

Squared Magnitude is only useful when you need to compare distance if you only need to know if a distance is greater or smaller than another distance (or equivalent) then this could save you a lot of computation and speed. Now for the math.

```
a^2 + b^2 = c^2 -- pythagoras
sqrt(a^2 + b^2) = c
sqrt(a * a + b * b) = c

u:Dot(v) = u.x * v.x + u.y * v.y -- normal dot product
v:Dot(v) = v.x * v.x + v.y * v.y

sqrt(v:Dot(v)) = sqrt(a * a + b * b) = c

-- a dot operation on the same vector will give you the "squared" magnitude of the vector. Every operation in Pythagoras except for the square root. Which means if you compare it with a squared number you can tell if it's larger or smaller than it.
v:Dot(v) > 5^2
-- this tells us if magnitude of v is larger than 5 without using any square root operations.
```

### Finding the projection of one vector onto another.
Projection onto a plane can be useful in a lot of circumstances although you'll need to be creative to use it. It can be especially useful in a 3d environment. Anyways, continuing on let's make it clear exactly what "projecting" means. If we have vector u and we want to know how far along it is on the axis that vector v travels down. Basically what this means is we're trying to constrain our vector v to a length that matches exactly with the end of vector u. Here's a picture to describe that.

![](https://cdn.discordapp.com/attachments/1209961115212185690/1210278072071356546/image.png?ex=68b335ca&is=68b1e44a&hm=357caeb9c001c0018b37c1d1d95f14c53b9bed4a8f3a2548976325ee96a3db1e&)

One thing to mention is this does not matter the size of v or even if v is rotated 180 degrees or not. All we really care about is the "axis" or part of an infinitely long invisible line that u will fall onto.
To sum up the math what we're trying to do is find out the ratio of size u to size v in order to scale u correctly. The formula is this:

```
(v * u / u * u) * u
--- aka
( v:Dot( u ) / u:Dot( u ) ):Dot( u )
```
Basically we're taking the scales cos of each side and dividing it by the squared magnitude of u. Which gives us a ratio for how long v and  u is to the length of u, then we multiply u by that number to scale it to exactly the right magnitude/length.

# Cross Products
I'm going to refrain from going deep into the math on this one and we'll also be switching to 3d!
The notation for this is an x not to be confused with multiplication.

The cross product between one 3d vector and another 3d vector is a vector that is:
1. 90 degrees/perpendicular to both vectors.
2. The magnitude of the area of the shape/parallelogram both vectors make. 
Due to this being mostly in 3d space I will use images found online to demonstrate this.

![](https://cdn.discordapp.com/attachments/1209961115212185690/1210282224809807902/images.png?ex=68b339a8&is=68b1e828&hm=65f5b036f45a2c3c6f4b314293abd5b243e5cc22369e92299b5cb3677f5ed215&)

![](https://cdn.discordapp.com/attachments/1209961115212185690/1210282306573705306/cross-product-area.png?ex=68b339bb&is=68b1e83b&hm=fae990c5178b094f0572b7dc5b2c53e099f7270e41d9681a56687961184ba9b4&)

Here is the math for those of you who are brave, don't think you NEED to know this though:

![](https://cdn.discordapp.com/attachments/1209961115212185690/1210282727488622603/EngMath_Matrix_CrossProduct_09.png?ex=68b33a20&is=68b1e8a0&hm=103a3cc5037dbab92fa83596cdeac5eb0584f89fd283bfdbf18e93d50404b44d&)