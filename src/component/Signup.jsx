import React,{useRef} from 'react'
import {Form,Button,Card} from 'react-bootstrap'

const Signup = () => {

  const emailRef =useRef()
  const passwordRef =useRef()
  const passwordConfirmRef =useRef()
  console.log()


  return (
    <div>
     <Card>
        <Card.Body>
            <h2 className='text-center  mb-4'>Signup </h2>
        </Card.Body>
        <Form>
            <Form.Group id='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' ref={emailRef} required />
            </Form.Group>

            <Form.Group id='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='Password' ref={passwordRef} required />
            </Form.Group>

            <Form.Group id='password-confirm'>
                <Form.Label>Password-confirm</Form.Label>
                <Form.Control type='password' ref={passwordConfirmRef} required />
            </Form.Group>

             <Button className='w-100' type='submit'>Signup up</Button>
        </Form>
     </Card>


      <div className='w-100 text-center mt-2'>
        Already have an account ? login 
        </div>    



    </div>
  )
}

export default Signup