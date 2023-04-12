//버튼에 이벤트 다는법
//돔이 로드가 되면 이벤트를 추가=> 그 이벤트를 펑션으로 넣어= 콜백함수
document.addEventListener("DOMContentLoaded", () => { //"돔이 만들어지면 이 이벤트를 하겠다"
    const bt1 = document.querySelector('#bt1'); //버튼 자체를 변수로 집어왔다

    bt1.addEventListener('click', () => { //클릭을 하면 이 이벤트를 하겠다.

        event.preventDefault(); //16에서 그대로 복붙

        let n = Math.floor(Math.random() * 6) + 1;
        console.log(n);

        let user;

        const radios = document.querySelectorAll('input[type=radio]');
        console.log(radios);


        for (let item of radios) {
            console.log(item);
            if (item.checked) {
                user = item.value;
                break;
            }
        }

        if (n === parseInt(user)) {
            document.querySelector('article h1').textContent = '주사위게임 : 맞음(승)'
        }
        else {
            document.querySelector('article h1').textContent = '주사위게임 : 틀림(패)'
        }

        document.querySelector(".h2Class").innerHTML = `<img src='../img/${n}.png'>`;
    });
});