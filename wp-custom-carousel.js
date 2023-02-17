const default_options = {
    feature_size: [480, 360]
}

export function wp_custom_carousels(options = { }) {
    const carousels = [...document.querySelectorAll('wp-custom-carousel')];
    custom_carousels = carousels.map( entry => setupCarousel(entry, Object.assign(default_options, options)));
    return [...carousels];
}

export function wp_custom_carousel(element, options) {
    return new CustomCarousel(element, options)
} 

const setupCarousel = function(carousel, options) {
    const custom_carousel = new CustomCarousel(carousel, options);
    return custom_carousel;
}



function CustomCarousel(element, options) {

    element.style.overflow = 'hidden';

    function updateFeatureSize ( ) {
        element.querySelectorAll(' > figure').forEach(figure => {
            figure.style.maxWidth = options.feature_size[0] + 'px',
            figure.style.maxHeight = options.feature_size[1] + 'px';
            figure.style.width = options.feature_size[0] + 'px';
        });
    }

    //create buttons 
    element.appendChild(createCarouselButton('left'));
    element.appendChild(createCarouselButton('right'));

    updateFeatureSize( );

    return {
        get feature_size( ) {return options.feature_size},
        get element( ) {return element},

        setFeatureSize(width, height) {
            options.feature_size = [width, height];
            updateFeatureSize( );
        }
    }

}

function createCarouselButton(type) {
    const button = document.createElement('button');
    if(type == 'left') {
        button.className = 'custom-carousel-left-button custom-carousel-nav';
    } else if(type == 'right') {
        button.className = 'custom-carousel-right-button custom-carousel-nav';
    }
    return button;
}