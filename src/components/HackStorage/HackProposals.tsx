// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import { Tag } from "@components/Tag";
import Link from "next/link";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { HackCard } from "./HackCard";

interface HackProposalsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const HackProposals: React.FC<HackProposalsProps> = ({ className }) => {
  return (
    <section className={`p-4 ${className}`}>
      <h1 className="text-2xl font-bold text-accent-1">Search by Category</h1>
      <div className="mt-2 mb-4">
        <Tag className="text-white bg-blue-500">House Improvement</Tag>
        <Tag className="text-white bg-green-700">Gardening</Tag>
        <Tag className="text-white bg-purple-500">Neighbourhood</Tag>
      </div>
      <h1 className="text-2xl font-bold text-accent-1">Editor's Choice</h1>
      <HackCard
        className="mt-2 text-base text-accent-1"
        imgSrc="images/hack-001/title.jpg"
        title="Plastic Bottle Cutter"
        stars={5}
        approved={true}
      >
        <p>
          With the plastic bottle cutter you can easily create stable polymer
          ropes of different widths from old plastic bottles.
        </p>
      </HackCard>
      <h1 className="mt-8 text-2xl font-bold text-accent-1">
        Hot Topic: Waste Water
      </h1>
      <HackCard
        className="mt-2 text-base text-accent-1"
        imgSrc="images/hack-003/title.jpg"
        title="Grey Water Tower"
        stars={4}
        approved={true}
      >
        <p>Don't waste your waste water, water your plants instead...</p>
      </HackCard>
      <h1 className="mt-8 text-2xl font-bold text-accent-1">Latest Addition</h1>
      <HackCard
        className="mt-2 text-base text-accent-1"
        imgSrc="images/hack-002/title.jpg"
        title="Working Ram"
        stars={2}
        approved={false}
      >
        <p>
          Easy to build and very stable working ram, made out of PET ropes
          produced with the{" "}
          <Link href="hacks/hack-001">Plastic Bottle Cutter</Link>
        </p>
      </HackCard>
    </section>
  );
};
