
<?php

define('DB_HOST'        , "?");
define('DB_USER'        , "?");
define('DB_PASSWORD'    , "?");
define('DB_NAME'        , "?");
define('DB_DRIVER'      , "sqlsrv");

include_once("../connection_BD.php");

$fullName = $_POST['full-name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$CpfCnpj = $_POST['CpfCnpj'];
$date = $_POST['date'];
$warrantyProduct = $_POST['warranty-product'];

// // ----------------------------- //
// // ------ SEND-FOR-EMAIL ------- //
// // ----------------------------- //

// Você pode adicionar o código de envio de e-mail aqui

// ----------------------------- //
// ----- SEND-FOR-DATABASE ----- //
// ----------------------------- //

if(isset($_POST['submitBD'])){
    $Conexao    = Connection_BD::getConnection();
   
    $valores = array(
        ':fullName' => $fullName,
        ':email' => $email,
        ':phone' => $phone,
        ':CpfCnpj' => $CpfCnpj,
        ':warrantyProduct' => $warrantyProduct,
        ':date' => $date
    );
    
    $insertQuery = "INSERT INTO Clientes (Nome, Email, Telefone, CPF_ou_CNPJ, Modelo_Colchao, DT_Compra) 
                    VALUES (:fullName, :email, :phone, :CpfCnpj, :warrantyProduct, :date)";
    
    $stmt = $Conexao->prepare($insertQuery);

    if ($stmt) {

        foreach ($valores as $chave => $valor) {
            $stmt->bindParam($chave, $valores[$chave], PDO::PARAM_STR);
        }

        if ($stmt->execute()) {

            header("Location: ../form.php");
            exit(); 
        } else {

            echo "Erro ao executar a inserção: " . $stmt->errorInfo()[2];
        }
    } else {

        echo "Erro ao preparar a declaração SQL";
    }
}

?>