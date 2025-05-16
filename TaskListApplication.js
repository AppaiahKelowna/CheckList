const enterTask = document.querySelector('.entertask_btn');
const listItemTemplate = document.querySelector('.listItem-template');
const listContainer = document.querySelector('.listItem_container');


enterTask.addEventListener('click', function(e) {
    const container = enterTask.parentElement;
    const input = container.querySelector('.input');

    if (input.value.trim() !== "") {
        const clone = listItemTemplate.content.cloneNode(true);
        const deleteItem = clone.querySelector(".delete_btn");
        const completeTask = clone.querySelector('.checkTask');
        const liItem = clone.querySelector('li');
        liItem.textContent = input.value;

        listContainer.appendChild(clone);
        
        const parentEle = deleteItem.parentElement;
        deleteItem.addEventListener('click',function(e) {
            console.log("deleteItem");
            const liItem = parentEle.querySelector('li');
            listContainer.removeChild(parentEle);
        })
       
        completeTask.addEventListener('click',function(){
            console.log("completeTask")
            const liItem = parentEle.querySelector('li');
            liItem.style.textDecoration = "line-through";
            console.log("Item");
        });
    }
});



