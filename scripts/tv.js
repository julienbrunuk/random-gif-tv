(function () {
    var key = 'dc6zaTOxFJmzC';
    var endpoint = 'http://api.giphy.com/v1/gifs/random?api_key=' + key;
    var timeout = 15;

    function randomGif() {
        var jqxhr = $.ajax(endpoint)
            .done(function (response) {
                var img = response.data.image_original_url;

                $('#tv').css({
                    'background-image': 'url(' + img + ')'
                });

                setTimeout(randomGif, timeout * 1000);
            })
            .fail(function () {
                location.reload();
            });
    }

    randomGif();

})();