var isStatus=document.querySelector("h5")as HTMLElement




var btn= document.querySelector("#Add")as HTMLElement

var check =0


btn.addEventListener("click",function(){

    if (check == 0){
    isStatus.innerHTML="Friends"
    isStatus.style.color="green"
    btn.innerHTML="Remove Friend"
     check =1
    }else{
        isStatus.innerHTML="Stranger"
    isStatus.style.color="red"
    btn.innerHTML= "Add Friend"

    check=0


    }

})



