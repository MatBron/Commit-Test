$(document).ready(function() {
    // When the "Start Survey" button is clicked
    $("#start-survey-btn").click(function() {
      // Check if Full Name, Voucher Number, and Mobile Number are filled
      var fullName = $("#Name").val();
      var voucherNumber = $("#Voucher").val();
      var mobileNumber = $("#Mobile").val();
  
      // If any required field is empty, display an error message
      if (!fullName || !voucherNumber || !mobileNumber) {
        alert("Please fill out all required fields before starting the survey.");
        return;
      }
  
      // Validate the voucher number
      const voucherInput = document.querySelector("#Voucher");
      const voucherValue = voucherInput.value;
  
      // Check if the voucher number is not within the required range (4-12 digits)
      if (voucherValue.length < 4 || voucherValue.length > 12) {
        const errorMessageSpan = document.querySelector(".voucher-error-message");
        errorMessageSpan.textContent = "Please enter a valid voucher number (4-12 digits).";
        voucherInput.focus();
      
        // Clear the error message after a timeout (e.g., 3 seconds)
        setTimeout(function() {
          errorMessageSpan.textContent = "";
        }, 3000); // 3000 milliseconds (3 seconds)
      
        return;
      }

      // Validate the mobile number
      const mobileInput = document.querySelector("#Mobile");
      const mobileValue = mobileInput.value;
  
      // Check if the mobile number is not within the required range (8-12 characters)
      if (mobileValue.length < 8 || mobileValue.length > 12) {
        const errorMessageSpan = document.querySelector(".mobile-error-message");
        errorMessageSpan.textContent = "Please enter a valid mobile number (8-12 digits).";
        mobileInput.focus();

        // Clear the error message after a timeout (e.g., 3 seconds)
        setTimeout(function() {
            errorMessageSpan.textContent = "";
          }, 3000); // 3000 milliseconds (3 seconds)

        return;
      }
  
      // Display a confirmation dialog
    var confirmation = confirm("Do you want to start the survey?");

    if (confirmation) {
      // User confirmed, hide the registration section and show the survey section
      $("#registration-section").hide();
      $("#survey-section").show();
    } else {
      // User canceled, return to the registration section
      $("#registration-section").show();
      $("#survey-section").hide();
    }
  });

  // When the "Preview" button is clicked
  $("#preview-btn").click(function() {
    // Hide the survey section and return to the registration section
    $("#survey-section").hide();
    $("#registration-section").show();
  });
});
  