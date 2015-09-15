'use strict';
Template.header.events({

  // handle the form submission
  'submit form': function(event) {
    console.log('submit!');

    // stop the form from submitting
    event.preventDefault();

    // get the data we need from the form
    var idea = event.target.idea.value;

    function showAlert() {
      $('#success-alert').show();
      $('#success-alert').fadeTo(2000, 500).slideUp(500, function() {
        //  $("#success-alert").hide();
        console.log('Done!');
      });
    }

    Meteor.call('addIdea', idea, showAlert);
    event.target.idea.value = '';

    // create the new idea
    // Ideas.insert(newIdea, function(error, _id) {
    //   if (_id !== null) {
    //     // $("#success-alert").show();
    //     $("#success-alert").fadeTo(2000, 500).slideUp(500, function() {
    //       //  $("#success-alert").hide();
    //       console.log('Done!');
    //       event.target.idea.value = '';
    //     });
    //   }
    // });

  },
});
