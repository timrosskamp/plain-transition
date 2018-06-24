function easeIn(t) {
    return -Math.cos(t * Math.PI * 0.5) + 1;
}

function easeOut(t) {
    return Math.sin(t * Math.PI * 0.5);
}

function easeInOut(t) {
    return -Math.cos(t * Math.PI) * 0.5 + 0.5;
}

var transitions = [];

function animate(time) {
    transitions.forEach(function (t, i) {
        t._frame(time);
    });

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

function transition(_options) {
    var _this = this;

    if (!(this instanceof transition)) {
        return new transition(_options);
    }

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
    }

    var start = 0;
    var started = options.autostart;

    // Gets called at the end of the transition or manually by the user
    this.cancel = function () {
        // remove this transition from queue
        transitions.splice(transitions.indexOf(this), 1);
    };

    this.start = function () {
        started = true;
    };

    this._frame = function (time) {
        // Don't do anything until this transition has started
        if (started !== true) {
            return;
        }

        // Set the inital timestamp
        if (start <= 0) {
            start = time;
        }

        // Calculate the current progress in milliseconds
        var progress = time - start;

        // Check if the transition time already passed the duration
        if (progress < options.duration) {
            // Call the onChange event
            options.onChange(options.easing(Math.min(progress / options.duration, 1)) * (options.to - options.from) + options.from);
        } else {
            // Call the onChange the last time and ensure the last value emitted is the final value
            options.onChange(options.to);

            // Call the onDone event to finish this off
            options.onDone();

            // Ensure nothing happens anymore
            _this.cancel();
        }
    };

    transitions.push(this);
}

export { transition, easeIn, easeOut, easeInOut };
