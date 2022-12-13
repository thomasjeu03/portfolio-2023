<?php
$headers= "MIME-Version: 1.0\r\n";
$headers.= 'Content-Type:text/html; charset="utf-8"'."\n";

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = 'jeuthomas03@gmail.com';
    $subject = 'Nouveau message sur votre portfolio Thomas';
    $headers .= 'From: '.$mailFrom;
    $txt='
		<html>
			<body>
				<div align="center">
					<u>Nom de l\'expéditeur : </u>'.$name.'<br />
					<u>Mail de l\'expéditeur : </u>'.$mailFrom.'<br />
					<br />
					'.nl2br($message).'
				</div>
			</body>
		</html>
		';

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.html");
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
</head>
</html>
