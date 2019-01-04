$(document).ready(function () {
    let questions = {
        "quiz_first_type": [
            'Какой категории жилой комплекс вас интересует?',
            'Выберите необходимую площадь',
            'Укажите предполагаемый бюджет',
            'Выберите срок сдачи',
            'Рассматриваете покупку в ипотеку?'
        ],

        "quiz_second_type": [
            'Выберите желаемый способ инвестирования',
            'Выберите сумму инвестирования',
            'Выберите формат дома',
            'В какой отделке желаете обьект?',
            'Что важно лично для вас при инвестировании? Или какие пожелания мы должны учитывать?'
        ]
    };

    let type = "";
    let step = 1;

    $(".quiz_checkbox_itself").on("click", function (event) {
        $(event.currentTarget).parent().parent().parent().find("button").prop("disabled", false).addClass("activ_quiz_btn");
        type = (event.currentTarget.id !== "") ? event.currentTarget.id.replace("begining", "quiz") : type;
    });

    $("button.quiz_begining_btn").on("click", function (event) {
            if (step === 6) {
                $("div." + type).addClass("invisible_item");
                $("div.quiz_finish").removeClass("invisible_item");
                $("div#6.quiz_progress_item").html("100%").css("width", "100%").css("text-align", "right").css("padding-right", "2rem");
                $("div.quiz_questions").addClass("invisible_item");
                $("div.question_steps").addClass("invisible_item");
            } else {
                $(event.currentTarget).parent().parent().addClass("invisible_item");

                if ($("div." + type + ".invisible_item").length !== 0) {
                    $("div." + type).removeClass("invisible_item");
                } else {
                    $("div." + type + "_item." + step).removeClass("invisible_item");
                    $("div." + type + "_item." + (step - 1)).addClass("invisible_item");
                }

                $("span.step_number").html(++step);
                $("div.question_number").html(step);
                $("span#question_section").html(questions[type][step - 2]);
                $("div#" + step + ".step_mark").addClass("colored_step_mark");
                $("div#" + (step - 1) + ".step_mark").removeClass("colored_step_mark");
                $("div.quiz_progress_item#" + step).removeClass("invisible_item");
                $("div.quiz_progress_item#" + (step - 1)).html("");
            }
        }
    );

    $("textarea").on("input", function (event) {
        $(event.currentTarget).parent().find("button").prop("disabled", false).addClass("activ_quiz_btn");
    });
});