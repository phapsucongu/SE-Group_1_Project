import React from 'react'
import SubHeader from '../components/Header/SubHeader'
const Contact = () => {
  return (
    <>
     <SubHeader title='Contact Us' subtitle='Contact for more'/>
    <section>
      <div className='px-4 mx-auto max-w-screen-md'>
        <p className='mb-8 lg:mb-16 font-light text-center text__para'>
          Form below to get in touch with us. We will get back to you as soon as possible.
        </p>
        <form action="#" className='space-y-8'>
          <div>
            <label htmlFor="email" className='form__label'>
              Your Email
            </label>
            <input 
              type="email"
              id='email'
              placeholder='exemple@gmail.com'
              className='form__input mt-1' />
          </div>
          <div>
            <label htmlFor="subject" className='form__label'>
              Subject
            </label>
            <input 
              type="text"
              id='subject'
              placeholder='Let us know how we can help you'
              className='form__input mt-1' />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className='form__label'>
              Your Message
            </label>
            <textarea
              rows={5}
              type="text"
              id='message'
              placeholder='Leave a comment . . .'
              className='form__input-1 mt-1' />
          </div>
          <button
            type="submit"
            className="btn rounded sm:w-fit">
            Submit
          </button>
        </form>
      </div>
    </section>
    </>
    )
}

export default Contact