<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "reevesplayer@outlook.com";

    $subject = "Portfolio Contact Form: $name";

    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Message:\n$message\n";

    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $email_content, $headers)) {
        echo "Thank you for emailing me. I will respond shortly.";
    } else {
        echo "Sorry, there was an error sending your message. Please try again.";
    }
}
?>
