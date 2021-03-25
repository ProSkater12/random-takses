let drinksNum = 1;
let deleteBtns = [document.getElementById('deleteBtn1')];
let addDrinkBtn = document.getElementById("add-drink");
let drinks = [new Drink()];

init();

//Конструктор напитка
function Drink(){
    this.drink = 'Капучино';
    this.milk = 'обычное';
    this.options = [];
}

function init() {
    addDrinkBtn.addEventListener("click", addDrink, false);
    document.getElementById("comment1").oninput = function(){
        document.getElementById("commentText1").innerHTML = pickOutWords(this.value);
    }
}

//Добавляем ещё одно окно выбора напитка
function addDrink(){
    let el = document.getElementById("forms");

    drinksNum++;

    let form = document.createElement( 'div' );
    form.innerHTML = `<div class="beverage" id="case` + drinksNum + `"><fieldset>
                <h4 class="beverage-count">
                    <span class="drinkNum">Напиток №` + drinksNum + `</span><img src="https://img.icons8.com/metro/26/000000/close-window.png" class="deleteBtn" onclick="deleteDrink(` + drinksNum + `);"/>
                </h4>
                <label class="field">
                    <span class="label-text">Я буду</span>
                    <select name="drinkName">
                        <option value="espresso">Эспрессо</option>
                        <option value="capuccino" selected>Капучино</option>
                        <option value="cacao">Какао</option>
                    </select>
                </label>
                <div class="field">
                    <span class="checkbox-label">Сделайте напиток на</span>
                    <label class="checkbox-field">
                        <input type="radio" name="milk` + drinksNum + `" value="usual" checked />
                        <span>обычном молоке</span>
                    </label>
                    <label class="checkbox-field">
                        <input type="radio" name="milk` + drinksNum + `" value="no-fat" />
                        <span>обезжиренном молоке</span>
                    </label>
                    <label class="checkbox-field">
                        <input type="radio" name="milk` + drinksNum + `" value="soy" />
                        <span>соевом молоке</span>
                    </label>
                    <label class="checkbox-field">
                        <input type="radio" name="milk` + drinksNum + `" value="coconut" />
                        <span>кокосовом молоке</span>
                    </label>
                </div>
                <div class="field" name="optionsField">
                    <span class="checkbox-label">Добавьте к напитку:</span>
                    <label class="checkbox-field">
                        <input type="checkbox" name="options` + drinksNum + `" value="whipped cream" />
                        <span>взбитых сливок</span>
                    </label>
                    <label class="checkbox-field">
                        <input type="checkbox" name="options` + drinksNum + `" value="marshmallow" />
                        <span>зефирок</span>
                    </label>
                    <label class="checkbox-field">
                        <input type="checkbox" name="options` + drinksNum + `" value="chocolate" />
                        <span>шоколад</span>
                    </label>
                    <label class="checkbox-field">
                        <input type="checkbox" name="options` + drinksNum + `" value="cinnamon" />
                        <span>корицу</span>
                    </label>
                </div>
                <div>
                    <input type="text" class="comment" placeholder="И еще вот что" id="comment`+drinksNum+`"></input>
                    <span class="commentText" id="commentText`+drinksNum+`"></span>
                </div>
            </fieldset></div>`;

            el.appendChild(form);
            renameDrinks();
            drinks.push(new Drink);

            console.log(drinks);
}

function deleteDrink(num) {
    let cases = document.getElementsByClassName('beverage');
    if(cases.length < 2) return false;
    let el = document.getElementById('case' + num);

    el.remove();
    drinks.splice(drinksNum - 1, 1);
    drinksNum--;
    renameDrinks();
}

//Функция для переименования номера всех напитков
function renameDrinks(){
    let cases = document.getElementsByClassName('drinkNum');
    let beverages = document.getElementsByClassName('beverage');
    let deleteBtns = document.getElementsByClassName('deleteBtn');
    let form = document.getElementById('form');
    let comments = document.getElementsByClassName('comment');
    let commentsText = document.getElementsByClassName('commentText');

    console.log(cases.length);

    for(let i = 0; i < cases.length; i++){
        cases[i].innerHTML = 'Напиток №' + (i+1);
        beverages[i].id = 'case' + (i+1);
        deleteBtns[i].onclick = () => deleteDrink(i + 1);
        comments[i].id = "comment"+(i+1);
        commentsText[i].id = "commentText"+(i+1);

        comments[i].oninput = function(){ 
            commentsText[i].innerHTML = pickOutWords(comments[i].value);            
        }

        //переименуем настройки
        for(let j = 2; j<6;j++){
            form.elements[j+(i*11)].name = 'milk'+(i+1);
            form.elements[(j+4)+(i*11)].name = 'options'+(i+1);
        }
    }

    drinksNum = cases.length;

    console.log(form.elements);
}

