<?php include 'partials/contact-mail.php'; ?>

<main class="l-confirm" id="js-contact-confirm-page">
	<div class="l-container">
		<h2 class="section-title">入力内容確認</h2>
		<form action="" method="POST">
			<div class="l-confirm__row">
				<label for="">会社名</label>
				<input id="js-contact-company" name="company">
			</div>
			<div class="l-confirm__row">
				<label for="">担当名</label>
				<input id="js-contact-person" name="person">
			</div>
			<div class="l-confirm__row">
				<label for="">メールアドレス</label>
				<input id="js-contact-email" name="email">
			</div>
			<div class="l-confirm__row">
				<label for="">電話番号</label>
				<input id="js-contact-phone" name="phone">
			</div>
			<div class="l-confirm__row">
				<label for="">カテゴリ</label>
				<input id="js-contact-category" name="category">
			</div>
			<div class="l-confirm__row">
				<label for="">備考</label>
				<input id="js-contact-message" name="message">
			</div>
			<input type="submit" name="submit" value="送信する" class="link-button">
		</form>
		<a href="<?php echo $domainPath; ?>contact" class="l-confirm__back">←入力画面に戻る</a>
	</div>
</main>