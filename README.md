# plain-transition (WORK IN PROGRESS)

plain-transition is a very lightweight and simple function with no dependencies. It allows you to create a simple and smooth transition from one value to another. Nothing more, nothing less.

## Installation

### Using a module bundler

Install via npm: `npm install plain-transition --save-dev`

```javascript
import { transition, easeIn, easeOut, easeInOut } from 'plain-transition';

transition();
```

### Via `<script>` declaration

```html
<script src="plain-transition.min.js"></script>
<script>
    plainTransition.transition();
</script>
```

## Usage

When using a module bundler you can import the transition function and optionally an easing function if you want. Then you just need to call the transition function to start a transition:

```javascript
import { transition, easeInOut } from 'plain-transition';

transition({
    easing: easeInOut,
    // ...options
});
```

When using the `plain-transition.min.js` bundle, all functions get bundled in the global `plainTransition` object:

```javascript
plainTransition.transition({
    easing: plainTransition.easeInOut,
    // ...options
});
```

## Options

```javascript
transition({
    from: 0,
    to: 100,
    duration: 1000,
    easing: easeIn,
    onChange: value => {

    },
    onDone: () => {

    }
});
```

**`from`** (integer)  
The starting value

**`to`** (integer)  
The ending value

**`duration`** (integer)  
The duration in milliseconds

**`easing`** (function)  
An easing function. Either a function provided one from this package or a custom one.

**`onChange`** (function)  
This function gets called everytime the value updates. Usually 60 times per second.

**`onDone`** (function)  
This function gets called once, when the transition is finished and in its final value.

## Browser support

* Internet Explorer 10+
* Firefox 23+
* Chrome 24+
* Safari 7+
* Opera 15+
