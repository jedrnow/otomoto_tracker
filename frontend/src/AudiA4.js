import "./Cars.css";
import React from "react";
import Navigation from "./Navigation";
import Car from "./Car";

class AudiA4 extends React.Component {
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
      <div className="AudiA4" id="container">
        <Navigation></Navigation>
        <h1> Audi A4 </h1>
        <div id="offers">
          {items.map((item) => (
            <ul id={items.indexOf(item)}>
              <li className="title">{item.title}</li>
              <li className="image">
                <img alt="" src={item.image}></img>
              </li>
              <li className="brand">
                <b>Brand:</b> {item.brand}
              </li>
              <li className="model">
                <b>Brand:</b> {item.model}
              </li>
              <li className="year">
                <b>Year:</b> {item.year}
              </li>
              <li className="price">
                <b>Price:</b> {item.price} PLN
              </li>
              <li className="horsePower">
                <b>HP:</b> {item.horsePower}
              </li>
              <li className="engine">
                <b>Engine:</b> {item.engine}
              </li>
              <li className="gearbox">
                <b>Gearbox:</b> {item.gearbox}
              </li>
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

export default AudiA4;
