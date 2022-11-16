import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppointmentOption from "./AppointmentOption";




const AvailableAppointments = ({ selectedDate }) => {


    const [appointmentOptions, setAppointmentOptions] = useState([])

useEffect( () => {
    fetch('appointmentOptions.json')
    .then(res => res.json())
    .then(data => setAppointmentOptions(data))
}, [])


    return (
    <section className="mt-16 mx-auto w-[95%]">
      <p className="text-secondary font-bold text-center text-lg my-12">
        Available Appointments on April {format(selectedDate, "PP")}
      </p>

<div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16">
{
    appointmentOptions.map(option => <AppointmentOption key={option._id} appointmentOption={option} />)
}

</div>
        
    </section>
  );
};

export default AvailableAppointments;