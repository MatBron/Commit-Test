<?php
// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $comments = $_POST['comments'];

    // Validate the form data (you can add more validation as per your requirements)
    if (empty($name) || empty($email) || empty($comments)) {
        // If any of the fields are empty, display an error message
        echo 'Please fill in all the fields.';
    } else {
        // Set up the email parameters
        $to = 'bryanlopez269@gmail.com'; // Replace with your email address
        $subject = 'Contact Form Submission';
        $message = "Name: $name\nEmail: $email\nComments: $comments";
        $headers = "From: $name <$email>";

        // Send the email
        if (mail($to, $subject, $message, $headers)) {
            // If the email is sent successfully, display a success message
            echo 'Thank you! Your message has been sent.';
        } else {
            // If there was an error sending the email, display an error message
            echo 'Sorry, there was an error sending your message. Please try again later.';
        }
    }
} else {
    // If the form is not submitted, redirect to the form page
    header('Location: index.html'); // Replace with your form page URL
    exit;
}
?>
