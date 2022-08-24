import React,{useRef, useState} from 'react'
import {Form,Button,Card ,Alert} from 'react-bootstrap'
import { useUserAuth } from '../context/AuthContext'

const Signup = () => {

  const emailRef =useRef()
  const passwordRef =useRef()
  const passwordConfirmRef =useRef()
  const [error,setError] =useState('')
  const [loading ,setLoading] = useState(false)
  

  //burada dikkat et useAuth conterxt cagirdik 
  const {signup} = useUserAuth()
  //simdi buradan context bilgi gonderecegiy
 async function handleSubmit (e) {
    e.preventDefault()

    if(passwordRef.current.value !== passwordConfirmRef.current.value){
         return setError('password do not match')
    }

    try {
      
      setLoading(true)
     await signup(emailRef.current.value,passwordRef.current.value)
    } catch {
      setError('FAIILED TO CREATE AN COUNT')
    
      
    }
    setLoading(false)

  }


 
 /** burada dikkat edilecek olan usere current.value yaz yoksa komut satirini goruyorsun
  *  const donRef =useRef()

  const adana=()=>{
    console.log(donRef.current.value)
  }
  */
 
  /*
  returnden sonra deneme zaptim userref
  *<input type="text " ref={donRef} />
    <button onClick={adana}> button</button> */ 


  return (
    <div>

 
     <Card>
     
        <Card.Body>
            <h2 className='text-center  mb-4'>Signup </h2>
            {error && <Alert variant='danger'>{error}</Alert>}
        </Card.Body>
        <Form onSubmit={handleSubmit}>
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

             <Button disabled={loading} className='w-100' type='submit'>Signup up</Button>
        </Form>
     </Card>


      <div className='w-100 text-center mt-2'>
        Already have an account ? login 
        </div>    



    </div>
  )
}

export default Signup