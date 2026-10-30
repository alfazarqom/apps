
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import MainContent from "./MainContent/MainContent";
import BottomNav from "./components/BottomNav/BottomNav";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="app__main">
          <MainContent />
        </main>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
