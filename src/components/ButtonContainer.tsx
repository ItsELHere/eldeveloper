import { Container } from "react-bootstrap"

export default function ButtonContainer({ bgColor, content }: any): JSX.Element {
  return (
    <Container className="btn-container mt-3 mb-3 d-flex justify-content-center align-items-center">
      <button className="w-100" style={{ backgroundColor: bgColor }} ><p className="h5 mt-1">{content}</p></button>
    </Container >
  )
}