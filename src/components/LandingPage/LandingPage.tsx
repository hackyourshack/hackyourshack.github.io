// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import { Card } from "@components/Card";
import Slip from "@components/Slip";
import { Tag } from "@components/Tag";
import { SpanProps } from "@components/typography";
import Logo from "@public/icons/logo.svg";
import PodcastIcon from "@public/icons/podcast.svg";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface LandingPageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const LandingPage: React.FC<LandingPageProps> = ({
  className,
  children
}) => (
  <main className={`parallax ${className}`}>
    <section
      className="flex items-center justify-center pt-12 m-0 bg-cover parallax-bg"
      style={{
        backgroundImage: "url(images/esteban-castle-FULkoZ989E4-unsplash.jpg)",
        backgroundPositionX: "-100px"
      }}
    >
      <div className="mx-auto">
        <Logo className="w-48 h-48 mx-auto" fill="white" />
        <h1 className="pb-4 text-4xl text-center text-white">
          Hack Your Shack
        </h1>
      </div>
    </section>
    <div className="bg-white parallax-fg">
      <section className="px-6 pt-2 pb-8">
        <div className="mx-6">
          <h2 className="mt-0 mb-4 text-xl text-center">
            What are you <span className="font-medium">making</span> today?
          </h2>
          <p>
            <span className="italic">Hack Your Shack</span> is the platform for
            low-tech solutions.
          </p>
          <p>
            Learn how to improve your home, grow your food and enhance your
            neighbourhood! Share your own creative solutions with people around
            the world!
          </p>
        </div>
        <Card
          className="mt-8 text-base text-accent-1"
          imgSrc="images/wade-austin-ellis-g2O9BviWi3M-unsplash.jpg"
          imgAlt="Photo by Wade Austin on Unsplash"
          title="Hack Storage"
          href="/hack-storage"
        >
          <p>Get inspired, start building, review and share!</p>
          <div className="pt-4 pb-2">
            <Tag className="text-gray-100 bg-gray-600">Water Station</Tag>
            <Tag className="text-gray-100 bg-gray-600">Shower</Tag>
            <Tag className="text-gray-100 bg-gray-600">Stoves</Tag>
            <Tag className="text-gray-100 bg-gray-600">Water Heater</Tag>
            <Tag className="text-gray-100 bg-gray-600">Electric Charger</Tag>
            <Tag className="text-gray-100 bg-gray-600">Dehumidifier</Tag>
          </div>
        </Card>
        <Card
          className="mt-8 text-base text-accent-1"
          imgSrc="images/gradikaa-aggi-q3TryaToFYo-unsplash.jpg"
          imgAlt="Photo by Gradikaa Aggi on Unsplash"
          title="Community"
          href="/community"
        >
          <p>Meet, exchange, and build together!</p>
          <h3 className="my-4 text-lg font-semibold">Connect</h3>
          <p>
            Find users around the world with similar interests. Be part of our
            regional groups.
          </p>
          <h2 className="my-4 text-lg font-semibold text-accent-1">
            Upcoming Events
          </h2>

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
        </Card>
        <Card
          className="mt-8 text-base text-accent-1"
          imgSrc="images/abhijith-s-nair-AvKsX5ZOQnA-unsplash.jpg"
          imgAlt="Photo by Abhijith S Nair on Unsplash"
          title="Magazine"
          href="/magazine"
        >
          <p>
            Well researched and easy to understand articles from our editors.
          </p>
          <h2 className="my-4 text-lg font-semibold text-accent-1">
            Latest Articles
          </h2>
          <Slip className="h-24">
            <Slip.Image src="images/dave-hoefler-MrxlMcZxqhY-unsplash.jpg" />
            <Slip.Content>
              <Slip.Subtitle>Special</Slip.Subtitle>
              <Slip.Title>Building and Fire Protection</Slip.Title>
            </Slip.Content>
          </Slip>
          <Slip className="h-24">
            <Slip.Image src="images/jason-blackeye-8yYAaguVDgY-unsplash.jpg" />
            <Slip.Content>
              <Slip.Subtitle>10 Best Hacks</Slip.Subtitle>
              <Slip.Title>Secure Your Home</Slip.Title>
            </Slip.Content>
          </Slip>
          <Slip className="h-24">
            <Slip.Image src="images/1200px-Zeerpot_version_l_g_re_IMG_6701.jpg" />
            <Slip.Content>
              <Slip.Subtitle>Hack of the Month</Slip.Subtitle>
              <Slip.Title>Zeerpot</Slip.Title>
            </Slip.Content>
          </Slip>
          <Slip className="h-24">
            <Slip.Image src="images/nonhlanhlajoye_landscape_2804.jpg__1600x900_q85_crop_subsampling-2.jpg" />
            <Slip.Content>
              <Slip.Subtitle>Change Maker</Slip.Subtitle>
              <Slip.Title>Nonhlanhla Joye</Slip.Title>
              <Slip.Subtitle>Stop Hidden Hunger</Slip.Subtitle>
              <p className="mt-2">
                <PodcastIcon className="inline w-6 h-6 mr-2" fill="#333" />
                Podcast
              </p>
            </Slip.Content>
          </Slip>
        </Card>
        <Card
          className="mt-8 text-base text-accent-1"
          imgSrc="images/khara-woods--n4Lw7zArIk-unsplash.jpg"
          imgAlt="Photo by Khara Woods on Unsplash"
          title="Shack Tech"
          href="/shack-tech"
        >
          <p className="text-base text-accent-1">
            Learn more about building techniques, materials, and tools.
          </p>
        </Card>
      </section>
      {children}
      <section className="px-10 pt-6 pb-24 text-white bg-accent-1">
        <h2 className="mt-0 mb-4 text-xl">About Us</h2>
        <h3 className="mt-4 font-semibold">Our Mission</h3>
        <p>
          Around one billion people worldwide live in slums, and the trend is
          rising. However, no platform addresses the challenges of people who
          live in an environment with little infrastructure and few resources.
        </p>
        <p>
          Hack Your Shack wants to change this and make existing knowledge
          accessible and expand it as empowerment for all.
        </p>
        <h3 className="mt-4 font-semibold">Team and Organisation</h3>
        <p>
          Hack Your Shack consists of an enthusiastic and dedicated team and is
          a non-profit organization in formation.
        </p>
        <h3 className="mt-4 font-semibold">Partners</h3>
        <p>
          Do you want to support our mission? We are looking for sponsors,
          content partners and multipliers.
        </p>
        <p className="mt-6">©️ Hack Your Shack</p>
      </section>
    </div>
  </main>
);

const Topic: React.FC<SpanProps> = ({ className, children }) => {
  return (
    <span className={`mr-2 font-serif font-semibold ${className}`}>
      {children}
    </span>
  );
};
