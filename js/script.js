document.querySelector('.switch input').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
});