(function ($) {
	var myLatLng = new google.maps.LatLng(30.588899,31.492356);
	var markerposition = new google.maps.LatLng(30.588899,31.492356);
	var marker;
	var map;

	function initialize() {
	  var mapOptions = {
		zoom: 20,
		center: myLatLng,
	  };

	  map = new google.maps.Map(document.getElementById('google-map'),
			  mapOptions);

	  marker = new google.maps.Marker({
		map:map,
		animation: google.maps.Animation.DROP,
		position: markerposition,
		title:"Hello World!",
	  });
	}
	google.maps.event.addDomListener(window, 'load', initialize);
	
})(jQuery);
