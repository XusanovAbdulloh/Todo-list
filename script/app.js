const todolistForm = document.querySelector("#todolist-form")
const todolistFormInput = document.querySelector("#todolist-adder-input");
const todolistCollection = document.querySelector("#todolist-collection");
const todolistDeleteAll = document.querySelector("#delete-all");
const TdContainer = document.querySelector(".todolist-container")

todolistForm.addEventListener("submit", addTodo)

function addTodo(e){
  e.preventDefault();
  const inputValue = todolistFormInput.value;
  if(inputValue.trim().length >= 3){
    const todolistLi = document.createElement("li");
    todolistLi.className = "collection__item";
    const todolistText = document.createElement("p");
    todolistText.innerText = inputValue;
    todolistLi.appendChild(todolistText);
    todolistCollection.appendChild(todolistLi);
    todolistFormInput.value = '';
    console.log(`${new Date().getHours()} : ${new Date().getMilliseconds()}`)
    
    const btnsDiv = document.createElement("div")
    btnsDiv.className="btns-divv"

    const completeBtn = document.createElement("button")
    completeBtn.className="complete-btn"
    completeBtn.innerText = `Complate`;

    const editBtn = document.createElement("button")
    editBtn.className="editt-btn"
    editBtn.innerText = `Edit`;

    const timeBtn = document.createElement("button")
    timeBtn.className="time-btn"
    timeBtn.innerText = ` ${new Date().getHours()} : ${new Date().getMinutes()}`;
    
    const deleteBtn = document.createElement("button")
    deleteBtn.className="delete-button"
    deleteBtn.innerText = `Delete`;

    todolistLi.appendChild(btnsDiv);

    btnsDiv.appendChild(completeBtn);
    btnsDiv.appendChild(editBtn);
    btnsDiv.appendChild(timeBtn);
    btnsDiv.appendChild(deleteBtn);


    editBtn.addEventListener('click', () => {

      if (todolistText) {
          todolistText.contentEditable = true;
          todolistText.style.backgroundColor = '#cce'
      } 

  });

  completeBtn.addEventListener('click', ()=> {
      todolistText.contentEditable = false;
      todolistText.style.backgroundColor = '#fff'
  })


  deleteBtn.addEventListener('click', () => {

      if (todolistCollection) {
          todolistLi.style.display = 'none'
      } console.log(404);
  });

  

  }
}

const deleteDivEL =document.querySelector(".delete-div")
const yesBtn = document.querySelector(".yes")
const noBtn = document.querySelector(".no")
todolistDeleteAll.addEventListener("click", () => {
  deleteDivEL.style.display= "block"
  TdContainer.style.display= "none"
})
yesBtn.addEventListener("click",() =>{
  todolistCollection.innerHTML = ""
  deleteDivEL.style.display= "none"
  TdContainer.style.display= "block"
})
noBtn.addEventListener("click",() =>{
  deleteDivEL.style.display= "none"
  TdContainer.style.display= "block"
})

const imgEl = document.querySelector(".img");
imgEl.addEventListener("click", ()=>{
    todolistFormInput.value = "";
})

