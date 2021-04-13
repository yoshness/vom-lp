<?php 
	$company = $_POST['company'];
	$person = $_POST['person'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$category = $_POST['category'];
	$message = $_POST['message'];
	$recipient = "josiah.dabuet@gmail.com";
	// $recipient2 = "uketsuke@012grp.co.jp";
	$sender = $_POST['email'];

	$subject_admin = "【VOM】お問い合わせがありました。";
	$content_admin ="下記の内容でVOMより問い合わせがありました。\n折り返しの対応をお願いいたします。\n\n-----\n会社名:\n $company \n\n担当名:\n $person \n\nメールアドレス:\n $email \n\n電話番号:\n$phone\n\nカテゴリ:\n $category\n\n備考:\n $message\n-----";

	$subject_sender = "【VOM】お問い合わせありがとうございます。";
	$content_sender ="$person 様\n\nVOMにお問い合わせいただきありがとうございます。\n下記の内容でお問い合わせをうけたまわりました。\n弊社で内容を確認の上、折り返しご連絡いたしますのでいましばらくお待ち下さい。\n\n-----\n会社名:\n $company \n\n担当名:\n $person \n\nメールアドレス:\n $email \n\n電話番号:\n$phone\n\nカテゴリ:\n $category\n\n備考:\n $message\n-----\n\nこちらのメールは VOM (https://vom.com) の無料相談フォームから送信されました。\nなお、こちらのメールは自動返信メールとなっております。";

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require './PHPMailer/src/Exception.php';
	require './PHPMailer/src/PHPMailer.php';
	require './PHPMailer/src/SMTP.php';

	if(isset($_POST['submit'])) {
		$full_url = $_SERVER['REQUEST_SCHEME'] .'://'. $_SERVER['HTTP_HOST'] . explode('?', $_SERVER['REQUEST_URI'], 2)[0];

		$mail = new PHPMailer(true);
		$mail->CharSet = 'UTF-8';
		$mail->Encoding = 'base64';
		$mail->setFrom('no-reply@vom.com', 'お問い合わせ');
	    $mail->addAddress($recipient);
	    // $mail->addAddress($recipient2);
	    $mail->Subject = $subject_admin;
		$mail->Body    = $content_admin;
		$mail->send();

		$mail2 = new PHPMailer(true);
		$mail2->CharSet = 'UTF-8';
		$mail2->Encoding = 'base64';
		$mail2->setFrom('no-reply@vom.com', 'お問い合わせ');
	    $mail2->addAddress($sender);
		$mail2->Subject = $subject_sender;
		$mail2->Body    = $content_sender;
		$mail2->send();

		if(!$mail->send()) 
		{
		    echo "Mailer Error: " . $mail->ErrorInfo;
		} 
		else 
		{
		    header("Location: ".$domainPath."contact-complete", TRUE, 301);
			exit();
		}
	}
?>