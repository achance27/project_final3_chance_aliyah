// jQuery Plugins
// Intro Page Languages Greeting
$('.rotate').textrotator({
  animation: 'flip', // Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
  separator: ',', // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
  speed: 5000 // How many milliseconds until the next word show.
});

//
// Intro Background Video
$('.jquery-background-video').bgVideo( {
    fullScreen: true,
    fadeIn: 2000,
});

//
// Menu Page Tabs & Accordian
$('#responsiveTabsDemo').responsiveTabs( {
    startCollapsed: 'accordion'
});

//
// Custom JavaScript
/*document.getElementsByTagName('h3')[0].addEventListener('mouseover', function () {
    var drinks = document.createElement('p');
		drinks.innerHTML = 'You can have whatever you like';
    document.getElementsByTagName('h3')[0].appendChild(drinks);
});
*/

//
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

//
// Container Fade Transition
$('div').className += 'fade-out';
$(function () {
    $('div').removeClass('fade-out');
});
