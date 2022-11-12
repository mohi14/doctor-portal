import React from 'react';
import appointment from '../../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <section style={{
            background: `url(${appointment})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }}>
            <div className='text-center pt-16 pb-10'>
                <h4 className='text-primary text-lg font-bold'>Contact Us</h4>
                <h2 className='text-3xl text-white'>Stay connected with us</h2>
            </div>
            <div className=' w-4/5 lg:w-2/5  m-auto pb-16'>
                <from className='w-full '>
                    <div className='mb-4'>
                        <input type="text" placeholder="Email Address" className="input w-full " />
                    </div>
                    <div className='mb-4'>
                        <input type="text" placeholder="Subject" className="input w-full " />
                    </div>
                    <div className='mb-6'>
                        <textarea className="textarea w-full" placeholder="Your message"></textarea>
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white px-9 ' type='submit'>Submit</button>
                    </div>
                </from>
            </div>

        </section>
    );
};

export default ContactUs;