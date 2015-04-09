Template.avgActivityByPostCode.helpers({
  avgActivityByPCodeMethod: function(){
     var searchTerm = Session.get('avgActivitySearchPCVal')
     if (searchTerm){
       Remote.call('latestUserActivityByPCode', searchTerm, function(error, result) {
         Session.set("latestUserActivityByPCode", result);
         return;
       });
       if (Session.get("latestUserActivityByPCode")){
         var AvgActivityByPCode = Session.get("latestUserActivityByPCode").avgActivity;
         console.log("Average BMI by Post Code " + AvgActivityByPCode);
         return AvgActivityByPCode.toFixed(2);
       }
       else{
         return false
       }
     }
    else{
      return false;
    }
  },
  postCode: function(){
    var sessSearchVal = Session.get('avgWeightSearchPCVal');
    if(sessSearchVal=="bd") {
      return "Bradford";
    }
    else {
      return sessSearchVal;
    }
  }
});