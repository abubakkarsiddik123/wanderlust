import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaStar, FaRegCalendarAlt, FaCheck } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { EditModal } from "@/components/EditModal";
import { DeleteDestination } from "@/components/DeleteDestinaion";

import BookingCard from "@/components/BookingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const {token} = await auth.api.getToken({
    headers:await headers()
  })
  // console.log(token);

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const destination = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      {/* Top */}
      <div className="flex justify-between items-center mb-6">
        <Link
          href="/destinations"
          className="flex items-center gap-2 text-gray-600 hover:text-sky-500"
        >
          <FaArrowLeft />
          Back to Destinations
        </Link>

        <div className="flex items-center gap-2">
          <EditModal destination={destination} />
          <DeleteDestination destination={destination} />
        </div>
      </div>

      {/* Banner */}
      <div className="relative w-full h-[500px]">
        <Image
          src={destination.imageUrl}
          fill
          alt={destination.destinationName}
          className="object-cover rounded-xl"
        />
      </div>

      {/* Content */}
      <div className="grid lg:grid-cols-3 gap-10 mt-10">
        {/* Left */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 text-gray-500">
            <LuMapPin />
            {destination.country}
          </div>

          <h1 className="text-5xl font-light mt-3">
            {destination.destinationName}
          </h1>

          <div className="flex gap-5 mt-4">
            <div className="flex items-center gap-1 text-green-600">
              <FaStar />
              <span>{destination.rating}</span>
            </div>

            <div className="flex items-center gap-2">
              <FaRegCalendarAlt />
              <span>
                {destination.duration} Days / {destination.duration - 1} Nights
              </span>
            </div>
          </div>

          <h2 className="text-3xl mt-10 mb-4 font-medium">Overview</h2>

          <p className="text-gray-600 leading-8">{destination.description}</p>

          <h2 className="text-3xl mt-10 mb-5 font-medium">Highlights</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              Luxury beachfront accommodation
            </div>

            <div className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              Visit famous attractions
            </div>

            <div className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              Traditional local cuisine
            </div>

            <div className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              Private guided tour
            </div>
          </div>
        </div>

        {/* Right */}
        <BookingCard destination={destination} />
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
