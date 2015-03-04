

Template.bmiByPostCode.helpers({
  bmiByPCodeMethod: function(){
     Remote.call('latestUserBmisByPCode', "bd8 9pn", function(error, result) {
      //         overallAvgBmis = result;
      Session.set("latestUserBmisByPCode", result);
      return;
    });
    var AvgBmiByPCode = Session.get("latestUserBmisByPCode").avgBmi;
    console.log("Average BMI by Post Code " + AvgBmiByPCode);
    return AvgBmiByPCode.toFixed(2);
  }
});