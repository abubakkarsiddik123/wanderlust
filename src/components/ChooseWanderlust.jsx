import { FiShield, FiMap, FiHeadphones } from "react-icons/fi";

const ChooseWanderlust = () => {
  return (
    <section className="bg-sky-50 py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-gray-900">
            Why Choose Wanderlust
          </h2>
          <p className="mt-3 text-gray-500">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <FiShield className="text-4xl text-sky-500 mb-6" />

            <h3 className="text-3xl font-light text-gray-900 mb-3">
              Safe & Secure
            </h3>

            <p className="text-gray-500 leading-7">
              Your safety is our priority with comprehensive travel
              insurance and 24/7 support.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <FiMap className="text-4xl text-sky-500 mb-6" />

            <h3 className="text-3xl font-light text-gray-900 mb-3">
              Expert Guides
            </h3>

            <p className="text-gray-500 leading-7">
              Local experts who bring destinations to life with authentic
              cultural insights.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <FiHeadphones className="text-4xl text-sky-500 mb-6" />

            <h3 className="text-3xl font-light text-gray-900 mb-3">
              24/7 Support
            </h3>

            <p className="text-gray-500 leading-7">
              Round-the-clock customer service to assist you whenever your
              journey takes you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseWanderlust;