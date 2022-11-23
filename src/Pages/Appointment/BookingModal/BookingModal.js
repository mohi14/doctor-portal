import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name, slots, price } = treatment;
    const date = format(selectedDate, 'PP')
    const { user } = useContext(AuthContext)
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patientName,
            slot,
            email,
            phone,
            price
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success('Booking Confirmed')
                    refetch();
                }
                else {
                    toast.error(data.message)
                }
            })
    }
    return (
        <>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='grid grid-cols-1 gap-3 mt-10' onSubmit={handleBooking}>
                        <input type="text" placeholder="Type here" value={date} className="input w-full input-bordered" disabled />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" readOnly />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Your Email Address" className="input w-full input-bordered" readOnly />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input type="submit" value='Submit' className='w-full  btn btn-accent' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;