<?php 

    /**
 * Plugin Name: WP Custom Carousel
 * Plugin URI:  https://github.com/PressingButtons/wp-custom-carousel
 * Description: Light weight and easily customizable wordpress carousel gallery
 * Version:     1.0.0
 * Author:      Steven Boyd
 * Author URI:  https://github.com/PressingButtons
 * Text Domain: Pressing Buttons
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Domain Path: /languages/
 */

 /* raw template
    <div class='wp-custom-carousel'>
`       <div class='wp-custom-carousel-back-btn'></div>
        <div class='wp-custom-carousel-gallery-wrapper'>
            <figure class = 'wp-custom-carousel-gallery-container'></figure>
            <div class='wp-custom-carousel-index-icons'></div>
        </div>
        <div class='wp-custom-carousel-forward-btn'></div>
    </div>`
 */


    function wp_custom_carousel($attributes) {
        $default = array();
        $a = shortcode_atts($default, $attributes);        
        $output = '<div class="wp-custom-carousel">';
        $output . '<button class="wp-custom-carousel-back-btn"></button>';
        $output . '<div class="wp-custom-carousl-gallery-wrapper">';
        $output . gallery_shortcode($a['gallery']);
        $output . '</div><button class="wp-custom-carousel-forward-btn"></button></div>'
        return $output;

    }
    add_shortcode('wp_custom_carousel', 'wp_custom_carousel');
?>


