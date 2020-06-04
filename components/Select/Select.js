class Select {
    handleClear() {
        ROOT_SELECT.innerHTML = '';
    }

    constructor() {
        this.classNameActive = 'select__btn_active';
    }

    handleSetLocationStorage(element, id) {
        const {
            pushProduct,
            products
        } = localStorageUtil.putProducts(id);

        if (pushProduct) {
            element.classList.add(this.classNameActive);
        } else {
            element.classList.add("hidden");
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
            if (productsStore.indexOf(id) !== -1) {
                activeClass = ' ' + this.classNameActive;
                htmlCatalog += `
                    <div class="select-item ${activeClass}" onclick="selectPage.handleSetLocationStorage(this, '${id}');" >
                        <div  class="select-item__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.667 426.667"><path fill="#fac917" d="M213.333 10.441l65.916 133.576 147.418 21.419L320 269.41l25.173 146.816-131.84-69.316-131.848 69.316 25.182-146.816L0 165.436l147.409-21.419z"/></svg>
                        </div>    
                        <img class="select-item__img" src="${thumbnailUrl}" title="${title}" onclick="selectPage.getFullImage(this, '${url}', '${title}');"/>
                    </div>
                `;
            }

        });

        const html = `
            <div class="select-container">
                <table>
                    ${htmlCatalog}
                </table>
            </div>
        `;
        ROOT_SELECT.innerHTML = html;

    }

    getFullImage(element, url, title) {
        let fullImage = `
            <div class="select-image-wrap">
                <div class="select-image-container">
                    <img src="components/Select/img/close.svg" class="select-image-container__close-btn" onclick="selectPage.closeBtn();"></img>
                    <img src="${url}" class="select-image-container__full-image" title="${title}"></img>
                </div>
            </div>
        `

        ROOT_SELECT.innerHTML += fullImage;
    }

    closeBtn() {
        let imageContainer = document.querySelector('.select-image-wrap');
        imageContainer.remove();
    }

    link() {
        ROOT_PRODUCTS.classList.add('hidden');
        ROOT_SELECT.classList.add('active');

    }
}

const selectPage = new Select();