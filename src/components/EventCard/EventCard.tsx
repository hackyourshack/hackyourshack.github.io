// Copyright 2020, Hack Your Shack [https://hackyourshack.github.io]
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface EventCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  href: string;
  imgSrc: string;
  title: string;
  date: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  className,
  children,
  href,
  imgSrc,
  title,
  date
}) => {
  return (
    <article className={`${className}`}>
      <aside className="">
        <a
          tabIndex={-1}
          href={href}
          className=""
          aria-label={`See more of ${title}`}
        >
          <img className="" alt={title} src={imgSrc} />
        </a>
      </aside>
      <div className="">
        <div className="">{date}</div>
        <a
          tabIndex={0}
          href="https://www.eventbrite.com/e/black-velveteen-yoga-vinyasa-class-tickets-114054223252?aff=ebdssbcitybrowse"
          className=""
          aria-label={`See more of ${title}`}
        >
          <h3 className="">{title}</h3>
        </a>
      </div>
      <div className="">
        <button className="" type="button">
          <i className="" title={`Share ${title}.`}>
            <svg viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 16v2H6v-2H4v4h16v-4zM12 4L7 9l1.4 1.4L11 7.8V16h2V7.8l2.6 2.6L17 9l-5-5z"
              ></path>
            </svg>
            <span className="eds-is-hidden-accessible">
              Share {title} with your friends.
            </span>
          </i>
        </button>
        <button className="" type="button">
          <i className="" title={`Save ${title} to your collection.`}>
            <svg viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.8 6.2C18.1 5.4 17 5 16 5c-1 0-2 .4-2.8 1.2L12 7.4l-1.2-1.2C10 5.4 9 5 8 5c-1 0-2 .4-2.8 1.2-1.5 1.6-1.5 4.2 0 5.8l6.8 7 6.8-7c1.6-1.6 1.6-4.2 0-5.8zm-1.4 4.4L12 16.1l-5.4-5.5c-.8-.8-.8-2.2 0-3C7 7.2 7.5 7 8 7c.5 0 1 .2 1.4.6l2.6 2.7 2.7-2.7c.3-.4.8-.6 1.3-.6s1 .2 1.4.6c.8.8.8 2.2 0 3z"
              ></path>
            </svg>
            <span className="eds-is-hidden-accessible">
              Save {title} to your collection.
            </span>
          </i>
        </button>
      </div>
    </article>
  );
};
