import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const TravelSay = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-2">
        {/* Heading */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-light text-gray-900">
              What Travelers Say
            </h2>
            <p className="mt-2 text-gray-500">
              Real experiences from our happy travelers
            </p>
          </div>

          <div className="flex gap-3">
            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-sky-500 hover:text-white hover:border-sky-500 transition">
              <FiArrowLeft size={20} />
            </button>

            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-sky-500 hover:text-white hover:border-sky-500 transition">
              <FiArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="border border-gray-200 p-5 flex items-center justify-between gap-6 hover:shadow-lg transition">
            <div className="flex-1">
              <p className="text-xl leading-relaxed text-gray-800">
                The Bali Trip Was Absolutely Magical! Every Detail Was
                Perfectly Planned. The Resorts Were Luxurious And The Cultural
                Experiences Were Unforgettable.
              </p>

              <div className="mt-10">
                <h4 className="text-sky-500 font-medium">— Michael Chen</h4>
                <p className="text-sm text-gray-500">Singapore</p>
              </div>
            </div>
            <Image
            src={"/assets/person2.png"}
            alt="person 1"
            width={200}
            height={200}
            />
            
          </div>

          {/* Card 2 */}
          <div className="border border-gray-200 p-5 flex items-center justify-between gap-6 hover:shadow-lg transition">
            <div className="flex-1">
              <p className="text-xl leading-relaxed text-gray-800">
                Swiss Alps Adventure Exceeded All Expectations. The Mountain
                Views Were Breathtaking And Our Guide Was Incredibly
                Knowledgeable. Highly Recommend!
              </p>

              <div className="mt-10">
                <h4 className="text-sky-500 font-medium">— Sarah Johnson</h4>
                <p className="text-sm text-gray-500">New York, USA</p>
              </div>
            </div>
              <Image
            src={"/assets/person1.png"}
            alt="person 1"
            width={200}
            height={200}
            />
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelSay;
