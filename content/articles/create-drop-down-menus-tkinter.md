---
title: "How to create drop down menus in Tkinter App"
date: 2020-03-08T01:26:19+05:30
draft: false
tags: ["cip-archive","python","tkinter"]
image: "/images/articles/gui.png"
description: "This explains how to create drop down menu in Tkinter using Python code."
---
_This is an archived blog post from Codeinpython website that i used to run. Original post was published on 12th June 2017. Author of this post is Rahul Choudhary._

In this chapter, we will learn how to build a basic framework of a common piece of software and that includes, making the drop down menus. Every software we buy has menus at the top that drop down when clicked. We will also learn how to make a toolbar.

This is all built-in. we don’t have to do it from scratch. First of all, we have to create a basic function.
```python
def printsomething():
   print("CIP is best for learning python:-P")
```    
First, we have to create this function and then we have to create the main window var.
```python
var = Tk()
``` 
Whenever we want to create an item in Tkinter we have to give a variable or an object name and in order to create a menu, the class for this is Menu. Inside menu, we have to enter where we want to put it. We have one window called var, so we will stick it in there.
```python
main_menu = Menu(var)
``` 
Now, we have menu object appearing in the main window. We have to configure to make sure that Tkinter recognizes it as the menu.
```python
var.config(menu = main_menu)
``` 
We have to tell which menu we want to configure. The menu is a parameter that is used to specify the menu we want to configure. Now, we want to make File menu. For that, we have to create a sub-menu, this sub-menu will be the thing that drops down.
```python
sub_menu = Menu(main_menu)
``` 
Inside menu, we have to enter where we want to put it. Since we are not putting it into the main menu, we are putting it inside another menu called main_menu, we will specify the menu in which we are entering. We want to add an item that has to drop down functionality. It is called cascading in Tkinter. The method used for this is add_cascade().
```python
main_menu.add_cascade(label = "File")
``` 
Inside add_cascade, we have to specify what label we want to show up on that menu. Since this is a cascade, we have to mention what is our sub-menu. So go ahead and enter the name you have used for the sub menu using the menu parameter. Our file menu is blank right now. So we have to add some command for the sub-menu to perform. For this, we use the add_command() method.
```python
sub_menu.add_command(label = "blank page", command = printsomething)
``` 
Inside add-command, we have to enter the label that will show up in the sub-menu and after that, state the function it will perform using command parameter that we have learned in the previous chapter. Remember, do not put parenthesis after the function name in command parameter. Let’s add another sub_menu in the main_menu. We can add as many menus inside a menu.
```python
sub_menu.add_command(label = "open", command = printsomething)
``` 
A separator is a line that separates different sub-menus. It differentiates the group that will perform a certain piece of work to the group that will perform work related to something else. To create a separator line, the object used is, add_separator()
```python
sub_menu.add_separator()
``` 
## Final Code – Drop Down Menus
The fully working program for this is,
```python
from tkinter import *
def printsomething():
   print("CIP is best for learning python :-P")
var = Tk()
main_menu = Menu(var)
var.config(menu = main_menu)
sub_menu = Menu(main_menu)
main_menu.add_cascade(label = "File")
sub_menu.add_command(label = "blank page", command = printsomething)
sub_menu.add_separator()
sub_menu.add_command(label = "open", command = printsomething)
var.mainloop() 
```