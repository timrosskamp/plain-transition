export * from './easings.js';

export function transition(_options){
    const options = {
        from: 0,
        to: 100,
        duration: 1000,
        easing: v => v,
        onChange: () => {},
        onDone: () => {}
    }

    for(const attr in _options){
        options[attr] = _options[attr];
    }

    let start = 0;

    const frame = time => {

        // Set the inital timestamp
        if( start <= 0 ){
			start = time;
        }

        // Calculate the current progress in milliseconds
        const progress = time - start;

        // Check if the transition time already passed the duration
        if(progress < options.duration){
            // Call the onChange event
            options.onChange( ( options.easing( Math.min( progress / options.duration, 1 ) ) * ( options.to - options.from ) ) + options.from );

            requestAnimationFrame(frame);
        }else{
            // Call the onChange the last time and ensure the last value emitted is the final value
            options.onChange(options.to);

            // Call the onDone event to finish this off
            options.onDone();
        }
    }

    // Start the transition
    requestAnimationFrame(frame);
}