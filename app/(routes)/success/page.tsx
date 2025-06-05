"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PageSuccess = () => {
  const router = useRouter();

  return (
    <div className="max-w-5xl mx-auto sm:py-16 sm:px-24 px-4 py-10">
      <div className="flex flex-col-reverse gap-6 sm:flex-row items-center text-center sm:text-left">
        <div className="flex justify-center md:min-w-[400px]">
          <Image
            src="/beanly-success.png"
            alt="Success"
            width={250}
            height={600}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-3xl font-semibold">
            Thank you for your purchase!
          </h1>
          <p className="my-3 max-w-md">
            Our team will be in touch shortly to select the freshest beans and
            prepare your shipment with great care and dedication. In the
            meantime, sit back, relax, and let the anticipation of the delicious
            aroma of freshly brewed coffee envelop you.
          </p>
          <p className="my-3">Enjoy your coffee!</p>
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

export default PageSuccess;