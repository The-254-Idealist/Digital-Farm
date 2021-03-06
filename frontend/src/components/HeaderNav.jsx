import React, { useState} from 'react'
import { Button , Navbar, Container,  FormControl , Nav, InputGroup, Card  } from 'react-bootstrap'
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { FaBold } from 'react-icons/fa'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/buyer/buyerSlice'
import 'bootstrap/dist/css/bootstrap.min.css';
import { VscAccount} from 'react-icons/vsc'

const HeaderNav = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { buyer } = useSelector((state) => state.authbuyer)
   
    const [SearchTerm, setSearchTerm] = useState()
  const onChangeHandler = (event) =>{
    setSearchTerm(event.target.value)

    
    navigate('/search', {
      state:{
        fun: SearchTerm
      },
    }
    )
  }
    const onLogout = () => {
      dispatch(logout())
      dispatch(reset())
      navigate('/')
    }
    const quantity = useSelector(state=>state.cart.cartTotalQuantity)
  return (
    <div bg="success" variant="dark">
        <Navbar bg="success" variant='dark' expand="lg">
            <Container fluid>
                <Navbar.Brand ><Link to='/'><Button variant='success' >Digital FarmHouse</Button></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                  <Link to='/About' ><Button size='lg' className='btn' variant='success'> <FaBold/>About</Button> </Link>
                </Nav>  
                </Navbar.Collapse>
                    <div variant='success'>

                   
                    {buyer ? (
                        <>
                          <Button size='lg' className='btn' variant='success' >
                             <VscAccount /> <h3>{buyer && buyer.name}</h3>
                          </Button>
                          <Button size='lg' className='btn' variant='success' onClick={onLogout}>
                            <FaSignOutAlt /> Logout
                          </Button>
                       </>
          
        ) : (
          <>
            
              <Link to='/login'>
              <Button size='lg' className='btn' variant='success'>
                <FaSignInAlt /> Login
                </Button>
              </Link>
              
               <Link to='/register'>
              <Button size='lg' className='btn' variant='success'>
                <FaUser /> Register
                </Button>
              </Link>
            
          </>
        )}
                    </div> 
                    <Badge badgeContent={quantity} color="primary">                   
                    <Link to='/cart' >
                        <Button size='lg' 
                        className='btn' 
                        variant='success'> 
                        <ShoppingCartOutlined />                      
                     </Button> 
                    </Link> 
                    </Badge>  
            </Container>
        </Navbar>

        <div className="templateContainer">
             <div className="searchInput_Container">
             <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            onChangeHandler(event);
            }}
            />
           </div>
           </div>
      
       </div>
  )
}

export default HeaderNav