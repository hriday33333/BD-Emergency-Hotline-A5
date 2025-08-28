const cartBtn = document.getElementsByClassName('card-btn');
console.log(cartBtn)

for(let cartButton of cartBtn) {
    cartButton.addEventListener("click", function () {
        let textTitle = cartButton.parentNode.parentNode.children[1].innerText;

        let textNumber = cartButton.parentNode.parentNode.children[3].innerText
        
        const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let currentTime = `${hours}:${minutes}:${seconds}`;
        let cartContainer = document.getElementById('cart-container');
        let newCart = document.createElement("div");
        newCart.innerHTML =`
           <div class="md:p-5 p-3">
                    <div class="md:bg-gray-200 md:p-2 p-1 md:shadow-lg md:shadow-gray-500 md:rounded-[10px] rounded-[10px] bg-gray-200">
                        <h1 class="md:text-lg md:font-bold font-bold text-sm">${textTitle}</h1> 
                        <div class="md:flex justify-between flex items-center">
                            <h4 class=" md:font-semibold font-semibold">${textNumber}</h4>
                            <h3 class="text-sm">${currentTime}</</h3>
                        </div>
                    </div>
                </div>`;
                cartContainer.append(newCart)
    })
}


document.getElementById('clear').addEventListener('click', function(){
    let cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = "";
})