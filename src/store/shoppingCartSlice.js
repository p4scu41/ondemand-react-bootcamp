const { createSlice } = require("@reduxjs/toolkit");

const shoppingCartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: []
  },
  reducers: {
    addProduct: {
      reducer: (state, action) => {
        const productId = action.payload.id;
        const productExists = state.products.find((product) => product.id === productId);

        if (productExists) {
          const newQuantity = Number(productExists.quantity) + Number(action.payload.quantity);

          if (newQuantity > productExists.stock) {
            alert('Product out of stock.');
          } else {
            productExists.quantity = newQuantity;
            alert('Product added.');
          }
        } else {
          state.products.push(action.payload);
          alert('Product added.');
        }
      },
      prepare: (product, quantity) => {
        return {
          payload: {
            id: product.id,
            image: product.data.mainimage.url,
            name: product.data.name,
            stock: product.data.stock,
            price: product.data.price,
            quantity: quantity,
          },
        };
      }
    },
    removeProduct(state, action) {
      const productId = action.payload;
      const filtered = state.products.filter((product) => product.id !== productId);

      return { products: filtered };
    },
    updateQuantityProduct(state, action) {
      const {productId, quantity} = action.payload;
      const product = state.products.find(product => product.id === productId);

      if (quantity > product.stock) {
        alert('Product out of stock.');
      } else {
        product.quantity = quantity;
      }
    }
  },
});

const selectCartProducts = (state) => state.cart.products;
const selectCartProductById = (state, productId) => state.cart.products.find(product => product.id === productId);
const selectCartTotalProducts = (state) => state.cart.products.length;

export const { addProduct, removeProduct, updateQuantityProduct } = shoppingCartSlice.actions;
export { selectCartProducts, selectCartProductById, selectCartTotalProducts };
export default shoppingCartSlice.reducer;
