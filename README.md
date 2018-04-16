# plain-transition (WORK IN PROGRESS)

The plain-transition package is a very simple functions thats allows to smoothly transition from one value to another.

## Installation

Install via npm: `npm install plain-transition --save-dev`

```javascript
import { transition, easeIn, easeOut, easeInOut } from 'plain-transition';

transition();
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

