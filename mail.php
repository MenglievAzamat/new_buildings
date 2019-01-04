<?php

$to = "example@gmail.com";

if(isset($_POST["quiz"])) {
    $to = "example@gmail.com";
    $subject = "--- Опрос ---";
    $message = "Цель покупки: " . $_POST["type"] . "\n";

    switch ($_POST["type"]) {
        case "Для жизни":
            $message .= "Категории:\n";
            foreach ($_POST["flat_type"] as $type) {
                $message .= "\t" . $type . "\n";
            }
            $message .= "Площадь: " . $_POST["square"] .
                        "\nРасценки: " . $_POST["price_range"] .
                        "\nСрок сдачи: " . $_POST["building_status"] .
                        "\nИпотека: " . $_POST["mortgage"];
            break;
        case "Для инвестиций":
            $message .= "Способ инвестирования: " . $_POST["preference"] .
                        "\nСумма инвестирования: " . $_POST["pricing"] .
                        "\nФормат дома: " . $_POST["building_type"] .
                        "\nОтделка: " . $_POST["readiness"] .
                        "\nКомментарий: " . $_POST["addition"];
            break;
    }

    $message .= "\nКонтакты: " . $_POST["phone_no"];

    //mail($to, $subject, $message);
}
if(isset($_POST["modal"])) {
    $subject = "--- Заявка на звонок ---";
    $message = "\nИмя: " . $_POST["name"] .
                "\nКонтакты: " . $_POST["phone_number"];

    //mail($to, $subject, $message);
}

echo $message;
