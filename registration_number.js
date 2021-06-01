const wrapper = document.querySelector(".wrapper")
const input = document.querySelector("#register");
const buttonElem = document.querySelector("#submit");

buttonElem.addEventListener("click", function(){
    if (input.value != ""){
        let list = document.createElement('ul');
        wrapper.appendChild(list);
        let listItem = document.createElement('li');
        listItem.innerHTML = input.value;
        list.appendChild(listItem);
        input.value = "";
    }
    else{
        errorMsg = document.createElement('p');
        errorMsg.innerHTML = "Input cannot be empty!";
        errorMsg.style.color = "orange";
        wrapper.appendChild(errorMsg);
    }
})