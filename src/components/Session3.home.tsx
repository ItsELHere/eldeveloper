import { Container, Row, Col } from "react-bootstrap"
import IconCarousel from "./IconCarousel"

export default function Session3() {
  return (
    <div className="session-3 h-75">
      <Container className="w-100 h-75">
        <Row>
          <Col sm className="h-100 mt-3 mb-3">
            <Container className="about-tech">
              <p className="h1">My Tech Stack</p>
              <p className="h6">Saya memiliki keterampilan teknis yang luas di bidang pengembangan web, termasuk penggunaan teknologi seperti Javascript, Typescript, NodeJS, dan React JS. Saya memiliki kemampuan dalam penggunaan framework Bootstrap untuk styling.<br /><br />Untuk Backend development dengan menggunakan ExpressJS dan penggunaan database seperti MySQL dan MongoDB. Selain itu, saya memiliki pengalaman dalam menyelesaikan proyek-proyek kompleks dan memiliki kemampuan untuk memecahkan masalah teknis dengan solusi kreatif dan efisien.</p>
            </Container>
          </Col>
          <Col sm className="mt-3 mb-3">
            <Container className=" d-flex justify-content-center align-items-center">
              <IconCarousel />
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}