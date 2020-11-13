// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
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
            <div className="w-1 h-16 ml-1 bg-gray-500 rounded-sm opacity-50" />
          </button>
        )}
        {index < size - 1 && (
          <button
            className="z-40 flex items-center w-10 ml-auto focus:outline-none"
            onClick={() =>
              setIndex((current) => Math.min(size - 1, current + 1))
            }
            aria-label="Previous"
          >
            <div className="w-1 h-16 ml-auto mr-1 bg-gray-500 rounded-sm opacity-50" />
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
        className={` flex-1 h-1 rounded-sm m-1 ${
          i === index ? "bg-gray-400" : "bg-white"
        }`}
      />
    );
  }

  return <div className={`flex flex-row w-full ${className}`}>{segments}</div>;
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
