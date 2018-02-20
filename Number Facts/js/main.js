//Add listeners
document.getElementById('numberInput').addEventListener('input', getFact)
document.getElementById('type').addEventListener('change', getFact)

//Handle event
function getFact(e) {
  const number = document.getElementById('numberInput').value;
  const type = document.getElementById('type').value;
  const url = 'http://numbersapi.com/'+number+'/'+type;

  fetch(url)
    .then(response => response.text())
    .then(data => document.getElementById('fact').innerText = data)
    .catch(error => console.log(error));
}
