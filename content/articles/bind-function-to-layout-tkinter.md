---
title: "How to bind functions to Tkinter Layout"
date: 2020-03-07T21:12:49+05:30
draft: false
tags: ["cip-archive","python","tkinter"]
image: "/images/articles/gui.png"
description: "This post gives detailed instructions with python code on how to bind functions to your tkinter layout."
---
_This is an archived blog post from Codeinpython website that i used to run. Original post was published on 12th June 2017. Author of this post is Rahul Choudhary._

We know how to make a layout in a couple of different ways. We know how to [organize our widgets](/articles/how-to-organize-layout-tkinter) around our screen. Let’s learn how to make GUI actually interact with our computer program.

In this chapter, we will learn how to bind functions to widgets. In other words, how we can do something like click a button and they call a function from our computer program.
Let’s make a basic function.
```python
def Printname():
  print("hello, I like programming in python") 
```  
Now, we want to call this function whenever we click a button. So the first thing we need is a button.
```python
button_1 = Button(var, text = "print", command = Printname)
button_1.pack()
``` 
This button is using a new parameter called command. Command runs a certain function whenever the button is clicked. Mention the name of the function in front of the command parameter to run the specific program. Whenever we use it, we don’t use parenthesis after the name of the function.

The whole program is like,
```python
from tkinter import *
var = Tk()
def Printname():
  print("hello, I like programming in python")
button_1 = Button(var, text = "print", command = Printname)
button_1.pack()
var.mainloop()
``` 
There is another way to which we can bind functions to widgets. We don’t need command anymore for this technique.
In the parenthesis after the function-name, we are going to pass an event.
```python
def Printname(event):
  print("hello, I like programming in python")
``` 
An event to our computer is something that occurs. For eg., button click, scroll, mouse movement, pressing a key on the keyboard. All these are called events (anything which user can do). Whenever a specific event occurs, then call some function accordingly.

To bind the function to the button, we will call a function called bind. Bind takes two parameters. firstly, What event are you waiting for to occur and Secondly, What function you want to occur.

The event name for left clicking our mouse button is <Button-1>. <Button-2> for middle mouse button and <Button-3> for right mouse button.
```python
button_1.bind("<Button-1>", Printname)
``` 
Remember, whenever you call a function do not add parenthesis.

## Final Code – Binding Functions
The whole program is like,
```python
from tkinter import *
var = Tk()
def Printname(event):
print("hello, I like programming in python")
button_1 = Button(var, text = "print")
button_1.bind("<Button-1>", Printname)
button_1.pack()
var.mainloop() 
```