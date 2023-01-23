import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:9000/audi-a4")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Loading data.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <h1> Audi A4 </h1>{" "}
        {items.map((item) => (
          <ul>
            <li>{item.title}</li>
            <li>{item.url}</li>
            <li>{item.brand}</li>
            <li>{item.model}</li>
            <li>{item.year}</li>
            <li>{item.version}</li>
            <li>{item.price}</li>
            <li>{item.horsePower}</li>
            <li>{item.engine}</li>
            <li>{item.gearbox}</li>
          </ul>
        ))}
      </div>
    );
  }
}

export default App;
