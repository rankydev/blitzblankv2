"use client";

import CountUp from "react-countup";
import { useRef } from "react";
import { useInView } from "framer-motion"

const Counter = ({
  count,
  unit,
  desc,
}: {
  count: number;
  desc: string;
  unit: string;
}) => {

  const container = useRef(null);
  const isInView = useInView(container, { once: true })

  return (
    <>
      <span ref={container} className="mb-6 block font-secondary text-3xl font-bold text-secondary md:text-4xl xl:text-6xl">
          <CountUp end={count} redraw={true}>
            {({ countUpRef, start }) => {
              isInView ?? start();
              
              return (
                <span ref={countUpRef} />
              )
            }}
          </CountUp>
          {unit}
      </span>
      <div className="text-primary md:text-h6 xl:text-h4">{desc}</div>
    </>
  );
};

export default Counter;
