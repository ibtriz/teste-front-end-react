import { Header } from "./components/pages/header.js";
import { Cards } from "./components/pages/cards.js";
import { Global } from "./styles/global.js";
import { Footer } from "./components/pages/footer.js";

function App() {
  return (
    <div className="App">
      <Global />
      <Header />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
