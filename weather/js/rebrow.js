// document.querySelectorAll('.not-found span').forEach(n => {
//   n.insertAdjacentHTML('afterend','<span id="idf">Попробуйте ещё раз</span>');
// });
// ('#idf').click(function() { location.reload(true);
// });

const product = document.querySelector('.not-found span');
if (product) {
  const button = document.createElement('button');
  button.id = 'b_epr';
  button.innerText = 'Попробуйте еще раз';
  button.addEventListener('click', () => window.location.reload());
  product.insertAdjacentElement('afterend', button);
}
