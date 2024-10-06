import * as React from 'react';
import Badge from '@mui/material/Badge';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreIcon from '@mui/icons-material/MoreVert';
import { AiOutlineShoppingCart } from "react-icons/ai";
import {useCart} from '../src/context/CartContext'
import axios from 'axios';
// export fun
export default function PrimarySearchAppBar() {
  const {cartItems,removeCookie,user,fav,setServices}=useCart()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const[custom,setCustom]=React.useState(false)
  let navigate=useNavigate()

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

const Categoires=async(categorise)=>{
const { data: servicesData } = await axios.post("http://localhost:3000/services",{categorise});
setServices(servicesData);
navigate("/home")
}
const search=async(e)=>{
  if (e.key==="Enter") {
    let value=e.currentTarget.value
    const { data: servicesData } = await axios.post("http://localhost:3000/search",{value});
    setServices(servicesData)
    navigate("/home")
  }
}


  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';


if (!user) {
  return
}
  return (
<>
   <div className="flex-grow w-full shadow-2xl sticky-top">
  <div className="bg-white text-black">
    <div className="flex items-center px-3 py-2">
      <img
        alt="Remy Sharp"
        src="https://img.icons8.com/?size=100&id=44112&format=png&color=000000"
        className="w-14 h-14 rounded-full"
      />
      <div className="flex-grow hidden md:flex ml-4">
        <Link to="/home">
          <button className="my-2 block mx-2 bg-clip-text text-lg font-bold hover:text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Home</button>
        </Link>
        <Link 
        onMouseEnter={()=>setCustom(true)}
        onMouseLeave={()=>setCustom(false)}>
          <button className="my-2  block mx-2 bg-clip-text text-lg font-bold hover:text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Categoires</button>
        </Link>
        {/* Categories Menu */}
        <div
          className={`absolute z-50 mt-1 left-[120px] top-[50px] bg-white border border-gray-300 rounded-md shadow-lg ${custom ? 'block' : 'hidden'}`}
          onMouseEnter={()=>setCustom(true)}
          onMouseLeave={()=>setCustom(false)}
        >
            <button className="py-2 px-2 block mx-2 bg-clip-text text-md font-bold hover:text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" onClick={()=>Categoires("editing")}>Editing Services</button>
            <button className="py-2 px-2 block mx-2 bg-clip-text text-md font-bold hover:text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" onClick={()=>Categoires("SEO")}>SEO Services</button>
            <button className="py-2 px-2 block mx-2 bg-clip-text text-md font-bold hover:text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" onClick={()=>Categoires("production")}>Production Services</button>
          <button className="py-2 px-2 block mx-2 bg-clip-text text-md font-bold hover:text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" onClick={()=>Categoires("designing")}>Designing Services</button>
          <button className="py-2 px-2 block mx-2 bg-clip-text text-md font-bold hover:text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" onClick={()=>Categoires("manager")}>Youtube Manager</button>
          <button className="py-2 px-2 block mx-2 bg-clip-text text-md font-bold hover:text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" onClick={()=>Categoires("scripting")}>Video Scripting</button>
          <button className="py-2 px-2 block mx-2 bg-clip-text text-md font-bold hover:text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" onClick={()=>Categoires("analytics")}>Analytics and Reporting</button>
          <button className="py-2 px-2 block mx-2 bg-clip-text text-md font-bold hover:text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" onClick={()=>Categoires("promotions")}>Social Media Promotions</button>
          <button className="py-2 px-2 block mx-2 bg-clip-text text-md font-bold hover:text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" onClick={()=>Categoires("all")}>Explore All</button>
        </div>
        <Link to="/aboutus">
          <button className="my-2  block mx-2 bg-clip-text text-lg font-bold hover:text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">About Us</button>
        </Link>
        <Link to="/contactus">
          <button className="my-2  block mx-2 bg-clip-text text-lg font-bold hover:text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Contact Us</button>
        </Link>
      </div>

      <div className="flex-grow" />
      <div className="hidden md:flex items-center">
        <div className="relative mx-2">
          <SearchIcon className="absolute left-2 top-2" />
          <input
            type="text"
            placeholder="Search...."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md"
            aria-label="search"
            onKeyDown={search}
          />
        </div>
        <div className="m-2 font-bold rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[3px]">
          <div className='h-full w-full bg-light rounded-sm p-1'>
          <i className='bg-clip-text text-lg font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
          Hello, {user[0]?.firstName}
          </i>
          </div>
        </div>
        <button
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onMouseEnter={handleProfileMenuOpen}
          onMouseLeave={handleMenuClose}
        >
        <img src={user[0].profilePic} className='w-[35px] h-[35px] rounded-full m-2'/>
          {/* <AccountCircle className="text-black m-2" /> */}
        </button>
        {/* Menu */}
        <div
          className={`absolute z-50 right-12 top-[60px] bg-white border border-gray-300 rounded-md shadow-lg ${isMenuOpen ? 'block' : 'hidden'}`}
          onMouseEnter={handleProfileMenuOpen}
          onMouseLeave={handleMenuClose}
        >
          <Link to={'/myprofile'}>
            <div className="py-2 px-2 block mx-2 bg-clip-text text-md font-bold hover:text-transparent bg-gradient-to-r from-blue-500 to-purple-500">My Profile</div>
          </Link>
          <Link to={'/mypurchase'}>
            <div className="py-2 px-2 block mx-2 bg-clip-text text-md font-bold hover:text-transparent bg-gradient-to-r from-blue-500 to-purple-500">My Purchase</div>
          </Link>
          <Link to={'/orderhistory'}>
            <div className="py-2 px-2 block mx-2 bg-clip-text text-md font-bold hover:text-transparent bg-gradient-to-r from-blue-500 to-purple-500">My Order</div>
          </Link>
          <div className="py-2 px-2 block mx-2 bg-clip-text text-md font-bold hover:text-transparent bg-gradient-to-r from-blue-500 to-purple-500" onClick={() => { removeCookie('token') }}>Logout</div>
        </div>
        {/* custom */}

        <Link to={'/myfavourites'}>
          <button className="ml-2 mx-2">
            <Badge badgeContent={fav} color="error">
              <FavoriteBorderIcon />
            </Badge>
          </button>
        </Link>
        <Link to={"/addcart"}>
          <button className="text-2xl mx-2 me-3 mb-1">
            <Badge badgeContent={cartItems} color="error">
              <AiOutlineShoppingCart/>
            </Badge>
          </button>
        </Link>
      </div>


      {/* modile app render */}
      <div className="flex md:hidden">
      <div>

      <button
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
        >
          <AccountCircle className="text-black m-2" />
        </button>
        {/* Menu */}
        {/* <div
          className={`absolute z-50 right-12 top-[60px] bg-white border border-gray-300 rounded-md shadow-lg ${isMenuOpen ? 'block' : 'hidden'}`}
          onClick={handleMenuClose}
        >
          <Link to={'/myprofile'}>
            <div className="py-2 px-2 block mx-2 bg-clip-text text-md font-bold hover:text-transparent bg-gradient-to-r from-blue-500 to-purple-500">My Profile</div>
          </Link>
          <Link to={'/myitems'}>
            <div className="py-2 px-2 block mx-2 bg-clip-text text-md font-bold hover:text-transparent bg-gradient-to-r from-blue-500 to-purple-500">My Purchase</div>
          </Link>
          <Link to={'/orderhistory'}>
            <div className="py-2 px-2 block mx-2 bg-clip-text text-md font-bold hover:text-transparent bg-gradient-to-r from-blue-500 to-purple-500">My Order</div>
          </Link>
          <div className="py-2 px-2 block mx-2 bg-clip-text text-md font-bold hover:text-transparent bg-gradient-to-r from-blue-500 to-purple-500" onClick={() => { removeCookie('token') }}>Logout</div>
        </div> */}
      <Link to={'/myfavourites'}>
          <button className="ml-2 mx-2">
            <Badge badgeContent={fav} color="error">
              <FavoriteBorderIcon />
            </Badge>
          </button>
        </Link>
        <Link to={"/addcart"}>
          <button className="text-2xl mx-2 me-3 mb-1">
            <Badge badgeContent={cartItems} color="error">
              <AiOutlineShoppingCart/>
            </Badge>
          </button>
        </Link>
        <button
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={()=>setCustom(true)}
        >
          <MoreIcon className="text-black" />
        </button>
      </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
