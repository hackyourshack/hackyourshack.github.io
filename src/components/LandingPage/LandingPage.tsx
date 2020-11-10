// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import { Card } from "@components/Card";
import { Tag } from "@components/Tag";
import Logo from "@public/icons/logo.svg";
import Link from "next/link";
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
      <section className="px-8 pt-2 pb-8">
        <h2 className="mt-0 mb-4 text-xl text-center">
          What are you Making today?
        </h2>
        <p>
          Make meaningful things and improve your home. If you can makedo, you
          won't need neither many resources nor special tools. You might well
          find all you need on the street, because some one-eyed people consider
          it useless.
        </p>
        <p>
          Hack Your Shack is the platform for low-tech solutions. Here you can
          learn how to build a solar oven, a grey water tower, a plastic bottle
          cutter or even a whole shack and share your own creative solutions
          with other people around the world. What makes Hack Your Shack so
          special is that the provided hacks do not require any prior knowledge,
          extensive tools or expensive building materials, so you can get
          started right away. Have fun!
        </p>
        <Card
          className="mt-8 text-base text-accent-1"
          imgSrc="images/wade-austin-ellis-g2O9BviWi3M-unsplash.jpg"
          imgAlt="Photo by Wade Austin on Unsplash"
          title="Hack Storage"
          href="/hack-storage"
        >
          <p>
            Our <span className="italic">Hack Storage</span> is the growing
            collection of low-tech building solutions and thus the heart of the
            platform. Browse around, start building, review and share!
          </p>
          <div className="px-6 pt-4 pb-2">
            <Tag className="text-gray-600">Electric Charger</Tag>
            <Tag className="text-gray-600">Water Station</Tag>
            <Tag className="text-gray-600">Water Heater</Tag>
            <Tag className="text-gray-600">Shower</Tag>
            <Tag className="text-gray-600">Dehumidifier</Tag>
            <Tag className="text-gray-600">Stoves</Tag>
            <Tag className="text-gray-600">Manual Washing Machine</Tag>
            <Tag className="text-gray-600">Playground Equipment</Tag>
          </div>
        </Card>
        <Card
          className="mt-8 text-base text-accent-1"
          imgSrc="images/gradikaa-aggi-q3TryaToFYo-unsplash.jpg"
          imgAlt="Photo by Gradikaa Aggi on Unsplash"
          title="Events"
          href="/community"
        >
          <p>
            In this category you will find events like hackathons, expert talks
            or network events in the future. With these events, we want to
            create opportunities for virtual and physical exchange and community
            building - both regionally and worldwide. With regular call for
            challenges we seek to unlock the creative potential of the community
            to find better solutions for specific problems.
          </p>
        </Card>
        <Card
          className="mt-8 text-base text-accent-1"
          imgSrc="images/dollar-gill-Kyoshy7BJIQ-unsplash.jpg"
          imgAlt="Photo by Dollar Gill on Unsplash"
          title="Handbook"
          href="/handbook"
        >
          <p className="text-base text-accent-1">
            In this category, you will find profound building knowledge – here
            we will explain basic building techniques and methods for the
            inexpensive production of building materials and tools.
          </p>
          <h3>How to make good Instructions</h3>
          <p>
            Here you can soon learn how to create great building instructions
            for the community yourself. Of course, you will also get to know the
            tools we provide on the platform.
          </p>
        </Card>
      </section>
      {children}
      <section className="p-10 pb-16 text-white bg-accent-1">
        <h3>About Us</h3>
        <p>
          Around one billion people worldwide live in slums, and the trend is
          rising. So far, however, no platform addresses the challenges of
          people who live in an environment with little infrastructure and few
          resources (money, building materials, tools). Hack Your Shack wants to
          change this and make existing knowledge accessible and expand it as
          empowerment for all. Hack Your Shack consists of an enthusiastic and
          dedicated team and is a non-profit organization in formation. Do you
          want to support our mission? We are looking for sponsors, content
          partners and multipliers.
        </p>
        <p>Hack Your Shack (Berlin)</p>
      </section>
    </div>
  </main>
);
