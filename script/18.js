//회문 체크 함수
const palindrome = ()=>{
    console.log('palindrome') ;



};

//숫자 합계
const numSum = () => {
    console.log('numSum') ;

};



document.addEventListener("DOMContentLoaded", () => { //버튼 클릭이벤트를 한방에 하려고 해. 이벤트 리스터를 달겠다. 이벤트 발생되면 계속 실행시켜줌.     //돔이 다 만들어진 다음에 {}안에 있는걸 실행할거야 돔 컨텐츠=맨처음 한번만 실행. 
    //취소는 필요없고 4개의 컴퍼넌트를 제어해야해. 변수로 잡아낼그야

    //DOM요소 가져오기

    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2");

    //클릭이벤트 한방에해보자. 버튼으로 갖고오면 취소까지 갖고오니까 2개만 갖고올라고 클래스로 갖고오자

    const bts = document.querySelectorAll(".bt"); //집어오는 역할. All은 배열.
    //4개 컴퍼넌트를 다 집어왔다. 이제 활용해야지.(텍스트박스, 버튼2개)
    //클릭 이벤트 아무것도 안달아 놨으니 addEvent로 달자. 클릭이 눌려질때마다 콜백{}함수 불러
    //버튼 눌렀을때 2개가 하는일이 다르지만 이벤트로 하게 되는일은 같다.

    //버튼배열에 클릭이벤트 작성. 배열에서 하나씩 갖고오는게 순회

    for(let bt of bts){ //bt0에 첫번째꺼, bt1 두번째꺼
      //  console.log(bt); //bt 몇번 찍히는지 확인해보자.

      bt.addEventListener('click', (event)=>{ //(클릭)하면 {어떤 이벤트를 발생시킬것이다}//외부 함수 만들어서 호출. bt가 역할이 다르니까 여기 밑에하면 똑같이 된다.
        event.preventDefault(); //로그 보니까 클릭 할때마다 리셋된당. 이거 넣어서 리셋 막아줘. 이벤트리스너에 넣어도 된다 이건. 그리고 위에 괄호에 이벤트 넣어줘.
        //let gubun = bt.innerHTML;     // 이너 html을 가져왔다. 있는거 갖고올때도 쓴다.
        let gubun = bt.getAttribute('id').slice(-1); // 마우스 가져다 대면 뭘 선택하고 있는지 색깔이 바뀐다. id. 맨 마지막꺼 잘라낼거야slice(-1). 콘솔에 1,2 표시된다. bt1 => 0,1,2 인덱스 순서. g.length -1 자바는 이런데 js는 이걸쓴다
        if (gubun === '1') palindrome(); //=== 데이터 타입까지 봐야한다. ==1 해도되고, ==='1'로 문자열로. 슬라이스로 뗀거=문자열. 클릭시 역할이 다르니까 부르는게 달라야해. 맨 윗줄 올라가서 함수확인. 콘솔까지만 했다.
        // console.log(gubun); 이걸로 슬라이스로 숫자 지운거 확인가능. 자바에선 인덱스 0,1,2 순서지만 여기선 2자리가 -1
        //어트리뷰트로->클래스bt인거에서 id 값 땡겨왔고, 슬라이스로 뒷글자만 따오니 bt1에서 1만 따와졌다. innerHTML로 땡겨오면 '회문확인' 으로 땡겨도 된다.텍스트컨텐츠도 가능. 입맛에 맞게.
        else numSum();
       

      }); 



    }




    //const txts = document.querySelectorAll('input[type=txt]') 인풋타입 텍스트만 가져오겠다. csc 할때도 할수있다



})