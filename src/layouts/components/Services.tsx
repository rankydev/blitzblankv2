"use client";

import { useState, useCallback, useEffect } from "react";
import { Feature } from "@/types";
import DynamicIcon from "@/helpers/DynamicIcon";
import Image from "next/image";

const Services = ({ features }: { features: Feature }) => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const expand = useCallback(
    (index: number) => {
      setClickedIndex(index === clickedIndex ? null : index);
    },
    [clickedIndex],
  );

  useEffect(() => {
    const body = document.querySelector("body");

    if (!body) return;

    if (clickedIndex !== null) {
      body.style.overflow = "hidden";
      const modalElement = document.querySelector(".modal-scroll-target");

      if (modalElement) {
        const elementRect = modalElement.getBoundingClientRect();
        const scrollTop = document.documentElement.scrollTop;
        const elementTop = elementRect.top + scrollTop - 50;

        window.scrollTo({
          top: elementTop,
          behavior: "smooth",
        });
      }
    } else {
      body.style.overflow = "auto";
    }
  }, [clickedIndex]);

  return (
    <div
      data-aos="fade-up-sm"
      className="colored-box-icon row gy-4 modal-scroll-target"
    >
      {features.list.map((feature, i) => {
        const { title, description } = feature;
        return (
          <div
            key={i}
            className={`md:col-6 lg:col-4 xl:col-3 relative ${clickedIndex !== null ? "blur-md" : ""}`}
          >
            <div className="h-full rounded-2xl border border-border/30 bg-white px-8 py-12 transition-all duration-300 hover:shadow-sm overflow-hidden">
              <h3 className="mb-6 text-xl text-secondary font-semibold sm:text-2xl">
                {title}
              </h3>
              <p>{description.slice(0, 150)}...</p>
              <button
                onClick={() => expand(i)}
                className="mt-6 btn btn-underline"
              >
                Mehr erfahren
              </button>
            </div>
          </div>
        );
      })}
      {clickedIndex !== null && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full z-50 bg-[rgba(0,0,0,0.5)]"
            onClick={() => expand(clickedIndex)}
          />
          <div
            className="modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full bg-transparent z-[51]"
            onClick={(e) => {
              // Only trigger expand(null) if the click is on this element and not a child
              if (e.target === e.currentTarget) {
                expand(null);
              }
            }}
          >
            <div className="modal bg-white border rounded-xl border-primary shadow-xl flex flex-col lg:flex-row p-4 h-[550px]">
              <div className="col-12 lg:col-6 pt-12 lg:p-12 order-2 lg:order-1">
                <h3 className="text-secondary lg:pb-4">
                  {features.list[clickedIndex].title}
                </h3>
                <p className="text-dark py-4 leading-12 text-lg">
                  {features.list[clickedIndex].description}
                </p>
              </div>

              <div className="relative col-12 lg:col-6 relative order-1 lg:order-2">
                <Image
                  width={700}
                  height={400}
                  style={{ filter: "brightness(1)", width: "100%" }}
                  className="banner-image w-100 h-full relative object-cover"
                  src={`/images/features/${features.list[clickedIndex].image}`}
                  alt="banner-image"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/20 to-black/30"></div>

                <span
                  className="text-white text-2xl flex justify-end p-4 w-full absolute top-0"
                  style={{
                    "--webkit-filter": "invert()",
                    "mix-blend-mode": "difference",
                    color: "white",
                  }}
                >
                  <DynamicIcon
                    icon="FaX"
                    className="text-white cursor-pointer opacity-90 hover:opacity-100 hover:text-primary"
                    onClick={() => expand(clickedIndex)}
                  />
                </span>
                <div className="flex justify-between absolute bottom-0 p-4 w-full select-none">
                  {(clickedIndex > 0 && (
                    <span
                      className="text-white lg:text-2xl flex gap-2 items-center cursor-pointer hover:underline opacity-100 hover:opacity-90 leading-none"
                      onClick={() => expand(clickedIndex - 1)}
                    >
                      {/* <DynamicIcon icon="FaArrowLeft" className="w-[12px] lg:w-[18px]" /> */}
                      <span className="text-base lg:text-2xl">
                        {features.list[clickedIndex - 1].title}
                      </span>
                    </span>
                  )) || <span className="block" />}
                  {clickedIndex + 1 < features.list.length && (
                    <span
                      className="text-white lg:text-2xl flex gap-2 items-center cursor-pointer hover:underline opacity-100 hover:opacity-90 text-right leading-none"
                      onClick={() => expand(clickedIndex + 1)}
                    >
                      <span className="text-base lg:text-2xl">
                        {features.list[clickedIndex + 1].title}
                      </span>
                      {/* <DynamicIcon icon="FaArrowRight" className="w-[12px] lg:w-[18px]" /> */}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Services;
