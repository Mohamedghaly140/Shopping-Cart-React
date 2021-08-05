import { Component, Fragment } from "react";
import AppRouter from "./pages/routes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MyCart from "./components/MyCart/MyCart";
import httpClient from "./services/httpClient";
import SideBar from "./components/SideBar/SideBar";
import UiContextProvider from "./context/ui-context";
import organization from "./services/organization.json";
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
    search: false,
    loading: false,
    gifts: [],
    tours: [],
    brands: [],
    offers: [],
    products: [],
    categories: [],
  };

  componentDidMount() {
    this.setState({ loading: true });

    try {
      (async () => {
        const {
          data: { products },
        } = await httpClient.get("/api/products");

        const {
          data: { gifts },
        } = await httpClient.get("/api/gifts");

        const {
          data: { tours },
        } = await httpClient.get("/api/tours");

        const {
          data: { brands },
        } = await httpClient.get("/api/brands");

        const {
          data: { offers },
        } = await httpClient.get("/api/offers");

        const {
          data: { categories },
        } = await httpClient.get("/api/categories");

        this.setState({
          products,
          gifts,
          tours,
          brands,
          offers,
          categories,
          loading: false,
        });
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
      gifts,
      brands,
      offers,
      tours,
      categories,
    } = this.state;

    return (
      <UiContextProvider>
        <Navbar
          cartItems={cart}
          onSearch={this.toggleSearchHandler}
          toggleCart={this.toggleCartHandler}
          logo={organization.organizationLogo.logo}
          onToggleSidebar={this.toggleSidebarHandler}
          onToggleAccount={this.toggleAccountHandler}
        />
        <main className="main">
          <AppRouter
            addToCart={this.addToCartHandler}
            loading={loading}
            gifts={gifts}
            tours={tours}
            brands={brands}
            offers={offers}
            products={products}
            categories={categories}
          />
        </main>
        <Footer
          description={organization.organizationDescription}
          logoDark={organization.organizationLogo.logoDark}
        />
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
      </UiContextProvider>
    );
  }
}

export default App;
// "homepage": "https://mohamedghaly140.github.io/Shopping-Cart-React/",
