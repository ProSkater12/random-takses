/*
    В этом задании нельзя менять разметку, только писать JS-код в этом файле.
 */

/**
*   1. Удали со страницы элемент с id "deleteMe"
**/
let el_delete = document.getElementById('deleteMe');
el_delete.remove();

/**
 *  2. Сделай так, чтобы во всех элементах с классом wrapper остался только один параграф,
 *  в котором будет сумма чисел из всех параграфов.
 *
 *  Например, такой элемент:
 *
 *  <div class="wrapper"><p>5</p><p>15</p><p>25</p><p>35</p></div>
 *
 *  должен стать таким
 *
 *  <div class="wrapper"><p>80</p></div>
 */

let elements = document.getElementsByClassName('wrapper');

for(let i = 0; i < elements.length; i++){
  let numbers = elements[i].innerText.split('\n');
  let result = numbers.reduce(function(sum, current) {
  return Number(sum) + Number(current);
  }, 0);
  elements[i].innerText = result;
}

/**
 *  3. Добавь обработчик события клика на элемент кнопки с классом button. Обработчик должен выводить
 *  в консоль текст "Кнопка нажата {количество} раз". В тексте должно быть количество нажатий кнопки, которое
 *  инкрементируется при каждом нажатии. Соответственно, в первый раз будет выведено "Кнопка нажата 1 раз", на
 *  следующий: "Кнопка нажата 2 раз".
 *
 *  3.1 *Необязательное дополнение к задаче 3. Добавь склонение в текст, выводимый в консоль. Чтобы слово «раз»
 *  склонялось в зависимости от количества. "Кнопка нажата 1 раз", "Кнопка нажата 2 раза", "Кнопка нажата 15 раз"...
 */

 let count = 1;
 let btn = document.getElementsByClassName('button');
 btn[0].onclick = function(event) {
   console.log('Кнопка была нажата ' + count + ' раз');
   count++;
 };

/**
 *  4. Сделай так, чтобы клик по ссылкам на странице никуда не вел
 *  (но, чтобы возможность скопировать ссылку или открыть в отдельной вкладке сохранилась).
 * */
 let aTags = document.getElementsByTagName('a');
 for(let i = 0; i < aTags.length; i++){
   aTags[i].onclick = () => {
     return false;
   }
 }


/**
 *  5. Сделай так, чтобы на потерю фокуса поля ввода с классом input,
 *  выводился alert с текстом: "Ты точно сказал все, что хотел?"
 */

 let inpt = document.getElementsByClassName('input');
 inpt[0].addEventListener("blur", () => { alert('Все сказал, мудила?'); }, true);

/**
 *  6. Напиши код, который при клике на любом элементе внутри блока с классом "container" выведет в консоль название
 *  тега этого элемента. То есть, при клике на параграф, в консоль должно вывестить "P", при клике на div — "DIV"
 */

 let container = document.getElementsByClassName('container');
 container[0].onclick = function(event){
   let target = event.target; // где был клик?
   console.log(target.nodeName);
 }

