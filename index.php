<?php 
	include 'partials/header.php';

	$domainPath = '/vom-lp/';
	$request = $_SERVER['REQUEST_URI'];
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
        default:
	    	echo 'Page not found.';
	        http_response_code(404);
	        // require __DIR__ . '/views/404.php';
	        break;
    }

	include 'partials/footer.php'; 
?>