<?php
if(isset($_GET['path']))
{
//read the filename
$filename = $_GET['path'];
//check if the file exists 
if(file_exists($filename))
{
    //define header information
    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header("Cache-Control: no-cache, must-revalidate");
    header("Expires: 0");
    header('Content-Disposition: attachment, filename="'.basename($filename).'"');
    header('Content-Length: ' . filesize($filename));
    header('Pragma: public');
    
    //clear sys. output buffer 
    flush();

    //read file size
    readfile($filename);

    //terminate from the script 
    die();
}
else{
    echo "File does not exist.";
}
}
else 
echo "Filename is not defined."
?>
