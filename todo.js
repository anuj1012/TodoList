let todoList=[];
displayItems();
function addTodo(){
    let todo =document.querySelector('.todo-input');
     let todoValue=todo.value;
     let todod =document.querySelector('.todo-date');
     let todov=todod.value;
    todoList.push({item:todoValue,dueDate:todov});
    store(todoList);
    todo.value="";
    todod.value="";
    displayItems();
}
function displayItems(){
    let displayElement=document.querySelector('.todo-container');
    let newHtml="";
    for(let i=0;i<todoList.length;i++){
        let {item,dueDate}=todoList[i];
        newHtml+=`
        
        <span class="todo-item">${item}</span>
         <span class="todo-Date">${dueDate}</span>
        <button class="delete-button" onclick="todoList.splice(${i},1);
        store(todoList);displayItems();">Delete</button>
        
        `;
    }
    displayElement.innerHTML=newHtml;
}
function store(value){
    let s=JSON.stringify(value);
    localStorage.setItem('todoList',s);
}
function load(){
    let storedList =localStorage.getItem('todoList');
    if(storedList){
        todoList =JSON.parse(storedList);
    }
    displayItems();
}
window.onload=load;