document.addEventListener("DOMContentLoaded", () => { //이번엔 버튼 눌릴때마다 사진 한방에 다 넣고싶다.


    const bts = document.querySelectorAll('button'); //쿼리셀렉터 all 하니 배열을 1개씩 다 가져와야해. 배열을 순회하는 방법에 대해 알아보자. 버튼에. 배열된거 가져오기.
    console.log(bts);

    // document.querySelector('#h2Id').textContent = bts.textContent; 배열 처음부터 돌아야 하니 반복문


    //case1 정석

    //     for (let i = 0; i < bts.length; i++){
    //         console.log(bts[i].textContent) ; 

    // }); //콘솔에 4개 다 가져온다. 콘솔창(f12) 보면서 해. '.textContent' 없으면 <button>사과</button> 이렇게 4개를 다 가져오는데 textContent 하면 글자만 가져온다.        
    // }



    //case2

    // bts.forEach((item) => {
    //     console.log(item.textContent); //배열에 있는거 한개씩 한개씩 갖고와.
    // });

    // bts.forEach((item,idx) => { //foreach는 함수가들어가야한다.
    //     console.log(idx, item.textContent);  //idx까지 하면 첨삭(번호)까지 가져올수있다.
    // }); 



    // case3 
    //for in :파이썬은 이게 제일 강하다. js에선 별로 추천 안해용
    
    // for (let idx in bts) {
    //     console.log(bts[idx].textContent);
    // }



    //case4 
    //for of
    
    // for(let item of bts) {
    //     console.log(item.textContent); 콘솔창에 띄우셈
    // }


    for(let item of bts) {          

        // <ul>안에 넣는법 뭘까용~?</ul>

    let apple = 
    
    `<li>${item.textContent}</li>`

    document.querySelector("#hoho").innerHTML = apple


    // ul 안에 li 로 4개 반복.
    // 안에 내용은 빽틱으로.



    
    // for(let [k,v] of bts.entries()) {
    //     console.log(k, v.textContent);
    // }

    

    




}});
