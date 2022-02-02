const portfolio = [
    {
        'img': '/img/portfolio/item_1.jpeg',
        'category': 'html'
    },
    {
        'img': '/img/portfolio/item_2.jpeg',
        'category': 'html'
    },
    {
        'img': '/img/portfolio/item_3.jpg',
        'category': 'javascript'
    },
    {
        'img': '/img/portfolio/item_4.jpeg',
        'category': 'html'
    },
    {
        'img': '/img/portfolio/item_5.jpeg',
        'category': 'reactjs'
    },
    {
        'img': '/img/portfolio/item_6.jpeg',
        'category': 'javascript'
    }
]
const menu = document.getElementById('menu');
const menuItem = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');
window.addEventListener('load', function () {
    showPortfolio(portfolio);
    showMenu();
});
window.addEventListener('scroll', function () {
    const heightScroll = window.scrollY;
    if (heightScroll > 150) {
        menu.classList.add('menu__bg');
    }
    else {
        menu.classList.remove('menu__bg');
    }
})

function showPortfolio(menu) {
    menuItem.innerHTML = menu.map((item) => {
        return `<article class="menu-item">
                    <img src="${item.img}" alt="menu item" class="w-100 portfolio__img" />
                </article>`
    }).join('');
}

function showMenu() {
    const categories = portfolio.reduce((menu, item) => {
        if (!menu.includes(item.category)) {
            menu.push(item.category);
        }
        return menu;
    }, ['all']);
    btnContainer.innerHTML = categories.map((item) => {
        return `<button type="button" class="btn filter-btn" data-id=${item}>${item}</button>`
    }).join('');

    const btnMenu = btnContainer.querySelectorAll('.filter-btn');
    btnMenu.forEach((btn) => {
        btn.addEventListener('click', function (e) {
            const id = e.currentTarget.dataset.id;
            const menuFilter = portfolio.filter((item) => {
                if (item.category == id) {
                    return item;
                }
            });
            if (id === 'all') {
                showPortfolio(portfolio);
            }
            else {
                showPortfolio(menuFilter);
            }
        })
    })
}