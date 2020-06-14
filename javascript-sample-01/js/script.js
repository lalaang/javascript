// function abc() {
//     document.getElementById("demo").innerHTML=Boolean(10>9);
// }

// $(function(){
//     // $('.text').css("color","red").css('fontSize','50px');
//     var items=$("li");
//     // <li>요소를 모두 선택해 변수 items에 저장함.
//     $("button").on("click", function(){
//         $("#len").text("저장된 <li>요소의 총 개수는 "+items.length+"개입니다.");
//     });
// });

// $(function(){
//     var abc=$("li");
//     $('button').click(function(){
//         $('#len').text("저장된 li 요소의 총 개수는 "+abc.length+"개입니다.");
//     });
// });
// )

// $(function(){
//     var abc=$("li");
//     $('button').click(function(){
//         $('#len').append("추가해주세요<br>");
//         // append는 추가하는 것!
//     });
// });

// $(function(){
//     $('button').click(function(){
//         $('#len').prepend("<li>li요소를 추가하겠습니다.</li>");
//         // append는 뒤에 추가하는 것!
//         // prepend는 앞에 추가하는 것
//     });
// });

// $(function(){
//     $("button").on("click", function(){
//         // $("#firstRow").after("<tr><td>새로운 행이에요!</td><td>새로운 행이에요!</td></tr>");
//         $("<td>새로운 셀이에요!</td>").insertBefore("#target");
//         // before 바로 앞
//         // after 바로 뒤
//         // insertBefore 지정방식
//         // insertAfter
//     });
// });

// $(function(){
//     $("button").on("click",function(){
//         $(".content").wrap("<div class='wrapper'></div>");
//     });
// });

// sample 04
// $(function(){
//     $('#btn01').click(function(){
//         $('#warp').stop().fadeOut();
//     });
//     $('#btn02').click(function(){
//         $('#warp').stop().fadeIn();
//     });
// });

// $(function(){
//     $('#btn01').click(function(){
//         $('#warp').css("left","200px");
//     });
//     $('#btn02').click(function(){
//         $('#warp').css("top","200px");
//     });
// });

$(function(){
    $('#btn01').click(function(){
        $('#warp').slideUp();
    })
    $('#btn02').click(function(){
        $('#warp').slideDown();
    })
})

// 1. .fadeIn()
// 2. .fadeOut()
// 3. .fadeTo()
// 4. .fadeToggle()