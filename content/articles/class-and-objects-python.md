---
title: "Learn about Class and Objects in Python"
date: 2020-03-04T23:51:42+05:30
draft: false
tags: ["cip-archive","programming","python"]
image: "/images/articles/python.png"
description: "This post explains how to create class and objects in Python. Implement OOPS concepts."
---
_This is an archived blog post from Codeinpython website that i used to run. Original post was created on 5th June 2017._

The object oriented concepts in Python programming can be implemented using classes and objects. In this article, you will learn how to create class and object.

## Creating Class –
```python {linenos=table,linenostart=1}
class ClassName:
  class_body
```  
The class_body consists of all the components to define the class members such as data attributes and functions.
Below is the example for a simple Python class :
```python {linenos=table,linenostart=1}
class Student:
 studCount = 0
 def __init__(self, name, marks):
    self.name = name
    self.marks = marks
    Student.studCount += 1
 def displayStudentCount(self):
    print ("Total no. of Students %d", Student.studCount)
 def displayinfo(self):
    print ("Name : ", self.name, ", Marks: ", self.marks)
```
The variable **studCount** is a class variable whose value is shared among all instances or objects of this class Student. The variable can be accessed as **Student.studCount** from inside the class or outside the class.

The first method **\__init\__()** is a special method or function, which is called a class constructor or initialization method. Python calls this method every time when you create a new instance or object of this class. According to the concepts of classes, class attributes can be assigned values from inside the class.To assign them values every time you create an object of the class you need to use a constructor. A constructor is a special function whose sole purpose is to assign values to the class variables.

You can declare other class methods like normal Python functions. Just keep in mind that the first argument to each method defined in the class is self. Python adds the self-argument to the list of arguments for you.You do not need to include it when you call the methods. The **self** keyword refers the class instances to avoid ambiguity; it is similar to **this** in other programming languages.

## Creating Class Objects
To create objects of a class, you have to call the class using ClassName you have used and you have to pass in all the arguments that its \__init\__ method accepts.
```python {linenos=table,linenostart=1}
"""This will create the first object for the Student class"""
student1 = Student("Sam", 80.5)
"""This would create the second object of Employee class"""
student2 = Student("Roberts", 85.0)
```
## Accessing Class Members
You access the object’s attributes or class members such as functions using the dot operator with the object. You can access a class variable using **ClassName** followed by a dot operator

## Data Hiding
You can make an object’s attributes visible outside the class definition. It is similar to making an object’s attribute private in the class definition. You need to name the attributes with a double underscore prefix to the name of the attribute. The attributes with a double underscore, in the beginning, are not directly accessible outside the class.

**Example:**
**__name, __age**

## Destroying Objects (Garbage Collection)
In Python, everything is an object, all the data types like numbers, string, list, etc, operators, built-in functions, all are python objects. Python deletes unnecessary objects such built-in types or class instances automatically to free the memory space. The process by which Python periodically claims the blocks of memory that are no longer in use is termed Garbage Collection.