---
title: "How to implement mouse click event in Tkinter"
date: 2020-03-07T21:20:52+05:30
draft: false
tags: ["cip-archive","python","tkinter"]
image: "/images/articles/gui.png"
description: "Get detailed code for implementing mouse click event in Tkinter Python."
---
_This is an archived blog post from Codeinpython website that i used to run. Original post was created on 12th June 2017. Author of this post is Rahul Choudhary._

Whenever we use Tkinter, we are not just limited to bind one function to one widget. With widgets, we can bind multiple events to it depending on what we do with that widget, it behaves in different kind of ways. We can have a button, and if we left click it, something happens and if you right click it, something else happens.

Our goal in this article is to do something when one of the mouse button is clicked. That something is called mouse click event. The task here is to build a widget and if we left click, middle click or right click it, different things are going to happen. There will be three different functions for this.
```python
def leftclick(event):
    print("left")
def middleclick(event):
    print("middle")
def rightclick(event):
    print("right")
```     
Instead of having a button, we will build a basic frame. It’s going to look like just an empty window but it will be an invisible frame.
```python
frame = Frame(var, width=300, height=250)
```
We can specify width and height of a window by using two simple keywords, width, and height. Now, we will bind the functions to the frame(widget).
```python
frame.bind("<Button-1>", leftclick)
frame.bind("<Button-2>", middleclick)
frame.bind("<Button-3>", rightclick)
``` 
Now, whenever we left click on the mouse, function leftclick will be called. Same goes for the other two functions.
The only thing left to do is to pack the frame. Without packing, the frame will not show up.
```python
frame.pack()
``` 
In this chapter, we have learned how to add multiple functions to a widget.

## Final Mouse Click Event Code
The whole program will look like,
```python
from tkinter import *
var = Tk()
def leftclick(event):
    print("left")
def middleclick(event):
    print("middle")
def rightclick(event):
    print("right")
frame = Frame(var, width=300, height=250)
frame.bind("<Button-1>", leftclick)
frame.bind("<Button-2>", middleclick)
frame.bind("<Button-3>", rightclick)
frame.pack()
var.mainloop()
``` 
So far until now, we have learned how to implement mouse click events, how to bind functions, make frames and structure our layout. Read more of our articles to Tkinter and Python. Share it with your friends if you like our article.