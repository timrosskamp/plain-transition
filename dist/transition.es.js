function easeIn(t) {
  return -Math.cos(t * Math.PI * 0.5) + 1;
}
function easeOut(t) {
  return Math.sin(t * Math.PI * 0.5);
}
function easeInOut(t) {
  return -Math.cos(t * Math.PI) * 0.5 + 0.5;
}

var queue = [];

function render(time) {
  queue.forEach(function (t) {
    t._frame(time);
  });

  if (queue.length > 0) {
    requestAnimationFrame(render);
  }
}

function transition(_options) {
  var _this = this;

  if (!(this instanceof transition)) {
    return new transition(_options);
  }

  var start = 0;
  var options = {
    from: 0,
    to: 100,
    duration: 1000,
    autostart: true,
    easing: function easing(v) {
      return v;
    },
    onChange: function onChange() {},
    onDone: function onDone() {}
  };

  for (var attr in _options) {
    options[attr] = _options[attr];
  } // Gets called at the end of the transition or manually by the user


  this.stop = function () {
    // remove this transition from queue
    queue.splice(queue.indexOf(_this), 1);
  };

  this.start = function () {
    if (queue.indexOf(_this) > -1) {
      return;
    } // Reset the timer


    start = 0; // start render loop if it's empty, witch means it's stopped

    if (queue.length <= 0) {
      requestAnimationFrame(render);
    } // add the transition to the render queue


    queue.push(_this);
  };

  this._frame = function (time) {
    // Set the inital timestamp
    if (start <= 0) {
      start = time;
    } // Calculate the current progress in milliseconds


    var progress = time - start; // Check if the transition time already passed the duration

    if (progress < options.duration) {
      // Emit the onChange event
      options.onChange(options.easing(Math.min(progress / options.duration, 1)) * (options.to - options.from) + options.from);
    } else {
      // Emit the onChange the last time and ensure the last value emitted is the final value
      options.onChange(options.to); // Emit the onDone event

      options.onDone(); // Ensure nothing happens anymore

      _this.stop();
    }
  };

  if (options.autostart) {
    this.start();
  }
}

export { easeIn, easeInOut, easeOut, transition };
