
const show = () => {
    event.preventDefault(); //폼 재 렌더링 안되게 막는거. 새페이지 막기

    //랜덤수 생성

    let n = Math.floor(Math.random() * 6) + 1; //1부터 5.xxx 다 버리고 1 더하기

    document.querySelector(".h2Class > img").setAttribute("src", `./img/${n}.png`)

}


//어트리뷰터 이용해서 src 속성을 바꾸기로 주사위 사진변경하기