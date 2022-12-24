// Если стоит localStorage
if (!localStorage.getItem('isShowedHelloPopup1.7b')) {
  var delay_popup = 1;
  setTimeout(() => document.getElementById('overlayq').style.display = 'block', delay_popup);
}

function closeModal() {
  document.getElementById('overlayq').style.display = 'none';
  let close = document.querySelector('.closeq');    
  if (close.onclick)
    localStorage.setItem('isShowedHelloPopup1.7b', 1);
}
