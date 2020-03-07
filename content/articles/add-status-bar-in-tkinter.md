---
title: "How to add status bar in Tkinter App"
date: 2020-03-08T01:34:46+05:30
draft: false
tags: ["cip-archive","python","tkinter"]
image: "/images/articles/gui.png"
description: "Python code to add status bar in Tkinter."
---
_This is an archived blog post from Codeinpython website that i used to run. Original post was published on 12th June 2017. Author of this post is Rahul Choudhary._

In the previous chapter, we learned how to make toolbar and drop down menus. In this chapter, we will learn how to make a status bar. It is just a text written on the bottom of the window that shows the status of the file on which you are working on or any other thing. To add a status bar, make a label first.
```python
status = Label(var, text="processing…", bd=1, relief=SUNKEN, anchor=W) 
```
In the label, first, we will specify where we have to put the status bar. Here, we have one window so we are using var. The text is used to specify the text to be shown on the label. Bd is used for the border. Whenever we create a label, we can add border to it.

Relief is a parameter that allows us to manage how we want our label to appear. Here, we want it to appear sunken in our screen.  If we add just a label at the bottom of the screen, it looks kind of weird, but if we have border and relief, it looks like a part of the window.

Anchor allow us to decide where the label should be pinned. W is used for the West, N is for North, E is for East and S is for South. We want to show it on the left side of the screen so we have used W. Now, to show this status bar in our main window, we need to pack it up.
```python
status.pack(side=BOTTOM, fill=X)
``` 
The status bar will be displayed on the bottom of the window and it will cover the horizontal part of the screen no matter how much we stretch it.

## Final Code – Status bar
Complete program for the status bar is,
```python
from tkinter import *
var = Tk()

status = Label(var, text="processing…", bd=1, relief=SUNKEN, anchor=W)
status.pack(side=BOTTOM, fill=X)

var.mainloop() 
```