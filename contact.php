<?php
// contact.php

// Configuration
$to_email = 'bmitchell811@outlook.com'; // Replace with your email address
$subject = 'Contact Form Submission';

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Validate input
    if (empty($name) || empty($email) || empty($message)) {
        $error = 'Please fill in all fields.';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = 'Invalid email address.';
    } else {
        // Send email
        $headers = 'From: ' . $email . "\r\n" .
                   'Reply-To: ' . $email . "\r\n" .
                   'X-Mailer: PHP/' . phpversion();
        $message = "Name: $name\nEmail: $email\nMessage: $message";
        mail($to_email, $subject, $message, $headers);

        // Display success message
        $success = 'Thank you for contacting us!';
    }
}

// Display error or success message
if (isset($error)) {
    echo '<p style="color: red;">' . $error . '</p>';
} elseif (isset($success)) {
    echo '<p style="color: green;">' . $success . '</p>';
}
?>