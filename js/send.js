$(document).ready(function() {
  var $form = $("form");
//if submit button is clicked
  $form.parsley().on("form:submit", function(){
    var name = $('input[name=name]').val();
    var email = $('input[name=email]').val();
    var phone = $('input[name=phone]').val();
    var city = $('input[name=city]').val();
    var message = $('textarea[name=message]').val();
    
    //organize the data properly
    var form_data = 
    'name='+name+
    '&email='+email+
    '&phone='+phone+
    '&city='+city+
    '&message='+message;

    //start the ajax
    $.ajax({
    //this is the php file that processes the data and send mail
      url: "includes/process.php",
    //POST method is used
      type: "POST",
    //pass the data
      data: form_data,
    //success
      success: function (response) { 
      //if process.php returned 1/true (send mail success)
        if (response == 1) {
          $(location).attr('href','gracias.php');
        //if process.php returned 0/false
        } else {
          $('.alert').fadeIn('slow');
          $('.alert').fadeOut(5000);
        }
      }
    });
    //cancel the submit button default behaviours
    return false;
  });
}); 
