import { Col, Container, Row, Image } from "react-bootstrap";

export default function Session() {
  return (
    <div className="session-4 mt-5 pb-5 p-2 shadow-lg">
      <Container>
        <p className="h1 text-center text-light m-3">My Certificate</p>
        <Container className="cert">
          <Row>
            <Col sm className="d-flex justify-content-center align-item-center">
              <Image src={require("../assets/certification/imanuel-udemy-cert.jpg")} className="w-100 mb-3" />
            </Col>
            <Col sm className="d-flex justify-content-center align-item-center">
              <Image src={require("../assets/certification/imanuel-freecodecamp.png")} className="w-100 mb-3" />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}