$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='regform']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      'entry.720671982': "required",
      'entry.1180520982': "required",
      //member1
      'entry.1238051831': "required",
      'entry.1906376893': {
        required: true,
        email: true
      },
      'entry.1159576109': {
        required: true,
        url: true
      },
      'entry.688023652': {
        url: true
      },
      'entry.226692078': "required",
      //member2
      'entry.909173325': "required",
      'entry.1152021629': {
        required: true,
        email: true
      },
      'entry.2011331829': {
        required: true,
        url: true
      },
      'entry.691217861': {
        url: true
      },
      'entry.1234290885': "required",
      //member3
      'entry.1068364446': "required",
      'entry.597684907': {
        required: true,
        email: true
      },
      'entry.1906992209': {
        required: true,
        url: true
      },
      'entry.1668399282': {
        url: true
      },
      'entry.599775532': "required",
      'entry.370521269': "required"
    },
    // Specify validation error messages
    messages: {
      'entry.720671982': "This field is required",
      'entry.1180520982': "This field is required",
      //member1
      'entry.1238051831': "This field is required",
      'entry.1906376893': {
        required: "This field is required",
        email: "Please enter a valid email address"
      },
      'entry.1159576109': {
        required: "This field is required",
        url: "Please enter a valid url"
      },
      'entry.688023652': {
        required: "This field is required",
        url: "Please enter a valid url"
      },
      'entry.226692078': "This field is required",
      //member2
      'entry.909173325': "This field is required",
      'entry.1152021629': {
        required: "This field is required",
        email: "Please enter a valid email address"
      },
      'entry.2011331829': {
        required: "This field is required",
        url: "Please enter a valid url"
      },
      'entry.691217861': {
        required: "This field is required",
        url: "Please enter a valid url"
      },
      'entry.1234290885': "This field is required",
      //member3
      'entry.1068364446': "This field is required",
      'entry.597684907': {
        required: "This field is required",
        email: "Please enter a valid email address"
      },
      'entry.1906992209': {
        required: "This field is required",
        url: "Please enter a valid url"
      },
      'entry.1668399282': {
        required: "This field is required",
        url: "Please enter a valid url"
      },
      'entry.599775532': "This field is required",
      'entry.370521269': "This field is required"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});