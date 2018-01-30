$(document).ready(function() {
  // Contact form
  $contactForm = $('#contact-form');
  $contactForm.submit(function(evt) {
    var message = " name: " + $('#name').val() + '\r\n';
    message    += " email: " + $('#email').val() + '\r\n';
    message    += " company: " + $('#company').val() + '\n';
    message    += " Budget: " + $('#budget').val() + '\n';
    message    += " Description: " + $('#description').val() + '\n',

    from=$('#email').val(),
    to= "new@lateralview.co";

    $.ajax({
      type: 'POST',
      url: "https://lateralview.co/xhr/majorContact",
      dataType: 'json',
      data: { from:from, to:to, msg: message },
      success: function () { emailSuccess(); },
      error: function (response) {
        if (response.status == 200) {
          emailSuccess();
        }
        else {
          $('form').html('<h3 class="text-center">Well this is embarrassing; we had an issue processing your request. Please contact us directly at '+to+'</h3>');
        }
      }
    });
    evt.preventDefault();
    return false;
  })
});

function emailSuccess(){
  $('form').html('<h3 class="text-center">Thank you, we will be in touch soon!</h3>');
};