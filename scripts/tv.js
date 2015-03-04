(function () {
	var endpoint = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';
	var loaded = false;

	function randomGif() {
		var jqxhr = $.ajax(endpoint)
			.done(function (response) {
				console.log(response);

				var img = response.data.image_original_url;

				$('#tv').css({
					'background-image': 'url(' + img + ')'
				});

				setTimeout(randomGif, 60 * 5 * 1000);
			})
			.fail(function () {
				console.log('error');
			})
			.always(function () {
				console.log('complete');
			});

			// Perform other work here ...

			// Set another completion function for the request above
			jqxhr.always(function () {
				console.log('second complete');
			});
	}

	randomGif();

})();
