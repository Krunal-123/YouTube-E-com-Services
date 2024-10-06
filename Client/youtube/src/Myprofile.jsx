import React, { useState, useEffect } from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
  MDBInput,
} from 'mdb-react-ui-kit';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useCart } from './context/CartContext';
import { Button, Spinner } from 'react-bootstrap';
import axios from 'axios';

export default function PersonalProfile() {
  const { user, setUser } = useCart();
  const [isEditing, setIsEditing] = useState(false);
  const [editDetails, setEditDetails] = useState({});
  
  // New states for category and subcategory selections
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('');

  const avatarCategories = {
    'Male': [
      { label: 'Male Avatar 1', value: 'https://yt3.ggpht.com/a/AATXAJzFE_5zKBk19JRw6RbSvLseEhNrI0W5qfPjoQ=s900-c-k-c0xffffffff-no-rj-mo' },
      { label: 'Male Avatar 2', value: 'https://i.pinimg.com/736x/10/11/ef/1011efaaf04baa3b05f1cfb08bd8a9ce.jpg' },
      { label: 'Male Avatar 3', value: 'https://img.freepik.com/premium-vector/masculine-gestures-compilation-vector-graphicsmens-vector-emotional-spectrum-compilation_481747-45388.jpg' },
      { label: 'Male Avatar 4', value: 'https://img.freepik.com/premium-vector/mens-activities-vector-illustration-displayversatile-men-vector-graphics-compilation_481747-44530.jpg' },
      { label: 'Male Avatar 5', value: 'https://th.bing.com/th/id/OIP.dhhbDwvSxpGSPzhe_PusUAAAAA?pid=ImgDet&w=400&h=400&rs=1' },
      { label: 'Male Avatar 6', value: 'https://th.bing.com/th/id/OIP.OIsYvJFi5XMH1IOajDEv9gHaHa?w=800&h=800&rs=1&pid=ImgDetMain'},
      { label: 'Male Avatar 7', value: 'https://th.bing.com/th/id/OIP.d0X_Gs2lmWSuv4MdtT6JkAHaHa?rs=1&pid=ImgDetMain' },
      { label: 'Male Avatar 8', value: 'https://pbs.twimg.com/profile_images/1481020650487570434/Ma90VOhT_400x400.png' },
    ],
    'Female': [
      { label: 'Female Avatar 1', value: 'https://i.pinimg.com/736x/eb/03/88/eb038855a7042127763c113b35c5b2ca.jpg' },
      { label: 'Female Avatar 2', value: 'https://m.media-amazon.com/images/I/512ktT+5KRL._SY600_.jpg' },
      { label: 'Female Avatar 3', value: 'https://i.pinimg.com/originals/7f/79/6d/7f796d57218d9cd81a92d9e6e8e51ce4.png' },
      { label: 'Female Avatar 4', value: 'https://i.pinimg.com/originals/70/b7/e1/70b7e1a1eeccc1e9508be5b633ef11cc.png' },
      { label: 'Female Avatar 5', value: 'https://i.pinimg.com/originals/e3/3e/77/e33e775c1601c6d70ef81be4ce828cb9.png' },
      { label: 'Female Avatar 6', value: 'https://padletuploads.blob.core.windows.net/prod/52876518/Ou6JMSDD6PHJei824RNhpg/1037fe1cd58ca4e4dae4c3e6de4f63bc.png' },
      { label: 'Female Avatar 7', value: 'https://th.bing.com/th/id/OIP.zQKQ3NjbEtzK8zD8elvxHwHaHa?rs=1&pid=ImgDetMain' },
      { label: 'Female Avatar 8', value: 'https://www.educake.co.uk/wp-content/uploads/2022/03/sarah-strange.png' },
    ]
  };

  // UseEffect to initialize editDetails with user data
  useEffect(() => {
    if (user && user.length > 0) {
      const { profilePic,firstName, lastName, email, gender, number, _id } = user[0];
      setEditDetails({ profilePic, firstName, lastName, email, gender, number, _id });
    }
  }, [user]);
  useEffect(()=>{
    setSelectedCategory(editDetails.gender);
  },[editDetails])
  
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };
  
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
    setEditDetails((prevDetails) => ({ ...prevDetails, gender: e.target.value }));   
    // setSelectedAvatar(''); // Reset the avatar selection when the category changes
  };

  const handleAvatarChange = (e) => {
    setSelectedAvatar(e.target.value);
    setEditDetails((prevDetails) => ({ ...prevDetails, profilePic: e.target.value }));
  };

  const handleSave = async () => {
    try {
      let res = await axios.patch("http://localhost:3000/updatedetails", editDetails);
      setIsEditing(false);
      setUser([{ ...user[0], ...editDetails }]);
    } catch (error) {
      console.error("Failed to update details:", error);
      alert("Failed to save details. Please try again.");
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditDetails(user[0]); // Reset to original user data
  };

  if (!user || user.length === 0) {
    return (
      <section className="bg-[#f4f5f7]">
        <MDBContainer className="py-10 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <Spinner animation="border" />
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }

  return (
    <section className="bg-[#f4f5f7]">
      <MDBContainer className="py-10 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="10" className="mb-4">
            <MDBCard className="mb-3 shadow-2xl" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="bg-primary text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage
                    src={editDetails.profilePic || "default-avatar-url.jpg"}
                    alt="Avatar"
                    className="my-5 w-[80%] m-auto rounded-[15%] shadow-lg"
                    fluid
                  />
                  <MDBTypography tag="h5" className="mb-0 text-2xl font-bold">
                    <i>{editDetails.firstName} {editDetails.lastName}</i>
                  </MDBTypography>
                  <MDBIcon far icon="edit" className="mb-5 mt-3 text-2xl hover:text-red-500 hover:scale-[1.1]" onClick={handleEditToggle} style={{ cursor: 'pointer' }} />
                </MDBCol>
                <MDBCol md="8" className='my-auto'>
                  <MDBCardBody className="p-5">
                    <MDBTypography tag="h6">Account ID: {editDetails._id}</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email:</MDBTypography>
                        <MDBCardText className="text-muted">{editDetails.email}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Name:</MDBTypography>
                        {isEditing ? (
                          <>
                            <MDBInput
                              name="firstName"
                              value={editDetails.firstName}
                              onChange={handleInputChange}
                              className="mb-2"
                            />
                            <MDBInput
                              name="lastName"
                              value={editDetails.lastName}
                              onChange={handleInputChange}
                            />
                          </>
                        ) : (
                          <MDBCardText className="text-muted">{editDetails.firstName} {editDetails.lastName}</MDBCardText>
                        )}
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">

                      {isEditing ? (
                        <>
                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Gender:</MDBTypography>
                            <Select
                            name='gender'
                              value={editDetails.gender}
                              onChange={handleCategoryChange}
                              fullWidth
                            >
                              {Object.keys(avatarCategories).map((category) => (
                                <MenuItem key={category} value={category}>
                                  {category}
                                </MenuItem>
                              ))}
                            </Select>
                          </MDBCol>

                          <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Select Avatar:</MDBTypography>
                            <Select
                            name='profilePic'
                              value={selectedAvatar}
                              onChange={handleAvatarChange}
                              fullWidth
                              disabled={!editDetails.gender}
                            >
                              {selectedCategory &&
                                avatarCategories[selectedCategory].map((avatar,i) => (
                                  <MenuItem key={i} value={avatar.value}>
                                    <img
                                      src={avatar.value}
                                      alt={avatar.label}
                                      className="w-[50px] h-[50px] mr-2"
                                    />
                                    {avatar.label}
                                  </MenuItem>
                                ))}
                            </Select>
                          </MDBCol>
                        </>
                      ):(
                        <MDBCol>
                        <MDBTypography tag="h6">Gender:</MDBTypography>
                        <MDBCardText className="text-muted">{editDetails.gender}</MDBCardText>
                        </MDBCol>

                      )}

                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone:</MDBTypography>
                        {isEditing ? (
                          <MDBInput
                            name="number"
                            value={editDetails.number || ''}
                            onChange={handleInputChange}
                          />
                        ) : (
                          <MDBCardText className="text-muted">{editDetails.number || 'N/A'}</MDBCardText>
                        )}
                      </MDBCol>
                    </MDBRow>

                    {isEditing && (
                      <div className="d-flex justify-content-between">
                        <Button className="btn-success px-4" onClick={handleSave}>Save</Button>
                        <Button className="btn-danger px-3" onClick={handleCancel}>Cancel</Button>
                      </div>
                    )}

                    {!isEditing && (
                      <div className="d-flex justify-content-start">
                        <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                        <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                        <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                      </div>
                    )}
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
