import { API_BASE_URL } from './constants';

const urlTo = {
    apiRef: '',

    setApiRef(ref) {
        this.apiRef = ref;
    },

    parse(query = [], params = []) {
        let url = `${API_BASE_URL}/documents/search?ref=APIREF&`;

        url += query.map(q => `q=${encodeURIComponent(q)}`).join('&');

        if (params.length > 0) {
            url += '&' + params.join('&');
        }

        return url;
    },

    banners(pageSize = 5, params = []) {
        return this.parse(
            ['[[at(document.type, "banner")]]'],
            ['lang=en-us', `pageSize=${pageSize}`, ...params]
        );
    },

    categories(pageSize = 30, params = []) {
        return this.parse(
            ['[[at(document.type, "category")]]'],
            ['lang=en-us', `pageSize=${pageSize}`, ...params]
        );
    },

    products(page, pageSize = 12, params = []) {
        return this.parse(
            ['[[at(document.type, "product")]]'], // `[[at(my.product.category,"${category}")]]`
            ['lang=en-us', `page=${page}`, `pageSize=${pageSize}`, ...params]
        );
    },

    featuredProducts(pageSize = 16, params = []) {
        return this.parse(
            ['[[at(document.type, "product")]]', '[[at(document.tags, ["Featured"])]]'],
            ['lang=en-us', `pageSize=${pageSize}`, ...params]
        );
    },

    searchProducts(searchTerm, page, pageSize = 20, params = []) {
        return this.parse(
            ['[[at(document.type, "product")]]', `[[fulltext(document, "${searchTerm}")]]`],
            ['lang=en-us', `page=${page}`, `pageSize=${pageSize}`, ...params]
        );
    },

    productId(productId, params = []) {
        return this.parse(
            [`[[:d+=+at(document.id,+"${productId}")+]]`],
            [...params]
        ).replace(/%2B/g, '+'); // Ugly hack
    },
}

export default urlTo;
