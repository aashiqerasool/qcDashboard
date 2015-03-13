
// Template.bmiByPostCode.rendered = function(){
// Session.setDefault("latestUserBmisByPCode", null);
// };

Template.bmiByPostCode.helpers({
  bmiByPCodeMethod: function(){
     var searchTerm = Session.get('bmiSearchPCVal')
     if (searchTerm){
       Remote.call('latestUserBmisByPCode', searchTerm, function(error, result) {
         Session.set("latestUserBmisByPCode", result);
         return;
       });
       if (Session.get("latestUserBmisByPCode")){
         var AvgBmiByPCode = Session.get("latestUserBmisByPCode").avgBmi;
         console.log("Average BMI by Post Code: " + AvgBmiByPCode);
         return AvgBmiByPCode.toFixed(2);
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
    if(sessSearchVal=="b" || sessSearchVal=="bd") {
      return "Bradford";
    }
    else {
      return sessSearchVal;
    }
  }
});