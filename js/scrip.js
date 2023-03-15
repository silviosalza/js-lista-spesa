const elementList = document.querySelector(".list")

const shopList = ["Latte" , "Pane" , "Acciughe" , "Uranio" , "Sale grosso" , "Linguine"] 

let i = 0
let updateList = ""
while (i < shopList.length){

    const item = shopList[i]
    updateList += `<li>${item}</li>`
    i++
    console.log(updateList);
}


elementList.innerHTML = updateList
