//회문 체크 함수
const palindrome = (t1, t2)=>{
 //   console.log('palindrome') ;

    let s = t1.value;
   // console.log('s')
    //입력내용이 없는 경우
    if (s.length == 0){ //문자열 입력이 0이다. 즉 메세지 입력이 안됐다. 입력안되면 클릭해도 안되게 리턴.
        document.querySelector("h2").textContent = '단어를 입력하세요';
        return; 
    } ;

    //입력내용이 있는 경우 else 쓸필요 없다.

    //첫번째 방법. 우영우 뒤에서부터 0,1,2 2,1,0 으로 뒤집어
    let rs =''; //reverse s //s는 정방향 글자. 
    //방법1
    // for(let i = s.length -1; i>=0 ; i--){
    //     rs = rs+ s[i]; 
    // }
     //자기이름 넣고 콘솔로 확인해봥
     //console.log("s=",s, "rs=", rs);

    //방법2:배열이용
    s = s.split(''); //문자열.split(): 함수는 문자열을 분리자로 매열만듦.
    //공백없이 따옴표두개 붙이면 한글자씩 분리한다.분리자. 쉼표쓰면 쉼표로 분리, ',' 하면 우영우,토마토,사과 입력하면 콘솔에 '우영우', '토마토', '사과' 쉼표로 분리한다. 스플릿의 특징
    s = s.reverse(); //배열.reverse(): 배열의 요소를 뒤집어줌 //s가 뒤집어짐.
    //rs = s.toString(); //배열에 있는것들을 쉼표와함께 붙임. 지금은 쓸거아냐.
    rs = s.join(''); //배열.join():배열의 요소를 문자열로 묶어줌. (',')쉼표로 붙여준다.
    //console.log("s=",s, "rs=", rs); //이걸로 콘솔보면 배열이 나온다



    //결과 확인
    if(t1.value==rs){ //방법2로 하면 이걸로.s를 쪼개고 배열로 했으니 안통한다. 방법1은 s==rs쓰면 됨
        t2.value = "회문입니다."; //인폿타입 텍스트이기 때문에 value로 찍어야 된다. 값 txt2에 낑가 넣을끼라. value=값
 //       document.querySelector("h2").textContent = '오홍~회문이구려~'; //출력할때도 걍 이거 쓴다. 어디에 출력할지만 ()안에 표시해줭
        
    }
    else{
        t2.value = "회문이 아닙니다.";
 //       document.querySelector("h2").textContent = '엫헿~회문이 아니네';

    }



};



//숫자 합계
const numSum = (t1, t2) => { //밑에 else numsum에도 t1, t2 해줘야지
    //console.log('numSum') ;
    let s = t1.value; //div 같은태그에서는 innerhtml, textcontent로 가져올수 있고, 폼의 인풋태그면 이거 갖고올땐 value로 갖고온다!! 중요

    //문자열 순회
    

    let sum = 0;    //초기값 주공.

    for(let ch of s) {
        console.log(ch, isNaN(ch));
        
        if(!isNaN(ch)) //isNaN(ch)가 false인거 뽑아라. 
        
        sum += parseInt(ch);                         
    }

    t2.value = sum;
    
    


};



document.addEventListener("DOMContentLoaded", () => { //버튼 클릭이벤트를 한방에 하려고 해. 이벤트 리스터를 달겠다. 이벤트 발생되면 계속 실행시켜줌.     //돔이 다 만들어진 다음에 {}안에 있는걸 실행할거야 돔 컨텐츠=맨처음 한번만 실행. 
    //취소는 필요없고 4개의 컴퍼넌트를 제어해야해. 변수로 잡아낼그야

    //DOM요소 가져오기

    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2"); 

    //const txts = document.querySelectorAll('input[type=txt]') 인풋타입 텍스트만 가져오겠다. csc 할때도 할수있다
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
        //어트리뷰트(속성)로->클래스bt인거에서 id 값 땡겨왔고, 슬라이스로 뒷글자만 따오니 bt1에서 1만 따와졌다. innerHTML로 땡겨오면 '회문확인' 으로 땡겨도 된다.텍스트컨텐츠도 가능. 입맛에 맞게.
        //슬라이스로 안잘랐으면 밑에 gubun==='bt1' 하면된다.
        if (gubun === '1') palindrome(txt1,txt2); //=== 데이터 타입까지 봐야한다. ==1 해도되고, ==='1'로 문자열로. 슬라이스로 뗀거=문자열. 클릭시 역할이 다르니까 부르는게 달라야해. 맨 윗줄 올라가서 함수확인. 콘솔까지만 했다.
        // console.log(gubun); 이걸로 슬라이스로 숫자 지운거 확인가능. 자바에선 인덱스 0,1,2 순서지만 여기선 2자리가 -1
        else numSum(txt1,txt2);

        //txtbox1에 value 갖고오고, 회문인지 아닌지 textbox2에 집어넣어주고. 갖고오는거. 함수 부분이랑 dom 아랫부분 다르다. dom 위쪽은 const txt1 못써. 맨위 함수에 t1, t2로. 안집어내도 된다.
        //t1에 txt1이 들어가고, t2에 txt2 가 들어갈겨
        
       

      }); 

    }


})