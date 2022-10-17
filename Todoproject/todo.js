let input = document.querySelector('.enter-list');
let addbtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

  //add Button Disable

  input.addEventListener ('keyup', () => {
    if(input.value.trim() != 0 ){
        addbtn.classList.add('active')
    } else {
        addbtn.classList.remove('active')
    }
  })

     //add new item to list

     addbtn.addEventListener('click' , () => {
        if (input.value.trim() != 0){
          let newItem = document.createElement('div');
          newItem.classList.add('item');
          newItem.innerHTML = `
          <p> ${input.value} </p>
          <div class="item-btn">
              <i class="fa fa-edit" style="font-size:24px"></i>
              <i class="fa-solid fa-xmark"></i>
         </div>
          `
          tasks.appendChild(newItem);
          input.value = '';
        } else {
          alert('Please Enter a Task')
        }
     })