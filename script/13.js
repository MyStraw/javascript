// document.getElementById("h2Id").innerHTML = "시작입니다"; //맨위에 하면 오류난다.

// function show() {
//     // alert("안녕하세요.");     
//     event.preventDefault(); //자기 자신 다시 안불러오게 한다.
//     document.getElementById("h2Id").innerHTML = "안녕하세요2";
// }


//화살표 함수로 변경 => 이게 화살표 함수.

const show = () => {//컨스트. 변경되지 않는다는 뜻. 함수명을 변수처럼 쓴다. 펑션이란 글자 없이. 위에 function shot() 형식말고 이것처럼 쓸수있다.
    event.preventDefault();
    document.getElementById("h2Id").innerHTML= "<img src='../img/1.png'>"; // 따옴표 주의! "안녕하세요" 들어가듯이 큰따옴표 안에 넣으셈.
}

// document.addEventListener("DOMContentLoaded", function () { //얘도 화살표 바꿀수 있다.
//     document.getElementById("h2Id").innerHTML = "시작입니다";
// });

document.addEventListener("DOMContentLoaded", () => { //펑션 대신에 화살표 함수로 바꾸면 된다. 이걸 쓰자.
// document.getElementById("h2Id").innerHTML = "시작입니다"; //근데 이걸 일일이 다 id로 할수가 없다. 셀렉터로 가져올수 있는게 있다. 이줄 명령어보다 아래 쿼리 셀렉터를 더 많이 쓴다.
//    document.querySelector(".h2Class").innerHTML = "아이디선택자:시작입니다" //tag, id, class, 부모자식, 형제, 속성 셀렉터는 다 쓸수있다. id 셀럭터 쓸려면 #h2Id 쓰면되지. 클래스는 <.> // 돔컨텐트로디드를 쓰면 돔을 이용할수있다. 돔트리로 아이디나 이런거 찾기쉬워. innerhtml은 html 코드를 넣을수 있단거.
//     const bt = document.createElement('button'); //버튼 끼워넣고 싶은곳 찾아
//     bt.textContent = "확인";//버튼에 글자
//     document.getElementById('hdiv').append(bt); //버튼이 나온다~!. 큰따옴표, 작은따옴표 구분없이 쓴다. header->div에 hdiv 아이디 표식에 버튼 생긴다




});




// document.addEventListener("DOMContentLoaded", function() { //addEventListener는 이벤트를 등록하는 문법. 돔 컨텐트가 로드되면~ 어떻게 할거냐 이걸 묻는거. 함수가 들어간다. 메소드처럼.
// addEventListener는 이미 있는거다. 함수호출할때 파라미터 넣어주는것처럼 이미 객체가 만들어져 있고 내가 쓰는거. 괄호안에 인수를 넣어줘야 한다. 규칙이 정해져있다.
// 어떤 이벤트가 발생할거냐?. 돔이 만들어 지면 document.get~ 해가지고 이걸 가지고 오면 되겠네
// function()이 들어가는게 자바 스크립트의 특징이다.

// getElementById->ID가 뭐인거 찾아오께
// 돔 다 로드 된 다음에 글자를 나오게끔 해라. 피코랑 같이하니까 충돌. 로드 다 되기전에 표현하다보니 안나와서 이거 씀. 호출하는 함수 이름이 들어가는게 아니라
// 바로 function() 함수를 바로 넣는다. 펑션코드를 바로 쓸겨
// 이름이 없는 펑션이 생긴다. 그냥 그대로 실행시켜줘!인수없는 괄호열고 괄호닫고. 펑션이 인수다.
// 함수(1,2) 이거처럼 2부분이 펑션

// document.addEventListener("DOMContentLoaded", function(){ //이 소괄호에 받을 인수 있을때 그때 써. 걍 익명의 인수로 아무것도 안적고 뒤에 중괄호 안에만 명령 넣으면 된다.
//     document.getElementById("h2Id").innerHTML = "시작입니다";

// }); 이거 습관화. 괄호닫는거 엔터로 밑으로 해줘. 나중에 이게 어디서왔지? 하고 찾지말고.
// document.addEventListener("DOMContentLoaded", function(){}); 원래는 이거. 괄호열고 안에 코드 짜서 넣으면 된다.

// document.addEventListener("DOMContentLoaded", function() { 돔이 끝나면읽어, 이걸 할거다 함수(이름 없이 하면 바로실행) 함수는 중괄호 안에 넣어
// document.getElementById("h2Id").innerHTML = "안녕하세요"
// }

