class Header {
    handlerOpenSelectPage() {
        selectPage.render();
    }

    render() {

        const html = `
           <div class="header-container">
                <div class="header-catalog header-container__item" onclick="productsPage.link();productsPage.render();">Каталог</div>
                <div class="header-select header-container__item" onclick="selectPage.link();selectPage.render();">Избранное</div>
           </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();