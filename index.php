<?php 
	$domainPath = '/vom-lp/';
	include 'partials/header.php';

	switch ($request) {
	    case '/vom-lp/':
        	require __DIR__ . '/views/index.php';
	        break;
	    case '/vom-lp/confirm':
	    case '/vom-lp/confirm/':
        	require __DIR__ . '/views/register/confirm.php';
	        break;
	    case '/vom-lp/thank-you':
	    case '/vom-lp/thank-you/':
        	require __DIR__ . '/views/register/complete.php';
	        break;
	    case '/vom-lp/contact':
	    case '/vom-lp/contact/':
        	require __DIR__ . '/views/contact/contact.php';
	        break;
	    case '/vom-lp/contact-confirm':
	    case '/vom-lp/contact-confirm/':
        	require __DIR__ . '/views/contact/confirm.php';
	        break;
	    case '/vom-lp/contact-complete':
	    case '/vom-lp/contact-complete/':
        	require __DIR__ . '/views/contact/complete.php';
	        break;
	    case '/vom-lp/privacy':
	    case '/vom-lp/privacy/':
        	require __DIR__ . '/views/privacy.php';
	        break;
        default:
	    	require __DIR__ . '/views/index.php';
	        break;
    }

	include 'partials/footer.php'; 
?>