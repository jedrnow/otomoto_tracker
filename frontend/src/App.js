import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AudiA4 from "./models/AudiA4";
import AudiA5 from "./models/AudiA5";
import BMW3 from "./models/BMW3";
import Home from "./components/Home";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={<Home />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="audi/a4" Component={<AudiA4 />}>
            <Route index element={<AudiA4 />} />
          </Route>
          <Route path="audi/a5" Component={<AudiA5 />}>
            <Route index element={<AudiA5 />} />
          </Route>
          <Route path="bmw/seria-3" Component={<BMW3 />}>
            <Route index element={<BMW3 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
