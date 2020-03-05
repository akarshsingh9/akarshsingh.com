---
title: "Object Oriented Programming in Python"
date: 2020-03-04T23:18:34+05:30
draft: true
tags: ["cip-archive","programming"]
image: "/images/articles/python.png"
description: "This post explains basic OOPS concepts."
---
_This is an archived blog post from Codeinpython website that i used to run. Original post was created on 5th June 2017._

Python supports object-oriented programming. For those of you who already have a background in another programming language, the concept of object-oriented programming in Python is similar. For our programming beginners, this article will explain the concepts of object oriented programming.

Earlier before the object-oriented programming was introduced, programming languages used to follow procedural programming paradigm. A paradigm is a pattern or a model.

Procedural programming is based on the way the particular program is coded. The focus is not on the data but the way they are implemented. Real world objects become difficult to relate in procedural paradigm. It uses functions and variables to code behavior and attributes of real world objects. To solve this problem object oriented programming is introduced. Here the focus is majorly on the objects, their behavior, and attributes.

Object oriented programming has following features which make real world modeling easy compared to procedural programming.

1. Encapsulation
2. Abstraction or Data Hiding
3. Polymorphism
4. Inheritance

Object oriented programming is implemented using class. A class is a user-defined data type in which we can enclose variables and functions. To access these functions and variables we use objects.

## Encapsulation
Wrapping of code and data together into a single unit is known as encapsulation. Encapsulation is what helps to construct class by placing data and the functions that work on that data in the same place. Object-oriented programming provides you the framework to place the data and the relevant functions together in the same object.

## Abstraction or Data Hiding
Data abstraction refers to the process of providing only the essential information to the outside world or users and hiding their background details. Data Abstraction or data hiding will only represent the important information in the program that user needs to know without presenting the details behind it.

## Polymorphism
The ability to use an operator or function in different ways by giving them different meaning or functionality to the operators or functions is called polymorphism. Poly refers to many. The function name or operator remains the same. They differ by a number of arguments or type of arguments while defining them.

For example: An operator “+” can be used to add 2 numbers in python. But we are also allowed to add 2 strings or concatenate two strings using “+” operator. This is due to a polymorphism that “+” has an additional function to concatenate strings.

## Inheritance
Inheritance is the process of forming a new class from an existing class. The existing class is called the base class and the new class formed is called the derived class. The derived class has access to all the data members and functions since it is inheriting those from the base class. So in derived class, we have to add new functionalities or override the existing one derived from the base class. One of the most important aspects of object-oriented programming is code reusability and inheritance successfully helps to achieve so and reduces code size.

For example: We have a class Animal which has attributes like size, color, voice and functions like hasOwner(), hasName(), getDetails(), etc. Now if we define a class Dog to create new Dog objects then instead of writing all the functionality separately for Dog class we can inherit them from Animal Class. We can add our own attributes in Dog class like breed, height, etc. apart from those inherited.