import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Button } from "react-bootstrap";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBIcon, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import {Container} from '@mui/material';
import { useCart } from './context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Basic() {
  const { setCartItems, user } = useCart();
  const [UserData, setUserData] = useState([]);
  const [cookies] = useCookies();
  const navigate=useNavigate()
  
  // Calculate the cart totals
  const subtotal = UserData.reduce((acc, item) => acc + item.price, 0);
  const GST = subtotal === 0 ? 0 : Math.floor((subtotal / 2) * 0.18); // Fixed GST cost
  const total = Math.floor((subtotal / 2) + GST);

  useEffect(() => {
    if (user && user[0]) {
      setUserData(user[0].addcart || []);
    }
  }, [user]);

  useEffect(() => {
    setCartItems(UserData.length || 0);
  }, [UserData, setCartItems]);

  async function del(id) {
    try {
      await axios.post(`http://localhost:3000/addcart/delete/${id}`, { cookies });
      toast.error('Deleted', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setUserData(prevUserData => prevUserData.filter(d => d._id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  }

  // PAYMENT GATEWAY START
  async function handleRazorpayPayment() {
    try {
      // Step 1: Create an order on the server
      const { data: order } = await axios.post("http://localhost:3000/create-order", { amount: total });
      // Step 2: Configure Razorpay options
      const options = {
        key: "rzp_test_wh5dAj2ZhVsw97", // Replace with your actual key from env variable in production
        amount: order.amount,
        currency: "INR",
        name: "Youtube E-com Services",
        description: "Test Transaction",
        order_id: order.id,
        handler: async function (response) {
          // Step 3: Log order details after payment
          // On payment success
          try {
            let userId = user && user[0]?._id;
            const productIds = UserData.map(p => p._id);
            // Log the details before sending the purchase request

            await axios.post("http://localhost:3000/addcart/purchase", { data: productIds, id: userId,amount:total });
            setUserData([]);
            navigate('/mypurchase')
            toast.success('New Items Added🎉', {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          } catch (error) {
            console.error("Error finalizing purchase:", error);
          }
        },
        prefill: {
          name: `${user?.[0]?.firstName} ${user?.[0]?.lastName}`,
          email: `${user?.[0]?.email}`,
          contact: `${user?.[0]?.number}`,
        },
        theme: {
          color: "#3399cc",
        },
      };
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error initializing Razorpay payment:", error);
    }
  }

  async function purchase() {
    try {
      let id = user && user[0]?._id;
      const data = UserData && UserData.map(p => p._id);
      await axios.post("http://localhost:3000/addcart/purchase", { data, id });
      setUserData([]);
    } catch (error) {
      console.log(error);
    }
  }

  if (UserData.length === 0) {
    return (
      <section className="h-[550px] bg-[length:100%_100%] bg-no-repeat bg-center bg-[url('https://www.pngkey.com/png/detail/365-3654131_cart-empty-image-your-cart-is-empty.png')]">
        <Container className="py-5">
          <div className="text-center my-40 align-items-center">
            <h5 className='text-red-500 text-7xl mb-5 font-bold d-flex justify-content-center'><AiOutlineShoppingCart />&nbsp;Your cart is empty</h5>
            <Link to={'/home'}>
              <Button className='bg-primary'>Continue Browsing</Button>
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="" style={{ backgroundColor: "#fff" }}>
      <Container className="py-5">
        <MDBRow className="justify-content-center align-items-center">
          <MDBCol>
            <MDBCard className='shadow-2xl'>
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol lg="7">
                    <MDBTypography tag="h5" className='mb-3'>
                      <Link to="/home" className="text-body">
                        <MDBIcon fas icon="long-arrow-alt-left me-1" /> Continue shopping
                      </Link>
                    </MDBTypography>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="my-2">Shopping cart</p>
                        <p className="text-xl">You have {UserData.length} items in your cart</p>
                      </div>
                    </div>
                    {UserData.map(d => (
                      <MDBCard className="mb-3" key={d._id}>
                        <MDBCardBody>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <MDBCardImage
                                src={d.img}
                                fluid
                                className="rounded-3"
                                style={{ width: "75px" }}
                                alt={d.title}
                              />
                              <div className="ms-3">
                                <MDBTypography tag="h5">
                                  <b>{d.title}</b>
                                </MDBTypography>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{ width: "80px" }}>
                                <MDBTypography tag="h5" className="mb-0">
                                  <i><span className='text-red-500 font-semibold'>₹{Math.floor(d.price / 2).toLocaleString('en-IN')}</span><br /><span className='line-through'>₹{Math.floor(d.price).toLocaleString('en-IN')}</span></i>
                                </MDBTypography>
                              </div>
                                <MDBIcon fas icon="trash-alt" className='py-1 px-2 border-0 rounded text-slate-50 bg-slate-900 transition ease-in-out cursor-pointer text-xl hover:bg-red-600 hover:scale-110 hover:showdow-2xl' onClick={() => del(d._id)}/>
                            </div>
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                    ))}
                  </MDBCol>
                  {/* PAYEMENT SELECTION */}
                  <MDBCol lg="5">
                    <MDBCard className="bg-dark text-white rounded-3 h-100">
                      <MDBCardBody className=''>
                          <div tag="h5" className="mb-3 text-3xl font-extrabold text-center text-green-500">
                            Payment Options
                          </div>
                        <hr/>
                        <div className="d-flex justify-content-between mt-4 text-3xl font-bold">
                          <p className="mb-4 flex justify-between">Items :</p>
                          <p className="mb-4 flex justify-between">Prices :</p>
                        </div>
                        {UserData?.map((d)=>(
                        <div className="d-flex justify-content-between mb-4 text-xl">
                          <p className="mb-4 flex justify-between">{d.title}</p>
                          <p className="mb-4 flex justify-between">{Math.floor(d.price/2).toLocaleString('en-IN')}</p>
                        </div>
                        ))}
                        <hr />
                        <div className="d-flex justify-content-between mt-3 text-lg">
                          <p className="mb-4">GST 18% :-</p>
                          <p className="mb-4">{"₹" + GST.toLocaleString('en-IN')}</p>
                        </div>
                        <div className="d-flex justify-content-between text-xl">
                          <p className="mb-4">Subtotal</p>
                          <p className="mb-4 line-through font-bold">{"₹" + subtotal.toLocaleString('en-IN')}</p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between mt-3">
                          <p className="mb-4">Applied Coupen</p>
                          <p className='text-red-500 text-xl font-extrabold'>50% OFF</p>
                        </div>
                        <div className="d-flex justify-content-between text-2xl">
                          <p className="mb-4">Total (Incl. taxes)</p>
                          <p className="mb-4 text-green-500 font-bold">{"₹" + Math.floor(total).toLocaleString('en-IN')}</p>
                        </div>
                        <div className="text-center mt-3">
                          <Button className="bg-red-600 border-0 text-xl px-5 py-3 hover:bg-green-600 transition ease-in-out duration-300 delay-200 hover:scale-[1.02]" onClick={handleRazorpayPayment}>
                            <span>
                              Place Order
                              <i className="fas fa-long-arrow-alt-right ms-2"></i>
                            </span>
                          </Button>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </Container>
    </section>
  );
}
