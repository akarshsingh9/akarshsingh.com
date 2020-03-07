---
title: "How to fit widgets in your Tkinter Layout"
date: 2020-03-07T20:48:59+05:30
draft: false
tags: ["cip-archive","python","tkinter"]
image: "/images/articles/gui.png"
description: "This post explains about widgets and how to arrange them in your tkinter layout."
---
_This is an archived blog post from Codeinpython website that i used to run. Original post was created on 12th June 2017. Author of this post is Rahul Choudhary._

In this chapter, you will learn how to fit widgets in our layout. The basic structure of the program is going to be the same i.e.,
```python
from tkinter import *
var = Tk()
var.mainloop()
``` 
So let’s make some labels. We will not add any frame in this window. We will just add labels in our main window.
```python
label1 = Label(var, text="one", bg="red", fg="blue")
label2 = Label(var, text="two", bg="black", fg="yellow")
label3 = Label(var, text="three", bg="yellow", fg="black")
```
the labels will show the text “one”, “two” and “three” respectively and add the background and foreground colors of our choice (foreground color just means the font color). As we already know we have to pack these label to get displayed on the main screen.
```python
label1.pack()
label2.pack(fill=X)
label3.pack(side=LEFT, fill=Y)
```
By default, the label is going to be the size of the window. The size of the label depends on how big the text is. Fill means we want to fill the label as much as the X value of the parent is. So if we stretch the window or make it grow left and right. The first label is going to be of the same size. However, the second one will grow in the left or right direction as much as we grow the window. Similarly, in the third label, the label will grow in Y direction as much as the parent window is stretched.

So, the first one will be on the top and will not grow or shrink in any direction. The second one is going to be in the middle and will grow in the X direction. The third one is going to be on the left side of the window and will grow in the Y direction.

We can do this stuff by adding a frame to the main window. The procedure is same for this. The only thing we have to do is write the frame variable in place of parent variable in Label object.

## Final Code – Tkinter
The whole program combined together will look something like this,
```python
from tkinter import *
var = Tk()
label1 = Label(var, text="one", bg="red", fg="blue")
label2 = Label(var, text="two", bg="black", fg="yellow")
label3 = Label(var, text="three", bg="yellow", fg="black")
label1.pack()
label2.pack(fill=X)
label3.pack(side=LEFT, fill=Y)
var.mainloop() 
```