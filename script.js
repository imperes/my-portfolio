const panels = document.querySelectorAll('.painel')

panels.forEach(painel => {
    painel.addEventListener('click', () => {
        removeActiveClasses()
        painel.classList.add('ativado')
    })
})

function removeActiveClasses() {
    panels.forEach(painel => {
        painel.classList.remove('ativado')
    })
}