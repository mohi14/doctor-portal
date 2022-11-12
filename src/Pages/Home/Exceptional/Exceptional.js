import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Exceptional = () => {
    return (
        <div className="card lg:card-side bg-base-100 mt-24">
            <figure className='lg:w-2/5'>
                <img src={treatment} alt="Album" className='lg:h-[576px] rounded-2xl' />
            </figure>
            <div className="card-body lg:w-1/2 m-auto lg:px-20">
                <h2 className="card-title text-4xl lg:text-5xl font-bold mb-4">Exceptional Dental Care, on Your Terms</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

                <div className='lg:w-1/5 mt-5'>
                    <PrimaryButton >Get Started</PrimaryButton>
                </div>

            </div>

        </div>
    );
};

export default Exceptional;