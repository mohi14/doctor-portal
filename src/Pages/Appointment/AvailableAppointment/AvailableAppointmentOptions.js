import React from 'react';

const AvailableAppointmentOptions = ({ appointmentOption, setTreatment }) => {
    const { name, slots, price } = appointmentOption
    return (
        <div className="card  shadow-lg">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p><small>Price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        htmlFor="bookingModal"
                        className="btn btn-primary text-white"
                        onClick={() => setTreatment(appointmentOption)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AvailableAppointmentOptions;