let drinksNum = 1;
let deleteBtns = [document.getElementById('deleteBtn1')];
let addDrinkBtn = document.getElementById("add-drink");
let drinks = [new Drink()];

addDrinkBtn.addEventListener("click", addDrink, false);

//Конструктор напитка
function Drink(){
    this.drink = 'Капучино';
    this.milk = 'обычное';
    this.options = [];
}

//Добавляем ещё одно окно выбора напитка
function addDrink(){
    let el = document.getElementById("forms");

    drinksNum++;

    let form = document.createElement( 'div' );
    form.innerHTML = `<fieldset class="beverage" id="case` + drinksNum + `">
                <h4 class="beverage-count">
                    <span class="drinkNum">Напиток №` + drinksNum + `</span><img src="https://img.icons8.com/metro/26/000000/close-window.png" class="deleteBtn" onclick="deleteDrink(` + drinksNum + `);"/>
                </h4>
                <label class="field">
                    <span class="label-text">Я буду</span>
                    <select>
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
                <div class="field">
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
            </fieldset>`;

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
    drinksNum--;
    renameDrinks();
}

//Функция для переименования номера всех напитков
function renameDrinks(){
    let cases = document.getElementsByClassName('drinkNum');
    let beverages = document.getElementsByClassName('beverage');
    let deleteBtns = document.getElementsByClassName('deleteBtn');
    let form = document.getElementById('form');

    console.log(cases.length);

    for(let i = 0; i < cases.length; i++){
        cases[i].innerHTML = 'Напиток №' + (i+1);
        beverages[i].id = 'case' + (i+1);
        //deleteBtns[i].onclick = deleteDrink(i + 1);

        //переименуем настройки
        for(let j = 2; j<6;j++){
            form.elements[j+(i*10)].name = 'milk'+(i+1);
            form.elements[(j+4)+(i*10)].name = 'options'+(i+1);
        }
    }

    drinksNum = cases.length;

    console.log(form.elements);
}

//Обработка формы
function submitBtn(){
    
    changeSubmitText(document.getElementById('modalText'));
    let modal = document.getElementsByClassName('modal-container');
    modal[0].style.display = 'block';

    //напитки
    for(let i = 0; i < drinksNum; i++){
        let radio = document.getElementsByName('milk1');
    }
}

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