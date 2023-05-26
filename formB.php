<?php
$Angka = isset($_POST['Angka']) ? $_POST['Angka'] : 0;
$Text = isset($_POST['Text']) ? $_POST['Text'] : '';

$output = array();
for ($i = 0; $i < $Angka; $i++) {
  $output[$i] = $Text . $i;
}

header('Content-Type: application/json');
echo json_encode($output);
?>