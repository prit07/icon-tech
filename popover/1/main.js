$(document).ready(function(){


      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })

      
      $('[data-toggle="popover"]').popover({
        html: true,
        content: function() {
          var id = $(this).attr('id')
          return $('#po' + id).html();
        }
      });
})