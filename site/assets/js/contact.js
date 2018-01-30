$(document).ready(function() {
  // Contact form
  $contactForm = $('#contact-form');
  $contactForm.submit(function(evt) {
    var message = " name: " + $('#name').val() + '\r\n';
    message    += " email: " + $('#email').val() + '\r\n';
    message    += " company: " + $('#company').val() + '\n';
    message    += " Budget: " + $('#budget').val() + '\n';
    message    += " Description: " + $('#description').val() + '\n';

    $.ajax({
      type: 'POST',
      url: 'false',
      data: { body: message },
      success: function () {
        $('form').html('<h3 class="text-center">Thank you, we will be in touch soon!</h3>');
        ga('send', 'event', {
          eventCategory: 'Form Submission',
          eventAction: 'click',
          eventLabel: 'Contact Us'
        });
      },
      error: function (err) {
        $('form').html('<h3 class="text-center">Well this is embarrassing; we had an issue processing your request. Please contact us directly at new@lateralview.co</h3>');
      }
    });
    evt.preventDefault();
    return false;
  })
});