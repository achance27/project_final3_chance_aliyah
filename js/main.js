// Menu Page Tabs & Accordian
$('#responsiveTabsDemo').responsiveTabs({
    startCollapsed: 'accordion'
});

/*document.getElementsByTagName('h3')[0].addEventListener('mouseover', function () {
    var drinks = document.createElement('p');
		drinks.innerHTML = 'You can have whatever you like';
    document.getElementsByTagName('h3')[0].appendChild(drinks);
});
*/
//Fade out Hot and fade in words "or Cold?" and then fade in "Hot or Cold?"
$('#hot').mouseover(function () {
    $('h3').fadeIn('xslow').html('Or Cold?');
});
$('#hot').mouseout(function () {
    $('h3').fadeIn('xslow').html('Hot Or Cold?');
});
