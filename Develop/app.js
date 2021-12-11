let container = document.getElementById('container');
let currentDay = document.getElementById('currentDay');
let currentTime = document.getElementById('currentTime');
let now = new Date();

currentDay.innerText = `${now.getMonth()}/${now.getDay()}/${now.getFullYear()}`;
currentTime.innerText = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

const createElements = () => {    
    for (i = 0; i < 24; i++) {
        let currentHour = currentTime.toString().split(":")[0];        
        let row = document.createElement('div');
        let col1 = document.createElement('div');
        let col2 = document.createElement('div');
        let col3 = document.createElement('div');
        // add 0 to single digit i values
        (i.toString()).length < 2 ? col1.textContent = `0${i}:00` : col1.textContent = `${i}:00`;
        // style based on current time                
        if (i < now.getHours()) {
            row.classList.add('past');
        } else if (i === now.getHours()) {
            row.classList.add('present');
        } else {
            row.classList.add('future');
        }                
        col3.textContent = 'save';
        row.classList.add('row');
        col1.classList.add('col');
        col2.classList.add('col');
        col2.id = `text${i}`;
        col2.setAttribute('contentEditable', 'true');
        col3.classList.add('col');
        col3.addEventListener('click', function(e) {
            save(e);            
        });
        container.appendChild(row);
        row.append(col1);
        row.append(col2);
        row.append(col3);
    }
}

const save = (e) => {
    let task = e.target.previousSibling.textContent;    
    let timeSaveTarget = e.target.previousSibling.previousSibling.textContent;    
    localStorage.setItem(timeSaveTarget, task);
}

const loadSaved = () => {
    document.getElementById('text0').textContent = localStorage.getItem('00:00');    
    document.getElementById('text1').textContent = localStorage.getItem('01:00');
    document.getElementById('text2').textContent = localStorage.getItem('02:00');
    document.getElementById('text3').textContent = localStorage.getItem('03:00');
    document.getElementById('text4').textContent = localStorage.getItem('04:00');
    document.getElementById('text5').textContent = localStorage.getItem('05:00');
    document.getElementById('text6').textContent = localStorage.getItem('06:00');
    document.getElementById('text7').textContent = localStorage.getItem('07:00');
    document.getElementById('text8').textContent = localStorage.getItem('08:00');
    document.getElementById('text9').textContent = localStorage.getItem('09:00');
    document.getElementById('text10').textContent = localStorage.getItem('10:00');
    document.getElementById('text11').textContent = localStorage.getItem('11:00');
    document.getElementById('text12').textContent = localStorage.getItem('12:00');
    document.getElementById('text13').textContent = localStorage.getItem('13:00');
    document.getElementById('text14').textContent = localStorage.getItem('14:00');
    document.getElementById('text15').textContent = localStorage.getItem('15:00');
    document.getElementById('text16').textContent = localStorage.getItem('16:00');
    document.getElementById('text17').textContent = localStorage.getItem('17:00');
    document.getElementById('text18').textContent = localStorage.getItem('18:00');
    document.getElementById('text19').textContent = localStorage.getItem('19:00');
    document.getElementById('text20').textContent = localStorage.getItem('20:00');
    document.getElementById('text21').textContent = localStorage.getItem('21:00');
    document.getElementById('text22').textContent = localStorage.getItem('22:00');
    document.getElementById('text23').textContent = localStorage.getItem('23:00');
}


createElements();
loadSaved();
