---
title: "Implement Python Class in Tkinter"
date: 2020-03-07T21:26:49+05:30
draft: false
tags: ["cip-archive","python","tkinter"]
image: "/images/articles/gui.png"
description: "Learn how to implement and use python class in Tkinter."
---
_This is an archived blog post from Codeinpython website that i used to run. Original post was created on 12th June 2017. Author of this post is Rahul Choudhary._

In this chapter we will learn how to use classes with Tkinter and whenever we work with a professional software or whenever we will make more than just simple buttons, this is the standard technique that we will use because it is standard not only for making GUI applications but also to make software.

We already know the basics of classes from the regular python tutorials. We will make a window and one button. Clicking it will print something on the screen and another button will quit it. Let’s make a class for this to happen.

class cip_buttons: 
Now we will create a function inside the class.
```python
def __init__(self, master):
    self.frame = Frame(master)
    self.frame.pack()
```     
\__init\__ is a special kind of function because whenever we create an object from this class, we don’t have to call it explicitly. Init means to initialize and it gets called automatically whenever we create an object. Like every function in class, it’s going to take a parameter called self. It will take one more parameter since we are working with GUI’s. We have called it master. You can call it anything you want. It means the main window. Whenever we will create an object from this class, it will create the main window.

Now we will add some buttons to the main window. we can call the function in the buttons before creating it.
```python
self.printbutton = Button(frame, text="print message", command = self.printmessage)
self.printbutton.pack(side=LEFT)
self.quitbutton = Button(frame, text = "quit", command = frame.quit)
self.quitbutton.pack(side=LEFT)
``` 
frame.quit is already built-in in Tkinter to quit the mainloop and closing the mainloop will close the whole process and end the program. Now we have to create the function that we have already called in the printbutton.
```python
def printmessage(self):
   print("it works!")
```   
Now, whenever we want to use something from the class, we need to make an object and the object allows us to access the functions inside the class.
```python
c = cip_buttons(var)
```
We need to pass the main window in the parenthesis after the class name to tell the program that the var is ‘master’ window. Now we don’t have to call any of the functions separately because we have called the class containing all the function. So this is all we have to do.

## Final code – Using Classes in Tkinter
The whole program will be,
```python
from tkinter import *
var = Tk()
class cip_buttons:
 def __init__(self, master):
   self.frame = Frame(master)
   self.printbutton = Button(frame, text="print message", command = self.printmessage)
   self.printbutton.pack(side=LEFT)
   self.quitbutton = Button(frame, text = "quit", command = frame.quit)
   self.quitbutton.pack(side=LEFT)
   self.frame.pack()
 def printmessage(self):
   print("it works!")

c = cip_buttons(var)
var.mainloop()
```