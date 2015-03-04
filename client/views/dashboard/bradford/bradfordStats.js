Template.bradfordStats.rendered = function() {
      _.each(this.findAll('.ui huge statistic'), function(element){
         $(element).on('load', function(){
           $('element')
            .transition('scale')
            ;
        });
      });
}