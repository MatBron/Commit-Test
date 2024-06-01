
$(document).ready(function() {
$('#banner0 div:first-child').css('display', 'block');
});

var banner = function() {
$('#banner0').cycle({
before: function(current, next) {
$(next).parent().height($(next).outerHeight());
}
});
}

setTimeout(banner, 2000);
