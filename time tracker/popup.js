document.addEventListener('DOMContentLoaded', function() {
  let startTrackingButton = document.getElementById('startTracking');

  if (startTrackingButton) {
    startTrackingButton.addEventListener('click', function() {
      if (!trackingStarted) {
        startTracking();
      }
    });
  } else {
    console.error("Element with ID 'startTracking' not found.");
  }

  let timer;
  let trackingStarted = false;
  let timeSpent = 0; // Time spent on the external website in seconds

  function startTracking() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var activeTab = tabs[0];
      console.log('Time tracking started on tab:', activeTab.url);

      timer = setInterval(function() {
        if (!document.hidden) {
          timeSpent++;
          console.log('Time spent:', timeSpent);
          checkTimeSpent(activeTab.url);
        }
      }, 1000); // Increment every 1 second
    });

    trackingStarted = true;
  }

  function checkTimeSpent(url) {
    // Simulate the user spending 3 seconds on the external website
    if (timeSpent >= 3) {
      clearInterval(timer);
      showPopup();
    }
  }
  
  /*function showPopup() {
    // Create a link element
    var link = document.createElement('a');
    link.href = 'http://localhost:3000/'; // Set the URL of your link
    link.textContent = "Let's Fell Good!"; // Set the text of your link
  
    // Get the HTML string of the link
    var linkHtml = link.outerHTML;
  
    // Create the alert message with the link
    var alertMessage = "You have been here for 3 seconds already!\n Maybe you'd like to do somethimg else?\n " + linkHtml;
  
    // Show the alert
    alert(alertMessage);
  }
  */
  // Call the function to show the alert with a link
  
  
  function showPopup() {
    if (window.confirm("You have been here for 3 seconds already!\n Maybe you'd like to do somethimg else?\n Press Ok to start Feeling Good!"))
    {
       window.open('http://localhost:3000/', '_blank');
    };
  }
});
