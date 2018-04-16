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

    var frame = function frame(time) {
        if (start <= 0) {
            start = time;
        }

        var progress = time - start;

        options.onChange(options.easing(Math.min(progress / options.duration, 1)) * (options.to - options.from) + options.from);

        if (progress < options.duration) {
            requestAnimationFrame(frame);
        }
    };

    requestAnimationFrame(frame);
}

export { transition, easeIn, easeOut, easeInOut };
