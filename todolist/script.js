let inputText = document.querySelector('.input')
let addBtn = document.querySelector('.add')
let todolist = document.querySelector('.todolist')


function addChoreToDOM(choreText) {
    
}
addBtn.addEventListener('click', () => {
    const newChore = inputText.value.trim();
    if (newChore) {
        const choreItem = document.createElement('li');
        choreItem.textContent = newChore;

        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete'
        deleteBtn.style.marginLeft = '10px'


        todolist.appendChild(choreItem)
        choreItem.appendChild(deleteBtn)
       
        deleteBtn.addEventListener('click', () =>{
            todolist.removeChild(choreItem);
        }) 

        inputText.value = "";
    } 
})



