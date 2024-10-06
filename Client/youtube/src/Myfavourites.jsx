import {Card, Col, Row, Button} from 'react-bootstrap';
import{useCart} from './context/CartContext'
import { MDBContainer } from 'mdb-react-ui-kit';
import {Container} from '@mui/material';
import { Link } from 'react-router-dom';
import { FaHeartCrack } from 'react-icons/fa6';
import axios from 'axios';
import { toast } from 'react-toastify';

function GridExample() {
    const {user,setFav}=useCart()

    const handleFavoriteClick=async(email,id)=>{
        let res = await axios.post("http://localhost:3000/addfavourite/delete", {email,id});
        toast.error('Remove', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setFav((p)=>p-1) // Update the state if successfully added to favorites
    }
    if (!user || user[0].myfavourites<=0) {
        return(
            <section className="h-[550px] bg-[length:50%_90%] bg-no-repeat bg-center bg-[url('https://cdn.dribbble.com/users/12570/screenshots/13987694/media/1635918fab6854e489723a301619b7b2.jpg?compress=1&resize=400x300')]">
            <MDBContainer className="py-5">
              <div className="text-center my-60 align-items-center">
                {/* <h5 className='text-red-500 text-7xl mb-5 font-bold d-flex justify-content-center'><AiOutlineShoppingCart/>&nbsp; Yet, Not Purchase Anyting</h5> */}
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
    <h2 className='text-center text-3xl font-bold mb-3'>My favourite items</h2>
    <Row xl={4} className="g-4">
      {[...user[0].myfavourites].reverse().map((d,idx) => ( //using chaining method
        <Col key={idx}>
          <Card className='h-[420px] w-[300px] m-auto shadow-xl transition-transform duration-300 hover:scale-105 hoerv:shadow-2xl'>
          <FaHeartCrack
        className='text-4xl m-3 cursor-pointer hover:scale-[1.2] transition-transform duration-200'
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          color: '#ff0066' , // Red for favorite, grey for not
        }}
        onClick={()=>handleFavoriteClick(user[0].email,d._id)}
      />
        <Link to={`/services/${d._id}`}>
            <Card.Img variant="top" src={`${d.img}`} className='h-[250px]'/>
            <Card.Body>
              <Card.Title>{d.title}</Card.Title>
              <Card.Text>
              {d.description.slice(0,100)}
              </Card.Text>
            </Card.Body>
        </Link>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
  );
}

export default GridExample;