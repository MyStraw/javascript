function show() { 
    // alert("안녕하세요."); 

    // document.getElementById("h2Id").innerHTML = "안녕하세요" ;//Id가 뭐인거 찾아오께
}

document.addEventListener("DOMContentLoaded", function() { //addEventListener는 이벤트를 등록하는 문법
    document.getElementById("h2Id").innerHTML = "안녕하세요" ;//Id가 뭐인거 찾아오께
}); //돔 다 로드 된 다음에 글자를 나오게끔 해라. 피코랑 같이하니까 충돌. 로드 다 되기전에 표현하다보니 안나와서 이거 씀


//document.addEventListener("DOMContentLoaded", function() { 돔이 끝나면읽어, 이걸 할거다 함수(이름 없이 하면 바로실행) 함수는 중괄호 안에 넣어
// document.getElementById("h2Id").innerHTML = "안녕하세요"
// }
   
    