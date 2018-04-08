require('../scss/form.scss');
(function(){
  const form = document.getElementById('test-form');
  form.addEventListener('submit', (evt)=> {
    evt.preventDefault();
    form.reset();
  });
})();
