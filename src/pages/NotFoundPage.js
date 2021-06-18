import { Link } from 'react-router-dom'
import { Container, Row, Col} from 'react-bootstrap'
import routes from '../helpers/routes'

export default function NotFoundPage() {
    return (
        <Container>
            <Row className="mt-5">
                <Col md={{span: 6, offset: 3}} className="text-center">
                    <img src="/img/404-not-found.svg" alt="" style={{ width:'100%'}}/>
                    <h2 className="mt-5">Esta página no existe</h2>
                    <p>Vuelva al <Link to={routes.home}>inicio</Link></p>
                </Col>
            </Row>
        </Container>
    )
}
