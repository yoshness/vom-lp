<?php 
	$stage_name = $_POST['stage_name'];
	$email = $_POST['email'];
	$category = $_POST['category'];
	$sns = $_POST['sns'];
	$office = $_POST['office'];
	$message = $_POST['message'];
	$referral = $_POST['referral'];
	$recipient = "keito.nagao@wunderbar.co.jp";
	$recipient2 = "itoshun14@gmail.com";
	$sender = $_POST['email'];

	$subject_admin = "【VOM】事前登録がありました。";
	$content_admin ="下記の内容で事前登録がありました。\n\n-----\n活動名、芸名:\n $stage_name \n\nメールアドレス:\n $email \n\nカテゴリ（複数選択可）:\n $category \n\nSNS情報（最低1つご記入ください）:\n$sns\n\n事務所所属有無:\n $office\n\nご質問、ご要望等:\n $message\n\nReferral: $referral \n-----";

	$subject_sender = "【VOM】事前登録が完了しました！";
	$content_sender ="$stage_name 様\n\nこの度は、「日本を元気にする」に共感いただきありがとうございます。\n事前登録を下記の内容でうけたまわりました。\n間も無くサービスリリースとなりますので、リリース間近となりましたら、改めてご登録いただいたアドレスへご連絡させていただきます。\n\n-----\n活動名、芸名:\n $stage_name \n\nメールアドレス:\n $email \n\nカテゴリ（複数選択可）:\n $category \n\nSNS情報（最低1つご記入ください）:\n$sns\n\n事務所所属有無:\n $office\n\nご質問、ご要望等:\n $message\n-----\n\nこちらのメールは VOM (https://vom.world) のフォームから送信されました。\nなお、こちらのメールは自動返信メールとなっております。";

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
		$mail->setFrom('no-reply@vom.world', 'お問い合わせ');
	    $mail->addAddress($recipient);
	    $mail->addAddress($recipient2);
	    $mail->Subject = $subject_admin;
		$mail->Body    = $content_admin;
		$mail->send();

		$mail2 = new PHPMailer(true);
		$mail2->CharSet = 'UTF-8';
		$mail2->Encoding = 'base64';
		$mail2->setFrom('no-reply@vom.world', 'お問い合わせ');
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
		    header("Location: ".$domainPath."thank-you", TRUE, 301);
			exit();
		}
	}
?>