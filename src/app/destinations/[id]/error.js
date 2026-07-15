"use client";

import { Button } from "@heroui/react";
import { FiRefreshCw, FiHome, FiAlertTriangle } from "react-icons/fi";
import Link from "next/link";

const ErrorPage = ({ error, reset }) => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden  px-6">
      {/* Background Blur */}

      <div className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/50 bg-white/70 p-10 text-center shadow-2xl backdrop-blur-xl">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-500 text-white shadow-lg">
          <FiAlertTriangle size={40} />
        </div>

        <h1 className="text-5xl font-extrabold text-gray-800">
          Something Went Wrong!
        </h1>

        <p className="mt-4 text-gray-600">
          An unexpected error occurred while loading this page. Please try
          again, or return to the homepage.
        </p>

        {/* Optional: Development only */}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-6 rounded-xl bg-red-50 p-4 text-left">
            <p className="font-semibold text-red-600">Error Details:</p>
            <p className="mt-2 break-words text-sm text-red-500">
              {error?.message}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            color="primary"
            size="lg"
            startContent={<FiRefreshCw />}
            onPress={() => reset()}
          >
            Try Again
          </Button>

          <Link href="/">
            <Button
              variant="bordered"
              color="primary"
              size="lg"
              startContent={<FiHome />}
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
