<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/PHPMailer/src/Exception.php';
require 'vendor/PHPMailer/src/PHPMailer.php';
require 'vendor/PHPMailer/src/SMTP.php';


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    $mail = new PHPMailer(true);

    try {

        // Paramètres du serveur
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'ndaopapesaniebe3@gmail.com'; // Remplacez par votre adresse Gmail
        $mail->Password = 'ceph sfhd bfum nrih'; // Remplacez par votre mot de passe Gmail ou mot de passe d'application
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Destinataires
        $mail->setFrom($email, $name);
        $mail->addAddress('ndaopapesaniebe3@gmail.com'); // Votre adresse de destination

        // Contenu
        $mail->isHTML(true);
        $mail->Subject = "Nouveau message de contact de $name";
        $mail->Body = "Nom: $name<br>Email: $email<br>Message:<br>$message";

        $mail->send();
        echo "Message envoyé avec succès !";
    } catch (Exception $e) {
        echo "Échec de l'envoi du message. Erreur : {$mail->ErrorInfo}";
    }
}
