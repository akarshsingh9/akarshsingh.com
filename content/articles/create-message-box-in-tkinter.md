---
title: "How to create message box in Tkinter"
date: 2020-03-08T01:43:37+05:30
draft: false
tags: ["cip-archive","python","tkinter"]
image: "/images/articles/gui.png"
description: "Learn how to implement message box in Tkinter."
---
_This is an archived blog post from Codeinpython website that i used to run. Original post was published on 12th June 2017. Author of this post is Rahul Choudhary._

In this chapter, we will learn how to make Tkinter message box. It is equivalent to alert in javascript, pop-ups that appear on the screen. They can either give you a plain text, like a piece of information or they, can also ask you a question like "do you want to leave this site", yes or no. To create a message box, the first thing we have to do is to import tkinter.messagebox.
```python
import tkinter.messagebox
``` 
Firstly, we are going to make a message box that is simple and will display just a text. Nothing that you can interact with, taking any inputs or pressing any buttons. Now, in the tkinter.messagebox class, there is a function called showinfo()
This function takes a couple of parameters. Some of them are optional, some of them are necessary. Firstly, it asks for the title of the window. Till now, the title for the window was Tk by default but now we can specify our own title. It is the text that is displayed on the top of the window beside the close button. Secondly, it asks for the text we want to be displayed on the message box.
```python
tkinter.messagebox.showinfo('code in python', 'this is the tkinter tutorial')
``` 
Now we are going to make a message box that will give us a couple of options i.e., yes or no. we have to store it in a variable so that we can us it later in the program. The function used for this type of message box is askquestion(). Its first parameter asks for the window title. The second one asks for the yes or no question.
```python
ans = tkinter.messagebox.askquestion('quiz', 'do you like python')
``` 
Now we can make a basic if statement. Make sure you have a ‘==’ sign. Never put is or ‘=’ sign.
```python
if ans == 'yes':
   print("welcome to my website") 
```   
Now, whenever you will press yes button, it will process the tkinter.messagebox.askquestion and analyze the answer and display the result accordingly.

## Final Code – Message Box
Full program for message box is,
```python
from tkinter import *
import tkinter.messagebox

var = Tk()
tkinter.messagebox.showinfo('code in python', 'this is the tkinter tutorial')
ans = tkinter.messagebox.askquestion('quiz', 'do you like python')
if ans == 'yes':
   print("welcome to my website")

var.mainloop() 
```