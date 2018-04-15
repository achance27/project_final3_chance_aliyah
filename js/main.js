// Custom jQuery No. 1
//Container Fade Transition
$('div').className += 'fade-out';
$(function () {
    $('div').removeClass('fade-out');
});

// jQuery Plugins No. 3
// Menu Page Tabs & Accordian
$('#responsiveTabsDemo').responsiveTabs({
    startCollapsed: 'accordion'
});

////////////////////////////////////////////////////////////////
//
// Custom JavaScript
// Switch location image to have a hover-like effect
var pin = document.getElementById('pin');
pin.addEventListener('mouseover', function () {
    pin.src = 'img/location-hover.png';
});

pin.addEventListener('mouseout', function () {
    pin.src = 'img/location.png';
});

////////////////////////////////////////////////////////////////
//
// Custom jQuery No. 2
//Fade out Hot and fade in words "or Cold?" and then fade in "Hot or Cold?"
var i = 1;
$('#hot').mouseover(function () {
    if (i === 1) {
        $('#hot').fadeIn('90000').html('Or Iced?');
    }
    i = 2;

});
$('#hot').mouseout(function () {
    $('#hot').fadeIn('90000').html('Hot or Iced?');
});

// Header changes from "We won't spill . . ." to "The Tea"
$('#tea').mouseover(function () {
    $('#tea').fadeIn('90000').html('The Tea');
});

// Header changes from "Treat yourself!" to "Snacks and Treats"
$('#bite').mouseover(function () {
    $('#bite').fadeIn('90000').html('Snacks and Treats');
});

//Custom jQuery No. 3
// Container Fade Transition
$('div').className += 'fade-out';
$(function () {
    $('div').removeClass('fade-out');
});
