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
        console.log('bla', index, clickedIndex);
        setClickedIndex(index === clickedIndex ? null : index);
        // Add your expand logic here
      }, [clickedIndex]);

    return (
        <div className="container relative z-30">
          <div className="row items-end justify-between pb-12">
            <div className="lg:col-8 xl:col-6">
              <span
                className="mb-6 inline-block font-medium uppercase text-red-400"
                data-aos="fade-up-sm"
              >
                {features.subtitle}
              </span>
              <div
                className="mb-8 border-l-2 border-dark border-opacity-50 py-2 pl-6 lg:mb-0"
                data-aos="fade-up-sm"
              >
                <h2
                  className="mb-6 font-semibold"
                  data-aos="fade-up-sm"
                  data-aos-delay="50"
                >
                  {features.title}
                </h2>
                <p
                  className="text-lg"
                  data-aos="fade-up-sm"
                  data-aos-delay="100"
                >
                  {features.description}
                </p>
              </div>
            </div>
          </div>
          <div className={`colored-box-icon row gy-4 ${clickedIndex !== null ? '' : ''}`}>
            {features.list.map((feature, i) => {
              const { title, description } = feature;
              return (
                <div
                  key={i}
                  className={`md:col-6 lg:col-4 xl:col-3 max-h-[200px] ${clickedIndex !== null ? 'blur-md' : ''}`}
                >
                  <div className="h-full rounded-2xl border border-border/30 bg-white px-8 py-12 transition-all duration-300 hover:shadow-sm overflow-hidden">
                    <h3 className="mb-6 text-xl font-semibold sm:text-2xl">
                      {title}
                    </h3>
                    <span
                    onClick={() => expand(i)}
                    className="mt-6 text-primary font-semibold hover:underline">
                      Learn More
                    </span>
                    <p>{description}</p>
                  </div>
                </div>
              );
            })}
            {
                clickedIndex !== null && (
                    <div className="absolute w-full h-full bg-white opacity-90" data-aos="slide-right">
                        <div className="absolute w-full bg-secondary flex">
                            {/* <span className="text-white text-2xl flex justify-end p-4 w-full">
                                <DynamicIcon icon="FaX" onClick={() => expand(clickedIndex)} />
                            </span> */}
                            
                            <div className="col-6 p-12">
                                <h2 className="text-dark pb-4">
                                    {features.list[clickedIndex].title}
                                </h2>
                                <p className="text-dark py-4 leading-12 text-lg">
                                    {features.list[clickedIndex].description}
                                </p>

                                <button
                                    className="btn btn-outline btn-sm"
                                    onClick={() => expand(clickedIndex)}>
                                        Schliessen
                                </button>
                            </div>

                            <div className="col-6">
                                <Image
                                    width={700}
                                    height={400}
                                    className="banner-image w-100 h-full"
                                    src="/images/features/fassade.jpg"
                                    alt="banner-image"
                                />
                            </div>
                        </div>
                    </div>
                )
            }
            {/* {clickedIndex !== null && (
                <div className="w-full h-full p-4 blur-sm bg-primary absolute z-0 opacity-50"></div>
            )} */}
          </div>
        </div>
    );
  };
  

export default Services;
