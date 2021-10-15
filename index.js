function getmedia(){
	var geturlfrominput = $('#instamediaurl').val();
	var encodedurl = encodeURIComponent(geturlfrominput);
	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://instagram-video-or-images-downloader.p.rapidapi.com/",
		"method": "POST",
		"headers": {
			"content-type": "application/x-www-form-urlencoded",
			"x-rapidapi-host": "instagram-video-or-images-downloader.p.rapidapi.com",
			"x-rapidapi-key": "a026171269msha5eebbe7f76a5f2p1588f1jsnbf7813f331ec"
		},
		"data": {
			"url": `${encodedurl}`
		}
	};

	$.ajax(settings).done(function (response) {
		console.log(response.response.thumbnail);
		// downloading response.response.thumbnail with a name of your choice
		var download = document.createElement("a");
		download.href = response.response.thumbnail;
		download.download = "thumbnail.jpg";
		document.body.appendChild(download);
		download.click();
		document.body.removeChild(download);
	});
}
