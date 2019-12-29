function displayGpxTrack(gpxUrl, mapId = "map") {
  var map = L.map(mapId);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: 'Map data &copy; <a href="http://www.osm.org">OpenStreetMap</a>'
  }).addTo(map);
  new L.GPX(gpxUrl, {
    async: true,
    marker_options: {
      startIconUrl: "https://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-icon-start.png",
      endIconUrl: "https://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-icon-end.png",
      shadowUrl: "https://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-shadow.png",
      wptIconUrls: {
        '': 'https://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-icon-wpt.png'
      }
    }
  })
    .on("loaded", function(e) {
      map.fitBounds(e.target.getBounds());
    })
    .addTo(map);
}
