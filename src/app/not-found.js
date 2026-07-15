import Link from "next/link";
import { Button } from "@heroui/react";
import { FiArrowLeft, FiCompass } from "react-icons/fi";

const NotFoundPage = async () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-100 px-6">
      {/* Background Blur */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl"></div>
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/40 bg-white/70 p-10 text-center shadow-2xl backdrop-blur-xl">
        {/* Badge */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500 text-white shadow-lg">
          <FiCompass size={38} />
        </div>

        {/* 404 */}
        <h1 className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 bg-clip-text text-8xl font-extrabold text-transparent">
          404
        </h1>

        <h2 className="mt-5 text-3xl font-bold text-gray-800">
          Oops! Page Not Found
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-gray-600">
          The page you are looking for does not exist, has been moved, or the
          URL might be incorrect. Lets get you back to exploring amazing travel
          destinations.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/">
            <Button color="primary" size="lg" startContent={<FiArrowLeft />}>
              Back to Home
            </Button>
          </Link>

          <Link href="/destinations">
            <Button
              variant="bordered"
              color="primary"
              size="lg"
              startContent={<FiCompass />}
            >
              Explore Destinations
            </Button>
          </Link>
        </div>

        {/* Bottom Text */}
        <p className="mt-10 text-sm text-gray-500">
          Lost? Do not worry—every great journey starts with finding the right
          path.
        </p>
      </div>
    </section>
  );
};

export default NotFoundPage;
