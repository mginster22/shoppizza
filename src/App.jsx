import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Main } from "./components/Main";
import { Home } from "./pages/Home";
const App = () => {
  return (
    <div className="container bg-slate-50 mx-auto my-8 rounded-md">
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Main>
    </div>
  );
};

export default App;
