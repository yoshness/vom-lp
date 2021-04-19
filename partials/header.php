<!DOCTYPE html>

<html class="no-js">
	<head>
		<meta charset="UTF-8">
		<meta property="og:type" content="website" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" >
		<link rel="profile" href="https://gmpg.org/xfn/11">
		<link rel="stylesheet" href="./public/style.css">

		<link rel="preconnect" href="https://fonts.gstatic.com">
		<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">

		<link rel="shortcut icon" type="image/png" href="./public/images/favicon.png"/>

		<?php
			$request = $_SERVER['REQUEST_URI'];
			switch ($request) {
			    case '/vom-lp/': ?>
		        	<title>VOM｜ファンと著名人による日本最大級の動画メッセージプラットフォーム</title>
		        	<meta property="og:title" content="VOM｜ファンと著名人による日本最大級の動画メッセージプラットフォーム">
		        	<meta property="og:description" content="VOMは、ファンと著名人による日本最大級の動画メッセージプラットフォームです。あなたにしか出来ない特別なサプライズを、VOMで実現しましょう。" />
		        <?php break;
		        case '/vom-lp/confirm':
	    		case '/vom-lp/confirm/':
	    		case '/vom-lp/thank-you':
	    		case '/vom-lp/thank-you/': ?>
	    			<title>登録フォーム｜VOM・ファンと著名人による日本最大級の動画メッセージプラットフォーム</title>
		        	<meta property="og:title" content="登録フォーム｜VOM・ファンと著名人による日本最大級の動画メッセージプラットフォーム">
		        	<meta property="og:description" content="VOMのタレント登録ページです。ファンへ直接動画を送り、人々へ勇気と元気、感動を与えるタレント様を大募集しています。" />
	    		<?php break;
	    		case '/vom-lp/contact':
	    		case '/vom-lp/contact/': 
	    		case '/vom-lp/contact-confirm':
	    		case '/vom-lp/contact-confirm/':
	    		case '/vom-lp/contact-complete':
	    		case '/vom-lp/contact-complete/': ?>
	    			<title>問い合わせ｜VOM・ファンと著名人による日本最大級の動画メッセージプラットフォーム</title>
		        	<meta property="og:title" content="問い合わせ｜VOM・ファンと著名人による日本最大級の動画メッセージプラットフォーム">
		        	<meta property="og:description" content="VOMのお問い合わせページです。サービスに関するご質問、資料請求、メディア・取材等の問い合わせ窓口となっております。" />
	    		<?php break;
	    		case '/vom-lp/privacy':
			    case '/vom-lp/privacy/': ?>
		        	<title>プライバシーポリシー｜VOM・ファンと著名人による日本最大級の動画メッセージプラットフォーム</title>
		        	<meta property="og:title" content="プライバシーポリシー｜VOM・ファンと著名人による日本最大級の動画メッセージプラットフォーム">
		        	<meta property="og:description" content="VOMのプライバシーポリシーページです。個人情報の取扱いについて掲載しています。" />
			    <?php break;
		    }
		?>

		<meta property="og:site_name" content="VOM" />
		<meta property="og:image" content="https://dev.wunderbar.co.jp/vom/public/images/ogp.png">
	</head>

	<body>
		<header class="header">
			<a href="<?php echo $domainPath; ?>">
				<img src="<?php echo $domainPath; ?>public/images/logo.png" class="header__logo" width="85" id="js-logo"></img>
			</a>
		</header>

