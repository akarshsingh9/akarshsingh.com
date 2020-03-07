---
title: "How to organize your Layout in Tkinter"
date: 2020-03-07T20:37:36+05:30
draft: false
tags: ["cip-archive","python","tkinter"]
image: "/images/articles/gui.png"
description: "Learn to create buttons and organize layouts in Tkinter."
---
_This is an archived blog post from Codeinpython website that i used to run. Original post was created on 12th June 2017. Author of this post is Rahul Choudhary._

In the [last](/articles/getting-started-tkinter-python) chapter we learned how to make a very simple window, we also learned how to add text and also how to make our window appear constantly without disappearing quickly.
Before we add a bunch of widgets, we have to learn how to organize the layout.
From the last chapter,
```python
from tkinter import *
var = Tk()
var.mainloop()
``` 
These lines are going to be same. This is our initial framework. And the rest of the coding will be done between the 2nd line and 3rd line.

The first thing we are going to learn is a **Frame**. Think of a frame as an invisible rectangle that can be a basic layout where we can put things in. we can make a frame that goes on top and we can make another frame that goes on the bottom. We can put a bunch of widgets in either the top one or the bottom one.
To make a frame, we are going to write,
```python
top_frame = Frame(var)
``` 
It is going to make an invisible container and it’s going to go in the main window (var). Now, after making it, we have to place it in our window, because right now it’s in our program but it doesn’t display in our main window.
Anytime we want to place something in, we have to pack it.
```python
top_frame.pack()
``` 
Now, we are going to make the bottom one also. To create this one, of course, you have to do the same exact thing you did for the top frame.
```python
bottom_frame = Frame(var)
bottom_frame.pack(side = BOTTOM)
``` 
**side** is a parameter that we can throw inside pack. It says where exactly you want to put it or pack it in your main window? So, inside the pack, we have to specify where we want to put the frame.
We don’t have to specify the location for both the frames because, if we have specified bottom for a frame, then automatically the other one goes on the top. We don’t have to explicitly say it.
Now let’s add some buttons in it.
The button is a simple rectangle that we can press or click. To make a button,
```python
button_1 = Button(top_frame, text = "button 1", fg = "yellow", bg = "black")
button_2 = Button(top_frame, text = "button 2")
``` 
The object used to make a button is Button and it’s going to take some parameters. First one decides where will the button be placed in the main window. We have placed this button in the top frame. Then the second one (text) decides what will be the label on that button. We can change the color of the label written on the button as well as background color. Just use fg for foreground color and bg for background color. The fg and bg colors are optional. We don’t really have to change the color every time we add a button.

The above piece of code just tells the specifications of the button to the program. To actually show it in the main window, we have to pack it.
```python
button_1.pack(side = LEFT)
button_2.pack(side = LEFT)
``` 
The buttons will be placed side by side if we specify the side of the button. Specification of the side is optional. The buttons will be automatically placed one above other if we don’t specify the side.

## Final Layout Code
So the whole program will be something like this,
```python
from tkinter import *
var = Tk()
top_frame = Frame(var)
top_frame.pack()
bottom_frame = Frame(var)
bottom_frame.pack(side = BOTTOM)
button_1 = Button(top_frame, text = "button 1", fg = "yellow", bg = "black")
button_2 = Button(top_frame, text = "button 2")
button_1.pack(side = LEFT)
button_2.pack(side = LEFT)
var.mainloop()
```