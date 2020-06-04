function render() {
    const productsStore = localStorageUtil.getProducts();
    headerPage.render(productsStore.length);
}

let CATALOG = [];

// server/catalog.json
fetch('https://json.medrating.org/photos?albumId=2')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        render();
    })
    .catch(error => {
        console.log(error);
    });