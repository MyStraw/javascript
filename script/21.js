document.addEventListener("DOMContentLoaded", () => {
    const boxDt = document.querySelector('#boxDt');


    
    //key는 필수. key=, &(다음꺼) targetDt=yyyymmdd 

    boxDt.addEventListener('change', () => { //boxDt 바뀌면~
        let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt='; //그냥 url이 아니고 내가만든 변수 이름일 뿐.
        //이게 boxDt위로 가니까 계속이 주소로 박힌다??? 뭔말이래. 읽어볼것. boxDt 안으로 넣어줘야~
        
        url = url + boxDt.value.replaceAll('-', ''); //url주소 마지막 날짜부분을 오려내고, 거기를 지금 '-'없게끔 바꾸고 계속 날짜 바뀔수있게 만드는거
        console.log(url)


        fetch(url) //데이터를 요청(명세에 맞게). 가지고 오는것. 응답으로 json파일을 보내오고 오면 이게 .then에 걸린다. 뭔가 잘못돼서 오류나면 .catch에 걸린다.(인터넷이끊겼어요 같은것)//
            //서버에서 이건 필수 key 같은게 형식이 잘못됐어요~ 하는건 에러가 아니다. 일단 응답, 요청이 오고 간거다. 
            .then((resp) => resp.json()) //데이터가 오면~ resp는 변수명이다. 암꺼나 쓰셈. 일반적으로 쓰는거 // 콜백 ()=>{}이거말고 한줄로 해줘야 되넹. 한줄함수로 행~
            .then((data) => { //앞에선 콜백 안에 콜백. 비동기 통신. json으로 바꿔준다. => 이 과정에 시간 걸린다. 21-1처럼 콜백지옥 안되게 이거 끝나면 그다음 .then을 실행하게 또 .then
                let boxlist = data.boxOfficeResult.dailyBoxOfficeList; //10개 배열이 된다. for of로 순회
                //          console.log(data.boxOfficeResult); //이거보면 타입이 array로 되어있다.
                let boxTag = '';
                for (let box of boxlist) { //콘솔 보면서 해.                
                    console.log(box.rank, box.movieNm, box.salesAmt, box.rankInten)
                    boxTag = boxTag + '<details>'; //태그를 문자열로 모아. html에 주석 해놓은 부분.
                    boxTag = boxTag + `<summary role="button" class="contrast">${box.rank}위- ${box.movieNm}</summary>`; //빽틱으로 안에 문자열 부분에서 바꿀부분 설정. 천단위 콤마 할라믄 일단 문자를 숫자로 바꿔야. parse로 바꾸고 to~로 천단위.
                    boxTag = boxTag + '<ul>';
                    boxTag = boxTag + `<li>순위 : ${box.rank}</li>`;
                    boxTag = boxTag + `<li>매출액 : ${parseInt(box.salesAmt).toLocaleString()}원</li>`;
                    boxTag = boxTag + `<li>전일대비순위 : ${box.rankInten}</li>`;
                    boxTag = boxTag + '</ul>';
                    boxTag = boxTag + '</details>';
                }
                console.log(boxTag);
                console.log(boxlist);

                document.querySelector('#boxDiv').innerHTML = boxTag; //콘솔에 찍히던게 여기 10개 만들어짐. html에 일일이 10개넣는게 아니라 이걸로 한방에 뽷
            })
            .catch((err) => { //에러가 나면~
                console.log(err);



            });




    })

});