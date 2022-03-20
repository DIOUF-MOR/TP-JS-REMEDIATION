const button = document.querySelectorAll('button');

const span = document.querySelector('.span2');

for (let i = 0; i < button.length; i++) {
    const btn = button[i];
    btn.addEventListener('click', function () {
        const div = document.createElement('div')
        div.innerText = 'Mon Projet 4'
        div.classList.add(btn.className, span.className)
        span.appendChild(div);
        setTimeout(() => {
            div.remove();
        }, 10000);
    })

}

