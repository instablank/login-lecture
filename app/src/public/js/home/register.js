"use strict"

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),    
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click",register);

function register() { 
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
        confirmPsword: confirmPsword.value,  
    };
    
    //회원가입 버튼이 눌러지면 body에 JSON 형태로 담아서 전달
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json()) // 서버로부터 응답이 오면 json 메서드를 호출해서 프로미스 객체 반환
    .then((res) => { 
        if (res.success) {
            location.href = "/login";        
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("회원가입 중 에러 발생");
    });
}