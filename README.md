# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kunledev2/lotide`

**Require it:**

`const _ = require('@kunledev2/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
* `const assertArraysEqual = function (actual, expected) {...}`: function to test two arrays for equality and return a boolean.
* `const assertEqual = function(actual, expected) {...}`: function to test two values for equality and return a boolean.
* `const assertObjectsEqual = function(actual, expected) {...}`: function to test two objects for equality and return a boolean.
* `const head function(array) {...}`: function to take in an array and returns the first element of that array
* `const tail function(arrays) {...}`: function to take in an array and returns the array excluding the first element in that array
* `const middle = function (arrNum) {...}`: function to take in an array and returns the middle(s) element of that array
* `const countLetters = function(itemsToCount) {...}`: function to take in an array and count the letters in the array
* `const eqArrays = function (arrayNum1, arrayNum2) {...}`: function to test two arrays for equality.
* `const eqObjects = function(object1, object2) {...}`: function to test two arrays for equality.
* `const countOnly = function (allItems, itemsToCount) {...}`: function to take in an array and returns the count of words of that array
* `const findKey = function(object, checkFunc) {...}`: function to take in an array and find the key
* `const findKeyByValue = function(object, value) {...}`: function to take in an array and find key by value
* `const flatten = function (nestedArray) {...}`: function to take in an array and returns the flattened array
* `const letterPositions = function (sentence) {...}`: function to take in an array and returns the position of the element of that array
* `const map = function(array, callback) {...}`: function to take in an array and returns the first lettes of the element in the array
* `const takeUntil = function(array, callback) {...}`: function to take in an array and returns the element until a condition is met.
* `const without = function (source, itemsToRemove) {...}`: function to take in an array and returns the elements without the other.