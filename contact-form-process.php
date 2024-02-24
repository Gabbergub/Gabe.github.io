<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // You can add more validation here if needed
  if (!empty($name) && !empty($email) && !empty($message)) {
    $to = "gabemarroko7@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    // Send email
    if (mail($to, $subject, $body)) {
      echo "<p>Your message has been sent. Thank you!</p>";
    } else {
      echo "<p>Sorry, there was an error sending your message.</p>";
    }
  } else {
    echo "<p>Please fill out all fields.</p>";
  }
} else {
  // Not a POST request, redirect to the form
  header("Location: index.html");
  exit();
}
?>