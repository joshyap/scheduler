let container = document.getElementById('container');
let currentDay = document.getElementById('currentDay');
let now = new Date();

currentDay.innerText = `${now.getMonth()}/${now.getDay()}/${now.getFullYear()}`;


for (i = 0; i < 24; i++) {
    let row = document.createElement('div');
    (i.toString()).length < 2 ? row.textContent = `0${i}` : row.textContent = i;
    row.classList.add('row');
    row.addEventListener('click', function() {
        console.log(row.textContent);
    })
    container.appendChild(row);    
}

for (var i = 0; i < 12; i++) {
    console.log(i);
}


