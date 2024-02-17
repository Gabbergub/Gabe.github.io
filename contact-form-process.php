<?php
    $name = $_POST["name"];
    $visitor_email = $_POST["email"];
    $message = $_POST["message"];

    // Here you can process the data (e.g., send an email, save to a database)
    $email_from = 'User Email';
    $email_to = 'gabemarroko7@gmail.com';
    $email_subject = 'New Form Submission';
    $email_body = "User Name: $name.\n". 
    "User Email: $visitor_email.\n". 
    "User Message: $message.\n";

    // For demonstration purposes, let's just print the received data
  $headers = "From: $email_from \r\n";
  $headers .= "Reply-To: $visitor_email \r\n";
  mail($to, $email_subject, $email_body, $headers);
    // Redirect back to the form if accessed directly
    header("Location: index.html");
    exit();
?>