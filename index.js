// heard icon this
    let counter = 0;

    function heartClick() {
      counter++;            
      document.getElementById('counted').textContent = counter; // দেখাও
    }
  





    // create element this
    let coins = 100; 
document.getElementById("coins-display").innerText = coins;

const cartBtn = document.getElementsByClassName('card-btn');

for (let cartButton of cartBtn) {
  cartButton.addEventListener("click", function () {
    if (coins >= 20) { 
      coins -= 20;
      document.getElementById("coins-display").innerText = coins;
      let subTitle = cartButton.parentNode.parentNode.children[2].innerText;
      let subNum = cartButton.parentNode.parentNode.children[3].innerText;

      alert(`✔ Call Done!
Subtitle: ${subTitle}
Number: ${subNum}`);



      let textTitle = cartButton.parentNode.parentNode.children[1].innerText;
      let textNumber = cartButton.parentNode.parentNode.children[3].innerText;

      
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes().toString().padStart(2, '0');
      let seconds = now.getSeconds().toString().padStart(2, '0');
      let ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      hours = hours.toString().padStart(2, '0');
      let currentTime = `${hours}:${minutes}:${seconds} ${ampm}`;

      let cartContainer = document.getElementById('cart-container');
      let newCart = document.createElement("div");
      newCart.innerHTML = `
         <div class="md:p-5 p-3">
          <div class="md:bg-gray-200 md:p-2 p-1 md:shadow-lg md:shadow-gray-500 md:rounded-[10px] rounded-[10px] bg-gray-200">
            <h1 class="md:text-lg md:font-bold font-bold text-sm">${textTitle}</h1> 
            <div class="md:flex justify-between flex items-center">
              <h4 class="md:font-semibold font-semibold">${textNumber}</h4>
              <h3 class="text-sm">${currentTime}</h3>  
            </div>
          </div>
        </div>`;
      cartContainer.append(newCart);
    } else {
      alert("❌ আপনার পর্যাপ্ত কয়েন নেই কল করতে কমপক্ষে ২০কয়েন লাগবে");
    }
  });
}


document.getElementById('clear').addEventListener('click', function () {
  let cartContainer = document.getElementById('cart-container');
  cartContainer.innerHTML = "";
});



// copy past function

    let copyCount = 0;
    const counterDiv = document.getElementById('counter');
    
    const buttons = document.getElementsByClassName('btn');

    for (const button of buttons) {
      button.addEventListener('click', () => {
        const card = button.closest('.card');
        const text = card.getElementsByClassName('text-to-copy')[0].textContent;

        navigator.clipboard.writeText(text)
          .then(() => {
            copyCount++; 
            counterDiv.textContent =  copyCount;
            
            alert('নম্বর কপি হয়েছে: ' + text);
          })
          .catch(err => {
            console.error('কপি করতে ব্যর্থ:', err);
          });
      });
    }
  

