Template.atDob.rendered=function() {
    $('.datepicker').pickadate({
    	selectMonths: true,
    	selectYears: 160,
    	min: new Date(1900,1,1),
    	max: true
    });
}