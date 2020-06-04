function render() {
    const productsStore = localStorageUtil.getProducts();
    headerPage.render(productsStore.length);
}

let CATALOG = [];


// api не всегда работает, поэтому оставлю локальный json
// server/catalog.json
// https://json.medrating.org/photos?albumId=2
fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        render();
    })
    .catch(error => {
        console.log(error);
    });