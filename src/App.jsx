import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import css from "./styles/app.module.scss";

function App() {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
