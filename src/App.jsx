import "./App.css";
import AppRouter from "./routers/AppRouter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-shell">
      <header>
        <h1 className="title">Películas</h1>
      </header>

      <main>
        <AppRouter />
      </main>

      <Footer />
    </div>
  );
}

export default App;
