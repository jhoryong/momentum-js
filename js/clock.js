const clock = document.querySelector('#clock');
let isHour12 = false;

function getTime() {
  const date = new Date();
  let dateStr = ''
  if (isHour12) {
    dateStr = date.toLocaleTimeString('ko-KR', 
    { hour12: true});
  }
  else {
      dateStr = date.toLocaleTimeString('ko-KR', 
      { hour12: false, timeStyle:"medium" })
  }
  //console.log(date);
//   const hours = String(date.getHours()).padStart(2, '0');
//   const minutes = String(date.getMinutes()).padStart(2, '0');
//   const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.textContent = dateStr;
  clock.classList.remove('fade-out');
  clock.classList.add('fade-in')
}

function changeTimeFormat(event) {
  event.preventDefault();
  isHour12 = isHour12 ? false : true;
  clock.classList.add('fade-out');
}

getTime();
setInterval(getTime, 1000);

clock.addEventListener('click', changeTimeFormat);
