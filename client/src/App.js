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
    search: false,
    loading: false,
    gifts: [],
    tours: [],
    brands: [],
    offers: [],
    products: [],
    categories: [],
    cart: {
      items: [],
      total: 0,
    },
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
    this.setState(prevState => ({
      openCart: !prevState.openCart,
    }));
  };

  toggleSidebarHandler = () => {
    this.setState(prevState => ({
      openSideBar: !prevState.openSideBar,
    }));
  };

  toggleSearchHandler = () => {
    this.setState(prevState => ({
      search: !prevState.search,
    }));
  };

  toggleAccountHandler = () => {
    this.setState(prevState => ({
      openAccount: !prevState.openAccount,
    }));
  };

  addToCartHandler = (product, qty) => {
    this.setState(prevState => {
      const existingItem = prevState.cart.items.find(
        item => item.id === product.id
      );

      if (existingItem) {
        return {
          ...prevState,
          cart: {
            ...prevState.cart,
            items: prevState.cart.items.map(item =>
              item.id === product.id ? { ...item, qty } : item
            ),
          },
        };
      } else {
        return {
          ...prevState,
          cart: {
            ...prevState.cart,
            items: [...prevState.cart.items, { ...product, qty }],
          },
        };
      }
    });

    this.setState(prevState => {
      return {
        ...prevState,
        cart: {
          ...prevState.cart,
          total: +prevState.cart.items
            .reduce(
              (acc, curItem) =>
                acc + Number(curItem.price) * Number(curItem.qty),
              0
            )
            .toFixed(3),
        },
      };
    });
  };

  removeFromCartHandler = id => {
    let tempCart = [...this.state.cart.items];
    let tempProduct = tempCart.find(p => p.id === id);

    if (tempProduct) {
      this.setState(prevState => {
        return {
          ...prevState,
          cart: {
            items: prevState.cart.items.filter(item => item.id !== id),
          },
        };
      });
    }

    this.setState(prevState => {
      return {
        ...prevState,
        cart: {
          ...prevState.cart,
          total: +prevState.cart.items
            .reduce(
              (acc, curItem) =>
                acc + Number(curItem.price) * Number(curItem.qty),
              0
            )
            .toFixed(3),
        },
      };
    });
  };

  updateQuantityHandler = (product, flag) => {
    if (flag === "-") {
      let tempCart = [...this.state.cart.items];
      let tempProduct = tempCart.find(p => p.id === product.id);

      if (tempProduct.qty !== 1) {
        this.setState(prevState => {
          return {
            ...prevState,
            cart: {
              items: prevState.cart.items.map(item => {
                if (item.id === product.id) {
                  return { ...item, qty: item.qty - 1 };
                }
                return item;
              }),
            },
          };
        });
      }
    } else {
      this.setState(prevState => {
        return {
          ...prevState,
          cart: {
            ...prevState.cart,
            items: prevState.cart.items.map(item =>
              item.id === product.id ? { ...item, qty: item.qty + 1 } : item
            ),
          },
        };
      });
    }

    this.setState(prevState => {
      return {
        ...prevState,
        cart: {
          ...prevState.cart,
          total: +prevState.cart.items
            .reduce(
              (acc, curItem) =>
                acc + Number(curItem.price) * Number(curItem.qty),
              0
            )
            .toFixed(3),
        },
      };
    });
  };

  render() {
    const {
      cart,
      tours,
      gifts,
      search,
      brands,
      offers,
      loading,
      products,
      openCart,
      categories,
      openSideBar,
      openAccount,
    } = this.state;

    return (
      <UiContextProvider>
        <Navbar
          cartItems={cart.items}
          onSearch={this.toggleSearchHandler}
          toggleCart={this.toggleCartHandler}
          logo={organization.organizationLogo.logo}
          onToggleSidebar={this.toggleSidebarHandler}
          onToggleAccount={this.toggleAccountHandler}
        />
        <main className="main">
          <AppRouter
            gifts={gifts}
            tours={tours}
            brands={brands}
            offers={offers}
            loading={loading}
            total={cart.total}
            products={products}
            cartItems={cart.items}
            categories={categories}
            onAddToCart={this.addToCartHandler}
            onRemoveFromCart={this.removeFromCartHandler}
            onUpdateQuantity={this.updateQuantityHandler}
          />
        </main>
        <Footer
          description={organization.organizationDescription}
          logoDark={organization.organizationLogo.logoDark}
        />
        <Fragment>
          <MyCart
            total={cart.total}
            openCart={openCart}
            cartItems={cart.items}
            toggleCart={this.toggleCartHandler}
            onRemoveFromCart={this.removeFromCartHandler}
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
