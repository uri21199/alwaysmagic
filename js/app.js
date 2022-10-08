// Header //
addEventListener("DOMContentLoaded", () => {
    const btnMenu = document.querySelector(".btnMenu")
    if (btnMenu) {
        btnMenu.addEventListener('click', () => {
            const MenuItems = document.querySelector('.menuItems')
            MenuItems.classList.toggle('show')
        })
    }
})