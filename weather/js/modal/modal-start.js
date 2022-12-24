// Если стоит localStorage
if (!localStorage.getItem('isShowedHelloPopup1.8b')) {
  var delay_popup = 2;
  setTimeout(() => document.getElementById('overlayqP').style.display = 'block', delay_popup);
}

function closeModal() {
  document.getElementById('overlayqP').style.display = 'none';
  let close = document.querySelector('.closeqP');    
  if (close.onclick)
    localStorage.setItem('isShowedHelloPopup1.8b', 2);
}

