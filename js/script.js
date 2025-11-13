
let theme = document.querySelector('.light')
const sistemTheme = window.matchMedia('(prefers-color-scheme: light)').matches

let itemMenu = document.querySelector('.itens-menu')
let itemList = document.querySelectorAll('.item')


function toggleTheme() {
    let body = document.body
    body.classList.toggle('dark')
}

if (!sistemTheme) {
    toggleTheme()
}


function showMenu() {
    let width = window.innerWidth
    let display = itemMenu.style.display

    if (display === 'flex' && width < 768) {
        itemMenu.style.display = "none"
    } else {
        itemMenu.style.display = "flex"
    }
}


for (let item of itemList) {
    item.addEventListener('click', showMenu)
}


window.addEventListener('resize', () => {
    let width = window.innerWidth

    if (width > 768) {
        itemMenu.style.display = "flex"
    } else {
        itemMenu.style.display = "none"
    }
})

