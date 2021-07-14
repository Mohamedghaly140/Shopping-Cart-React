import { Component, Fragment } from "react";
import AppRouter from "./pages/routes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MyCart from "./components/MyCart/MyCart";
import httpClient from "./services/httpClient";
import SideBar from "./components/SideBar/SideBar";
import MyAccount from "./components/MyAccount/MyAccount";
import MobileNav from "./components/MobileNav/MobileNav";
import SearchContainer from "./components/SearchContainer/SearchContainer";
import "./App.scss";

class App extends Component {
  state = {
    openCart: false,
    openSideBar: false,
    openAccount: false,
    cart: [],
    products: [],
    loading: false,
    search: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    try {
      (async () => {
        const { data } = await httpClient.get("/api/products");
        this.setState({ products: data.products, loading: false });
      })();
    } catch (err) {
      console.log(err.response.data.message);
      this.setState({ loading: false });
    }
  }

  toggleCartHandler = () => {
    this.setState(prevState => {
      return {
        openCart: !prevState.openCart,
      };
    });
  };

  toggleSidebarHandler = () => {
    this.setState(prevState => {
      return {
        openSideBar: !prevState.openSideBar,
      };
    });
  };

  toggleSearchHandler = () => {
    this.setState(prevState => {
      return {
        search: !prevState.search,
      };
    });
  };

  toggleAccountHandler = () => {
    this.setState(prevState => {
      return {
        openAccount: !prevState.openAccount,
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
    const {
      openCart,
      cart,
      loading,
      products,
      openSideBar,
      search,
      openAccount,
    } = this.state;

    return (
      <Fragment>
        <Navbar
          cartItems={cart}
          onSearch={this.toggleSearchHandler}
          toggleCart={this.toggleCartHandler}
          onToggleSidebar={this.toggleSidebarHandler}
          onToggleAccount={this.toggleAccountHandler}
        />
        <main className="main py-4 py-md-5">
          <AppRouter
            addToCart={this.addToCartHandler}
            loading={loading}
            products={products}
          />
        </main>
        <Footer />
        <Fragment>
          <MyCart
            cart={cart}
            openCart={openCart}
            toggleCart={this.toggleCartHandler}
          />
          <SideBar
            openSideBar={openSideBar}
            onToggleSidebar={this.toggleSidebarHandler}
          />
          <SearchContainer
            search={search}
            onToggleSearch={this.toggleSearchHandler}
          />
          <MyAccount
            open={openAccount}
            onToggleAccount={this.toggleAccountHandler}
          />
          <MobileNav
            openAccount={openAccount}
            onToggleAccount={this.toggleAccountHandler}
          />
        </Fragment>
      </Fragment>
    );
  }
}

export default App;
// "homepage": "https://mohamedghaly140.github.io/Shopping-Cart-React/",
