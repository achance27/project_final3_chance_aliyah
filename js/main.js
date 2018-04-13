// 2 jQuery Plugins

/*$(".rotate").textrotator({
  animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
  separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
  speed: 2000 // How many milliseconds until the next word show.
});

$('#myBlock').vide('path/to/video');
$('#myBlock').vide('path/to/video', {
...options...
});

$('#myBlock').vide( {
    mp4: img/coffee-clip.mp4,
    webm: path/to/video2,
    ogv: path/to/video3,
    poster: path/to/poster
}, {
...options...
});

$('#myBlock').vide('extended path as a string', 'options as a string'
);

document.body.className += 'fade-out';
$(function() {
    $('body').removeClass('fade-out');
});*/

// Page Face transition
/*
$('div').className += 'fade-out';
$(function () {
    $('div').removeClass('fade-out');
});

// Menu Page Tabs & Accordian
$('#responsiveTabsDemo').responsiveTabs({
    startCollapsed: 'accordion'
});
*/

// Custom JavaScript
/*document.getElementsByTagName('h3')[0].addEventListener('mouseover', function () {
    var drinks = document.createElement('p');
		drinks.innerHTML = 'You can have whatever you like';
    document.getElementsByTagName('h3')[0].appendChild(drinks);
});
*/

// Custom jQuery
//Fade out Hot and fade in words "or Cold?" and then fade in "Hot or Cold?"
var i = 1;
$('#hot').mouseover(function () {
    if (i === 1) {
        $('h3').fadeIn('90000').html('Or Cold?');
    }
    i = 2;

});
$('#hot').mouseout(function () {
    $('h3').fadeIn('90000').html('Hot or Cold?');
});
