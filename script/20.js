document.addEventListener('DOMContentLoaded', () => {
    const boxs = document.querySelectorAll('.box'); // 쿼리셀렉터 all 했으니 배열이 된다
   
    const bt1 = document.querySelector('#bt1');

    //초기배열 : 1이 폭탄 위치(랜덤수로 해도 된다. 배열말고)
    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1];
    let flag = true;//true가 아니면 버튼 안눌러지게.클릭확인
    let cnt = 0; // 8개눌릴때까지 폭탄 안나오면 마지막은 안눌러도 폭탄. 하트개수
    let selarr = []; //눌러진순서를 다시 배열에 넣어.

    //폭탄 섞기 버튼
    bt1.addEventListener('click', () => {
        if (flag) {
            arr.sort(() => Math.random() - 0.5); //sort를 이용해서 셔플을 해주더라. 이건 인터넷등에서 찾아쓰기
            console.log(arr);
            flag = false;
            cnt = 0;
            selarr = []; //배열도 초기화해줘야 되고, cnt도 초기화 해줘야 계속 안올라가.
            document.querySelector('h2').innerHTML = '';
            for (let box of boxs) {
                box.innerHTML = box.getAttribute('id').replace('box', ''); //리셋시키는거.
            }
           
            
        }

    });

    //div 박스 제어
    for (let box of boxs) { //박스 다 집어왔으니 각 클릭이벤트 달아주믄 되네
        //박스 번호 넣기
        //box.innerHTML = box.getAttribute('id').slice(-1); //숫자를 js로 적을수있다. 맨끝에 있는 글씨만 갖고오고싶다. replace도 가능.
        box.innerHTML = box.getAttribute('id').replace('box', ''); // 10 넘어가는거면 리플레이스가 더 좋겠지?

        //박스 클릭이벤트 처리
        box.addEventListener('click', () => {
            //let n = parseInt(box.getAttribute('id').replace('box', ''));
            let n = parseInt(box.textContent);
            console.log(box.textContent);

            //기존에 하트나 폭탄이 들어있는 경우
            if (isNaN(n)) return; //하트 차있는데 하트 또 누르면 폭탄으로 바뀌는걸 없앰. isNaN은 숫자인지 아닌지 판단하는것. Not a Number. n이 숫자라면 돌아감.

            //폭탄이 눌러지지 않은 경우
            if (!flag) { //플래그 = false 일때만.
                //선택 항목 추가
                selarr.push(n);
                console.log('n=', n, 'selarr=', selarr);
                cnt++;
                console.log("cnt=", cnt);
               


                //폭탄 하트 구분
                if (arr[n - 1] == 0) {
                    //하트
                    box.innerHTML = '<img src="./img/hart-nu.png">';
                    if(cnt == 8){
                        flag = true; //폭탄 찾으면 클릭 눌러지면 안된다.
                    document.querySelector('h2').innerHTML = '성공!!!!';

                    // 1)차집합 이용
                     let lastArr = [1,2,3,4,5,6,7,8,9].filter((item)=>!selarr.includes(item)); // selarr 배열에 포함되지 않은걸 필터.
                     console.log(lastArr[0]) //안눌러진 마지막 숫자. 1개 찾아냈다. 배열에1개 남았으니, 인덱스 0번째가 그 숫자. 지금 if (cnt == 8)인 상태.
                     boxs[lastArr[0]-1].innerHTML = '<img src="./img/hart-nu.png">';//안눌러진 마지막. 이게 무슨말인지??  // 혹은 arr에서 폭탄숫자 어딨는지 찾아내면 되겠네

                    // => 정리. boxs는 쿼리셀렉터All로 정의했으니 배열인 것이다. lastArr은 [1,2,3,4,5,6,7,8,9] 배열중 selarr에 포함되지 않은것을 말한다. selarr은 지금까지 눌러온 숫자들을 다 담고있다.

                    // 예를들어 순서대로 3,4,6,1,2,9,8,5를 눌렀다면 selarr=[3,4,6,1,2,9,8,5] 일것이다. 지금 위 코드들이 if(cnt ==8) 안에서 이뤄지고 있음을 잊어선 안된다. 이미 8개가 들어있어!!
                    // 이중에 [1,2,3,4,5,6,7,8,9]의 배열과 비교해서 selarr에 없는, !selarr을 찾아내면 단 하나의 숫자밖에 안나온다. lastArr[0]=7이다. index 0번은 첫번째를 의미한다. 하나밖에 안남았으니 배열안에 인덱스 0=>첫번째밖에 없지.
                    // boxs[]배열은 제일 위에서 쿼리로 정의했지? 위에서 lastArr[0]=7이라 했으니 맨아래 식. boxs[7-1] -> boxs[6]을 말한다. index 6은 7번째를 가리키고.

                    // 위에서 boxs를 선언했을대 쿼리셀럭터All로 했잖아. 그럼 이건 .box 클래스가 붙은걸 위에서부터 차례대로 가져와서 배열시켰단거지. 대신 값이 없어서 undefined 상태고. 다만 쿼리셀렉터올~은 우리가 아는 배열이라기 보다
                    // NodeList 로서, 웹 페이지에서 여러개의 요소를 선택하거나 찾아서 모아둔것을 말해. 그래서 값이 지정되지 않았을땐 null 값이 아니라 undefined 상태로 저장되어있어. 우리가 아는 배열과 좀 다르지.
                    // 쿼리셀렉터올로 차아온걸 굳이 배열로 따진다면 순서상으로 boxs=[box1, box2, box3, box4, box5, box6, box7, box8, box9]의 자리배치 인것이고, 안에 값은 안들어있으니
                    // boxs = [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined] 인거라고 봐야지

                    // 위에서부터 여기까지 내려오면서, 이젠 boxs안에는 값들이 차있어. cnt가 8까지 왔으니 말이야. 8번 눌렀으니 undefined중 8개는 하트로 가득차있겠지? 그럼 마지막 남은 boxs[6]은 뭘까? 바로 box7 이지. box7은 아직도 비어있는거야.
                    // 뭐가 비어있는지 확인하는 작업이었고, 이젠 발견했으니 그 안을 채워주면 돼.
                    // 그럼 이 빈 box7을 '<img src="./img/hart-nu.png">' 하트로 채워주면 되겠지? 그럼 8번째를 누름과 동시에 마지막 남은 박스도 하트로 채워지게 되는거지. 냐하하

                    // 2)find 이용
                    // let lastn = arr.findIndex((item)=>item == 1);
                    // console.log('find=', lastn);
                    // boxs[lastn].innerHTML = '<img src="./img/hart-nu.png">';
                    }

                }
                else {  //그냥 여기서 else if(arr[n-1] == 1)하믄 하트 눌러도 폭탄 안바뀌게
                    //폭탄
                    box.innerHTML = '<img src="./img/boom-nu.png">';
                    flag = true; //폭탄 찾으면 클릭 눌러지면 안된다.
                    document.querySelector('h2').innerHTML = '실패';
                }
            }

        });

    }
});