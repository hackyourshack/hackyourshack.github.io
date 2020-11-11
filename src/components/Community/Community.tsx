// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import { Page } from "@components/Page";
import Slip from "@components/Slip";
import Swiper from "@components/Swiper";
import { H1, H2 } from "@components/typography";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface CommunityProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Community: React.FC<CommunityProps> = ({ className }) => (
  <Page className={className}>
    <Swiper>
      <Swiper.Page className="h-screen">
        <img
          className="object-cover w-full h-48"
          src="images/gradikaa-aggi-q3TryaToFYo-unsplash.jpg"
        />
        <H1 className="hidden">Community Events</H1>
        <div className="px-6 py-4">
          <H2 className="my-4">Upcoming Events</H2>
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

          <H2 className="my-4">Events in Your Neighbourhood</H2>
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
      </Swiper.Page>
      <Swiper.Page>
        <img
          className="object-cover w-full h-48"
          src="images/trevor-cole-CWcAsKuhwy0-unsplash.jpg"
        />
        <H1 className="hidden">Community Groups</H1>
        <div className="px-6 py-4">
          <H2 className="my-4">Groups in Your Neighbourhood</H2>
          <Slip className="h-32">
            <Slip.Image src="images/langa.jpg" />
            <Slip.Content>
              <Slip.Title>Loud Langa Ladies</Slip.Title>
              <Slip.Subtitle>Langa, Cape Town</Slip.Subtitle>
              <p className="mt-2 leading-4">
                We are the singing hacksters lady group from Langa.
              </p>
            </Slip.Content>
          </Slip>
        </div>
      </Swiper.Page>
    </Swiper>
  </Page>
);
