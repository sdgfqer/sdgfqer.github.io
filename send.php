<?php

  $headers = "Content-Type: text/html; charset=utf-8;";
  $headers .= "From: <some-web.ru>\r\n\r\n"; 
  $to = 'laboffreedom@yandex.ru';
  $sb['subject'] = 'Заказ звонка!';
  $msg =
    'Имя: '.$_POST['name'].'
    Телефон:  '.$_POST['phone'].'';

  if (!isset($_POST['name']) or empty($_POST['name'])) {
    $error1 = "Имя?<br />";
  } else $error1 = NULL;

  if (!isset($_POST['phone']) or empty($_POST['phone'])) {
    $error2 = "Телефон?<br />";
  } else $error2 = NULL;

  if (empty($error1) and empty($error2)) {
    $name    = $_POST['name'];
    $phone = $_POST['phone'];
    if (mail($to, $sb['subject'], $msg, $headers)) {
      echo "<h2>Спасибо!</h2><p>Ваш запрос принят, мы скоро свяжемся с Вами!</p>";
    } else echo "Ошибка!";
  } else {
    echo $error1.$error2;
  }

?>