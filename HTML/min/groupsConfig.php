<?php
/**
 * Groups configuration for default Minify implementation
 * @package Minify
 */

/** 
 * You may wish to use the Minify URI Builder app to suggest
 * changes. http://yourdomain/min/builder/
 **/

return array(
    // 'js' => array('//js/file1.js', '//js/file2.js'),
    // 'css' => array('//css/file1.css', '//css/file2.css'),

    // custom source example
    /*'js2' => array(
        dirname(__FILE__) . '/../min_unit_tests/_test_files/js/before.js',
        // do NOT process this file
        new Minify_Source(array(
            'filepath' => dirname(__FILE__) . '/../min_unit_tests/_test_files/js/before.js',
            'minifier' => create_function('$a', 'return $a;')
        ))
    ),//*/

    /*'js3' => array(
        dirname(__FILE__) . '/../min_unit_tests/_test_files/js/before.js',
        // do NOT process this file
        new Minify_Source(array(
            'filepath' => dirname(__FILE__) . '/../min_unit_tests/_test_files/js/before.js',
            'minifier' => array('Minify_Packer', 'minify')
        ))
    ),//*/

    'core-js' => array(
		'//javascript/commentblock.js',
		'//javascript/jquery.easing.1.3.js',
		'//javascript/jquery.ba-hashchange.js',
		'//javascript/jquery.cookie.js',
		'//javascript/colorpicker.js',
		'//javascript/jquery.sprite-animator.js',
		'//javascript/nebula.js',
		'//javascript/planet.js',
		'//javascript/overlay.js',
		'//javascript/universe.js'
	),
    'core-css' => array(
		'//css/reset.css',
		'//css/colorpicker.css',
		'//css/screen.css',
		'//css/media-queries.css',
		'//css/keyframe-animations.css'
	),
);
