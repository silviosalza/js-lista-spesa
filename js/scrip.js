const elementList = document.querySelector(".list")

const shopList = ["Latte" , "Pane" , "Acciughe" , "Uranio" , "Sale grosso" , "Linguine" ,"Aceto di mele" , "Peperoncino" , "Biscotti" , "Timo" , "Coltello Miracle Blade di Chef Tony" , "Dignità"] 

let i = 0
let updateList = ""
while (i < shopList.length){

    const item = shopList[i]
    updateList += `<li>${item}</li>`
    i++
    console.log(updateList);
}


elementList.innerHTML = updateList
