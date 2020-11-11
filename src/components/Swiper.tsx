// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import React, { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import SwipeableViews from "react-swipeable-views";

interface SwiperProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Swiper: React.FC<SwiperProps> = ({ className, children }) => {
  const [index, setIndex] = useState(0);
  const max = React.Children.count(children) - 1;

  return (
    <div className={`relative flex ${className}`}>
      <div className="absolute flex flex-row w-full h-full">
        {index > 0 && (
          <button
            className="z-40 w-10 focus:outline-none"
            onClick={() => setIndex((current) => Math.max(0, current - 1))}
            aria-label="Previous"
          />
        )}
        {index < max && (
          <button
            className="z-40 w-10 ml-auto focus:outline-none"
            onClick={() => setIndex((current) => Math.min(max, current + 1))}
            aria-label="Previous"
          />
        )}
      </div>
      <SwipeableViews index={index} onChangeIndex={setIndex} enableMouseEvents>
        {children}
      </SwipeableViews>
    </div>
  );
};
