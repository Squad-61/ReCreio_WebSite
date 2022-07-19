var select = document.querySelector('select');

select.addEventListener('change', function(){
    var valor = this.value;
    window.location.href = valor;
});