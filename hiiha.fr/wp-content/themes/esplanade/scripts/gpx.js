function displayGpxTrack(gpxUrl, mapId = "map") {
  var map = L.map(mapId);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: 'Map data &copy; <a href="http://www.osm.org">OpenStreetMap</a>'
  }).addTo(map);
  new L.GPX(gpxUrl, {
    async: true,
    marker_options: {
      startIconUrl: "http://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-icon-start.png",
      endIconUrl: "http://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-icon-end.png",
      shadowUrl: "http://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-shadow.png"
    }
  })
    .on("loaded", function(e) {
      map.fitBounds(e.target.getBounds());
    })
    .addTo(map);
}
