<?php
	include('smtp/PHPMailerAutoload.php');
	if(isset($_POST['formSubmit'])){
		
		$userName = mysqli_real_escape_string($con,$_POST['userName']);
		$phoneNumber = mysqli_real_escape_string($con,$_POST['phoneNumber']);
		$userEmail = mysqli_real_escape_string($con,$_POST['userEmail']);
		$serviceType = mysqli_real_escape_string($con,$_POST['serviceType']);
		
		$html="Name: <b>$userName</b><br>Email: <b>$phoneNumber</b><br>Phone Number: <b>$userEmail</b><br>Business Name: <b>$serviceType</b>";
		$to = array("ebadhabib7@gmail.com","bilalahmed2520@gmail.com");
		$subject = "Catchworld - New lead received.";
		$message = "This is a test email sent from PHP.";

		$mail = new PHPMailer();
		$mail->isSMTP();
		$mail->Host = "mail.Catchworld.com";
		$mail->SMTPAuth = true;
		$mail->SMTPSecure = "tls";
		$mail->Port = 587;
		$mail->Username = "info@Catchworld.com";
		$mail->Password = "gK1k,[=P}F(FA";
		$mail->setFrom("info@Catchworld.com");
		// $mail->addAddress($to);
		foreach ($to as $email) {
			$mail->addAddress($email);
		}
		$mail->Subject = $subject;
		// $mail->Body = $html;
		$mail->isHTML(true);
		$mail->msgHTML($html);

		if(!$mail->send()) {
			// echo "Email sending failed.";
			echo "An error occured.<br>" . $mail->ErrorInfo;
		} else {
			echo "<script>alert('Thank you for submiting your details.<br>Your details has been forwarded to concerend depart. You will be contacted shortly.');</script>";
		}
	}
?>