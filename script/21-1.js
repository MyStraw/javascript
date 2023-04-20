const funB = () => {
    console.log('funcB');
}

document.addEventListener("DOMContentLoaded", () => {//원래 위에서부터 순서대로 시행하는데, 이걸 시간이 걸리게. 콘솔에 A,B,C 뜨는걸
    //   console.log('A');
    //funB();
    //   console.log('C');
    setTimeout(() => { //무한으로 이런식으로 찍을구야? -> promise를 만들었다. 상태를 자기가 제어. 보내고 응답오면 then. 오류나면 catch. 패치는 promise 형태로 반환.
        console.log('A'); //A C B 가 찍힌다. 1초 후에 B를 찍는다. 시간이 걸리면 나머지껄 먼저 한다. 이게 비동기. Ajax. 순서대로 안된다. 답이 안오면 다른거 먼저함.//콜백 지옥 ABC를 순서대로 할때.
        setTimeout(() => {
            console.log('B');
            setTimeout(() => {
                console.log('C');
            }, 500);
        }, 1000);
    }, 700);

})