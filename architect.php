<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  
	$u_name = filter_var($_POST["architect_name"], FILTER_SANITIZE_STRING);
	$u_surname = filter_var($_POST["architect_surname"], FILTER_SANITIZE_STRING); 
	$u_company = filter_var($_POST["architect_company"], FILTER_SANITIZE_STRING); 
    $u_role = filter_var($_POST["architect_role"], FILTER_SANITIZE_STRING); 
	$u_phone = filter_var($_POST["architect_phone"], FILTER_SANITIZE_NUMBER_INT);
	$u_email = filter_var($_POST["architect_email"], FILTER_SANITIZE_EMAIL);

	if (empty($u_name)){
		die("Inserisci il tuo nome");
	}
	if (empty($u_surname)){
		die("Inserisci il tuo cognome");
	}
	if (empty($u_company)){
		die("Inserisci la lista aziende");
	}
    if (empty($u_role)){
		die("Inserisci la lista aziende");
	}
	if (empty($u_phone)){
		die("Inserisci il tuo numero di telefono");
	}
	if (empty($u_email) || !filter_var($u_email, FILTER_VALIDATE_EMAIL)){
		die("Inserisci la tua email");
	}
	
	
	
	$mysql_host = "localhost";
	$mysql_username = "root";
	$mysql_password = "root";
	$mysql_database = "sognando_casa";

	$mysqli = new mysqli($mysql_host, $mysql_username, $mysql_password, $mysql_database);
	
		if ($mysqli->connect_error) {
			die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
		}	
	
	$createTable = "CREATE TABLE IF NOT EXISTS architects_data (
			id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
			architect_name VARCHAR(60) NOT NULL,
			architect_surname VARCHAR(60) NOT NULL,
			architect_company VARCHAR(60) NOT NULL,
            architect_role VARCHAR(60) NOT NULL,
			architect_phone VARCHAR(60) NOT NULL,
			architect_email VARCHAR(50),
			reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
			)";
		

	if ($mysqli->query($createTable) !== TRUE) {
		echo "Error creating table: " . $conn->error;
	  }	

	
	$statement = mysqli_query($mysqli, "INSERT INTO architects_data(architect_name,architect_surname,architect_company,architect_role,architect_phone,architect_email) VALUES('$u_name','$u_surname','$u_company','$u_role','$u_phone','$u_email')");
	
	if ($statement) {
		echo "<br/><br/>Registrazione avvenuta con successo.";
		header("location: /sognando-casa-php/index.html");
	} else {
		echo "Registration error. Please try again." . mysqli_error($mysqli);
	}
}

?>
		