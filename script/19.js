//const myFilter(gubun) => {

//}; 함수 호출하려다 뺌


document.addEventListener("DOMContentLoaded", () => { //감지되는 이벤트를 잡아내겠다. 그 이벤트 중 Domcon~이게 먼저. 돔이 만들어지면 css가 돔 참고해서 디자인 입히고. 그다음 이벤트 잡는다. 그러니 맨처음 딱 한번만.

    const cbt1s = document.querySelectorAll(".cbt1"); //클래스 전부 찾아와
    const cbt2s = document.querySelectorAll(".cbt2"); //getElementByID 쓰면 일일이 아이디 다 찾아와야 하니. 쿼리 셀렉터로 하면 css에서 썼던 셀렉터로 다 가져올수있다. 쿼리가 짱.
    const cbt3s = document.querySelectorAll(".cbt3"); //getElementByID로 땡겨오면 12개는 땡겨와야된다. 쿼리 올~ 하면 배열로 들어간다.
    const txt1 = document.querySelector("#txt1"); //쿼리셀렉터만 쓰면 제일 처음만나는거 한개만 가져온다.
    const btReset = document.querySelector("#btReset");

    //배열의 초기화.

    let arr = [];  //기억해. 밑에서 계속 쓸겨

    //버튼 이벤트 추가
    //리셋기능 구현. html 에서 타입으로 리셋시키면 내용만 날라가지 배열이랑 지금까지 써놓은게 그대로 남아있다. 다음거 눌리면 연이어서 다시 다 나와.
    //배열까지 전부 리셋시키기 위해.

    btReset.addEventListener('click', (event => {
        event.preventDefault();
        txt1.value = '';
        arr = [];
    }))

    //배열에 자료 추가
    for (let cbt1 of cbt1s) { //배열 4개 다 갖고와서 클릭 이벤트를 달아. 쿼리all을 했으니 배열로 갖고온거.
        cbt1.addEventListener('click', (event) => {//지금 이 버튼들 하는일이 같으니.
            event.preventDefault();//새로고침 막기.
            //  console.log(cbt1.textContent) //클릭시 콘솔창에 textcontent 가져오는것까지. 아직 사용자화면엔 아무것도표시 안됨.

            switch (cbt1.textContent) { // 버튼과 슬래쉬 사이의 글자를 가져온다.
                case '사과':
                    arr.push('🍏'); // 뭘 추가할지만 바뀜. 버튼의 이름을 가지고 알수있다.
                    break;
                case '바나나':
                    arr.push('🍌');
                    break;
                case '오렌지':
                    arr.push('🍊');
                    break;
                case '수박':
                    arr.push('🍉'); //🥒🥑🥦🥕
                    break;

            }
            console.log(arr); //여기까진 콘솔창으로 나만 볼수있다.
            txt1.value = arr.join(''); // 혹은 arr.toString(); 윈도우 + . = 이모지~ //배열을 뿌려주는 법 inputtype=value로 꽂고, innterHTML,textcontent은 value로 하믄 안돼. doc~
            //이게 실제 사용자가 볼수있게 뿌려주는것
        });
    }

    //필터와 맵 -> 리액트에서 엄청 많이쓴다.


    //배열에서 자료 삭제 (삭제할거 빼고 다른것들을 재배치.)

    for (let cbt2 of cbt2s) {
        cbt2.addEventListener('click', (event) => { //event = e 로 적어도 된다.
            event.preventDefault();//새로고침 막기.

            let gubun = cbt2.textContent.replace('삭제', '');//사과삭제, 바나나삭제, 이런식으로 text 추가하기보다 문자열에서 replace로 '' 없는문자열로 날려버려. 
            //구분이란 변수에 cbt2의 글자만 가져와서 삭제라는 부분을 '' 빈 부분으로 대체. 즉 삭제해버림. 밑에 콘솔키면 삭제 글자만 사라진걸 볼수있다.
            //일일이 case 뒤에 '삭제'라는 글자입력하기 싫어서 이렇게 한방에.

            //console.log(gubun); //버튼에 있던 삭제 글자가 사라지고 사과만 남는다.

            //case2) 맨위에 함수호출 혹은 여기서 바로 구현.
            let temp = []; //빈배열
            for (let item of arr) { //배열에서 사과 빼고싶을때. 사과가 아닌것만 새로운 배열로 새 배열에 집어넣겠다. temp가 비어있는데 어레이 반복으로 다 돌고.(for of) 4개를 한꺼번에 switch로 처리하고
                //사과가 아니면 temp에 집어넣는거. 배열안에 돌면서 사과체크 하면서 빼고 아닌것만 집어넣고 그렇게 나온 temp 배열을 arr에 할당시킴. (새 배열을 만들어 기존 arr에 넣는다.)
                switch (gubun) {
                    case '사과':
                        if (item != '🍏') temp.push(item); //사과가 아니라면 temp배열에 넣어라.
                        break;
                    case '바나나':
                        if (item != '🍌') temp.push(item);
                        break;
                    case '오렌지':
                        if (item != '🍊') temp.push(item);
                        break;
                    case '수박':
                        if (item != '🍉') temp.push(item);
                        break;
                } //temp 만들어짐. //filter 에 for of가 다 들어있는것. filter가 더 강력하다.



            } //temp를 다시 배열에 넣어

            arr = temp;


            //case1) 
            //arr = myFilter(gubun); //함수 새로 짜. 이걸 리턴 받아서 arr로 넣겠다. 밑에 스위치 구분 주석처리 하고 다시 새로 해보는거.교수님 gg 안한다. 맨 위에 호출할라다가.
            //함수호출. 맨 윗줄

            // switch (gubun) { 
            //     case '사과': //filter item은 arr에서 한개씩 한개씩 갖고온다. //arr.filter((item) => console.log(item)); 이렇게하면 필터가 기존 arr가 한바퀴 순회한다. 콘솔보면 하나씩 가져오는게보인다.
            //         arr = arr.filter((item) => item != '🍏'); //사과가 아니면 들어가라. 새로운 배열을 다시 arr에 집어넣어라. arr = arr.filter 필터로 거른 배열을 다시 배열에 넣어라.
            //         break;
            //     case '바나나':
            //         arr = arr.filter((item) => item != '🍌'); //이거에 for of가 들어있다. 지가 돌면서 자기 입맛에 맞는것만 필터해서 갖고온다. 편해~
            //         break;
            //     case '오렌지':
            //         arr = arr.filter((item) => item != '🍊');
            //         break;
            //     case '수박':
            //         arr = arr.filter((item) => item != '🍉');
            //         break;

            // }
            console.log("cbt2", arr);
            txt1.value = arr.join('');

        });

    }

    for (let cbt3 of cbt3s) {
        cbt3.addEventListener('click', (event) => {
            event.preventDefault();
            let gubun = cbt3.textContent.split('->')[0];
            console.log(gubun);

            let temp = [];
            for (let item of arr) {//arr의 아이템 갖고왕~ // item == 는 두개 쓰기. 이벤트 빼먹지 않기. join을 해야 창에 뜬다!, 복붙할때 바꾸기!!!
                switch (gubun) { //
                    case '사과':
                        if (item == '🍏') temp.push('🥕'); //사과면 당근으로 넣고. item은 arr에 들어있는 전부다.
                        else temp.push(item); //아니면 아이템 다 넣어
                        break;
                    case '바나나':
                        if (item == '🍌') temp.push('🥒');
                        else temp.push(item);
                        break;
                    case '오렌지':
                        if (item == '🍊') temp.push('🥑');
                        else temp.push(item);
                        break;
                    case '수박':
                        if (item == '🍉') temp.push('🥦');
                        else temp.push(item);
                        break;
                }

            }
            arr = temp;
            txt1.value = arr.join('');

        });

    }

    //     for (let cbt3 of cbt3s) {
    //         cbt3.addEventListener('click', (event) => {
    //             event.preventDefault();
    //             let gubun = cbt3.textContent.split('->')[0];
    //             console.log(gubun);


    //             let temp = [];

    //             for (let item of arr) {
    //                 temp = arr.join(',')
    //                 console.log('temp', temp)
    //                 switch (gubun) {
    //                     case '사과': //모지? 삼항연산자. 사과냐? 맞으면 당근.아니면 나머지 넣어
    //                         arr = arr.map((item) => item != '🍏' ? '🥕' : item);
    //                         break;
    //                     case '바나나':
    //                         arr = arr.map((item) => item != '🍌' ? '🥒' : item);
    //                         break;
    //                     case '오렌지':
    //                         arr = arr.map((item) => item != '🍊' ? '🥑' : item);
    //                         break;
    //                     case '수박':
    //                         arr = arr.map((item) => item != '🍉' ? '🥦' : item);
    //                         break;

    //                 }
    //             }

    //             arr = temp;
    //             txt1.value = arr.join('');

    //         });

    //     }


    //     temp = arr.join(',') //배열을 문자열로 바꾸고 문자열에서 replace를 적용한뒤 다시 배열로 돌린다.
    //     switch (gubun) {
    //         case '사과':
    //             temp = temp.replaceAll('🍏', '🥕');
    //             break;
    //         case '바나나':
    //             temp = temp.replaceAll('🍌', '🥒');
    //             break;
    //         case '오렌지':
    //             temp = temp.replaceAll('🍊', '🥑');
    //             break;
    //         case '수박':
    //             temp = temp.replaceAll('🍉', '🥦');
    //             break;

    //     }

    //     console.log('temp', temp);
    //     arr = temp.split(',');

    // });







    // arr = temp;
    // text1.value = arr.join('');
    // }












    
});


