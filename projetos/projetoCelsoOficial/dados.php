<?php

$nascimentoCadastro = $_POST['nascimentoCadastro'];
$nomeCadastro = $_POST['nomeCadastro'];
$emailCadastro = $_POST['emailCadastro'];
$senhaCadastro = $_POST['senhaCadastro'];
$cpfCadastro = $_POST['cpfCadastro'];

//código da API Twilio
// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require __DIR__ . '/twilio-php-main/src/Twilio/autoload.php';
use Twilio\Rest\Client;

$sid = "AC852f3505dee079b28c42769609ce5f55";
$token = "7a83e554231ac38d5076e95294785dd0";
$twilio = new Client($sid, $token);

//código da API Twilio para ENVIAR a mensagem
$message = $twilio->messages
  ->create(
    "whatsapp:+557184043767",
    // to
    array(
      "from" => "whatsapp:+14155238886",
      "body" => "
          Segue dados para cadastramento do usuario. 
          Nome: $nomeCadastro. 
          Data de Nascimento: $nascimentoCadastro. 
          CPF: $cpfCadastro.
          E-mail: $emailCadastro. 
          Senha: $senhaCadastro."
    )
  );

//script para mensagem de alerta após cadastro, na página de cadastro.
$wnome = $_POST["nome1"];
echo '<script type="text/javascript">';
echo 'alert("Bem vindo, ' . $nomeCadastro . '! Cadastrado com Sucesso!");';
echo 'window.location.href = "index.html";';
echo '</script>';


?>