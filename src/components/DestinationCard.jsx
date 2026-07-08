import Image from "next/image";
import Link from "next/link";
import { LuMapPin } from "react-icons/lu";
import { FaRegCalendarAlt, FaStar } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const DestinationCard = ({ destination }) => {
  const { imageUrl, price, destinationName, duration, country, _id } =
    destination;
    console.log(imageUrl);

  return (
    <div className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="relative w-full h-64">
        <Image
          src={imageUrl}
          fill
          alt={destinationName}
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <LuMapPin />
          <span>{country}</span>
        </div>

        <div className="flex justify-between items-start mt-2">
          <div>
            <h2 className="text-xl font-bold">{destinationName}</h2>

            <div className="flex items-center gap-2 mt-2 text-gray-500">
              <FaRegCalendarAlt />
              <span>{duration} Days</span>
            </div>
          </div>

          <div className="text-right flex items-center">
            <h3 className="text-2xl font-bold">${price}</h3>
            <span className="text-sm text-gray-500">/Person</span>
          </div>
        </div>

        <Link
          href={`/destinations/${_id}`}
          className="mt-5 inline-flex items-center gap-2 text-sky-500 font-semibold hover:gap-3 transition-all"
        >
          BOOK NOW <FiArrowUpRight />
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
