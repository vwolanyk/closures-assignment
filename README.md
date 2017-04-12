
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

Read the code found in `closureAttempt1.js`. Try to figure out what the code will do. When you are done, make sure `index.html` is pointing to `closureAttempt1.js` and open `index.html` in your browser. Open the console and click on each list element.

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

## Hiding Information

We've seen that the problem with the previously proposed solution was that the value of `index` kept changing. What if we could find a way to guarantee that the variable won't change ever again? Putting it another way, if we could make the variable 'safe' from the rest of the program, then each function should have its own secret message.

Closures work by protecting their variables from change. It sounds fancy, but they are simply taking advantage of concepts you already know about! Let's work toward the knowledge required to write our own closure and fix the problem.

The first thing to remember is that scope in JavaScript is *functional*. That is, a variable (or a parameter!) created inside of a function does not exist outside of the function. We can use this to protect variables from outside influence.

Let's work toward a closure with our `callMeOnMyCellPhone` example.

```js
function outerFunction() {
  var number = 'old number';
  function callMeOnMyCellPhone() {
    console.log(number);
  }
}
```

What's changed?
* we put the `callMeOnMyCellPhone` function into another function called `outerFunction`
* `outerFunction` defines a variable called `number`

In short, we put the entire `callMeOnMyCellPhone` example into another function!

This isn't quite what we want just yet, but let's talk about what we've accomplished. The variable `number` is not available outside of `outerFunction` where it is defined. It should also be available to the function `callMeOnMyCellPhone` because they are both inside the same function.

We have therefore solved the issue of being able to manipulate `number` wherever we want and seeing the function act different. Unfortunately, this code doesn't really *do* anything yet. All we're doing is defining a function (inside of another function). Let's double check what happens in Node:

```
> outerFunction();
undefined
```

`outerFunction` is not printing or returning anything, so we should expect to just get `undefined`. Our goal is to get at `callMeOnMyCellPhone`. How can we do that? Let's try to return it!

```js
function outerFunction() {
  var number = 'old number';
  function callMeOnMyCellPhone() {
    console.log(number);
  }
  return callMeOnMyCellPhone;
}
```

Running this in Node:
```
> outerFunction()
[Function: callMeOnMyCellPhone]
```

We're getting a function back. Now we need to find a way to call that function. We can call it right off the bat, or save it into a variable to call later. Trying out both:

```js
outerFunction()(); // prints 'old number'
var callMe = outerFunction();
callMe(); // prints 'old number'
callMe(); // prints 'old number' again
```

It looks like it remembers the value `'old number'`. Let's now double check that we can't change that value ourselves.

```js
var callMe = outerFunction();
callMe(); // prints 'old number'
number = 'new number';
callMe(); // prints 'old number'
```

Like we predicted before, we have no control over the variable `number` that `outerFunction` defined and `callMeOnMyCellPhone` relies on.

We have now officially created a closure! It's not a very useful one because it is incapable of printing anything except `'old number'`. Ideally we can somehow pass `outerFunction` a different number. But we already know how to pass a function information.

```js
function outerFunction(number) {
  function callMeOnMyCellPhone() {
    console.log(number);
  }
  return callMeOnMyCellPhone;
}
```

The only change is to delete the line where we defined `number`, and instead add a parameter to `outerFunction`. Let's first try this out without passing it anything.

```js
var callMe = outerFunction();
callMe(); // undefined
```

We got `undefined`, which makes sense because we didn't pass anything. Let's try to pass a new number.

```js
var callMe = outerFunction('555 5555');
var callMeYesterday = outerFunction('old number');
var callMeTomorrow = outerFunction("tomorrow's number");
callMe(); // 555 5555
callMeYesterday(); // old number
callMeTomorrow(); // tomorrow's number
callMe(); // 555 5555
callMeYesterday(); // old number
```

`outerFunction` therefore builds for us a little function that prints out a specific thing. It's like a function factory. And the reason we did it was because our previous effort was very fragile - every time we changed the value of the variable `number`, the function changed with it.

Finally, we don't really need to name the inner function `callMeOnMyCellPhone`, or anything at all. Let's return an anonymous function instead.

```js
function outerFunction(number) {
  return function() {
    console.log(number);
  }
}
```

## Back to the Problem

Reviewing `closureAttempt1.js` again to try to pinpoint the issue:

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

The issue is that `index` keeps changing! Each list element gets an event handler (a function) that refers to whatever value `index` had *at the time it was clicked*, which is `3`, rather than when we added the event handlers (which would be `0`, `1`, or `2`).

We therefore want `index` to be private and unchangeable. What can we do about this? The first thing to note is that the event handler is a function. That's half of a closure! If we want to make `index` private, we have to somehow wrap that portion of the code in a function. We'll then have a function-in-a-function.

Take a look at `closureAttempt2.js`. All we've done is moved 5 lines from inside the for loop into their own function. This solves the problem because, in short, we are passing the outer function a value for `index`. The inner function is able to remember this value and, most importantly, the for loop is unable to affect that value of `index` because it's defined inside of a separate function.

Update `index.html` to point to `closureAttempt2.js` and check for yourself that it works.


In the name of repetition, our problem was that we had a variable (`index`) that was accessible to the outside world, meaning that we couldn't rely on it keeping the same value. The two things we used to solve our problem were:

* A function that uses a variable (NOT a parameter).
  * This is true of the inner functions in all of our examples.
* The variable needs to be 'private' and safe from outside tampering.
  * That's why we have an outer function with a parameter.

A closure provides precisely these two things. A function wrapped in a function allows for passing information to the outer function, while the inner function simply remembers that information.

Next, take a look at `closureAttempt3.js`. This is a different way to use closures to solve the same problem. Note that it's not important which solution you choose; we only care that we solved the problem! (and that our code isn't too hard to read)

This solution actually looks closer to how we solved `callMeOnMyCellPhone`. We first notice that `addEventListener` requires a function to be passed into it. We therefore create a function called `getClickHandler` that returns another function, and we call it to get that inner function.

> #### Pep Talk
Closures are tricky! They use different techniques and require a solid understanding of scope. If you are confused now, the best thing to do is try the exercises. The only way to learn closures is to practice them until they make sense.

> If you are struggling, you can re-read the assignment thus far or check out the additional resources at the bottom.


## Exercise 1








# Additional Resources

https://medium.freecodecamp.com/javascript-closures-explained-by-mailing-a-package-4f23e9885039
http://stackoverflow.com/a/7464475/659816
