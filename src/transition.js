export * from './easings.js';

const queue = [];

function render(time){
    queue.forEach(t => {
        t._frame(time);
    });

    if( queue.length > 0 ){
        requestAnimationFrame(render);
    }
}

export function transition(_options){
    if( !(this instanceof transition) ){
        return new transition(_options);
    }

    let start = 0;
    let canceled = false;

    const options = {
        from: 0,
        to: 100,
        duration: 1000,
        autostart: true,
        easing: v => v,
        onChange: () => {},
        onDone: () => {}
    }

    for( let attr in _options ){
        options[attr] = _options[attr];
    }

    // Gets called at the end of the transition or manually by the user
    this.cancel = () => {
        // remove this transition from queue
        canceled = true;
        queue.splice(queue.indexOf(this), 1);
    }

    this.start = () => {
        if( canceled !== true ){
            // add the transition to the render queue
            queue.push(this);

            // start render loop if it's empty, witch means it's stopped
            if( queue.length == 0 ){
                requestAnimationFrame(render);
            }
        }
    }

    this._frame = time => {
        // Set the inital timestamp
        if( start <= 0 ){
            start = time;
        }

        // Calculate the current progress in milliseconds
        const progress = time - start;

        // Check if the transition time already passed the duration
        if( progress < options.duration ){
            // Emit the onChange event
            options.onChange( ( options.easing( Math.min( progress / options.duration, 1 ) ) * ( options.to - options.from ) ) + options.from );
        }else{
            // Emit the onChange the last time and ensure the last value emitted is the final value
            options.onChange(options.to);

            // Emit the onDone event
            options.onDone();

            // Ensure nothing happens anymore
            this.cancel();
        }
    }

    if( options.autostart ){
        this.start();
    }
}