import {Card,Col,Row, Button} from 'react-bootstrap';
import{useCart} from './context/CartContext'
import { MDBContainer } from 'mdb-react-ui-kit';
import {Container} from '@mui/material';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';


function GridExample() {
    const {user}=useCart()

    if (!user || user[0].myitems==0) {
        return(
            <section className="h-[550px] bg-[length:100%_100%] bg-no-repeat bg-center bg-[url('https://www.pngkey.com/png/detail/365-3654131_cart-empty-image-your-cart-is-empty.png')]">
            <MDBContainer className="py-5">
              <div className="text-center my-40 align-items-center">
                <h5 className='text-red-500 text-7xl mb-5 font-bold d-flex justify-content-center'><AiOutlineShoppingCart/>&nbsp; Yet, Not Purchase Anyting</h5>
                <Link to={'/home'}> 
                  <Button className='bg-primary'>Continue Browsing</Button>
                </Link>
              </div>
            </MDBContainer>
          </section>
        )
    }
  return (
    <Container className='my-10' maxWidth="xl">
    <h2 className='text-center text-3xl font-bold mb-3'>My Purchase</h2>
    <Row xl={4} className="g-4">
      {[...user[0]?.myitems].reverse().map((d,idx) => (
        <Col key={idx}>
          <Card className='h-[450px] w-[300px] m-auto'>
            <Card.Img variant="top" src={`${d.img}`} className='h-[250px]'/>
            <Card.Body>
              <Card.Title>{d.title}</Card.Title>
              <Card.Text>
              {d.description.slice(0,100)}
              </Card.Text>
            </Card.Body>
              <Button>Continue</Button>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
  );
}

export default GridExample;