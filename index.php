<?php

	$domainPath = '/';
	include 'partials/header.php';

	switch ($request) {
	    case '/':
        	require __DIR__ . '/views/index.php';
	        break;
	    case '/confirm':
	    case '/confirm/':
        	require __DIR__ . '/views/register/confirm.php';
	        break;
	    case '/thank-you':
	    case '/thank-you/':
        	require __DIR__ . '/views/register/complete.php';
	        break;
	    case '/contact':
	    case '/contact/':
        	require __DIR__ . '/views/contact/contact.php';
	        break;
	    case '/contact-confirm':
	    case '/contact-confirm/':
        	require __DIR__ . '/views/contact/confirm.php';
	        break;
	    case '/contact-complete':
	    case '/contact-complete/':
        	require __DIR__ . '/views/contact/complete.php';
	        break;
	    case '/privacy':
	    case '/privacy/':
        	require __DIR__ . '/views/privacy.php';
	        break;
        default:
	    	require __DIR__ . '/views/index.php';
	        break;
    }

	include 'partials/footer.php'; 
?>
