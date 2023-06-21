# Exercise 🇺🇸

Write a method to replace all spaces in a string with `%20`. You may assume that the string has sufficient space at
the end to hold the additional characters, and that you are given the "true" length of the string.

Note: If implementing in Java, please isa a character array so that you can perform this operation in place.

# Example

Input:  `"Hi, Ana. How are you?        "`
Output: `"Hi,%20Ana.%20How%20are%20you?"`

# Hints

- You might find you need to know the number of spaces. Can you just count them?
- It's often easiest to modify strings by going from the end of the string to the beginning.