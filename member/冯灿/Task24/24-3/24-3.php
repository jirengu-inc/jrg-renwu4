<?php
	header("Content-type: text/plain");
  $username = $_GET['username'];
  if ($username == 'Fizco') {
  	echo json_encode(true);
  } else {
		echo json_encode(false);
	}
?>
