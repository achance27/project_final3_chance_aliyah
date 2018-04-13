// Custom jQuery No. 1
//Container Fade Transition
$('div').className += 'fade-out';
$(function () {
    $('div').removeClass('fade-out');
});

// jQuery Plugins No. 3
// Menu Page Tabs & Accordian
$('#responsiveTabsDemo').responsiveTabs( {
    startCollapsed: 'accordion'
});

////////////////////////////////////////////////////////////////
//
// Custom JavaScript
/*document.getElementsByTagName('h3')[0].addEventListener('mouseover', function () {
    var drinks = document.createElement('p');
		drinks.innerHTML = 'You can have whatever you like';
    document.getElementsByTagName('h3')[0].appendChild(drinks);
});
*/

////////////////////////////////////////////////////////////////
//
// Custom jQuery No. 2
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

//Custom jQuery No. 3
// Container Fade Transition
$('div').className += 'fade-out';
$(function () {
    $('div').removeClass('fade-out');
});
