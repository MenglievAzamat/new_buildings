$(document).ready(function () {

    $("#price_id").ionRangeSlider({
        min: 300000,
        max: 15000000,
        step: 20000,
        prettify: true,
        from: 6000000,
        grid: true,
        postfix: " руб."
    });

    $("#payment").ionRangeSlider({
        min: 300000,
        max: 15000000,
        step: 20000,
        prettify: true,
        from: 6000000,
        grid: true,
        postfix: " руб."
    });

    $("#mortgage").ionRangeSlider({
        min: 5,
        max: 25,
        step: 1,
        prettify: true,
        from: 15,
        grid: true,
        postfix: " лет"
    });
});

var count_start = document.getElementsByClassName('count_start')[0];
var count_items = document.getElementsByClassName('irs-single');
var condition_value = document.getElementsByClassName('condition_value_sum')[0];
var result = document.getElementsByClassName('result_num_payment')[0];
var sum_of_mortgage = 0;
var price_to_count = 0;
var payment_to_count = 0;

var a = document.getElementById('price_id');

function count() {
    var price_start = count_items[0].innerHTML.indexOf(' руб.');
    var price = count_items[0].innerHTML.substr(0, price_start);
    price_to_count = price.split(" ").join('');

    var payment_start = count_items[1].innerHTML.indexOf(' руб.');
    var payment = count_items[1].innerHTML.substr(0, payment_start);
    payment_to_count = payment.split(" ").join('');

    var mortgage_start = count_items[2].innerHTML.indexOf(' лет');
    var mortgage = count_items[2].innerHTML.substr(0, mortgage_start);
    var mortgage_time = mortgage.split(" ").join('');

    sum_of_mortgage = Number(price_to_count) - Number(payment_to_count);
    condition_value.innerHTML = sum_of_mortgage.toLocaleString() + " руб.";

    result.innerHTML = Math.round(sum_of_mortgage / (12 * Number(mortgage_time))).toLocaleString() + " руб.";

}

window.onload = function () {
    var arrow_item = document.getElementsByClassName('arrow_item');
    var n = 0;

    function animateArrow() {
        if (n != 4) {
            arrow_item[n].classList.remove('added_opacity');
            arrow_item[n + 1].classList.add('added_opacity');
            n++;
        } else if (n == 4) {
            n = 0;
            for (var i = 0; i < arrow_item.length; i++) {
                arrow_item[i].classList.remove('added_opacity');
            }
            arrow_item[0].classList.add('added_opacity');
        }
    }

    setInterval(animateArrow, 200);
}

function counter() {
    var options = {
        useEasing: true,
        useGrouping: true,
        separator: '',
        decimal: '',
        suffix: '%'
    };
    var demo = new CountUp('first_item_to_count', 0, 75, 0, 2, options);
    if (!demo.error) {
        demo.start();
    } else {
        console.error(demo.error);
    }

    var options = {
        useEasing: true,
        useGrouping: true,
        separator: '',
        decimal: '',
        suffix: '%'
    };
    var demo = new CountUp('second_item_to_count', 0, 82, 0, 2, options);
    if (!demo.error) {
        demo.start();
    } else {
        console.error(demo.error);
    }

    var options = {
        useEasing: true,
        useGrouping: true,
        separator: '',
        decimal: '',
        suffix: '%'
    };
    var demo = new CountUp('third_item_to_count', 0, 70, 0, 2, options);
    if (!demo.error) {
        demo.start();
    } else {
        console.error(demo.error);
    }
}

var active_progress = document.getElementsByClassName('active_progress');
var animation_trigger = document.getElementsByClassName('animation_trigger')[0];
var k = 0;

var isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
    if (isScrolling == false) {
        window.requestAnimationFrame(function () {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

function scrolling(el) {

    if (isPartiallyVisible(animation_trigger) & k == 0) {
        counter();
        active_progress[0].classList.add('first_progress__value');
        active_progress[1].classList.add('second_progress__value');
        active_progress[2].classList.add('third_progress__value');
        k++;
    }
}

function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

var overlay = document.getElementsByClassName('overlay')[0];
var apply_modal = document.getElementsByClassName('modal_window_second')[0];
var modal_trigger = document.getElementsByClassName('modal_trigger');

for(var i = 0; i < modal_trigger.length; i++) {
    modal_trigger[i].addEventListener('click', function () {
        apply_modal.classList.toggle('invisible_item');
        overlay.classList.toggle('invisible_item');
        document.documentElement.classList.add('no_scroll');
    })
}

modal_btn.addEventListener('click', function () {
    apply_modal.classList.toggle('invisible_item');
    overlay.classList.toggle('invisible_item');
    document.documentElement.classList.remove('no_scroll');
})

var menu__icon = document.getElementsByClassName('menu__icon')[0];
var hidden_menu = document.getElementsByClassName('hidden_menu')[0];

menu__icon.addEventListener('click', menu_open);

function menu_open() {
    hidden_menu.classList.toggle('invisible_item');
    overlay.classList.toggle('invisible_item');
    document.documentElement.classList.toggle('no_scroll');
}

var header_burger_menu = document.getElementsByClassName("menu")[0];

menu__icon.addEventListener('click', function () {
    header_burger_menu.classList.toggle('menu_state_open');
})

var mobil_slider_prev = document.getElementById('to');
var mobil_slider_next = document.getElementById('back');
var mobil_slider = document.getElementById('hidden_slider');
var mobil_slide = document.querySelectorAll('.packeges_test .packeges_content_item');
var mobil_slider_bullet = document.querySelectorAll('.slider_bullets div');
var mobil_iterations = 0;

mobil_slider_prev.addEventListener('click', function() {
    if(mobil_iterations == 0) {
        mobil_slider.style.justifyContent = 'flex-start';
        mobil_iterations++
        for(var i = 0; i < mobil_slider_bullet.length; i++) {
            mobil_slider_bullet[i].classList.remove('activ_bullet');
            mobil_slide[i].classList.remove('chosen_packeges_slide');
        }

        mobil_slider_bullet[0].classList.add('activ_bullet');
        mobil_slide[0].classList.add('chosen_packeges_slide');
    }

    else {
        mobil_slider.style.justifyContent = 'center';
        mobil_iterations = 0;
        for(var j = 0; j < mobil_slider_bullet.length; j++) {
            mobil_slider_bullet[j].classList.remove('activ_bullet');
            mobil_slide[j].classList.remove('chosen_packeges_slide');
        }

        mobil_slider_bullet[1].classList.add('activ_bullet');
        mobil_slide[1].classList.add('chosen_packeges_slide');
    }

})

mobil_slider_next.addEventListener('click', function() {
    if(mobil_iterations == 0) {
        mobil_slider.style.justifyContent = 'flex-end';
        mobil_iterations++
        for(var i = 0; i < mobil_slider_bullet.length; i++) {
            mobil_slider_bullet[i].classList.remove('activ_bullet');
            mobil_slide[i].classList.remove('chosen_packeges_slide');
        }

        mobil_slider_bullet[2].classList.add('activ_bullet');
        mobil_slide[2].classList.add('chosen_packeges_slide');
    }

    else {
        mobil_slider.style.justifyContent = 'center';
        mobil_iterations = 0;

        for(var j = 0; j < mobil_slider_bullet.length; j++) {
            mobil_slider_bullet[j].classList.remove('activ_bullet');
            mobil_slide[j].classList.remove('chosen_packeges_slide');
        }

        mobil_slider_bullet[1].classList.add('activ_bullet');
        mobil_slide[1].classList.add('chosen_packeges_slide');
    }    
}) 

/*var slider = tns({
    container: '.my-slider',
    items: 1,
    rewind: true,
    swipeAngle: false,
    gutter: 0,
    fixedWidth: 280,
    center: true,
    startIndex: 1,
    speed: 400,
    mouseDrag: true,
    controlsText: [" ", " "],
    controlsPosition: 'bottom',
    navPosition: 'bottom',
    navAsThumbnails: true,
    arrowKeys: true,
  }); */
//
// var quiz_checkbox = document.getElementsByClassName('quiz_checkbox_itself');
// var quiz_begining_btn = document.getElementsByClassName('quiz_begining_btn');
// var quiz_begining_section = document.getElementsByClassName('quiz_begining')[0];
// var quiz_first_type_section = document.getElementsByClassName('quiz_first_type')[0];
// var quiz_second_type_section = document.getElementsByClassName('quiz_second_type')[0];
// var quiz_first_type_btn = document.getElementsByClassName('first_type_btn');
// var quiz_second_type_btn = document.getElementsByClassName('second_type_btn');
// var quiz_first_type_item = document.getElementsByClassName('quiz_first_type_item');
// var quiz_second_type_item = document.getElementsByClassName('quiz_second_type_item');
// var quiz_progress_item = document.getElementsByClassName('quiz_progress_item');
// var step_mark = document.getElementsByClassName('step_mark');
// var step_number = document.getElementsByClassName('step_number')[0];
// var question_number = document.getElementsByClassName('question_number')[0];
// var question_section = document.getElementById('question_section');
// var quiz_finish_btn = document.getElementsByClassName('finish_btn');
// var stop_watching = 0;
//
// var quiz_first_type_questions = ['Какой категории жилой комплекс вас интересует?',
//     'Выберите необходимую площадь',
//     'Укажите предполагаемый бюджет',
//     'Выберите срок сдачи',
//     'Рассматриваете покупку в ипотеку?'
// ];
// var quiz_second_type_questions = ['Выберите желаемый способ инвестирования',
//     'Выберите сумму инвестирования',
//     'Выберите формат дома',
//     'В какой отделке желаете обьект?',
//     'Что важно лично для вас при инвестировании? Или какие пожелания мы должны учитывать?'
// ];
//
// var quiz_count = 0;
//
// for (var i = 0; i < quiz_checkbox.length; i++) {
//     quiz_checkbox[i].addEventListener('click', quiz_start)
// }
//
//
//
// document.getElementsByClassName('second_type_quiz__textarea')[0].addEventListener('input', function() {
//     quiz_finish_btn[2].disabled = false;
//     quiz_finish_btn[2].classList.add('activ_quiz_btn');
// });
//
// function quiz_start() {
//     console.log(quiz_count, 'quiz_start_start');
//     for (var i = 0; i < quiz_checkbox.length; i++) {
//         if (stop_watching === 0 && (quiz_checkbox[i].checked && quiz_checkbox[i].id === "begining_first_type") || (quiz_checkbox[i].checked && quiz_checkbox[i].id === "begining_second_type")) {
//             quiz_begining_btn[0].disabled = false;
//             quiz_begining_btn[0].classList.add('activ_quiz_btn');
//             stop_watching++;
//             console.log(quiz_count, 'quiz_start_if')
//         } else if (quiz_checkbox[i].checked && (quiz_checkbox[i].id !== "begining_second_type") &&
//             (quiz_checkbox[i].id !== "begining_first_type")) {
//                 var x = 0;
//                 for(var k = 0; k < quiz_checkbox.length; k++) {
//                     if(quiz_checkbox[k].checked) {
//                         k++;
//                     }
//                 }
//                 console.log(x);
//             chosen_quiz_goes_on();
//         }
//     }
// }
//
// function chosen_quiz_goes_on() {
//     console.log(quiz_count, 'quiz_start_elseif')
//     for (var i = 0; i < quiz_checkbox.length; i++) {
//         if (quiz_checkbox[i].checked && quiz_checkbox[i].classList.contains('quiz_first_type_check_box')) {
//             quiz_first_type_btn[quiz_count].disabled = false;
//             quiz_first_type_btn[quiz_count].classList.add('activ_quiz_btn');
//         } else if (quiz_checkbox[i].checked && quiz_checkbox[i].classList.contains('quiz_second_type_check_box')) {
//             quiz_second_type_btn[quiz_count].disabled = false;
//             quiz_second_type_btn[quiz_count].classList.add('activ_quiz_btn');
//         }
//
//     }
// }
//
// for (var j = 0; j < quiz_begining_btn.length; j++) {
//     quiz_begining_btn[j].addEventListener('click', go_quiz)
// }
//
// function go_quiz(event) {
//     console.log(quiz_count, 'button_strt')
//     if(event.target.classList.contains('finish_btn')) {
//         document.getElementsByClassName('quiz_finish')[0].classList.remove('invisible_item');
//         quiz_first_type_section.classList.add('invisible_item');
//         quiz_second_type_section.classList.add('invisible_item');
//         quiz_progress_item[5].innerHTML = '100%';
//         quiz_progress_item[5].style.width = "100%";
//         quiz_progress_item[5].style.textAlign = "right";
//         quiz_progress_item[5].style.paddingRight = "2rem";
//         document.getElementsByClassName('quiz_question_item')[0].classList.add('invisible_item')
//     }
//
//     for (var i = 0; i < quiz_checkbox.length; i++) {
//         if (quiz_checkbox[i].checked && quiz_checkbox[i].id === "begining_first_type") {
//             quiz_begining_section.classList.add('invisible_item');
//             quiz_first_type_section.classList.remove('invisible_item');
//             question_section.innerHTML = quiz_first_type_questions[quiz_count];
//         } else if (quiz_checkbox[i].checked && quiz_checkbox[i].id === "begining_second_type") {
//             quiz_begining_section.classList.add('invisible_item');
//             quiz_second_type_section.classList.remove('invisible_item');
//             question_section.innerHTML = quiz_second_type_questions[quiz_count];
//         } else if (quiz_checkbox[i].checked && (quiz_checkbox[i].checked && quiz_checkbox[i].id !== "begining_second_type") &&
//             (quiz_checkbox[i].checked && quiz_checkbox[i].id !== "begining_first_type")) {
//             show_slides()
//         }
//     }
//
//     question_number.innerHTML = Number(question_number.innerHTML) + 1;
//     step_number.innerHTML = Number(step_number.innerHTML) + 1;
//     step_mark[quiz_count].classList.remove('colored_step_mark');
//     step_mark[quiz_count + 1].classList.add('colored_step_mark');
//
//
//     quiz_progress_item[quiz_count].innerHTML = "";
//     quiz_progress_item[quiz_count + 1].classList.remove('invisible_item');
// }
//
// function show_slides() {
//     for (var i = 0; i < quiz_checkbox.length; i++) {
//         if (quiz_checkbox[i].checked && quiz_checkbox[i].classList.contains('quiz_first_type_check_box')) {
//             quiz_first_type_item[quiz_count].classList.add('invisible_item');
//             quiz_first_type_item[quiz_count + 1].classList.remove('invisible_item');
//             question_section.innerHTML = quiz_first_type_questions[quiz_count + 1];
//         } else if (quiz_checkbox[i].checked && quiz_checkbox[i].classList.contains('quiz_second_type_check_box')) {
//             console.log(quiz_count, 'show_slides_elseif')
//             quiz_second_type_item[quiz_count].classList.add('invisible_item');
//             quiz_second_type_item[quiz_count + 1].classList.remove('invisible_item');
//             question_section.innerHTML = quiz_second_type_questions[quiz_count + 1];
//         }
//     }
//     quiz_count++;
// }

/* 
finish_btn_second_type_quiz

var quiz_checkbox = document.getElementsByClassName('quiz_checkbox_itself');
var quiz_content_body = document.getElementsByClassName('quiz_content_body')[0];
var quiz_begining_btn = document.getElementsByClassName('quiz_begining_btn');
var quiz_first_type_btn = document.getElementsByClassName('first_type_btn');
var quiz_second_type_btn = document.getElementsByClassName('second_type_btn');
var quiz_first_type_check_box = document.getElementsByClassName('quiz_first_type_check_box');
var quiz_second_type_check_box = document.getElementsByClassName('quiz_second_type_check_box');
var quiz_first_type_item = document.getElementsByClassName('quiz_first_type_item');
var quiz_second_type_item = document.getElementsByClassName('quiz_second_type_item');
var quiz_count = 0;
var once_call = 0;

for (var i = 0; i < quiz_checkbox.length; i++) {
    quiz_checkbox[i].addEventListener('click', quiz_start)
}

function quiz_start() {
    for (var i = 0; i < quiz_checkbox.length; i++) {
        if ((quiz_checkbox[i].checked && quiz_checkbox[i].id === "begining_first_type") ||
            (quiz_checkbox[i].checked && quiz_checkbox[i].id === "begining_second_type")) {
            quiz_begining_btn[0].disabled = false;
            quiz_begining_btn[0].classList.add('activ_quiz_btn');
        } else if (quiz_checkbox[i].checked && quiz_checkbox[i].classList.contains('quiz_first_type_check_box')) {
            quiz_first_type_btn[quiz_count].disabled = false;
            quiz_first_type_btn[quiz_count].classList.add('activ_quiz_btn');
        } else if (quiz_checkbox[i].checked && quiz_checkbox[i].classList.contains('quiz_first_type_check_box')) {
            quiz_second_type_btn[quiz_count].disabled = false;
            quiz_second_type_btn[quiz_count].classList.add('activ_quiz_btn');
        }
    }
}


for (var j = 0; j < quiz_begining_btn.length; j++) {
    quiz_begining_btn[j].addEventListener('click', function () {
        for (var i = 0; i < quiz_checkbox.length; i++) {
            if (quiz_checkbox[i].checked && quiz_checkbox[i].id === "begining_first_type") {
                document.getElementsByClassName('quiz_begining')[0].classList.add('invisible_item');
                document.getElementsByClassName('quiz_first_type')[0].classList.remove('invisible_item');
            } else if (quiz_checkbox[i].checked && quiz_checkbox[i].id === "begining_second_type") {
                document.getElementsByClassName('quiz_begining')[0].classList.add('invisible_item');
                document.getElementsByClassName('quiz_second_type')[0].classList.remove('invisible_item');
            } else if (quiz_checkbox[i].checked && quiz_checkbox[i].id !== "begining_first_type" && quiz_checkbox[i].id !== "begining_second_type") {
                document.getElementsByClassName('quiz_begining')[0].classList.add('invisible_item');
                document.getElementsByClassName('quiz_second_type')[0].classList.remove('invisible_item');
            }
            for (var j = 0; j < quiz_begining_btn.length; j++) {
                if (quiz_begining_btn[j].classList.contains('first_type_btn')) {
                    quiz_first_type_item[quiz_count].classList.remove('invisible_item')
                    quiz_count++

                } else if (quiz_begining_btn[j].classList.contains('second_type_btn')) {
                    quiz_second_type_item[quiz_count].classList.remove('invisible_item')
                    quiz_count++
                }
            }
        }
    })
}
quiz_content_body.addEventListener('click', quiz_start);

function quiz_start(el) {
    if (el.target.classList.contains('quiz_checkbox_itself') && once_call == 0) {
        quiz_choose_way();
        once_call++;
    }
}

function quiz_choose_way() {
    for (var i = 0; i < quiz_checkbox.length; i++) {
        if (quiz_checkbox[i].checked) {
            quiz_begining_btn[quiz_count].disabled = false;
            quiz_begining_btn[quiz_count].classList.add('activ_quiz_btn');
        }
    }
}

quiz_begining_btn[quiz_count].addEventListener('click', function () {
    for (var i = 0; i < quiz_checkbox.length; i++) {
        if (quiz_checkbox[i].checked && quiz_checkbox[i].id === "begining_first_type") {
            document.getElementsByClassName('quiz_begining')[0].classList.add('invisible_item');
            document.getElementsByClassName('quiz_first_type')[0].classList.remove('invisible_item');
            first_quiz();
        } else if (quiz_checkbox[i].checked && quiz_checkbox[i].id === "begining_second_type") {
            document.getElementsByClassName('quiz_begining')[0].classList.add('invisible_item');
            document.getElementsByClassName('quiz_second_type')[0].classList.remove('invisible_item');
            second_quiz();
        }
    }

})

function first_quiz() {
    for (var i = 0; i < quiz_first_type_check_box.length; i++) {
        if (quiz_first_type_check_box[i].checked) {
            quiz_first_type_btn[quiz_count].disabled = false;
            quiz_first_type_btn[quiz_count].classList.add('activ_quiz_btn');
        }
    }    
    quiz_count++;
}

function second_quiz() {

}
 
quiz_first_type_btn[quiz_count].addEventListener('click', function() {
    quiz_first_type_item[quiz_count-1].classList.add('invisible_item');
    quiz_first_type_item[quiz_count].classList.remove('invisible_item');
    first_quiz()
}) */