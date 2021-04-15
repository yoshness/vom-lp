<main class="l-contact l-contact--sub">
	<div class="l-container">
		<h2 class="section-title">お問い合わせ</h2>
		<p class="l-contact__message">こちらでは、サービスに関するご質問、資料請求、メディア・取材等の問い合わせ窓口を設置しております。<br>「日本を元気にする」私たちはこれに全てをかけて挑んでおります。皆様のお力が必要です。<br>業務提携やメディアとして発信いただける会社様は以下よりご連絡をお待ちしております。</p>
		<img src="<?php echo $domainPath; ?>public/images/japan-flag.png"  class="l-contact__flag rellax" data-rellax-speed="-2" data-rellax-xs-speed="-1">
		<form action="" method="POST" class="contact-form" id="js-contact-form">
			<div class="contact-form__row contact-form__row--required">
				<label for="">会社名</label>
				<input type="text" placeholder="例）ボム・プロダクション" name="company">
			</div>
			<div class="contact-form__row contact-form__row--required">
				<label for="">担当名</label>
				<input type="text" placeholder="例）ボム" name="person">
			</div>
			<div class="contact-form__row contact-form__row--required">
				<label for="">メールアドレス</label>
				<input type="email" placeholder="例）vvv@gmail.com" name="email">
			</div>
			<div class="contact-form__row contact-form__row--required">
				<label for="">メールアドレス（再確認用）</label>
				<input type="email" placeholder="例）vvv@gmail.com" name="email">
			</div>
			<div class="contact-form__row contact-form__row--required">
				<label for="">電話番号</label>
				<input type="text" placeholder="080-1234-5678" name="phone">
			</div>
			<div class="contact-form__row contact-form__row--required">
				<label for="">カテゴリ（複数選択可）</label>
				<div class="contact-form__checkboxes custom-checkboxes">
					<input id="category_1" name="category" value="メディア・取材に関する問い合わせ" type="checkbox"><label for="category_1">メディア・取材に関する問い合わせ</label>
					<input id="category_2" name="category" value="芸能事務所など業務提携にについて" type="checkbox"><label for="category_2">芸能事務所など業務提携にについて</label>
					<input id="category_3" name="category" value="サービス全般に関する問い合わせ" type="checkbox"><label for="category_3">サービス全般に関する問い合わせ</label>
					<input id="category_4" name="category" value="資料請求" type="checkbox"><label for="category_4">資料請求</label>
					<input id="category_5" name="category" value="その他（備考に詳細をご記入ください）" type="checkbox"><label for="category_5">その他（備考に詳細をご記入ください）</label>
				</div>
				<input type="text" placeholder="例）その他の場合は、ご記入ください。">
			</div>
			<div class="contact-form__row">
				<label for="">備考</label>
				<textarea name="message" rows="8" placeholder="例）事務所の人とつなぎたいのですが、どうすれば良いでしょうか？"></textarea>
			</div>
			<a href="<?php echo $domainPath; ?>contact-confirm" class="link-button" id="js-contact-confirm">入力内容確認</a>
		</form>
	</div>
</main>