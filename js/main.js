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
/*
$('div').className += 'fade-out';
$(function () {
    $('div').removeClass('fade-out');
}); */
$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'flip-in-y-fr',
    outClass: 'flip-out-y-fr',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});

// Menu Page Tabs & Accordian
$('#responsiveTabsDemo').responsiveTabs({
    startCollapsed: 'accordion'
});

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
