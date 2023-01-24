import "./Cars.css";
import React from "react";
import Navigation from "./Navigation";
import Car from "./Car";

class AudiA5 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:9000/audi-a5")
      .then((res) => res.json())
      .then((json) => {
        const carArray = json.map((e) => {
          const car = new Car();
          car.brand = e.brand;
          car.engine = e.engine;
          car.gearbox = e.gearbox;
          car.horsePower = e.horsePower;
          car.model = e.model;
          car.price = parseInt(e.price.replace(" ", ""));
          car.title = e.title;
          car.url = e.url;
          car.version = e.version;
          car.year = e.year;
          car.image = e.image;

          return car;
        });
        carArray.sort((a, b) => {
          if (a.price < b.price) {
            return -1;
          }
          if (a.price > b.price) {
            return 1;
          }
          if (a.price === b.price) {
            return 0;
          }
          return 0;
        });
        this.setState({
          items: carArray,
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
      <div className="AudiA5" id="container">
        <Navigation></Navigation>
        <h1> Audi A5 </h1>{" "}
        <div id="offers">
          {items.map((item) => (
            <ul id={items.indexOf(item)}>
              <li className="title">{item.title}</li>
              <li className="image">
                <img alt="" src={item.image}></img>
              </li>
              <li className="brand">Brand: {item.brand}</li>
              <li className="model">Model: {item.model}</li>
              <li className="year">Year: {item.year}</li>
              <li className="price">Price: {item.price} PLN</li>
              <li className="horsePower">HP: {item.horsePower}</li>
              <li className="engine">Engine: {item.engine}</li>
              <li className="gearbox">Gearbox: {item.gearbox}</li>
              <li className="url">
                <a href={item.url} target="_blank" rel="noreferrer">
                  LINK
                </a>
              </li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default AudiA5;
