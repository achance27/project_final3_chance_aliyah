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

/*

document.getElementById('yes').addEventListener('click', function () {
    var learn = document.createElement('article');
    learn.innerHTML = '<p>click <a href="http://www.dumblaws.com/"> here<a> for more laws!</p><img src="./img/nologic.jpg" alt="no logic meme" id="logic">';
    document.getElementsByTagName('h2')[3].appendChild(learn);
});


var navSocialMedia = document.getElementById('pin');

navSocialMedia.addEventListener('onmouseover', function () {

});

document.getElementById('pin').setAttribute('src', 'img/location-hover.png';


var image = document.getElementById('pin');
image.src = 'img/location-hover.png'


document.getElementById('pin').addEventListener('mouseover', function () {
    var navImage = document.getElementById('pin');
})


var navImage = document.getElementById('pin');
pin.addEventListener('mouseover', function () {
    pin.src = 'img/location-hover.png';
});

*/

var navImage = document.getElementById('pin');
function normal() {
    pin.src = 'img/location.png'
}
function hoverOn() {
	pin.src = 'img/location-hover.png'
}
});
document.getElementById('pin').addEventListener('mouseover', hoverOn);

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
