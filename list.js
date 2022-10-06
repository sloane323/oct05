
const todoButton = document.querySelector("#todoadd");
const todoBoard = document.querySelector("#todoboard");

todoButton.addEventListener("click", addTodo);

function addTodo() {
    const text = todoInput.value
    if(text === "") {
        alert("Enter New Task");
        return;
    }
    

   


    // 새로 요소 생성
    // li , input type="checkbox", textNode, button
    const li = document.createElement("li");
    const textNode = document.createElement("span");
    textNode.innerHTML=text;
    const button = document.createElement("button");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";


    li.appendChild(button);
    button.innerHTML ='x';
    li.appendChild(checkbox);
    li.appendChild(textNode);
    todoBoard.append(li);
    todoInput.value="";



// check 박스를 눌렀을때 이벤트 리스터 실행 : click 
checkbox.addEventListener("click" , todoCheck);
// x 버튼을 눌렀을때 이벤트 리스너 실행 : click
button.addEventListener("click", todoDelete);
}

// 체크박스 이벤트 리스너에 들어가는 함수 
function todoCheck(e) {
    const li = e.target.nextElementSibling;
    if (e.target.checked) 
    {li.style.color = "lightgray";
    li.style.textDecoration = "line-through";}

    else 
       
     {   li.style.color = "black";
     li.style.textDecoration = "none";
    }
}

document.getElementById('select').onclick  = function() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    document.getElementById('musthave').innerHTML = (checkboxes.length); }
    setInterval(function () { 
        // 버튼 자동 재상 
        document.getElementById('select').onclick();
    }, 100);



// x 버튼 이벤트 리스너에 들어갈 함수
function todoDelete (e){
    //li 요소를 삭제
    const li = e.target.parentNode;
    li.remove(); 
}

function getTodayLabel() {
    var week = new Array('SUN','MON','TUE','WED','THU','FRI','SAT');
    var today = new Date().getDay();
    var todayLabel = week[today];
    return todayLabel;}

    const daybig = document.querySelector("#daybig");

    daybig.innerHTML= getTodayLabel();
    setInterval(()=>{daybig.innerHTML=getTodayLabel();},100);
    

    const todayd = document.querySelector("#todayd");

    // 현재 시간을 가져 오는 객체
  
    const date = new Date();
    const year2 =  date.getFullYear()
    const month2 = String(date.getMonth()+1).padStart(2, "0");
    const date2 = String(date.getDate()).padStart(2, "0");

    todayd.innerHTML= month2 ;
    todayd2.innerHTML= date2;
    todayd3.innerHTML= year2;


