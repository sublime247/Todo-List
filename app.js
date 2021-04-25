const addtodo=document.querySelector('.add')
const todolist =document.querySelector('.listtodos')
const search = document.querySelector('.search input')

const Newtodo = (todo)=>{
      const html =  ` <li class=" list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
            </li>`;
    todolist.innerHTML += html;
};

addtodo.addEventListener('submit', e=>{
    e.preventDefault();
    const todo = addtodo.add.value.trim();
    if(todo.length){
        Newtodo(todo);
        addtodo.reset();
    }
    
});
//deleting todos
 todolist.addEventListener('click', e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
 });
 //search option
const filteredTodo=(list)=>{
 Array.from(todolist.children)
 .filter((todo)=>{
     return !todo.textContent.toLowerCase().includes(list);
 }).forEach((todo)=>{
         todo.classList.add('filtered')
 });
 Array.from(todolist.children)
 .filter((todo)=>{
     return todo.textContent.toLowerCase().includes(list);
 }).forEach((todo)=>{
         todo.classList.remove('filtered')
 });
};

 search.addEventListener('keyup' , e=>{
     const list = search.value.trim().toLowerCase();
     filteredTodo(list)
 })