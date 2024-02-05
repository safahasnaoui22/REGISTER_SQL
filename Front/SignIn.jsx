import React from 'react'

function SignIn() {
  return (
    <div className='d-flex w-100 bg-primary justify-content-center align-items-center   '>
        
<div className='bg-white p-3 rounded w-25'>
    <h2>Sign-Up</h2>
    <form>
        <div className='mb-3'>
            <label><strong>Name</strong></label>
            <input type='text' placeholder='Enter Name' name='name'
            className='form-control rounded-0' />
        </div>

        <div className='mb-3'>
            <label><strong>Email</strong></label>
            <input type='email' placeholder='Enter Email' name='email'
            className='form-control rounded-0' />
        </div>

        <div className='mb-3'>
            <label><strong>Password</strong></label>
            <input type='password' placeholder='Enter Password' name='password'
            className='form-control rounded-0' />
        </div>
        <button type='submit' className='btn btn-success w-100 rounded-0'>Sign Up</button>
    </form>
</div>


    </div>
  )
}

export default SignIn