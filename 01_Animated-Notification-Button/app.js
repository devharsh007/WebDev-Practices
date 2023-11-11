const notify = document.querySelector('.notifier');
const button = document.querySelector('.btn');

button.addEventListener("click", updateNotification)

function updateNotification() {
    let count = Number(notify.getAttribute('data-count')) || 0;
    notify.classList.toggle('addnum', count !== 0);
    notify.setAttribute('data-count', count + 1);
    console.log(`${count}`);
    notify.innerHTML = count;

}
