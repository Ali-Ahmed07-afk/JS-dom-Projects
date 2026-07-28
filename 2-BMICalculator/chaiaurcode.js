const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')
  switch(true){
    case (height === "" || height < 0 || isNaN(height)):
    result.innerHTML = `Please Enter a valid height ${height}`
    break;
    case (weight === "" || weight < 0 || isNaN(weight)):
    result.innerHTML = `Please Enter a valid weight ${weight}`
    break;
    default:
    const bmi = (weight / ((height*height)/ 10000)).toFixed(2)
    result.innerHTML = `<span>${bmi}</span>`;
    break;
  }
})