import { Component, Fragment } from "react";
import AppRouter from "./pages/routes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MyCart from "./components/MyCart/MyCart";
import httpClient from "./services/httpClient";

class App extends Component {
  state = {
    openCart: false,
    cart: [],
    products: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    try {
      (async () => {
        const { data } = await httpClient.get("/api/products");
        this.setState({ products: data.products });
      })();
    } catch (err) {
      console.log(err.response.data.message);
    }
    this.setState({ loading: false });
  }

  toggleCartHandler = () => {
    this.setState(prevState => {
      return {
        openCart: !prevState.openCart,
      };
    });
  };

  addToCartHandler = product => {
    const exsitingProduct = this.state.cart.find(p => p.id === product.id);
    const exsitingProductIndex = this.state.cart.findIndex(
      p => p.id === product.id
    );

    let qty;
    let copiedProduct = { ...exsitingProduct };

    if (exsitingProduct) {
      qty = this.state.cart[exsitingProductIndex].qty;
      const cartItems = [...this.state.cart];
      cartItems.filter(p => p.id !== exsitingProduct.id);
      copiedProduct.qty = qty;

      this.setState({ cart: [...cartItems, copiedProduct] });
    } else {
      this.setState(prevState => {
        return {
          cart: [...prevState.cart, product],
        };
      });
    }
  };

  render() {
    const { openCart, cart, loading, products } = this.state;

    return (
      <Fragment>
        <Navbar toggleCart={this.toggleCartHandler} cartItems={cart} />
        <main className="py-4 py-md-5">
          <AppRouter
            addToCart={this.addToCartHandler}
            loading={loading}
            products={products}
          />
          <MyCart
            cart={cart}
            openCart={openCart}
            toggleCart={this.toggleCartHandler}
          />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
// "homepage": "https://mohamedghaly140.github.io/Shopping-Cart-React/",
