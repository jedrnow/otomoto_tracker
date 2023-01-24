import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import AudiA4 from "./AudiA4";
import AudiA5 from "./AudiA5";

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
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
