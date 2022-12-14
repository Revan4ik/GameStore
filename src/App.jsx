import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { HomePage } from "./pages/home-page";
import { GamePage } from "./pages/game-page";
import { OrderPage } from "./pages/order-page";
import { Header } from "./components/header";
import { store } from "./redux";
import { FaqPage } from "./pages/faq-page";
import { ErrorPage } from "./pages/error-page";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="*" element={<ErrorPage/>}/>
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/app/:title" element={<GamePage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
