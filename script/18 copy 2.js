const palindrome = (t1, t2)=>{
    console.log('palindrome') ;

    let s = t1.value;
    console.log('s')
    
    if (s.length == 0){ 
        document.querySelector("h2").textContent = '단어를 입력하세요';
        return; 
    } ;

   
    let rs =''; 
   

    //방법2:배열이용
    s = s.split(''); //문자열.split(): 함수는 문자열을 분리자로 매열만듦.
    //공백없이 따옴표두개 붙이면 한글자씩 분리한다.분리자. 쉼표쓰면 쉼표로 분리, ',' 하면 우영우,토마토,사과 입력하면 콘솔에 '우영우', '토마토', '사과' 쉼표로 분리한다. 스플릿의 특징
    s = s.reverse(); //배열.reverse(): 배열의 요소를 뒤집어줌 //s가 뒤집어짐.
    //rs = s.toString(); //배열에 있는것들을 쉼표와함께 붙임. 지금은 쓸거아냐.
    rs = s.join(''); //배열.join():배열의 요소를 문자열로 묶어줌. (',')쉼표로 붙여준다.
    console.log("s=",s, "rs=", rs); //이걸로 콘솔보면 배열이 나온다

    

    
    if(t1.value==rs){ 
        t2.value = "회문입니다."; 
        document.querySelector("h2").textContent = '오홍~회문이구려~'; 
        
    }
    else{
        t2.value = "회문이 아닙니다.";
        document.querySelector("h2").textContent = '엫헿~회문이 아니네';

    }



};


const numSum = (t1, t2) => {
    console.log('numSum') ;

};



document.addEventListener("DOMContentLoaded", () => { 

    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2"); 

    

    const bts = document.querySelectorAll(".bt"); 

    for(let bt of bts){ 
      bt.addEventListener('click', (event)=>{ 
        event.preventDefault(); 
     
        let gubun = bt.getAttribute('id').slice(-1); 
        if (gubun === '1') palindrome(txt1,txt2); 
        else numSum();

       
        
       

      }); 



    }





})