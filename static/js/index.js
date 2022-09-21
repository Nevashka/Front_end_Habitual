fetchAll()
var addHabitBtn = document.querySelector('#add-habit-btn')
var closeFormBtn = document.querySelector('.close-button')
var doneCounter = document.querySelector(".habit-counter")
var completedSection = document.querySelector(".completed-container")



addHabitBtn.addEventListener('click', () => {
    const modal = document.querySelector('#modal')
    openModal(modal)
})

function openModal(modal) {
    modal.style.display = 'block'
    document.querySelector('.habit-container').style.opacity = '30%'
}

closeFormBtn.addEventListener('click', () => {
    const modal = document.querySelector('#modal')
    closeModal(modal)
})

function closeModal(modal) {
    modal.style.display = 'none'
    document.querySelector('.habit-container').style.opacity = '100%'
}
