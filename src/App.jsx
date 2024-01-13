import Header from "./components/header/Header";
import css from "./styles/app.module.scss";

function App() {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
    </div>
  );
}

export default App;
