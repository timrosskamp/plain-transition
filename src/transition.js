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
        if( start <= 0 ){
			start = time;
        }

        const progress = time - start;

        options.onChange( ( options.easing( Math.min( progress / options.duration, 1 ) ) * ( options.to - options.from ) ) + options.from );

        if(progress < options.duration){
            requestAnimationFrame(frame);
        }
    }

    requestAnimationFrame(frame);
}