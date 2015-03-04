// Template.map.helpers({
//   testMapOptions: function() {
//     // Make sure the maps API has loaded
//     if (GoogleMaps.loaded()) {
//       // We can use the `ready` callback to interact with the map API once the map is ready.
//       GoogleMaps.ready('testMap', function(map) {
//         // Add a marker to the map once it's ready
//         //Meteor.call("bradfordMarker");
// //         var marker = new google.maps.Marker({
// //           position: map.options.center,
// //           map: map.instance
// //         });
        
//             Meteor.call("bradfordMarker", function(error, result) {
//                   if(error) {
//                     Session.set('serverDataResponse', "Error:" + err.reason);
//                     return;
//                   }
//                   Session.set('markerObject', result);
//             });
//         var marker = Session.get('markerObject');
//         console.log(marker);
//         var bradford = new google.maps.Marker({
//           position: marker,
//           map: map.instance
//         });
//       });

//       // Map initialization options
//       return {
//         center: new google.maps.LatLng(53.795984, -1.759398),
//         zoom: 10
//       };
//     }
//   }
// });

