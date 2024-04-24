import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<h1>This is home page </h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
