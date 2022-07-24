import { useState} from 'react'
import { Button , Alert } from 'react-bootstrap';
import {BiError } from 'react-icons/bi'
import { Link } from 'react-router-dom';

function ErrorPage() {
 
    const [show, setShow] = useState(true);

    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading> <Button variant='danger' >< BiError/></Button>Oh snap! You got an error!</Alert.Heading>
          <p>
                Page not found <Link to='/' ><Button variant='success' >Home Page</Button></Link>
          </p>
        </Alert>
      );
    }
    return <Link to='/'> <Button variant='success' > Home Page</Button></Link>;
  }


export default ErrorPage