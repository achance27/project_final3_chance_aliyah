// jQuery Plugins
// Intro Page Rotating Languages Greeting
$('.rotate').textrotator({
    animation: 'flip', // Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
    separator: ',', // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
    speed: 3000 // How many milliseconds until the next word show.
});

//
// Intro Background Video
$('.intro-video').bgVideo( {
    fullScreen: true,
    fadeIn: 0,
		fadeOnEnd: false,
		showPausePlay: false
});
