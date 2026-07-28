const randomcolor = () => {
  const hex = "0123456789ABCDEF"
  let color = "#"
   for(let i = 0; i < 6; i++){
  color += hex[Math.floor(Math.random() * 16)]
  }
  return color
};
let intervalId;
const startcolor = function(){ 
if(intervalId == null){
  intervalId = setInterval(changebcColor, 1000)
  function changebcColor() { 
    document.body.style.backgroundColor = randomcolor();
}
   }
 }
const stopcolor = function(){ 
  clearInterval(intervalId)
  intervalId = null
 }

document.querySelector('#start').addEventListener('click', startcolor)

document.querySelector('#stop').addEventListener('click', stopcolor)