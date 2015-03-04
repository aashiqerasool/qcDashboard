

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
    return Session.get('bmiSearchPCVal');
  }
});