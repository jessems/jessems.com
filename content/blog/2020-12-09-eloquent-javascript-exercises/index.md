---
slug: eloquent-javascript-exercises
title: "My solutions to exercises in 'Eloquent JavaScript'"
date: "2020-12-09"
published: true
---

*Last update: December 10th, 2020*

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
[codepen](https://codepen.io/jessems/pen/OJRbKLg)

```js
function arrayToList(inputArray) {
	let list = {};
  if (inputArray.length > 0) {
      list = prepend(inputArray[0], arrayToList(inputArray.slice(1)));
  } else {
    return null;
  }
  return list;
}

function prepend(el, list) {
	return {value: el, rest: list};
}

console.log(arrayToList([1,3,5]))
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

function listToArray(inputList) {
	currentArray = [inputList.value];
  if (inputList.rest) {
    currentArray = currentArray.concat(listToArray(inputList.rest));
  }
  return currentArray;
}

console.log(listToArray({value: 1, rest: {value: 2, rest: {value:3, rest: null}}}))

// returns:
// [1, 2, 3]

function nth(list, nr) {
	if (nr == 0) {
    return list.value
  } else {
  	return nth(list.rest, nr-1)
  }
}

console.log(nth({value: 1, rest: {value: 2, rest: {value:3, rest: null}}},1))

// returns:
// 2
```

## Exercise: Deep Comparison

### Exercise Description

Write a function `deepEqual` that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to `deepEqual`. 

To find out whether values should be compared directly (use the `===` for that) or have their properties compared, you can use the `typeof` operator. If it produces `"object"` for both values, you should do a deep comparison. But you have to take on silly exception into account: because of a historical accident, `typeof null` also produces `"object"`.

### My solution (WIP)
[codepen](https://codepen.io/jessems/pen/LYRbKqP)

```js
function deepEqual(first, second, indentation='') {
	if (typeof first === typeof second) {
		if (typeof first === "object") {
      if (first !== null) {
        firstKeys = Object.keys(first);
        secondKeys = Object.keys(second);
        if (firstKeys.length == secondKeys.length) {
          trackInequalities = [];
          for (i=0; i<=firstKeys.length-1; i++) {
            trackInequalities.push(deepEqual(first[firstKeys[i]],second[secondKeys[i]], '    '));
          }
          return !trackInequalities.includes(false)
        } else {
          // Different amount of keys
          return false;
        }  
      } else {
        // Both are null
        return true; 
      }
		} else {
			return first === second
		}
	} else {
		return false;
	}
}

function test(assertion, expected, actual) {
  console.log(assertion, expected === actual ? 'OK' : 'FAILED')
}

test('Shallow deepEqual with same identities should yield true', true, deepEqual(1,1))
test('Shallow deepEqual with different identities should yield false', false, deepEqual(1,2))
test('Deep deepEqual with same identities should yield true', true, deepEqual({value: 'test', rest: {value: 'test2', rest: null}}, {value: 'test', rest: {value: 'test2', rest: null}}))
test('Deep deepEqual with different identities should yield false', false, deepEqual({value: 'test', rest: {value: 'test2', rest: null}}, {value: 'test', rest: {value: 'diff', rest: null}}))
test('Deep deepEqual with identical objects containing arrays should yield true', true, deepEqual({value: 'test', rest: ['test', 'test2', 'test3']}, {value: 'test', rest: ['test', 'test2', 'test3']}))
```




