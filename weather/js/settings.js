document.addEventListener('DOMContentLoaded', function() {
    let input = document.querySelector('[name="adress"].t-input.js-tilda-rule');
  
    if (input) {
      input.value = localStorage.getItem("example-nameAdress") || "";
  
      input.addEventListener('input', function() {
        localStorage.setItem("example-nameAdress", this.value);        
      });
    }
  });

