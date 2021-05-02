<?php include 'partials/register-mail.php'; ?>

<main class="l-confirm" id="js-register-confirm-page">
	<div class="l-container">
		<h2 class="section-title">入力内容確認</h2>
		<form action="" method="POST">
			<div class="l-confirm__row">
				<label for="">活動名、芸名</label>
				<input id="js-register-name" name="stage_name">
			</div>
			<div class="l-confirm__row">
				<label for="">メールアドレス</label>
				<input id="js-register-email" name="email">
			</div>
			<div class="l-confirm__row">
				<label for="">カテゴリ（複数選択可）</label>
				<input id="js-register-category" name="category">
			</div>
			<div class="l-confirm__row">
				<label for="">SNS情報（最低1つご記入ください）</label>
				<input id="js-register-sns" name="sns" style="white-space: pre-line;">
			</div>
			<div class="l-confirm__row">
				<label for="">登録時点のざっくりフォロワー数（数字のみで入力してください。複数SNS合計も可）</label>
				<input id="js-register-followers" name="followers">
			</div>
			<div class="l-confirm__row">
				<label for="">事務所所属有無</label>
				<input id="js-register-office" name="office">
			</div>
			<div class="l-confirm__row">
				<label for="">ご質問、ご要望等</label>
				<input id="js-register-message" name="message">
			</div>
			<input type="hidden" name="referral" id="js-register-referral">
			<input type="submit" name="submit" value="事前登録する" class="link-button">
		</form>
		<a href="<?php echo $domainPath; ?>#js-register-wrapper" class="l-confirm__back">←入力画面に戻る</a>
		<p class="l-confirm__notice">
			メディア、取材、事務所関係の業務提携等に関する<br>お問い合わせは<a href="<?php echo $domainPath; ?>contact">こちら</a>をご利用くださいませ。
		</p>
	</div>
</main>