const list_container = document.querySelector('.list_container');
const user_input = document.querySelector('.add_input');
const user_form = document.querySelector('.add_form');
const search_input = document.querySelector('#search_input');

// Add Item Function
const add_item = (item)=>{
    const new_item = `<li class="todo_item">
                        <span>${item}</span>
                        <i class="fas fa-trash-alt"></i>
                     </li> `
    list_container.innerHTML+=new_item;
};


user_form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const user_input =user_form.add_input.value;
    if(user_input){
        add_item(user_input);
        user_form.reset();
    }
   
});

// Delete Event 

list_container.addEventListener('click',(e)=>{
    // console.log(e.target);
    if(e.target.classList.contains("fa-trash-alt")){
        e.target.parentElement.remove();
    }
});




// Search function
const search_list = (search_item) =>{
    var arr = Array.from(list_container.children);
    filtered_Array = arr.filter((array_item)=>{
        if(!(array_item.textContent.toLowerCase().includes(search_item))){
            return array_item
        }
    });
    mapped = filtered_Array.map((item)=>{
        item.classList.add("hidden");
    });

    arr = Array.from(list_container.children);
    filtered_Array = arr.filter((array_item)=>{
        if((array_item.textContent.toLowerCase().includes(search_item))){
            return array_item
        }
    });
    mapped = filtered_Array.map((item)=>{
        item.classList.remove("hidden");
    });

   
};

// Search event
search_input.addEventListener("keyup",e=>{
    user_search = e.target.value.trim().toLowerCase();
    console.log(user_search)
    search_list(user_search);
});