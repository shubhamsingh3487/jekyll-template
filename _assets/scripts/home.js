//Write JS logic here
$( ".cancel" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".hamburger" ).hide();
$( ".menu" ).slideToggle( "fast", function() {
$( ".cancel" ).show();
});
});

$( ".cancel" ).click(function() {
$( ".menu" ).slideToggle( "fast", function() {
$( ".cancel" ).hide();
$( ".hamburger" ).show();
});
});
