import logo from "./logo.svg";
import "./App.css";
import Routes from "./Routes/routes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { SnackbarProvider } from "notistack";
import SnackbarCloseButton from "./components/snackbarCloseButton";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <SnackbarProvider
            action={(key) => <SnackbarCloseButton key={key} />}
            maxSnack={3}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Routes />
          </SnackbarProvider>
        </Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
