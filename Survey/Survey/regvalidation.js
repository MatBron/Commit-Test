$(document).ready(function() {
    // When the "Start Survey" button is clicked
    $("#start-survey-btn").click(function() {
        // Check if Full Name, Voucher Number, and Mobile Number are filled
        var fullName = $("#Name").val();
        var voucherNumber = $("#Voucher").val();
        var mobileNumber = $("#Mobile").val();
        
        if (fullName && voucherNumber && mobileNumber) {
            // Show a confirmation dialog
            var confirmation = confirm("Are you sure you want to start the survey?");
            
            if (confirmation) {
                // User confirmed, hide the registration section and show the survey section
                $("#registration-section").hide();
                $("#survey-section").show();
            }
        } else {
            // Display an error message and do not proceed
            alert("Please fill out all required fields before starting the survey.");
            $("#registration-section").show();
            $("#survey-section").hide();
        }
    });
});