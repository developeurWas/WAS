
<!-- A modifier, l'envoi de mail ne fonctionne pas en local, à tester sur un serveur -->
<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
require_once 'phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->Host = "	smtp.gmail.com";

// optional
// used only when SMTP requires authentication
$mail->SMTPAuth = true;
$mail->Username = 'antoinedd74@gmail.com';
$mail->Password = 'l4p0rt31sop3n';
$mail->FromName = "Test";
$mail->AddAddress('antoinedd74@gmail.com'); //recipient
$mail->Subject = "New Puzzle Project Request ";
$mail->Body = "Just a test";

if(!$mail->send()) {
    $data = array('success' => false, 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo);
    echo json_encode($data);
    exit;
}

$data = array('success' => true, 'message' => 'Thanks! We have received your message.');
echo json_encode($data);
?>
