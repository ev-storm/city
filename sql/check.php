<?php
// $link = mysqli_connect("MySQl-8.2", "root", "");

// if ($link == false){
//     print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
// }
// else {
//     print("Соединение установлено успешно");
// }

	$name = filter_var(trim($_POST['name']),
	FILTER_SANITIZE_STRING);
	$email = filter_var(trim($_POST['email']),
	FILTER_SANITIZE_STRING);
	$phone = filter_var(trim($_POST['phone']));
	$textarea = filter_var(trim($_POST['textarea']));

// if(mb_strlen($name)<2 || mb_strlen($name)>20) {
// 	echo "Недопустимая длина имени";
// 	exit();
// } else if(mb_strlen($email)<4 || mb_strlen($email)>40) {
// 	echo "Недопустимая длина почты";
// 	exit();
// } 
// else if(mb_strlen($tel)<4 || mb_strlen($tel)>20) {
// 	echo "Недопустимая длина телефона";
// 	exit();
// }

	//хеширование пароля
	//$pass = md5($pass."rtyguhijdw68136");

	$mysql = new mysqli('MySQl-8.2', 'root', '', 'city-stroy_bd');
	$mysql->query("INSERT INTO `users` (`name`,`email`, `phone`, `textarea`) 
	VALUES('$name','$email', '$phone', '$textarea')");

	$mysql->close();
header('Location: /');
exit();

?>