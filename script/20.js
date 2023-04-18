document.addEventListener('DOMContentLoaded', () => {
    const boxs = document.querySelectorAll('.box');
    const bt1 = document.querySelector('#bt1');

    //초기배열 : 1이 폭탄 위치(랜덤수로 해도 된다. 배열말고)
    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1];
    let flag = true;//true가 아니면 버튼 안눌러지게.클릭확인
    let cnt = 0; // 8개눌릴때까지 폭탄 안나오면 마지막은 안눌러도 폭탄. 하트개수
    let selarr = []; //눌러진순서.

    //폭탄 섞기 버튼
    bt1.addEventListener('click', () => {
        if (flag) {
            arr.sort(() => Math.random() - 0.5); //sort를 이용해서 셔플을 해주더라. 이건 인터넷등에서 찾아쓰기
            console.log(arr);
            flag = false;
        }
        
    });

    //div 박스 제어
    for (let box of boxs) { //박스 다 집어왔으니 각 클릭이벤트 달아주믄 되네
        //박스 번호 넣기
        //box.innerHTML = box.getAttribute('id').slice(-1); //숫자를 js로 적을수있다. 맨끝에 있는 글씨만 갖고오고싶다. replace도 가능.
        box.innerHTML = box.getAttribute('id').replace('box', ''); // 10 넘어가는거면 리플레이스가 더 좋겠지?

        //박스 클릭이벤트 처리
        box.addEventListener('click', ()=>{
            //let n = parseInt(box.getAttribute('id').replace('box', ''));
            let n = parseInt(box.textContent);
            console.log('n=',n);

            //폭탄 하트 구분
            if (arr[n-1] == 0) {
                //하트
                box.innerHTML = '<img src="./img/hart-nu.png">'
                
            }
            else{
                //폭탄
                box.innerHTML = '<img src="./img/boom-nu.png">'
            }



        });
        

    }




});