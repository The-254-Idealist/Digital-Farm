import { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import HeaderNav from "../../components/HeaderNav";
import { Form , Button, } from 'react-bootstrap'
import { login, reset } from '../../features/buyer/buyerSlice'
import 'bootstrap/dist/css/bootstrap.min.css';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://bit.ly/3AHjL8L")
      center;
  background-size: cover;
  display: flex;

  align-items: center;
  justify-content: center;
`;

const LoginBuyer = () => {
  const [formData, setFormData] = useState({
    email:'',
    password:'',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { buyer,  isError, isSuccess, message } = useSelector(
    (state) => state.authbuyer
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || buyer) {
      navigate('/')
    }

    dispatch(reset())
  }, [buyer, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const buyerData = {
      email,
      password,
    }

    dispatch(login(buyerData))
  }
  return (

    <>
       <Container>
         
         <Form onSubmit={onSubmit}>
       <Form.Group className="mb-3" >
         <Form.Label>Enter Email Name</Form.Label>
         <Form.Control 
          type='email'
          className='form-control'
          id='email'
          name='email'
          value={email}
          placeholder='Enter your email'
          onChange={onChange} />
         <Form.Text className="text-muted">
           We'll never share your email with anyone else.
         </Form.Text>
       </Form.Group>

       <Form.Group className="mb-3" >
         <Form.Label>Password</Form.Label>
         <Form.Control 
         type='password'
         className='form-control'
         id='password'
         name='password'
         value={password}
         placeholder='Enter password'
         onChange={onChange} />
       </Form.Group>
       <Button variant="primary" type="submit">
         Submit
       </Button>
       </Form> 

</Container>
    </>
  );
};

export default LoginBuyer;
