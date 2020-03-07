---
title: "Working with Grid Layout in Tkinter"
date: 2020-03-07T21:04:58+05:30
draft: false
tags: ["cip-archive","python","tkinter"]
image: "/images/articles/gui.png"
description: "This post explains about grid layout in Tkinter Python."
---
_This is an archived blog post from Codeinpython website that i used to run. Original post was created on 12th June 2017. Author of this post is Rahul Choudhary._

In this chapter, we are going to organize the widgets in the main window in a grid layout. Previously, we used pack(), which just places them on the screen. We could just change the position of the widget i.e., we could place them one over other or side by side. But it didn’t give you a lot of control to say exactly where you want to pack it in.

In grid layout, we can line up our rows and columns. We can specify the exact row and column in which the widget should come.

Now, let’s make 2 labels and 2 entry widgets because we need the stuff to organize. It will be kind of a login screen where we enter name and password.
```python
name = Label(var, text = "name")
password = Label(var, text = "password")
```
Now, whenever you want to allow the user to enter a simple number or name or password or anything we have to use something called entry. It is the same thing as an input in web design. It is a blank single line of a text form.
```python
entry1 = Entry(var)
entry2 = Entry(var)
```
We need one for the name and one for a password. Now, we have 2 text prompts and 2 input fields.

To organize it, think of this as an excel sheet. We have rows that go left and right and column that goes up and down. By default, if we don’t specify one, it is going to assume the first. If we put just row = 2, its gonna assume it as the first column.

In order to place anything, just write where do you want to place this label and how do you want to place it.
Both the labels will go like this,
```python
name.grid(row=0)
password.grid(row=1)
``` 
Now, to position those entries, we will write,
```python
entry1.grid(row=0, column=1)
entry2.grid(row=1, column=1)
``` 
In the above window, the name and password are center aligned, we need them to be right aligned.
To do that, we have already placed the label in the window. Now, whenever we want to align it to either right, left, top or bottom, we will use a new parameter called sticky. If we want to place it to the right, we will write sticky = E.

Whenever we are using the grid, it’s not going to take left, right, top or bottom. It’s gonna take N E W S. North on the top, East to right, West on the left and South on the bottom.
So the labels will be now,
```python
name.grid(row=0, sticky = E)
password.grid(row=1, sticky = E)
``` 
If we are making a login for the website, they have a checkbox called ‘keep me logged in’. Making a checkbox is real simple.
To make a checkbox, use a parameter Check button and in it, specify the parent window or the frame you want to put it in. then write the text you want it to show. For eg., ‘keep me logged in’.
Now we want to place it in the main window. Now, to place the checkbox in the center of both the label and entry box (putting it into 2 columns together), we need to write columnspan = 2 in place of a column. This will combine 2 columns and treat it as one column.
```python
c = Checkbutton(var, text = "keep me logged in")
c.grid(row=2, columnspan=2)
``` 
## Final Code
the whole program combined will look like,
```python
from Tkinter import *
var = Tk()
name = Label(var, text = "name")
password = Label(var, text = "password")
entry1 = Entry(var)
entry2 = Entry(var)
name.grid(row=0, sticky = E)
password.grid(row=1, sticky = E)
entry1.grid(row=0, column=1)
entry2.grid(row=1, column=1)
c = Checkbutton(var, text = "keep me logged in")
c.grid(row=2, columnspan=2)
var.mainloop() 
```