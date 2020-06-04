class Products {
    constructor() {
        this.classNameActive = 'products-element__icon_active';
    }

    handleSetLocationStorage(element, id) {
        const {
            pushProduct,
            products
        } = localStorageUtil.putProducts(id);

        if (pushProduct) {
            element.classList.add(this.classNameActive);
        } else {
            element.classList.remove(this.classNameActive);
        }

        headerPage.render(products.length);
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';


        CATALOG.forEach(({
            id,
            url,
            thumbnailUrl,
            title
        }) => {
            id = id + '';
            let activeClass = '';
            if (productsStore.indexOf(id) === -1) {
                activeClass = ' ';
            } else {
                activeClass = ' ' + this.classNameActive;
            }

            htmlCatalog += `
                <div class="products-element">
                    <div class="products-element__icon ${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}');">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.667 426.667"><path fill="#fac917" d="M213.333 10.441l65.916 133.576 147.418 21.419L320 269.41l25.173 146.816-131.84-69.316-131.848 69.316 25.182-146.816L0 165.436l147.409-21.419z"/></svg>
                    </div>
                    <img class="products-element__img" src="${thumbnailUrl}" title="${title}" onclick="productsPage.getFullImage(this, '${url}', '${title}');"/>

                </div>
            `;


        });

        const html = `
            <div class="products-container">
                ${htmlCatalog}
            </div>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }


    getFullImage(element, url, title) {
        let fullImage = `
            <div class="products-image-wrap">
                <div class="products-image-container">
                    <img src="/components/Products/img/close.svg" class="products-image-container__close-btn" onclick="productsPage.closeBtn();"></img>
                    <img src="${url}" class="products-image-container__full-image" title="${title}"></img>
                </div>

            </div>
        `

        ROOT_PRODUCTS.innerHTML += fullImage;
    }

    closeBtn() {
        let imageContainer = document.querySelector('.products-image-wrap');
        imageContainer.remove();
    }

    link() {
        ROOT_PRODUCTS.classList.remove('hidden');
        ROOT_SELECT.classList.remove('active');
    }
}

const productsPage = new Products();