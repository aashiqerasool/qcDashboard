Meteor.methods({
  bradfordMarker: function(postcode) {
    var geo = new GeoCoder();
    var result = geo.geocode({ 'address': postcode});
    console.log(result[0]);
    var resultObj = {
      lat: result[0].latitude,
      lng: result[0].longitude
    }
    console.log(resultObj);
    return resultObj;
  }
});