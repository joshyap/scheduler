let container = document.getElementById('container');
let currentDay = document.getElementById('currentDay');
let currentTime = document.getElementById('currentTime');
let now = new Date();
// console.log(`hey, ${now.getHours()}`);

currentDay.innerText = `${now.getMonth()}/${now.getDay()}/${now.getFullYear()}`;
currentTime.innerText = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

const createElements = () => {
    // console.log(currentTime.innerText);
    // console.log(currentTime.innerText.substring(0,2));
    // let hour = parseInt(currentTime.innerText.substring(0,1));
    
    for (i = 0; i < 24; i++) {
        let currentHour = currentTime.toString().split(":")[0];
        // console.log(`currentHour is: ${currentHour}`);
        let row = document.createElement('div');
        let col1 = document.createElement('div');
        let col2 = document.createElement('div');
        let col3 = document.createElement('div');
        // add 0 to single digit i values
        (i.toString()).length < 2 ? col1.textContent = `0${i}:00` : col1.textContent = `${i}:00`;
        // style based on current time
        // TESTING
        // console.log(now.getHours());
        // console.log(currentHour);
        if (i < now.getHours()) {
            row.classList.add('past');
        } else if (i === now.getHours()) {
            row.classList.add('present');
        } else {
            row.classList.add('future');
        }
        // TESTING
        // col2.textContent = 'col2 placeholder';
        col3.textContent = 'save';
        row.classList.add('row');
        col1.classList.add('col');
        col2.classList.add('col');
        col2.setAttribute('contentEditable', 'true');
        col3.classList.add('col');
        // col2.addEventListener('click', function(event) {
        //     console.log(event.target.textContent);
        // });
        col3.addEventListener('click', function(e) {
            save(e);
            // let saveTarget = e.target.previousSibling.textContent;
            // console.log(saveTarget);
        });
        container.appendChild(row);
        row.append(col1);
        row.append(col2);
        row.append(col3);    



    }
}

const save = (e) => {
    // console.log('saved');
    let saveTarget = e.target.previousSibling.textContent;
    console.log(saveTarget);
}

// var x = document.getElementById("item2").previousSibling.innerHTML; 
// document.getElementById("demo").innerHTML = x;



// console.log(now.getTime());
createElements();
