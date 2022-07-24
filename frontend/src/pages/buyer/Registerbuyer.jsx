import { useState , useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {  toast } from 'react-toastify'
import { Form, Button, } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {register , reset} from '../../features/buyer/buyerSlice'
import Spinners from '../../components/Spinner'
import styled from "styled-components";
import HeaderNav from '../../components/HeaderNav'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://bit.ly/3yknF4e")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
function RegisterBuyer() {
const [formData, setformData] = useState(
  {
    name: '',
    email: '',
    password: '',
    password2: '',
  }
)
const {name ,email, password, password2} = formData

const navigate = useNavigate()
const dispatch = useDispatch()

const {buyer, isLoading, isError, isSuccess, message }   = useSelector(
  (state) => state.authbuyer
  
)
useEffect(()=>{
  if(isError){
    toast.error(message)
  }
  if(isSuccess || buyer ){
     navigate('/')
  }
  dispatch(reset())

},[buyer, isError, isSuccess, message, navigate, dispatch])

const onChange = (e) =>{
  setformData((prevState)=>({
    ...prevState,
    [e.target.name] : e.target.value,

  }))
}
const onSubmit = (e) =>{
  e.preventDefault()
  if(password !== password2){
    toast.error('password do not match')
  } else {
    const buyerData = {
      name, email, password,
    }
    dispatch(register(buyerData))
  }
}
    if(isLoading) {
      return <Spinners />
    }

    return (
       <>
        <Container >
           
           <Form onSubmit={onSubmit}>
 <Form.Group>
     <Form.Label>Name</Form.Label>
     <Form.Control
         type='text'
         className='form-control'
         id='name'
         name='name'
         value={name}
         placeholder='Enter your Full name'
         onChange={onChange} />
  </Form.Group>
         <Form.Group>
     <Form.Label>Email</Form.Label>
     <Form.Control 
        type='email'
        className='form-control'
        id='email'
        name='email'
        value={email}
        placeholder='Enter your email'
        onChange={onChange} />
   </Form.Group>
    <Form.Label>Password</Form.Label>
    <Form.Group>
      <Form.Control
         type='password'
         className='form-control'
         id='password'
         name='password'
         value={password}
         placeholder='Enter password'
         onChange={onChange} />
    </Form.Group>  
    <Form.Group>
      <Form.Label>Confirm your Password</Form.Label>
      <Form.Control  
          type='password'
          className='form-control'
          id='password2'
          name='password2'
          value={password2}
          placeholder='Confirm password'
          onChange={onChange} />
    </Form.Group>    
  <Button variant="primary" type="submit">
    Submit
  </Button>
      </Form>  
  </Container>
       </>
      )
}

export default RegisterBuyer