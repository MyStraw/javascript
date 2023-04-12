const show = () => {
    event.preventDefault();  //재 렌더링 안되게

    let n = Math.floor(Math.random() * 6) + 1; 
   // console.log(n); // 콘솔에 숫자도 띄워보자

    //사용자 입력 수 : 라디오의 체크값을 찾음 ->"radio" 찾아야된다. 클래스 걸어서 찾아올수도 있고

       let user; // document.querySelectorAll('label');//
        
        const radios = document.querySelectorAll('input[type=radio]'); //인풋인데 타입속성이 라디오인거 갖고오는 셀렉터
        console.log(radios);

        for(let item of radios){
            console.log(item); 
            if (item.checked){  //checked == true 써도 되는데 checked가 참 혹은 거짓이라 굳이 안써도됨. if잖아
                user=item.value;
                break; //반복문 나와.
               
        }

    }

        // for(let item of n) {
        //     console.log(item.textContent);ㅋ
        //     }

        //     if(user == n)
       
    //랜덤수와 사용자입력수 같은지 검사

    if (n == user){
        document.querySelector('article>h1').textContent = '주사위게임 : 맞음(승)'
    }
    else {
        document.querySelector('article h1').textContent = '주사위게임 : 틀림(패)' //textContent 텍스트만 가져온다
    }





    //결과출력
    document.querySelector(".h2Class" ).innerHTML= `<img src='./img/${n}.png'>`; //innerHTML은 h2Class html안에꺼 다 갖고와.
}

