// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import Slip from "@components/Slip";
import { Swiper } from "@components/Swiper";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface CommunityProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Community: React.FC<CommunityProps> = ({ className }) => (
  <main className={`container h-screen ${className}`}>
    <Swiper>
      <div className="h-full">
        <img
          className="object-cover w-full h-48"
          src="images/gradikaa-aggi-q3TryaToFYo-unsplash.jpg"
        />
        <div className="px-6 py-4">
          <H2>Upcoming Events</H2>
          <Slip className="h-32">
            <Slip.Image src="images/UmojaHack-Africa-1-1024x573.jpg" />
            <Slip.Content>
              <Slip.Subtitle>Sat, Dec 5 2020, 1pm</Slip.Subtitle>
              <Slip.Title>Shackathon!</Slip.Title>
              <Slip.Subtitle>Bottle Cutter Challenge</Slip.Subtitle>
              <p className="mt-2 leading-4">
                Build a team, find creative solutions and win!
              </p>
            </Slip.Content>
          </Slip>

          <Slip className="h-32">
            <Slip.Image src="images/kyle-glenn-nXt5HtLmlgE-unsplash.jpg" />
            <Slip.Content>
              <Slip.Subtitle>Sat, Dec 5 2020, 1pm</Slip.Subtitle>
              <Slip.Title>Global Meetup #1</Slip.Title>
              <p className="mt-2 leading-4">
                Digital expert talks and networking. Get inspired and exchange
                ideas.
              </p>
            </Slip.Content>
          </Slip>

          <Slip className="h-32">
            <Slip.Image src="images/langa.jpg" />
            <Slip.Content>
              <Slip.Subtitle>Sat, Dec 5 2020, 1pm</Slip.Subtitle>
              <Slip.Title>Localise! Workshop</Slip.Title>
              <Slip.Subtitle>Langa, Cape Town</Slip.Subtitle>
              <p className="mt-2 leading-4">
                Meet like-minded people in your area and learn how to build a
                compost toilet.
              </p>
            </Slip.Content>
          </Slip>
        </div>
      </div>
      <div>B</div>
      <div>C</div>
      <Slip className="h-24">
        <Slip.Image src="images/khara-woods--n4Lw7zArIk-unsplash.jpg" />
        <Slip.Content>
          <Slip.Subtitle>Tue, Nov 17 2020, 8pm</Slip.Subtitle>
          <Slip.Title>Some Event</Slip.Title>
          <p>Join us now!</p>
        </Slip.Content>
      </Slip>
    </Swiper>
  </main>
);

export const H2: React.FC<CommunityProps> = ({ className, children }) => {
  return (
    <h2
      className={`mt-4 mb-3 font-semibold text-lg text-accent-1 ${className}`}
    >
      {children}
    </h2>
  );
};