//Выделение слов
function pickOutWords(str){
    let regExpBword = /срочно|быстрее|побыстрее|скорее|поскорее|очень нужно/;
    return str.replace(regExpBword, replacer);
}

function replacer(str){
    return '<b>'+str+'</b>';
}

//Обработка формы
function submitBtn(){
    
    changeSubmitText(document.getElementById('modalText'));
    let modal = document.getElementsByClassName('modal-container');
    createOrderTbl();
    modal[0].style.display = 'block';

    //напитки
    for(let i = 0; i < drinksNum; i++){
        let radio = document.getElementsByName('milk1');
    }
}

//Функция написания текста для модального окна в виде "Вы заказали N напитков"
function changeSubmitText(el){
    let text = '';
    switch(drinksNum % 10){
        case 1:
            text = ' напиток';
            break;
        case 2:
        case 3:
        case 4:
            text = ' напитка';
            break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 0:
            text = ' напитков';
            break;
    }
    if(drinksNum > 10 && drinksNum < 20) text = ' напитков'
    el.innerText = 'Вы заказали ' + drinksNum + text;
}

//Функция для составления таблицы заказанных напитков
function createOrderTbl(){
    //let form = document.forms.form;
    let order = document.getElementById('orderTimeText');
    let beverages = document.getElementsByClassName('beverage');

    // create elements <table> and a <tbody>
    let tbl = document.createElement("table");
    tbl.id = 'drinksTbl';
    let tblBody = document.createElement("tbody");

    let info = [['Напиток','Молоко','Дополнительно','Пожелания']];

    let selectDrinkName = document.getElementsByName("drinkName");
    let selectOptions = document.getElementsByName("optionsField");

    //Заполнение инфы
    for(let i = 0; i < beverages.length;i++){
        let arrEl = [];
        //name
        arrEl[0] = selectDrinkName[i].value;
        //milk
        arrEl[1] = document.querySelector('input[name="milk'+(i+1)+'"]:checked').value;
        //options
        let drinkOptionsArr = selectOptions[i].querySelectorAll('input[name="options'+(i+1)+'"]:checked');
        console.log(drinkOptionsArr);
        arrEl[2] = '';
        for(let j = 0; j < drinkOptionsArr.length; j++){
            if(drinkOptionsArr[j].value) arrEl[2] += drinkOptionsArr[j].value + "; ";
        }
        //arrEl[2] = `document.querySelector('input[name="options'+(i+1)+'"]:checked').value`;
        //textarea
        arrEl[3] = document.getElementById('comment'+(i+1)).value;
        //arrEl.push();

        info.push(arrEl);
    }

    console.log(info);

    let header = document.createElement("tr");
    for (let i = 0; i < 4; i++) {
        let headerCell = document.createElement("th");
        let headerCellText = document.createTextNode(info[0][i]);
  
        headerCell.appendChild(headerCellText);
        header.appendChild(headerCell);
      }
      tbl.appendChild(header);

    // cells creation
  for (let j = 0; j <= document.getElementsByClassName('beverage').length - 1; j++) {
    // table row creation
    let row = document.createElement("tr");

    for (let i = 0; i < 4; i++) {
      // create element <td> and text node 
      //Make text node the contents of <td> element
      // put <td> at end of the table row
      let cell = document.createElement("td");
      let cellText = document.createTextNode(info[j + 1][i]);

      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    //row added to end of table body
    tblBody.appendChild(row);
  }

  // append the <tbody> inside the <table>
  tbl.appendChild(tblBody);
  // put <table> in the <body>
  order.before(tbl);
  // tbl border attribute to 
  tbl.setAttribute("border", "2");
}

//Проверка времени
function checkTime(){
    let dataInput = Date.parse(document.getElementById('orderTime').value);
    if(!dataInput) { alert('Выберите время заказа'); return 0; }
    if(new Date() > dataInput) { alert('Мы не умеем перемещаться во времени. Выберите время позже, чем текущее'); } else {
        document.getElementsByClassName('modal-container')[0].style.display = 'none'; 
        document.getElementById('drinksTbl').remove();
    }
}
