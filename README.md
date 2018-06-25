# plain-transition

plain-transition is a very lightweight and simple function with no dependencies. It allows you to create a simple and smooth transition from one value to another. Nothing more, nothing less.

## Features

* Small build size (1kb minified)
* Suitable for every kind of animation (DOM, CSS, Canvas, etc.)
* Runs `requestAnimationFrame` only if transitions running and not all the time.

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

const myTransition = transition({
    easing: easeInOut,
    // ...options
});
```

When using the `plain-transition.min.js` bundle, all functions get bundled in the global `plainTransition` object:

```javascript
var myTransition = plainTransition.transition({
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
    autostart: true,
    onChange: value => {

    },
    onDone: () => {

    }
});
```

**`from`** integer *(default: 0)*  
The transition starts with this value

**`to`** integer *(default: 100)*  
The transition will transition to this value and end with value

**`duration`** integer *(default: 1000)*  
The transition will take this much milliseconds

**`easing`** function *(default: linear)*  
An easing function. Either a function provided one from this package or a custom one.

Built-in functions:

* easeIn
* easeOut
* easeInOut

**`autostart`** boolean *(default: true)*  
Wheather this transition should start immediately or when transition.start() gets called.

**`onChange`** function  
This function gets called everytime the value updates. The first argument will be the current value.

**`onDone`** function  
This function gets called once, when the transition is finished and in its final value.

## API

**`myTransition.start()`**  
This starts the transition. This is only relevant when `autostart: false` is set in the options.

**`myTransition.cancel()`**  
This stops the transition immediately. once it's canceled, it can't be started again.

## Browser support

| Chrome | Safari | IE / Edge | Firefox | Opera |
| --- | --- | --- | --- | --- |
| 24+ | 6+ | 10+ | 23+ | 15+ |
