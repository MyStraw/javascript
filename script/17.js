document.addEventListener("DOMContentLoaded", () => {

    const sel1 = document.querySelector('#sel1'); //셀렉터 받아와
    const sel2 = document.querySelector('#sel2');

    const d1 = document.querySelector('#d1');
    const d2 = document.querySelector('#d2');

    const t1 = document.querySelector('#t1');
    const t2 = document.querySelector('#t2');




    //단위표시

    d1.textContent = sel1.value;
    d2.textContent = sel2.value;


    //select 값이 변경이 될때 html로 말고 이벤트로
    //change가 아니고 input을 써야한다. 이벤트 명령어


    sel1.addEventListener('change', (event) => {
        
        t1.value = '';
        t2.value = '';

        //

        if (sel1.value == '℃' ){
            sel2.value = '℉' ;
        }
        else if (sel1.value == '℉'){
            sel2.value = '℃';
        }

        d1.textContent = sel1.value; // = event.target.value -> 순서 꼬이네 이거쓰니까.
        d2.textContent = sel2.value; // = event.target.value

    });


    sel2.addEventListener('change', (event) => {       
        t1.value = '';
        t2.value = '';

        if (sel2.value == '℃' ){
            sel1.value = '℉';
        }

        else if (sel2.value == '℉'){
            sel1.value = '℃';
        }       
        
        d1.textContent = sel1.value; // = event.target.value
        d2.textContent = sel2.value; // = event.target.value
    });


    //input에 값이 입력되었을때
    t1.addEventListener('input', (event) => {
        // console.log(event.target.value);

        if (sel1.value == sel2.value) {
            t2.value = t1.value
        }
        else if (sel1.value == '℃' && sel2.value == '℉') {
            //섭씨온도->화씨온도
            t2.value = (t1.value * (9/5))+32;

        }
        else if (sel1.value == '℉' && sel2.value == '℃') {
            //섭씨온도->화씨온도
            t2.value = (t1.value -32)*(5/9);
        }


    });




});