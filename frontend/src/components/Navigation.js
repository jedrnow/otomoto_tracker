import React from "react";
import { Navbar, Button, Dropdown } from "flowbite-react";
import "./Navigation.css";

class Navigation extends React.Component {
  render() {
    return (
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <img
            src="/car-icon.png"
            className="mr-3 h-6 sm:h-9"
            alt="Otomoto Tracker Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Otomoto Tracker
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Collapse>
            <Button>Login</Button>
            <Button>Register</Button>
          </Navbar.Collapse>
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link>
            <Dropdown arrowIcon={false} inline={true} label={"Cars"}>
              <Dropdown.Item>
                <a href="/audi/a4">Audi A4</a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="/audi/a5">Audi A5</a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="/bmw/seria-3">BMW 3</a>
              </Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link href="/">About</Navbar.Link>
          <Navbar.Link href="/">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
