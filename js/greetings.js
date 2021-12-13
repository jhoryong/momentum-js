const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector('#greeting')

const HIDDEN_CLASSNAME = "hidden"
const FADEIN_CLASSNAME = "fade-in"
const FADEOUT_CLASSNAME = "fade-out"
const USERNAME_KEY = "username"

const savedUsername = localStorage.getItem(USERNAME_KEY);

function changeName(event) {
    event.preventDefault();
    greeting.classList.add(HIDDEN_CLASSNAME)
    // greeting.classList.add(FADEOUT_CLASSNAME)
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(FADEIN_CLASSNAME);
    loginInput.value = savedUsername;
}

// 인사말을 띄우는 함수
function paintGreetings(username){
    const time = new Date();
    const hours = time.getHours();
    let greetings = '';
    // 아침, 점심, 저녁
    if (hours >= 6 && hours < 12) greetings = "좋은 아침입니다, "
    else if (hours >= 12 && hours < 6) greetings = "좋은 오후입니다, "
    else if (hours >= 6 && hours < 24) greetings = "좋은 저녁입니다, "
    else greetings = "좋은 새벽입니다, "
    console.log(hours)
    greeting.textContent = greetings + username + '님.';
    greeting.classList.remove(HIDDEN_CLASSNAME)
    greeting.classList.add(FADEIN_CLASSNAME)
    greeting.addEventListener("click", changeName)
}

// 입력된 이름을 저장하는 함수
function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username)
}

loginForm.addEventListener("submit", onLoginSubmit)

if (!savedUsername) {
    // 저장된 이름이 없다면 
    loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
    // 있다면
    paintGreetings(savedUsername)
}

