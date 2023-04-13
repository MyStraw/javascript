document.addEventListener("DOMContentLoaded", () => {

    const cbt1s = document.querySelectorAll(".cbt1"); //클래스 전부 찾아와
    const cbt2s = document.querySelectorAll(".cbt2");
    const cbt3s = document.querySelectorAll(".cbt3");
    const txt1 = document.querySelector("#txt1");
    const btReset = document.querySelector("#btReset");

    //배열의 초기화

    let arr = [];

    //버튼 이벤트 추가
    //리셋기능 구현. html 에서 타입으로 리셋시키면 내용만 날라가지 배열이랑 지금까지 써놓은게 그대로 남아있다. 다음거 눌리면 연이어서 다시 다 나와.
    //배열까지 전부 리셋시키기 위해.

    btReset.addEventListener('click', (event => {
        event.preventDefault();
        txt1.value = '';
        arr = [];
    }))

    //배열에 자료 추가
    for (let cbt1 of cbt1s) {
        cbt1.addEventListener('click', (event) => {
            event.preventDefault();
            //  console.log(cbt1.textContent) //클릭시 콘솔창에 textcontent 가져오는것까지. 아직 사용자화면엔 아무것도표시 안됨.

            switch (cbt1.textContent) {
                case '사과':
                    arr.push('🍏');
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
            console.log(arr);
            txt1.value = arr.join(''); // 혹은 arr.toString(); 윈도우 + . = 이모지~
        });
    }




    //배열에 자료 삭제

    for (let cbt2 of cbt2s) {
        cbt2.addEventListener('click', () => { });

    }

    for (let cbt3 of cbt3s) {
        cbt3.addEventListener('click', () => { });

    }



})