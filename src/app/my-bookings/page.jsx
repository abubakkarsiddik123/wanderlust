import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaEye,
  FaCheckCircle,
} from "react-icons/fa";
import { BookingCancelAlert } from "@/components/BookingCancelAlert";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const result = await auth.api.getToken({
    headers: await headers(),
  });

  // console.log(result, "booking token");

  const res = await fetch(`http://localhost:5000/booking/${user.id}`, {
    headers: {
      authorization: `Bearer ${result.token}`,
    },
  });

  const bookings = await res.json();
  // console.log(bookings, "all my bookings");

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold">My Bookings</h1>

      <p className="text-gray-500 mt-2 mb-8">
        Manage and view your upcoming travel plans
      </p>

      {bookings.length === 0 ? (
        <div className="border rounded-xl py-20 text-center">
          <h2 className="text-2xl font-bold">No Bookings Found</h2>

          <p className="text-gray-500 mt-3">
            You have not booked any destination yet.
          </p>

          <Link
            href="/destinations"
            className="inline-block mt-6 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg"
          >
            Explore Destinations
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="flex flex-col lg:flex-row gap-6 items-center border rounded-xl p-4 shadow-sm bg-white"
            >
              {/* Image */}
              <div className="relative w-full lg:w-72 h-48 rounded-lg overflow-hidden">
                <Image
                  src={booking.imageUrl}
                  alt={booking.destinationName}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Booking Info */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                  <FaCheckCircle />
                  <span>Confirmed</span>
                </div>

                <h2 className="text-3xl font-bold mt-3">
                  {booking.destinationName}
                </h2>

                <div className="mt-4 space-y-2 text-gray-500">
                  <p className="flex items-center gap-2">
                    <FaCalendarAlt />
                    <span>Departure:</span>
                    <span>
                      {new Date(booking.depertureDate).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        },
                      )}
                    </span>
                  </p>

                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    Booking ID : {booking._id}
                  </p>
                </div>

                <h3 className="text-4xl font-bold text-sky-500 mt-5">
                  ${booking.price}
                </h3>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <BookingCancelAlert bookingId={booking._id} />
                <Link
                  href={`/destinations/${booking.destinationId}`}
                  className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-lg flex items-center gap-2"
                >
                  <FaEye />
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookingsPage;
