// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import { IconFilter } from "@components/HackStorage/IconFilter";
import { Tag } from "@components/Tag";
import MedalIcon from "@public/icons/medal.svg";
import StarIcon from "@public/icons/star.svg";
import Link from "next/link";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import SwipeableViews from "react-swipeable-views";

interface HackProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  hackid: string;
}

export const Hack: React.FC<HackProps> = ({ className = "", hackid }) => {
  const { title, approved, stars, titleImg } = loadHack(hackid);
  return (
    <main className={`container flex flex-col h-screen ${className}`}>
      <h1 className="p-2 text-2xl font-bold text-accent-1">{title}</h1>
      <SwipeableViews className="">
        <div>
          <img src={titleImg} className="object-cover object-top w-full h-64" />
          <div className="flex flex-row w-auto mx-4 my-3">
            {approved && (
              <IconFilter
                className="mr-6"
                size={1}
                icon={MedalIcon}
                count={1}
                selectedColor="#666"
              />
            )}
            {stars > 0 && (
              <IconFilter
                size={5}
                icon={StarIcon}
                count={stars}
                selectedColor="#666"
                unselectedColor="#ccc"
              />
            )}
          </div>
          <div className="mx-8 my-4">
            <p>
              With the plastic bottle cutter you can easily create stable
              polymer ropes of different widths.
            </p>
            <p className="mt-4">Characteristics of the rope:</p>
            <ul className="my-4 ml-6 list-disc">
              <li>
                Extremely stable - if you heat the PET-tape, it is just as
                stable as a screw connection
              </li>
              <li>Durable in heat and cold temperatures</li>
            </ul>
            <p>
              You can use the ropes for all kinds of things. They are especially
              helpful for joining in construction, but you can also use them as
              fishing lines or to tow a car.
            </p>
            <img
              src="/hacks/001/usage.jpg"
              className="object-cover object-top w-full h-64"
            />
            <p className="mt-8">
              Get to know more in the{" "}
              <a className="underline" href="/handbook">
                handbook
              </a>
              .
            </p>
          </div>
        </div>
        <div>
          <img
            src="/hacks/001/katie-rodriguez-NP9kbCXeVK0-unsplash.jpg"
            className="object-cover object-top w-full h-64"
          />
          <div className="mx-8 mt-4">
            <h2 className="p-2 text-xl font-semibold text-accent-1">Tools</h2>
            <ul className="my-2 ml-6 list-disc">
              <li>a pen/edding</li>
              <li>a saw or an old saw blade</li>
              <li>a ruler/measuring tool</li>
              <li>sandpaper</li>
            </ul>
          </div>
        </div>
        <div>
          <img
            src="/hacks/001/joshua-hoehne-XG9mXns-340-unsplash.jpg"
            className="object-cover object-top w-full h-64"
          />
          <div className="mx-8 mt-4">
            <h2 className="p-2 text-xl font-semibold text-accent-1">
              Material
            </h2>
            <ul className="my-2 ml-6 list-disc">
              <li>
                One squared timber, approx. 7 cm wide, 30 cm long and 3cm deep –
                should fit comfortably in your hand
              </li>
              <li>the end of a cutter blade</li>
              <li>2 metal clips (with 2 holes each)</li>
              <li>
                4 little wood screws (have to match the holes of the clips)
              </li>
              <li>Plastic bottles to cut in the end</li>
            </ul>
          </div>
        </div>
        <div>
          <img
            src="/hacks/001/step1a.jpg"
            className="object-cover object-bottom w-full h-64"
          />
          <div className="mx-8 mt-4">
            <h2 className="p-2 text-xl font-semibold text-accent-1">Step 1</h2>
            <ul className="my-2 ml-6 list-disc">
              <li>
                Draw three lines with a length of 4 cm, 5 cm and 6 cm in a
                distance of 2cm with a ruler and a marker
              </li>
              <li>
                Draw a cross line - with the distance you determine the width of
                the PET-tape that comes out of your cutter at the end
              </li>
            </ul>
            <p className="mt-6">
              Width of the PET rope you can create with your cutter.
            </p>
          </div>
          <img
            src="/hacks/001/step1b.jpg"
            className="object-cover object-bottom w-full h-64 mt-4"
          />
        </div>
        <div>
          <img
            src="/hacks/001/step2a.jpg"
            className="object-cover object-top w-full h-64"
          />
          <div className="mx-8 mt-4">
            <h2 className="p-2 text-xl font-semibold text-accent-1">Step 2</h2>
            <ul className="my-2 ml-6 list-disc">
              <li>Saw through the three lines</li>
              <li>
                Saw the cross line approx. 1cm deep (should be as deep as your
                cutter blade)
              </li>
            </ul>
          </div>
          <img
            src="/hacks/001/step2b.jpg"
            className="object-cover object-bottom w-full h-64 mt-4"
          />
          <div className="mx-8 mt-4">
            <ul className="my-2 ml-6 list-disc">
              <li>
                Use sandpaper to make the surface smooth so that you don't get
                splinters in your skin
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img
            src="/hacks/001/step3a.jpg"
            className="object-cover object-top w-full h-64"
          />
          <div className="mx-8 mt-4">
            <h2 className="p-2 text-xl font-semibold text-accent-1">Step 3</h2>
            <ul className="my-2 ml-6 list-disc">
              <li>
                Put the cutter blade with the blade downwards into the
                transverse gap
              </li>
            </ul>
          </div>
          <img
            src="/hacks/001/step3b.jpg"
            className="object-cover object-bottom w-full h-64 mt-4"
          />
          <div className="mx-8 mt-4">
            <ul className="my-2 ml-6 list-disc">
              <li>
                Place the two latches over the blade and fix them each with 2
                small screws
              </li>
            </ul>
          </div>
          <img
            src="/hacks/001/step3c.jpg"
            className="object-cover object-bottom w-full h-64 mt-4"
          />
          <div className="mx-8 mt-4">You are done!</div>
        </div>
        <div>
          <img
            src="/hacks/001/step4.jpg"
            className="object-cover object-top w-full h-64"
          />
          <div className="mx-8 mt-4">
            <h2 className="p-2 text-xl font-semibold text-accent-1">Use it!</h2>
            <ul className="my-2 ml-6 list-disc">
              <li>Remove the bottom of a plastic bottle with a cutter knife</li>
              <li>
                Thread the bottle into your plastic bottle cutter at the bottom
              </li>
              <li>
                Depending on which gap of your cutter you use, you will get
                thicker or thinner PET-Tape
              </li>
            </ul>
            <p className="mt-8 mb-4">
              Try out any of the hacks based on the produced PET-tape:
            </p>
            <Tag className="bg-green-500">PET-Tape</Tag>
            <Tag className="bg-orange-500">Plastic Bottle Cutter</Tag>
            <Tag className="bg-teal-600">Working Ram</Tag>
          </div>
        </div>
      </SwipeableViews>
    </main>
  );
};

function loadHack(hackid: string) {
  return {
    title: "Plastic Bottle Cutter",
    stars: 5,
    approved: true,
    titleImg: "/hacks/001/title.jpg"
  };
}
