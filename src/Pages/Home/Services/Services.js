import React from 'react';
import fluroide from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const serviceData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias quas neque nam sequi .',
            icon: fluroide
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias quas neque nam sequi .',
            icon: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias quas neque nam sequi .',
            icon: whitening
        }
    ]
    return (
        <div className='mt-24'>
            <div className='text-center'>
                <h3 className='text-primary text-2xl font-bold'>Our Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
                {
                    serviceData.map(service => <Service
                        key={service.id}
                        service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default Services;