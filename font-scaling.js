addEventListener("DOMContentLoaded",() =>{

    const chosenFile = document.getElementById("file-input")
    
    chosenFile.addEventListener("change",function(){
        if(chosenFile.files.length > 0){
            console.log(chosenFile.files[0].name);
        }

    })





})