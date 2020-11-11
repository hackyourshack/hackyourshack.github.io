// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import { DetailedHTMLProps, HTMLAttributes, ImgHTMLAttributes } from "react";

interface ImageProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  href?: string;
}

const Image: React.FC<ImageProps> = ({ className = "", href, ...props }) => {
  if (!href) {
    return <img className={`object-cover h-24 w-24 ${className}`} {...props} />;
  } else {
    return (
      <a href={href}>
        <img className={`object-cover h-24 w-24 ${className}`} {...props} />
      </a>
    );
  }
};

interface TitleProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  href?: string;
}

interface ContentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Content: React.FC<ContentProps> = ({
  className = "",
  children
}) => {
  return (
    <aside className={`ml-3 flex flex-col ${className}`}>{children}</aside>
  );
};

export const Title: React.FC<TitleProps> = ({
  className = "",
  children,
  href
}) => {
  if (!href) {
    return (
      <h2 className={`text-lg font-bold leading-6 ${className}`}>{children}</h2>
    );
  } else {
    return (
      <a href={href}>
        <h2 className={`text-lg font-bold leading-4 ${className}`}>
          {children}
        </h2>
      </a>
    );
  }
};

interface SubtitleProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

export const Subtitle: React.FC<SubtitleProps> = ({
  className = "",
  children
}) => {
  return <h3 className={`font-semibold leading-4 ${className}`}>{children}</h3>;
};

interface SlipProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  href?: string;
}

type TSlip = React.FC<SlipProps> & {
  Image: React.FC<ImageProps>;
  Content: React.FC<ContentProps>;
  Title: React.FC<TitleProps>;
  Subtitle: React.FC<SubtitleProps>;
};

const Slip: TSlip = ({ className = "", children }) => {
  return (
    <article className={`flex flex-row ${className} `}>{children}</article>
  );
};

Slip.Image = Image;
Slip.Content = Content;
Slip.Title = Title;
Slip.Subtitle = Subtitle;

export default Slip;
