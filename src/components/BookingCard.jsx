"use client";
import { Calendar, DateField, DatePicker, Label } from "@heroui/react";
import { FiArrowRight } from "react-icons/fi";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const BookingCard = ({ destination }) => {
  //   console.log(destination, "destination");
  const { data: session } = authClient.useSession();
  const user = session?.user;
  //   console.log(user, "user information");
  const [depertureDate, serDepertureDate] = useState(null);
  //   console.log(depertureDate, "depertureDate");

  const handleBooking = async () => {
    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      destinationId: destination._id,
      destinationName: destination.destinationName,
      price: destination.price,
      imageUrl: destination.imageUrl,
      country: destination.country,
      depertureDate: new Date(depertureDate),
    };
    // console.log(bookingData);
    const res = await fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    toast.success("You Booked Successfully!");
    // console.log(data,"mongodb save to data");
  };

  return (
    <div className="border rounded-lg shadow p-6 h-fit">
      <p className="text-gray-500">Starting from</p>

      <h2 className="text-5xl font-bold text-sky-500 mt-2">
        ${destination.price}
      </h2>

      <p className="text-gray-500 mb-5">per person</p>

      <DatePicker onChange={serDepertureDate} className="w-72" name="date">
        <Label>Deperture Date</Label>
        <DateField.Group fullWidth>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
          <DateField.Suffix>
            <DatePicker.Trigger>
              <DatePicker.TriggerIndicator />
            </DatePicker.Trigger>
          </DateField.Suffix>
        </DateField.Group>
        <DatePicker.Popover>
          <Calendar aria-label="Event date">
            <Calendar.Header>
              <Calendar.YearPickerTrigger>
                <Calendar.YearPickerTriggerHeading />
                <Calendar.YearPickerTriggerIndicator />
              </Calendar.YearPickerTrigger>
              <Calendar.NavButton slot="previous" />
              <Calendar.NavButton slot="next" />
            </Calendar.Header>
            <Calendar.Grid>
              <Calendar.GridHeader>
                {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
              </Calendar.GridHeader>
              <Calendar.GridBody>
                {(date) => <Calendar.Cell date={date} />}
              </Calendar.GridBody>
            </Calendar.Grid>
            <Calendar.YearPickerGrid>
              <Calendar.YearPickerGridBody>
                {({ year }) => <Calendar.YearPickerCell year={year} />}
              </Calendar.YearPickerGridBody>
            </Calendar.YearPickerGrid>
          </Calendar>
        </DatePicker.Popover>
      </DatePicker>

      <button
        onClick={handleBooking}
        className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 mt-5 flex justify-center items-center gap-2"
      >
        Book Now
        <FiArrowRight />
      </button>

      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-2">
          <FaCheck className="text-green-500" />
          Free cancellation up to 7 days
        </div>

        <div className="flex items-center gap-2">
          <FaCheck className="text-green-500" />
          Travel insurance included
        </div>

        <div className="flex items-center gap-2">
          <FaCheck className="text-green-500" />
          24/7 customer support
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
