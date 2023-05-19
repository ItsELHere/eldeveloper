import { Container, Row, Col, Image } from "react-bootstrap"

export default function Session2() {
  return (
    <div className="session-2 h-75 mb-3">
      <Container className="h-auto p-2">
        <Row>
          <Col sm >
            <div className="img-container">
              <Image src={require("../assets/imanuel-antonio.jpg")} alt="imanuel" />
            </div>
          </Col>
          <Col sm className="h-100 mt-5 mb-5">
            <Container>
              <p className="h1">About Me</p>
              <p className="h6">Saya adalah seorang Web Developer yang fokus pada bidang Backend developer yang sangat antusias dengan teknologi dan fokus pada pengembangan web. Saya senang menyelesaikan tantangan kompleks dan mengembangkan solusi kreatif untuk masalah teknis.<br /><br />Saya selalu mengikuti tren terbaru di bidang pengembangan web dan terus memperbarui keterampilan saya. Saya yakin bahwa dengan antusiasme dan keahlian teknis, saya dapat memberikan kontribusi yang positif dalam industri teknologi</p>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}