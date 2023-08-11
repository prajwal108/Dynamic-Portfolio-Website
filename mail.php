<?php

if(!$_POST) exit;

// Email address verification, do not edit.
function isEmail($email) {
    return preg_match("/^[-_.[:alnum:]]+@((([[:alnum:]]|[[:alnum:]][[:alnum:]-]*[[:alnum:]])\.)+(ad|ae|aero|af|ag|ai|al|am|an|ao|arpa|as|at|au|aw|az|ba|bb|bd|be|bf|bg|bh|bi|biz|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|com|coop|cr|cs|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|in|info|int|io|iq|ir|is|it|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|museum|mv|mw|mx|my|mz|na|name|nc|ne|net|nf|ng|ni|nl|no|np|nr|nt|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|pro|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)$|(([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5])\.){3}([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5]))$/i", $email);
}

if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

$form_name = $_POST['form_name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$form_occasion = $_POST['form_occasion'];
$date_picker = $_POST['date-picker'];
$time_picker = $_POST['time-picker'];
$verify = $_POST['verify'];

if(trim($form_name) == '') {
    echo '<div class="error_message">Attention! You must enter your name.</div>';
    exit();
} else if(trim($email) == '') {
    echo '<div class="error_message">Attention! Please enter a valid email address.</div>';
    exit();
} else if(!isEmail($email)) {
    echo '<div class="error_message">Attention! You have entered an invalid e-mail address, try again.</div>';
    exit();
}

if(trim($date_picker) == '') {
    echo '<div class="error_message">Attention! Please enter your date.</div>';
    exit();
}

if(get_magic_quotes_gpc()) {
    $form_occasion = stripslashes($form_occasion);
    // You can do the same for other fields if necessary.
}


$address = "prajwal88k@gmail.com"; // Change this to the recipient's email address.

$e_subject = 'You\'ve been contacted by ' . $form_name . '.';

$e_body = "You have been contacted by $form_name. $form_name selected an occasion of $form_occasion. The selected date is $date_picker and the selected time is $time_picker." . PHP_EOL . PHP_EOL;

$msg = wordwrap($e_body, 70);

$headers = "From: $email" . PHP_EOL;
$headers .= "Reply-To: $email" . PHP_EOL;
$headers .= "MIME-Version: 1.0" . PHP_EOL;
$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;

if(mail($address, $e_subject, $msg, $headers)) {
    echo "<fieldset>";
    echo "<div id='success_page'>";
    echo "<h1>Email Sent Successfully.</h1>";
    echo "<p>Thank you <strong>$form_name</strong>, your message has been submitted to us.</p>";
    echo "</div>";
    echo "</fieldset>";
} else {
    echo 'ERROR!';
}

?>
