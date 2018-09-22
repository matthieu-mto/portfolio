// Requires
var gulp                = require( 'gulp' ),
    gulp_plumber        = require( 'gulp-plumber' ),
    browserify          = require( 'browserify' ),
    gulp_notify         = require( 'gulp-notify' ),
    gulp_sass           = require( 'gulp-sass' ),
    gulp_autoprefixer   = require( 'gulp-autoprefixer' ),
    uglifyify           = require( 'uglifyify' );


/***********
 * OPTIONS *
 **********/
var options               = {};
options.paths             = {};
options.paths.build       = '../build/';
options.paths.data        = '../data/';
options.paths.css         = '../src/css/';
options.paths.sass        = '../src/sass/';
options.paths.fonts       = '../src/fonts/';
options.paths.images      = '../src/img/';
options.paths.medias      = '../src/medias/';
options.paths.js          = '../src/js/';
options.sass              = {};
options.sass.output_style = 'compressed'; // nested | expanded | compact | compressed

/******
 * JS *
 *****/
gulp.task( 'js', () =>
{
    // Browserify
    browserify( `${options.paths.js}script.js`, {
        paths      : [ './node_modules', options.paths.js ],
        debug      : false,
        extensions : ['.js', '.json'],
        transform  : ['glslify']
    } )

    // Error (plumber not working)
        .on( 'error', gulp_notify.onError( '<%= error.message %>' ) )

        // Send to build
        .pipe( source( 'script.js') )
        .pipe( gulp.dest(
            `${options.paths.build}src/js/`
        ) )

        // Notify
        .pipe( gulp_notify( 'js' ) );
} );