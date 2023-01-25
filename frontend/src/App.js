import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import AudiA4 from "./AudiA4";
import AudiA5 from "./AudiA5";
import BMW3 from "./BMW3";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={<Navigation />}>
            <Route index element={<Navigation />} />
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
