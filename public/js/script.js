console.log("hola")
document.querySelectorAll('.dropdown-button').forEach(button => {
    console.log(button)
    button.addEventListener('click', function() {
        const dropdownContent = this.nextElementSibling;
        dropdownContent.classList.toggle('show');
        dropdownContent.style.maxHeight = dropdownContent.classList.contains('show') 
        console.log(dropdownContent)
        ? dropdownContent.scrollHeight + 'px' 
            : null;
    });
});