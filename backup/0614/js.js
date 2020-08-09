var date=new Date();
    // var day;
    // switch(date.getDay()){
    //     // 현재 요일을 반환함
    //     case 0:
    //         day="일";
    //         break;
    //     case 1:
    //         day="월";
    //         break;
    //     case 2:
    //         day="화";
    //         break;
    //     case 3:
    //         day="수";
    //         break;
    //     case 4:
    //         day="목";
    //         break;
    //     case 5:
    //         day="금";
    //         break;
    //     case 6:
    //         day="토";
    //         break;
    // }
// var days=["일", "월", "화", "수", "목", "금", "토"];

// // document.write("오늘은"+day+"요일입니다.");
// document.write("오늘은 "+days[date.getDay()]+"요일입니다.<br>");

// document.getElementById("toDay").innerHTML=day;

// var strKor="한글";
// var strEng="abcABC";
// document.write(strKor.length+"<br>");
// document.write(strEng.length);

// document.write(Math.min()+"<br>");
// document.write(Math.min(1, 10, -100, -10, 1000, 0)+"<br>");
// document.write(Math.min(1, 10, -100, -10, "-1000", 0)+"<br>");
// document.write(Math.min(1, 10, -100, -10, "문자열", 0)+"<br>");

// document.getElementById("demo1").innerHTML=Math.PI;

// document.getElementById("demo2").innerHTML=Math.round(4.4);

// document.getElementById("demo4").innerHTML=Math.max(1,10,100,1000,10000);

// document.getElementById("demo5").innerHTML=Math.random();

// // 인수로 전달받은 값과 같거나 작은 수 중에서 가장 큰 정수
// document.write(Math.floor(10.95)+"<br>");    //10
// document.write(Math.floor(11.01)+"<br>");    //11
// document.write(Math.floor(-10.95)+"<br>");   //-11
// document.write(Math.floor(-11.01)+"<br>");   //-12

// // 인수로 전달받은 값과 같거나 큰 수 중에서 가장 작은 정수
// document.write(Math.ceil(10.95)+"<br>");    //11
// document.write(Math.ceil(11.01)+"<br>");    //12
// document.write(Math.ceil(11)+"<br>");       //11
// document.write(Math.ceil(-10.95)+"<br>");   //-10
// document.write(Math.ceil(-11.01));          //-11

var imgArray=new Array();
imgArray[0]="images/img1.jpg";
imgArray[1]="images/img2.jpg";
imgArray[2]="images/img3.jpg";
imgArray[3]="images/img4.jpg";

function showImage(){
    var imgNum=Math.round(Math.random()*3);
    var ojbImg=document.getElementById("introImg");
    ojbImg.src=imgArray[imgNum];
}