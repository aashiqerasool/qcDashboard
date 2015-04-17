Template.map.helpers({
  mapOptions: function () {
    if(GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(-37.8136, 144,9631),
        zoom: 8
      }
    }
  }
});

Markers = new Mongo.Collection('markers');


Template.map.onCreated(function () {
  GoogleMaps.ready('map', function(map) {
    console.log('Maps ready');
    google.maps.event.addListener(map.instance, 'click', function(evt) {
      Markers.insert({ lat: evt.latLng.lat(), lng: evt.latLng.lng()});
    });
    
    
    var markers = {};
    
    Markers.find().observe({
      added: function(doc) {
        //create marker for current doc in context
        var marker = new google.maps.Marker({
          draggable: true,
          animation: google.maps.Animation.DROP,
          position: new google.maps.LatLng(doc.lat, doc.lng),
          map: map.instance,
          //doc _id stored on marker to facilitate updating of doc withing dragend evt below
          id: doc._id
        });
        
        //below listener allows dragging of markers on the map and then update corresponding mongodb doc
        google.maps.event.addListener(marker, 'dragend', function(evt) {
          Markers.update(marker.id, { $set: { lat: evt.latLng.lat, lng: evt.latLng.lng}});
        });
        
//         store this marker instance within the markers object
        markers[doc._id] = marker
        
      },
      
      changed: function(newDoc, oldDoc) {
        markers[newDoc._id].setPosition({lat: newDoc.lat, lng: newDoc.lng});
      },
      
      removed: function(oldDoc) {
        //remove marker from map
        markers[oldDoc._id].setMap(null);
        
        //clear evtlistener
        google.maps.event.clearInstanceListeners(
        markers[oldDoc._id]);
        
        //remove ref tro this marker instance
        delete markers[oldDoc._id];
        
        
      }
    })
    
    
    
  });
});