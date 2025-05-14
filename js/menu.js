
function changeActive(curr){
    let types = document.querySelectorAll('button');
    types.forEach(button =>{
        // console.log(button.classList);
        if(button.classList.contains("active")){
            button.classList.remove("active");
        }
    });
    curr.classList.add('active');

    let items = document.querySelectorAll('.item-box');
    if(curr.classList.contains("all")){
        items.forEach(item =>{
            item.style.display = "";
        });
    }else if(curr.classList.contains("espresso")){
        items.forEach(item =>{
            item.style.display = "";
            if(!item.classList.contains("espresso")){
                item.style.display = "none";
            }
        });
    }else if(curr.classList.contains("bread")){
        items.forEach(item =>{
            item.style.display = "";
            if(!item.classList.contains("bread")){
                item.style.display = "none";
            }
        });
    }else if(curr.classList.contains("frappe")){
        items.forEach(item =>{
            item.style.display = "";
            if(!item.classList.contains("frappe")){
                item.style.display = "none";
            }
        });
    }else if(curr.classList.contains("brewed")){
        items.forEach(item =>{
            item.style.display = "";
            if(!item.classList.contains("brewed")){
                item.style.display = "none";
            }
        });
    }
}