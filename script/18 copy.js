const palindrome = (t1, t2) => {
    console.log('palindrome');

    let s = t1.value;
    console.log('s')
       

    if (s.length == 0) {
        document.querySelector("h2").textContent = '단어를 입력하세요';
        return;
    };

    for (let i = s.length - 1; i >= 0; i--) {
        rs = rs + s[i];
    }
    console.log("s=", s, "rs=", rs);


    let rs ='';

    //방법1
    for(let i = s.length -1; i>=0 ; i--){
        rs = rs+ s[i]; 
    }
  
     console.log("s=",s, "rs=", rs);



    if (s == rs) {
        t2.value = "회문입니다.";
        document.querySelector("h2").textContent = '오홍~회문이구려~';

    }
    else {
        t2.balue = "회문이 아닙니다.";
        document.querySelector("h2").textContent = '엫헿~회문이 아니네';
    }

};


const numSum = (t1, t2) => {
    console.log('numSum');

};


document.addEventListener("DOMContentLoaded", () => {


    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2");


    const bts = document.querySelectorAll(".bt");


    for (let bt of bts) {

        bt.addEventListener('click', (event) => {
            
            let gubun = bt.getAttribute('id').slice(-1);
            if (gubun === '1') palindrome(txt1, txt2);
            else numSum();

        });

    }

})