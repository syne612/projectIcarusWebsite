<?php
if (isset($POST['submit'])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$msg = $_POST['msg'];

	$mailTo = "ellishogan95@gmail.com";
	$headers = "From: ".$email;
	$txt = "New Project Icarus mail:" .$name.".\n\n".$msg;
	
	mail($mailTo, $txt, $headers);
	header("Location: index.html");
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
?>