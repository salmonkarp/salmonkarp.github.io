$(document).ready(function () {
    $('a').click(function (event) {
        event.preventDefault();
        var targetUrl = $(this).attr('href');
        console.log(targetUrl);
        $('.page').fadeOut(500, function () {
        window.location.href = targetUrl;
        });
    });
});