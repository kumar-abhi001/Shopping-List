var button = document.getElementById("add");
var ul = document.getElementById("product-list");
var input = document.getElementById("item-name");
var deleteBtn = ul.getElementsByTagName("button");

//applying delete for current delete Button
for(i=0; i<deleteBtn.length; i++){
    deleteBtn[i].addEventListener("click", removeParent);
}

function checkLength(){
    return input.value.length;
}

function addList(){

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.setAttribute("id", input.value);
    ul.appendChild(li);
    li.addEventListener("click", liClick)
    li.innerHTML = li.innerHTML +  "    ";


    var btn = document.createElement("button");
    btn.innerHTML = "Delete";
    li.appendChild(btn);
    
    btn.onclick = removeParent;
    input.value = "";
}

// function for removing the parent element of a list item when delete button is clicked on it
function removeParent () {
    this.parentNode.remove();
    };

function addSubmit(){

        if( checkLength() > 0){
         input.style.borderColor = "black"
         addList();
        }
     
        else{
         input.style.borderColor="red";
        }
     
}

function addKeyPress(event){
        if(event.keyCode === 13 && checkLength() > 0){
         input.style.borderColor = "black";
         addList();
        }
}

/*******************  Adding items to shopping cart ****************/
button.addEventListener("click", addSubmit);
input.addEventListener("keypress", addKeyPress);

var listItem = document.querySelectorAll("li");
for(i=0; i<listItem.length; i++){
    listItem[i].addEventListener("click" , liClick);
}

function liClick(){
       this.classList.toggle('done');
}
