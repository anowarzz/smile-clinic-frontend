import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Shared/Loading/Loading";

const AvailableAppointments = ({ selectedDate }) => {
  

  const [treatment, setTreatment] = useState(null);

const date = format(selectedDate, 'PP')

const {data:appointmentOptions = [], refetch, isLoading} = useQuery({
  queryKey: ['appointmentOptions', date],
  queryFn: async () => {
    const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
    const data = await res.json();
    return data
  }
})

if(isLoading){
  return <Loading />
}

  return (
    <section className="mt-16 mx-auto w-[95%]">
      <p className="text-secondary font-bold text-center text-lg my-12">
        Available Appointments on April {format(selectedDate, "PP")}
      </p>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          />
        ))}
      </div>

      {treatment && (
        <BookingModal treatment={treatment} selectedDate={selectedDate}
        refetch = {refetch}
        setTreatment={setTreatment}
        />
      )}
    </section>
  );
};

export default AvailableAppointments;
