"use client";

import {
    Feature,
  } from "@/types";
  import DynamicIcon from "@/helpers/DynamicIcon";
  import { useState, useCallback } from 'react';
import Image from 'next/image';

  const Services = ({ features }: { features: Feature }) => {
    const [clickedIndex, setClickedIndex] = useState<number | null>(null);

    const expand = useCallback((index: number) => {
        setClickedIndex(index === clickedIndex ? null : index);
      }, [clickedIndex]);

    return (
      <div className={`colored-box-icon row gy-4 ${clickedIndex !== null ? '' : ''}`}>
        {features.list.map((feature, i) => {
          const { title, description } = feature;
          return (
            <div
              key={i}
              className={`md:col-6 lg:col-4 xl:col-3  ${clickedIndex !== null ? 'blur-md' : ''}`}
            >
              <div className="h-full rounded-2xl border border-border/30 bg-white px-8 py-12 transition-all duration-300 hover:shadow-sm overflow-hidden">
                <h3 className="mb-6 text-xl text-secondary font-semibold sm:text-2xl">
                  {title}
                </h3>
                <p>{description.slice(0, 150)}...</p>
                <button
                onClick={() => expand(i)}
                className="mt-6 btn btn-underline">
                  Mehr erfahren
                </button>
              </div>
            </div>
          );
        })}
        {
            clickedIndex !== null && (
              <>
              <div className="fixed top-0 left-0 w-full h-full z-50 bg-[rgba(0,0,0,0.2)]" onClick={() => expand(clickedIndex)} />
                <div className="absolute w-full bg-transparent opacity-90 z-[51]" data-aos="fade-down">
                    <div className="absolute w-full bg-white border rounded-xl border-primary shadow-xl flex p-4">
                        <div className="col-6 p-12">
                            <h3 className="text-secondary pb-4">
                                {features.list[clickedIndex].title}
                            </h3>
                            <p className="text-dark py-4 leading-12 text-lg">
                                {features.list[clickedIndex].description}
                            </p>
                        </div>

                        <div className="col-6 relative">
                            <Image
                                width={700}
                                height={400}
                                className="banner-image w-100 h-full relative"
                                src="/images/features/fassade.jpg"
                                alt="banner-image"
                            />

                          <span className="text-white text-2xl flex justify-end p-4 w-full absolute top-0">
                            <DynamicIcon icon="FaX" className="cursor-pointer opacity-80 hover:opacity-100" onClick={() => expand(clickedIndex)} />
                          </span>
                          <div className="flex justify-between absolute bottom-0 p-4 w-full select-none">
                            {(clickedIndex > 0) && (
                              <span className="text-white text-2xl flex gap-2 items-center cursor-pointer hover:underline opacity-100 hover:opacity-90" onClick={() => expand(clickedIndex - 1)}>
                                <DynamicIcon icon="FaArrowLeft" className="w-[18px]" />
                                <span className="text-md">{features.list[clickedIndex - 1].title}</span>
                              </span>
                            )
                            || <span className="block" />
                            }
                            {(clickedIndex + 1 < features.list.length) && (
                              <span className="text-white text-2xl flex gap-2 items-center cursor-pointer hover:underline opacity-100 hover:opacity-90" onClick={() => expand(clickedIndex + 1)}>
                                <span className="text-md">{features.list[clickedIndex + 1].title}</span>
                                <DynamicIcon icon="FaArrowRight" className="w-[18px]" />
                              </span>
                            )}
                          </div>
                        </div>
                    </div>
                </div>
              </>
            )
        }
      </div>
    );
  };
  

export default Services;
