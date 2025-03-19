const dateText = document.getElementById('date');

const date = new Date();

dateText.innerHTML = `${date.getMonth()+1}/${date.getDate()}`;
