Template.avgWeightByPostCode.helpers({
  avgWeightByPCodeMethod: function(){
     var searchTerm = Session.get('avgWeightSearchPCVal')
     if (searchTerm){
       Remote.call('latestUserWeightsByPCode', searchTerm, function(error, result) {
         Session.set("latestUserWeightsByPCode", result);
         return;
       });
       if (Session.get("latestUserWeightsByPCode")){
         var AvgWeightByPCode = Session.get("latestUserWeightsByPCode").avgWeight;
         console.log("Average BMI by Post Code " + AvgWeightByPCode);
         return AvgWeightByPCode.toFixed(2);
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