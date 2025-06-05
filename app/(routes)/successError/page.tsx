"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PageError = () => {
  const router = useRouter();

  return (
    <div className="max-w-5xl mx-auto sm:py-16 sm:px-24 px-4 py-10">
      <div className="flex flex-col-reverse gap-6 sm:flex-row items-center text-center sm:text-left">
        <div className="flex justify-center md:min-w-[400px]">
          <Image
            src="/beanly-error2.png"
            alt="Error"
            width={250}
            height={600}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-3xl font-semibold">Oops! An error occurred.</h1>
          <p className="my-3 max-w-md">
            Something went wrong during the process. There may have been a
            problem with the payment or connection.
          </p>
          <p className="my-3 max-w-md">
            We recommend trying again later or contacting our support team.
          </p>
          <Button
            onClick={() => router.push("/")}
            className="cursor-pointer bg-[#b19a85]"
          >
            Return to the store
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PageError;
