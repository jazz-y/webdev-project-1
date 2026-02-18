document.querySelector('.switch input').addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', this.checked);
});

document.querySelector('#btn').addEventListener('click', () => {
    const questions = document.querySelectorAll('#quiz > div');
    const answers = [
        questions[0].querySelector('input[type="checkbox"]').checked,
        questions[1].querySelector('input[type="checkbox"]').checked,
        questions[2].querySelector('input[type="checkbox"]').checked,
        questions[3].querySelector('input[type="checkbox"]').checked,
        questions[4].querySelector('input[type="checkbox"]').checked
    ];

    // shhhhh
    if (answers[0] && answers[1] && !answers[2] && answers[3] && !answers[4]) {
        document.querySelector('#quiz-container').style.display = 'none';
        document.querySelector('#yay').style.display = 'flex';
        setTimeout(() => {
            document.querySelector('#yay').style.display = 'none';
            document.querySelector('#quiz-container').style.display = 'block';
        }, 3000);
    } else {
        alert('Try again!');
    }
});