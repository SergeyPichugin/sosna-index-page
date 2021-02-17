document.addEventListener('DOMContentLoaded', () => {

    let buttonsMenu = document.querySelectorAll('#showMenu')
    let listsMenu = document.querySelectorAll('#listMenu')

    buttonsMenu.forEach(item => {

        item.addEventListener('mousedown', (event) => {
            console.log(event.target.dataset.menu)
            let dataMenuShow = event
            listsMenu.forEach(item => {
                if (dataMenuShow.target.dataset.menu == item.dataset.menu && item.style.display == 'none') {                    
                    dataMenuShow.target.classList.add('flextovgroup__button_show_close')
                    dataMenuShow.target.dataset.message = 'Закрыть меню'
                    item.style.display = 'block'
                    console.log('view menu')
                } else if (dataMenuShow.target.dataset.menu == item.dataset.menu) {                    
                    dataMenuShow.target.classList.remove('flextovgroup__button_show_close')
                    dataMenuShow.target.dataset.message = 'Открыть меню'
                    console.log('hide menu')
                    item.style.display = 'none'
                }
            })
        })

    })

})