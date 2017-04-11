
### Plan
* a function is a set of instructions
* we can't really pass data to an event handler
* how do we get an event handler to remember something? (eg. a number to print out/alert)




# Closures

This assignment will provide an explanation of closures and a walkthrough of how to use them.

Some important notes:

* Closures are a very difficult concept. If you finish this assignment without being able to explain what a closure is, don't feel too bad about it. You should hopefully have some idea about them.
* You *will* use closures, whether you understand them or not. This is basically unavoidable in modern JavaScript wed applications.
* You have probably used closures already!
* The only way to understand closures is to use them. A lot.

## What is a closure?

A *Closure* is a function that remembers a piece of information, and remembers it no matter what. The application can do anything it wants, but the function (or closure) still hangs on to that old piece of information. Let's first explore a couple of things that are NOT closures.

```js
function helloWorld() {
  console.log("Hello world!");
}
```

This isn't a closure; it's just a function. It's not remembering any data. We've typed `"Hello world!"` in there, but that is hardcoded, and so we won't count it as 'remembering'.

```js
function sayHello(name) {
  console.log("Hello, " name + "!");
}
```

This is also not a closure. It does allow us to pass in a name, but it won't later remember which name we passed it. This is easy to test by calling it twice in a row.

```js
sayHello('Alfred'); // outputs "Hello, Alfred!"
sayHello(); // outputs "Hello, undefined!"
```

We can see that it did not 'remember' the name Alfred, or anything at all. The function is simply doing what it is told each time.

Let's try another example that is NOT a closure. It will, however, be closer to what we need to do to make one.

```js
var number = old number;
function callMeOnMyCellPhone() {
  console.log(number);
}

callMeOnMyCellPhone(); // old number
```

This appears to be remembering the phone number we gave it! But a closure has to hang on to that data, *no matter what*. Let's try to change the number and see what happens:

```js
number = 'new number';
callMeOnMyCellPhone(); // new number
```

The function is now printing out the new number. So this is neat, and it might be useful, but it is still not a closure.

What is an example of a closure, then? We'll get to that, but first, let's see an example of where you might want to use one.


## Event Handlers

Event handlers are probably the most common place to find closures. They are responsible for firing when something happens, and they often need to know information about (say) the list element that was clicked.

Let's try to accomplish the following: we want a number of list elements to output some information when clicked. They should print the content of the list element as well as their order (starting at 1, ie. 1, 2, 3, etc.).

Read the code found in `closureAttempt01.js`. Try to figure out what the code will do. When you are done, make sure `index.html` is pointing to `closureAttempt01.js` and open `index.html` in your browser. Open the console and click on each list element.

...

...

...

...

...

...

...

...

...

...

...

...

...

...

Wait, what? Why did that happen? Let's figure it out.

## The Big Mistake (that everybody makes)

It would seem reasonable to expect the page to log out both the content of the list element (which it did, successfully) and the appropriate secret message. But it printed out `undefined`! Notice as well that it printed out the number `3` for each click instead of `0`, `1`, and `2`. This means `index` is `3`, and there is no secret message at that index.

Nearly every JavaScript developer has at some point been tripped up by this exact issue. To understand it, let's go back to our `callMeOnMyCellPhone` example.

```js
var number = 'old number';
function callMeOnMyCellPhone() {
  console.log(number);
}

callMeOnMyCellPhone(); // old number
number = 'new number';
callMeOnMyCellPhone(); // new number
```

The function was relying on `number`, and so when we pointed `number` to a new value, the function followed suit.

> ##### JavaScript Variable Scope
Remember how scope in JavaScript works? A variable defined *outside* of a function is available *inside* that function. We haven't re-declared `number` inside the function, so `number` inside the function is identical to `number` outside the function.

The example in the browser was actually very similar, despite looking more complicated:

```js
for (var index = 0; index < listElements.length; index++) {
  var listElement = listElements[index];
  listElement.addEventListener('click', function() {
    console.log(this.innerHTML);
    console.log(index);
    console.log(secretMessages[index]);
  });
}
```

The important parts are:

* the for loop is creating a variable called `index`
* we are creating a function (it's anonymous)
  * it's getting passed into `listElement.addEventListener`
* we are printing out `this.innerHTML` (which works)
* we are printing out `index` and `secretMessages[index]`

So the functions - we are creating 3 of them, one for each list element - are all relying on the same variable: `index`. This is exactly what happened with `callMeOnMyCellPhone`: it was relying on `number`. We should therefore expect every click handler to print out the same number.

> #### Trivia/advanced
Why is the printed index `3` instead of `2`? The values index takes are `0`, `1`, and `2`. But the for loop actually tries to increase the value of `index` by one again! This means `index` hits `3`, at which point the for loop stops (because `index < listElements.length`). You can always test this by printing out the index of a for loop *after* the loop completes.


We recommend reading this section more than once before moving on. If you are unfamiliar with JavaScript scope and how it works, you'll want to play around with it yourself! Make a JS file, create variables and functions, run them in Node, and learn as much as you can. Tackling closures without an understanding of scope is like climbing a mountain without the mountain.

## The Solution

We've seen that the problem with the previously proposed solution was that the value of `index` kept changing. What if we could find a way to guarantee that the variable won't change ever again? Putting it another way, if we could make the variable 'safe' from the rest of the program, then each function should have its own secret message.



















# Additional Resources

https://medium.freecodecamp.com/javascript-closures-explained-by-mailing-a-package-4f23e9885039
