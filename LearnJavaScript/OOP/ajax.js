console.log('Ajax tutorial');

let fruitsBtn = document.getElementById('fruitsBtn');
fruitsBtn.addEventListener('click', fruitsBtnHandler);

function fruitsBtnHandler() {
    // console.log('button handler clicked');

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://127.0.0.1:5500/fakedata.json', true);
    xhr.getResponseHeader('Content-type', 'application/json');

    xhr.onprogress = function () {
        console.log('On progress');
    }

    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj){
                str += `<hr>
                        FruitName: <li style="list-style: none;"> ${obj[key].fruitName}</li>
                        Price :<li style="list-style: none;"> ${obj[key].price}</li>
                        <hr>`;
                list.innerHTML = str;
            }
        }
        else {
            console.log('This is an error');
        }
    }
    xhr.send();
    console.log('we are done')
}