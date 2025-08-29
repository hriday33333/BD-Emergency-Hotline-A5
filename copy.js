
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
  


