---
slug: eloquent-javascript-exercises
title: "My solutions to exercises in 'Eloquent JavaScript'"
date: "2020-12-09"
published: true
---

*Last update: December 9th, 2020*

# Chapter 4: Data Structures: Objects and Arrays

## Exercise: Arrays and Lists

### Exercise Description

A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

```js
let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};
```

Write a function `arrayToList` that builds up a list structure like the one shown when given `[1,2,3]` as argument. Also write a `listToArray` function that produces an array from a list. Then add a helper function `prepend`, which takes an element and a list and creates a new list that adds the element to the front of the input list, and `nth`, which takes a list and a number and returns the element at the given position in the list (with zero refeerring to the first element) or `underfined` when there is no such element.


### My solution

```js
function listToArray(inputArray) {
	let list = {};
  if (inputArray.length > 0) {
  	list.value = inputArray[0];
    list.rest = listToArray(inputArray.slice(1))
  } else {
    return null;
  }
  return list;
}

console.log(listToArray([1,3,5]))
// returns:
//
//  {
//  value:1,
//  rest: {
//      value:3,
//      rest: {
//          value:5,
//          rest:null
//          }
//      }
//  }
```

