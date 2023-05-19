import { Container } from "react-bootstrap";
import { Component, ReactNode } from "react";

import "../style/Contact.style.css"
import ButtonContainer from "../components/ButtonContainer";

export default class Contact extends Component {
  render(): ReactNode {
    return (
      <div className="contact">
        <Container className="h-100">
          <Container className="w-75 p-3 contact-container">
            <h1>Contact Me</h1>
            <ButtonContainer bgColor={"rgba(229, 187, 52, 0.7)"} content="Contact me on Gmail" />
            <ButtonContainer bgColor={"rgba(228, 17, 204, 0.7)"} content="See my Instagram" />
            <ButtonContainer bgColor={"rgba(40, 121, 255, 0.7)"} content="See my Twitter " />
            <ButtonContainer bgColor={"rgba(115 ,63 ,199, 0.7)"} content="See my GitHub" />
          </Container>
        </Container>
      </div>
    )
  }
}