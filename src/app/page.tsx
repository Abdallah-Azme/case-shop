import Testimonial from "@/components/Testimonial";
import { Icons } from "@/components/shared/Icons";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import Phone from "@/components/shared/Phone";
import Stars from "@/components/shared/Stars";
import { clientImages, featuresList } from "@/lib/data";
import { Check, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  // features list
  const features = featuresList.map((feature) => (
    <li key={feature} className="flex gap-1.5 items-center text-left">
      <Check className="h-5 w-5 shrink-0 text-green-600" />
      {feature}
    </li>
  ));
  //images list
  const imagesList = clientImages.map((image) => (
    <Image
      className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100"
      key={image}
      width={40}
      height={40}
      src={image}
      alt="user image"
    />
  ));

  return (
    <main className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className=" col-span-2 px-6 lg:px-0 lg:pt-4 ">
            <div className="relative  mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 h-28 left-0 -top-20 hidden lg:block ">
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
                <Image fill src="/snake-1.png" alt="Snake image" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-green-600 text-white px-2 ">Custom</span>{" "}
                Phone Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favorite memories with your own,
                <span className="font-semibold">one-of-one</span> phone case.
                CaseCobra allows you to protect your memories, not just your
                phone case.
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">{features}</div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">{imagesList}</div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex flex-row gap-0.5">
                    <Stars amount={5} />
                  </div>

                  <p>
                    <span className="font-semibold">1.250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <div className="w-40 lg:w-52 h-40 lg:h-40 absolute  left-56 -top-20 select-none hidden sm:block lg:hidden xl:block">
                <Image
                  fill
                  alt="Your image"
                  src="/your-image.png"
                  className=""
                />
              </div>
              <div className="absolute w-20 h-40 -left-6 -bottom-6 select-none">
                <Image fill alt="line" src="/line.png" />
              </div>
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* value proposition*/}
      <Testimonial />
    </main>
  );
}
