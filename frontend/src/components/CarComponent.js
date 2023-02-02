import "./Cars.css";
import React from "react";
import Navigation from "./Navigation";
import Car from "../models/Car";
import { Card, Button } from "flowbite-react";

class CarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch(`http://localhost:9000/${this.props.modelName}`)
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
        <>
          <Navigation></Navigation>
          <h1 id="loading-data"> Loading data.... </h1>
        </>
      );

    return (
      <>
        <Navigation></Navigation>
        <h1 id="model-name"> {this.props.modelNameFixed} </h1>
        <div id="container">
          {items.map((item) => {
            return (
              <Card
                imgSrc={item.image}
                imgAlt="card-image"
                className="col-span-1 flex flex-col border-2 p-4"
                id="card"
              >
                <h5 className="title text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
                <ul id={items.indexOf(item)}>
                  <li className="brand">
                    <b>Brand:</b> {item.brand}
                  </li>
                  <li className="model">
                    <b>Model:</b> {item.model}
                  </li>
                  <li className="year">
                    <b>Year:</b> {item.year}
                  </li>
                  <li className="price">
                    <b>Price:</b> {item.price}
                    PLN
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
                  <br></br>
                  <li className="url">
                    <Button href={item.url} target="_blank">
                      LINK
                    </Button>
                  </li>
                </ul>
              </Card>
            );
          })}
        </div>
      </>
    );
    // return (
    //   <div className={this.props.modelName} id="container">
    //     <Navigation></Navigation>
    //     <h1> {this.props.modelNameFixed} </h1>
    //     <div id="offers">
    //       {items.map((item) => (

    //       ))}
    //     </div>
    //   </div>
    // );
  }
}

export default CarComponent;
