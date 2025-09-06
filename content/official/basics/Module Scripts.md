---
title: Module Scripts
---

Author: ItzMrRatsP

# Hello friends!
In this article, we're going to go over the history of **ModuleScripts** and how they are used in experiences across the platform.

**Fun fact**: Released on December 5, 2013, Engine Release 131 adds two new classes, SurfaceGui and **ModuleScript**.

### New scripters often ask themselves,
"What is a **ModuleScript**?"
"What is this purple script?"
"How can **ModuleScripts** benefit my game?"

If you're a new scripter with these questions, you're in the right place! Today, we're going to answer them.

### What is a **ModuleScript**?
A **ModuleScript** is a script fragment. It cannot run alone, it must be required by another script. When required, it executes and returns a value.
For example, a **ModuleScript** might return a library of functions stored in a table, a string of text, or even a single number.

### How can **ModuleScripts** benefit my game?
Imagine you're building a party system for your game. How would you save the party data, and how would you keep track of all the available parties?
The most efficient solution is to use a **ModuleScript** as your single source of truth. The **ModuleScript** can act as a central cache, preserving the state of all active parties in its memory. Any other script on the server can require this same **ModuleScript** to access or modify the party data, ensuring consistency across your entire game.

Another key advantage of **ModuleScripts** is code reuse and maintainability.
Instead of copying and pasting the same function into multiple scripts, you put it in a single **ModuleScript**. Any script can use it by requiring the module.
When you need to update that function, you only have to change it in one place. Every script that uses the module automatically gets the latest version. This makes your code cleaner and much easier to maintain.

These are just two common uses. **ModuleScripts** are incredibly versatile and enable many more advanced programming techniques.

# Examples
Here is a basic example to get you going with **Module Scripts**:

A **ModuleScript** is useful for storing code that can be reused across multiple scripts. This example will show you how to create a **ModuleScript** that contains a single function, and how to use that function in another script.

The **ModuleScript** will be used to simulate a light switch. When the `switchEngine` function is called, it will toggle the `status` variable from `true` to `false` and back again.

```lua
-- Module.luau
local module = {}
module.status = false

function module.switchEngine()
    module.status = not module.status
end

return module

-- Server.server.luau
local module = require(path.to.Module)
module.switchEngine()

-- Server2.server.luau
local module = require(path.to.module)

task.wait(2)
if module.status then
    -- Turn off the engine
    module.switchEngine()
end
```
