
document.querySelectorAll('.dropdown-button').forEach(button => {
    button.addEventListener('click', function() {
        const dropdownContent = this.nextElementSibling;
        dropdownContent.classList.toggle('show');
        dropdownContent.style.maxHeight = dropdownContent.classList.contains('show') 
        ? dropdownContent.scrollHeight + 'px' 
            : null;
    });
});

/* ESTE ES EL MISMO CODIGO PERO MAS FACIL DE LEER, LA FUNCION CON EL ? Y LOS : ES DE ORDEN SUPERIOR, ES GUAY PERO PRIMERO VAMOS CON EL JAVASCRIPT BASICO Y MAS FACIL JEJEJE */

/* document.querySelectorAll('.dropdown-button').forEach(button => {
    button.addEventListener('click', function() {
        const dropdownContent = this.nextElementSibling;
        dropdownContent.classList.toggle('show');
        
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px';
        } else {
            dropdownContent.style.maxHeight = null;
        }

        console.log(dropdownContent);
    });
}); */
