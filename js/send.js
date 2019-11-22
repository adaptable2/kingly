$(document).ready(function() {
 //if submit button is clicked    
  $('#submit').click(function () {       
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

    console.log(form_data);


    //disabled all the text fields
    $('.text').attr('disabled','true');
  
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
          //hide the form
          $('#register_form').fadeOut('slow');
          //show and hide the success message
          $('.alert-success').fadeIn(3000);
          $('.alert-success').fadeOut(3000);
          // show the form
          $('#register_form').fadeIn('slow');
        //if process.php returned 0/false
        } else {
          $('.alert-danger').fadeIn(3000);
          $('.alert-danger').fadeOut(3000);
        }
      }      
    });
    //cancel the submit button default behaviours
    return false;
  });
}); 
