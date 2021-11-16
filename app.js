const addTodo = document.querySelector('.add');
const list=document.querySelector('ul')
const searchTodo =document.querySelector('.search input')
const editTodo =document.querySelector('.input')
const plusTodo =document.querySelector('.plus')

const todoTemplate=(newTodo)=>{
        let html =`<li class=" list-group-item d-flex justify-content-between align-items-center">
        <span>${newTodo}</span>
    
        <i class="far fa-edit edit"></i>
        <i class="far fa-trash-alt delete"></i>
        
    </li>`
    list.innerHTML+=html
}

//ADDING OF TODO

addTodo.addEventListener('submit', (e)=>{
    e.preventDefault();
    const newTodo=addTodo.add.value.trim()
    if(newTodo.length){
        todoTemplate(newTodo)
        addTodo.reset()
    }
});
    plusTodo.addEventListener('click', ()=>{
        const newTodo=addTodo.add.value.trim()
        if(newTodo.length){
            todoTemplate(newTodo)
            addTodo.reset()
        }
    })

//DELEGATION OF TODO
list.addEventListener('click' , e=>{
  if(e.target.classList.contains('delete')){
      e.target.parentElement.remove();
  }
})

//EDITTING OF TODO

list.addEventListener('click' ,e=>{
    if(e.target.classList.contains('edit')){
         editTodo.value=e.target.parentElement.textContent
         e.target.parentElement.remove()

    }
      
})

//SEARCHING OF TODO
const filterTodo=(search)=>{
   Array.from(list.children)
     .filter((todo)=>{
         return !todo.textContent.toLowerCase().includes(search)
     }).forEach((todo)=>{
         return todo.classList.add('filtered')
     }) 
     Array.from(list.children)
     .filter((todo)=>{
         return todo.textContent.toLowerCase().includes(search)
     }).forEach((todo)=>{
         return todo.classList.remove('filtered')
     })                
     
};


searchTodo.addEventListener('keyup', ()=>{
    const search=searchTodo.value.trim().toLowerCase()
    filterTodo(search)
})


