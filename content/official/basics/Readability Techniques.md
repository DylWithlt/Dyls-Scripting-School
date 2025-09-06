---
title: Readability Technique
---

Author: ItzMrRatsP

# Why is code readability so important?
Well, there are many reasons why code readability is important. The first and most obvious is that it makes it easier for others to read and understand your code. This is important because it allows them to build on your work and make changes if needed. If your code is not readable, it can be very difficult for others to understand what you have done and make changes, which can lead to errors and bugs.

Another important reason is that it makes it easier for you to read and understand your own code. This can save you time and effort in the long run. If your code is not readable, it can be difficult to figure out what you have done and make changes. This can lead to hours of work trying to figure out what you have done.

Finally, it makes it easier for you to debug and test your code. If your code is not readable, it can be difficult to find the source of errors and bugs. This can lead to hours of work trying to find the source of the error.

# Why is readability important for scalability?
If your code is not readable, it can be difficult to add new features or make changes. This can make it difficult to make your code scalable. If your code is not scalable, it can be difficult to make changes and add new features in the future. This can lead to a lot of work and effort to make your code scalable.

Imagine this: you live in a messy room, and you're trying to find your socks. It can take you hours to find one, and there's even a chance you won't be able to find it.

# [Guard Clause](https://deviq.com/design-patterns/guard-clause)
If you're a scripter with at least a year of experience, you've probably heard of **Guard Clause** before.
But let's compare two scripts, one with **Guard Clause** and one without.

```lua
local hasFriends = true
local myApples = 3

if hasFriends then
    if myApples > 0 then
        -- The cycle goes on, You will make if statement until you reach the main part of the function.
        myApples -= 1
    end
end
```

```lua
local hasFriends = true
local myApples = 3

if not hasFriends then return end
if myApples == 0 then return end

myApples -= 1
```

As you can see, the first script does not use the **Guard Clause** design pattern, whereas the second one does.
The second script is much easier to modify and add new conditions to, whereas the first script will become increasingly nested and harder to add new statements to.

# Modular code
What is modular code? To understand what modular code is, you need a basic understanding of what a **Module Script** is. If you don't, please head to [Module Script]() and read it.

In modular code, your objective is to turn your code into pieces, so you can easily modify those pieces without having to go through the main script, which is a high-class script.

[text](../../assets/modular_code.webp)

Modular code is genuinely easy to modify, update, and maintain, and other scripters won't have to go through 2000 lines of code to find a certain function.

# Read more
If you want to learn more design patterns, I've listed two good websites below where you can learn design patterns for free.

https://refactoring.guru
https://www.patterns.dev
