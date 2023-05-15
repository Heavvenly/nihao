document.addEventListener('DOMContentLoaded', function() {
      const input = document.querySelector('#myInput');
      const button = document.querySelector('#myButton');
      const iframe = document.querySelector('#myIframe');

      button.addEventListener('click', function() {
        if (input.value == 'True?' || input.value == 'TRUE?') {
          iframe.style.display = 'inline-block';
        } else{
          alert("Incorrect. Check Spelling & Capitilization (ex. Pooh!)")
        }
      });
    });
