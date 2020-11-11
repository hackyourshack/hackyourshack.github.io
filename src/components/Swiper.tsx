// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import SwipeLeft from "@public/icons/swipe-left.svg";
import SwipeRight from "@public/icons/swipe-right.svg";
import React, { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import SwipeableViews from "react-swipeable-views";

export interface SwiperProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

type TSwiper = React.FC<SwiperProps> & {
  Page: React.FC<PageProps>;
};

const Swiper: TSwiper = ({ className, children }) => {
  const [index, setIndex] = useState(0);
  const size = React.Children.count(children);

  return (
    <div className={`relative ${className}`}>
      <div className="absolute flex flex-row w-full h-full">
        {index > 0 && (
          <button
            className="z-40 flex items-center w-10 focus:outline-none"
            onClick={() => setIndex((current) => Math.max(0, current - 1))}
            aria-label="Previous"
          >
            <SwipeLeft className="ml-1" fill="#00000044" />
          </button>
        )}
        {index <= size && (
          <button
            className="z-40 flex items-center w-10 ml-auto focus:outline-none"
            onClick={() =>
              setIndex((current) => Math.min(size - 1, current + 1))
            }
            aria-label="Previous"
          >
            <SwipeRight className="ml-auto mr-1" fill="#00000044" />
          </button>
        )}
      </div>
      <SwipeIndicator size={size} index={index} />
      <SwipeableViews
        className="h-full"
        index={index}
        onChangeIndex={setIndex}
        enableMouseEvents
      >
        {children}
      </SwipeableViews>
    </div>
  );
};

interface SwipeIndicatorProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size: number;
  index: number;
}

const SwipeIndicator: React.FC<SwipeIndicatorProps> = ({
  className,
  size = 1,
  index = 0
}) => {
  const segments = [];
  for (let i = 0; i < size; i++) {
    segments.push(
      <div
        key={`index_${i}`}
        className={` flex-1 h-1 ml-px mr-px ${
          i === index ? "bg-gray-400" : "bg-white"
        }`}
      />
    );
  }

  return (
    <div className={`flex flex-row w-full bg-gray-400 ${className}`}>
      {segments}
    </div>
  );
};

interface PageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Page: React.FC<PageProps> = ({ className = "", children }) => {
  return (
    <div className="h-full">
      <div className={`overflow-y-auto ${className}`}>{children}</div>
    </div>
  );
};
Swiper.Page = Page;

export default Swiper;
