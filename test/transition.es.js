function easeIn(t) {
    return -Math.cos(t * Math.PI * 0.5) + 1;
}

function easeOut(t) {
    return Math.sin(t * Math.PI * 0.5);
}

function easeInOut(t) {
    return -Math.cos(t * Math.PI) * 0.5 + 0.5;
}

function transition(_options) {
    var options = {
        from: 0,
        to: 100,
        duration: 1000,
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
    var canceled = false;

    var frame = function frame(time) {
        // Don't do anything, when this got canceled
        if (canceled !== false) {
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

            requestAnimationFrame(frame);
        } else {
            // Call the onChange the last time and ensure the last value emitted is the final value
            options.onChange(options.to);

            // Call the onDone event to finish this off
            options.onDone();
        }
    };

    // Start the transition
    requestAnimationFrame(frame);

    return {
        cancel: function cancel() {
            canceled = true;
        }
    };
}

export { transition, easeIn, easeOut, easeInOut };
