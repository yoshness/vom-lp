<?php
    require_once './vendor/autoload.php';

    $stage_name = $_POST['stage_name'] ?? '---';
    $email      = $_POST['email'] ?? '---';
    $category   = $_POST['category'] ?? '---';
    $sns        = $_POST['sns'] ?? '---';
    $followers  = $_POST['followers'] ?? '---';
    $office     = $_POST['office'] ?? '---';
    $message    = $_POST['message'] ?? '---';
    $sender     = $_POST['email'] ?? '---';
    $referral   = $_POST['referral'] ?? '---';

    $recipient  = "info@vom.world";
    $recipient2 = "itoshun14@gmail.com";

    $client = new Google\Client();
    $client->setApplicationName("VOM LP Sheets Integraation");
    $client->setScopes([\Google_Service_Sheets::SPREADSHEETS]);
    $client->setAuthConfig(__DIR__ . '/../credentials.json');

    $service = new \Google_Service_Sheets($client);

    $spreadsheetId = "1J1RKbwQb-Di63R3hWn6A_ziftxCtciAIIiJeLk7himA";

    $range = "シート1!B:I";
    $valueRange= new Google_Service_Sheets_ValueRange();
    $valueRange->setValues([
        "values" => [
            $stage_name,
            $email,
            $category,
            $sns,
            $followers,
            $office,
            $message,
            $referral
        ]
    ]);

    $conf = ["valueInputOption" => "USER_ENTERED"];
    $ins = ["insertDataOption" => "INSERT_ROWS"];

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $service->spreadsheets_values->append($spreadsheetId, $range, $valueRange, $conf, $ins);
    }

	$subject_admin = "【VOM】事前登録がありました。";
	$content_admin ="下記の内容で事前登録がありました。\n\n-----\n活動名、芸名:\n $stage_name \n\nメールアドレス:\n $email \n\nカテゴリ（複数選択可）:\n $category \n\nSNS情報（最低1つご記入ください）:\n$sns\n\nフォロワー数:\n $followers\n\n事務所所属有無:\n $office\n\nご質問、ご要望等:\n $message\n\nReferral: $referral \n-----";

	$subject_sender = "【VOM】事前登録が完了しました！";
    $content_sender ="$stage_name 様\n\nこの度は、著名人から動画メッセージをもらえるサービス「VOM」の\nタレント事前登録をいただき、誠にありがとうございます。\nご入力いただいた以下情報にて事前審査・登録手続きを行わせていただきます。\n※本文下部に今後の流れを記載。\n\n-----\n活動名、芸名:\n $stage_name \n\nメールアドレス:\n $email \n\nカテゴリ（複数選択可）:\n $category \n\nSNS情報（最低1つご記入ください）:\n$sns\n\nフォロワー数:\n $followers\n\n事務所所属有無:\n $office\n\nご質問、ご要望等:\n $message\n-----\n\n【今後の流れ】\nリリース直前になりましたら、VOM審査を通過された方へVOMタレントログイン情報をお送りいたします。\n初回登録時には各タレント様ご自身にて【10-15秒程度のご挨拶セルフィー動画】の\n撮影協力をいただいております。\n実際の撮影イメージについては後日メールにてお送りさせていただきます。\nVOMは、皆様の動画をファンへ届け、コロナ禍にある日本を元気にすると確信しています。\nリリースまで今しばらくお待ちくださいませ。\n\nこちらのメールは VOM (https://vom.world) のフォームから送信されました。\nなお、こちらのメールは自動返信メールとなっております。\nご質問、ご不明点等は info@vom.world までご連絡をお願いいたします。";

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
		else { ?>
		    <script> location.replace("https://vom.world/thank-you");</script>
		<?php }
	}
?>
