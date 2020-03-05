---
title: "Getting Started with Tkinter in Python"
date: 2020-03-05T00:19:34+05:30
draft: true
tags: ["cip-archive","python","tkinter"]
image: "/images/articles/gui.png"
description: "Learn how to make GUI using Tkinter in Python."
---
_This is an archived blog post from Codeinpython website that i used to run. Original post was created on 12th June 2017. Author of this post is Rahul Choudhary._

Here you will learn how to make GUI applications in Tkinter using Python. If this is first you are ever experiencing python, then we highly recommend you to check out our python tutorials. They will teach you the basics of Python language and in that way, you will be ready to jump into this stuff.

GUI means Graphical User Interface. Here you can make cool programs with drop – down menu, buttons, different layouts, etc.

There is a built – in library in python whenever you download core Python language. It is called Tkinter. So you don’t have to install anything new. You can just import it whenever you want to use it. The first line you have to write is,
```python {linenos=table,linenostart=1}
from tkinter import *
``` 
Here, we are importing everything from Tkinter library so we can use anything we want. *, here, means we are importing everything from Tkinter library. We are going to eventually add a bunch of buttons, drop – down menus, sliders, etc. all these things are called widgets. We can put them anywhere on the screen. After this line, you can start your GUI program.
Remember: Don’t put T in block letters in ‘tkinter’ in the first line of the program.

We need to build a basic window first so we can have something to put those widgets in. The basic window is just a blank window with close, maximize, and minimize buttons. To do this, we have to store it in a variable. You can choose any variable of your choice. We are calling it var.
```python {linenos=table,linenostart=1}
var = Tk()
```
Tk is a Tkinter class that we just imported and as soon as we create an object from that class, it will create a blank window.
Now we will add text to it. So, whenever you want to add basic text using Tkinter, it’s actually called label. To create text on the screen, write,
```python {linenos=table,linenostart=1}
label = Label(var, text = "hello world!")
```
Here, we are putting a variable ‘label’ equal to a Label() object. It takes a couple parameters. The first one is saying where do you want me to put this label? Since we only have one place where we can put this label i.e., the blank window, so we have written var for the first parameter. The second one asks for the text you want to put on the screen. It is called text. Put text equal to anything. Make sure to keep it in quotes. Here, we have written,

**“hello world!”**

Now we are going to specify the location of the widgets. Take whatever object you want to place and just write pack() after it.
```python {linenos=table,linenostart=1}
label.pack()
```
There are different ways in which you can place your widgets in your layout. Pack means just pack it in there. It packs the widget at the first place it can fit it.

Now in the next line, put variable you used to create a blank window, here it is var, and put mainloop() after it.
```python {linenos=table,linenostart=1}
var.mainloop()
``` 
Whenever you have a GUI application, you need to have that window continuously on the screen till you decide to close it out. So, if you are printing something on the screen, the computer will print it in 1000th of the second. So if we just ran the lines of code without mainloop, it will pop up your window and then close it. Mainloop puts it in an infinite loop that never ends. So, your window will be displayed continuously on the screen until you press the close button. It will break your loop.

## Final Code
The program for this will be like this,
```python {linenos=table,linenostart=1}
from tkinter import *
var = Tk()
label = Label(var, text = "hello world!")
label.pack()
var.mainloop()
```