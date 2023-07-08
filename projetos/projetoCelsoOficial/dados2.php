<?php
$wservices=$_POST["service"];
$wservicesText=$_POST["serviceText"];
$wdateService=$_POST["dateService"];
$telefone2=$_POST['telefone'];
$profissional=$_POST['profissional'];
$whourService=$_POST['hourService'];

    //código da API Twilio
    // Update the path below to your autoload.php,
    // see https://getcomposer.org/doc/01-basic-usage.md
    require __DIR__ . '/twilio-php-main/src/Twilio/autoload.php';
    use Twilio\Rest\Client;

    $sid    = "AC852f3505dee079b28c42769609ce5f55";
    $token  = "7a83e554231ac38d5076e95294785dd0";
    $twilio = new Client($sid, $token);

    //código da API Twilio para ENVIAR a mensagem
    $message = $twilio->messages
      ->create("whatsapp:+557184043767", // to
        array(
          "from" => "whatsapp:+14155238886",
          "body" => "
          O whatsapp do cliente em que solicitou o serviço: $telefone2. 
          Com o profissional: $profissional. 
          Tipo do serviço que o cliente quer é: $wservices. 
          Descrição dele sobre o que deseja: $wservicesText. 
          Marcado para o dia: $wdateService.
          Horario: $whourService."
        )
      );

      if($telefone2==true){
        $message = $twilio->messages
        ->create("+55$telefone2", // to
          array(
            "from" => "+16073604508",
            "body" => "O seu serviço seu foi agendado com sucesso. Com o profissional: $profissional. Quando possivel, ele entrará em contato!"
          )
        );
      }
      else{
        echo '<script type="text/javascript">'; 
        echo 'alert("Seu serviço foi agendado com sucesso! Entraremos em contato.");';
        echo '</script>';
      }

      
      //script para mensagem de alerta após agendamento, na página de agendament de serviços.
echo '<script type="text/javascript">'; 
echo 'alert("Seu serviço foi agendado com sucesso! Entraremos em contato.");';
echo 'window.location.href = "paginaservicos.html";';
echo '</script>';
?>