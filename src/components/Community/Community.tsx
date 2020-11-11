// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import Slip from "@components/Slip";
import { UnderConstruction } from "@components/UnderConstruction";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface CommunityProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Community: React.FC<CommunityProps> = ({ className }) => (
  <main className={`${className}`}>
    <Slip className="h-24">
      <Slip.Image src="images/khara-woods--n4Lw7zArIk-unsplash.jpg" />
      <Slip.Content>
        <Slip.Subtitle>Tue, Nov 17 2020, 8pm</Slip.Subtitle>
        <Slip.Title>Some Event</Slip.Title>
        <p>Join us now!</p>
      </Slip.Content>
    </Slip>
  </main>
);
