// document.getElementById("h2Id").innerHTML = "시작입니다"; //오류난다.

function show() {
    // alert("안녕하세요.");     
    event.preventDefault(); //자기 자신 다시 안불러오게 한다.
    document.getElementById("h2Id").innerHTML = "안녕하세요";
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("h2Id").innerHTML = "시작입니다";
});





// document.addEventListener("DOMContentLoaded", function() { //addEventListener는 이벤트를 등록하는 문법. 돔 컨텐트가 로드되면~ 어떻게 할거냐 이걸 묻는거. 함수가 들어간다. 메소드처럼.
// addEventListener는 이미 있는거다. 함수호출할때 파라미터 넣어주는것처럼 이미 객체가 만들어져 있고 내가 쓰는거. 괄호안에 인수를 넣어줘야 한다. 규칙이 정해져있다.
// 어떤 이벤트가 발생할거냐?. 돔이 만들어 지면 document.get~ 해가지고 이걸 가지고 오면 되겠네
// function()이 들어가는게 자바 스크립트의 특징이다.

// getElementById->ID가 뭐인거 찾아오께
 //돔 다 로드 된 다음에 글자를 나오게끔 해라. 피코랑 같이하니까 충돌. 로드 다 되기전에 표현하다보니 안나와서 이거 씀. 호출하는 함수 이름이 들어가는게 아니라
 //바로 function() 함수를 바로 넣는다. 펑션코드를 바로 쓸겨
 //이름이 없는 펑션이 생긴다. 그냥 그대로 실행시켜줘!인수없는 괄호열고 괄호닫고. 펑션이 인수다.
//함수(1,2) 이거처럼 2부분이 펑션

// document.addEventListener("DOMContentLoaded", function(){ //이 소괄호에 받을 인수 있을때 그때 써. 걍 익명의 인수로 아무것도 안적고 뒤에 중괄호 안에만 명령 넣으면 된다.
//     document.getElementById("h2Id").innerHTML = "시작입니다";

//}); //이게 습관화. 괄호닫는거 엔터로 밑으로 해줘. 나중에 이게 어디서왔지? 하고 찾지말고.
//document.addEventListener("DOMContentLoaded", function(){}); 원래는 이거. 괄호열고 안에 코드 짜서 넣으면 된다.

//document.addEventListener("DOMContentLoaded", function() { 돔이 끝나면읽어, 이걸 할거다 함수(이름 없이 하면 바로실행) 함수는 중괄호 안에 넣어
// document.getElementById("h2Id").innerHTML = "안녕하세요"
// }

