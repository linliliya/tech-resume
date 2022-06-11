import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ProjectCard(props) {
  return (
    <div className="max-w-full rounded overflow-hidden shadow-lg my-2 lg:mx-6">
      <LazyLoadImage
        className="max-w-full overflow-hidden object-cover"
        src={props.img}
        alt={props.title}
        effect={"blur"}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl m-2">{props.title}</div>
        <p className="text-gray-400 text-base m-1">{props.time}</p>
        {props.descriptions &&
          props.descriptions.map((des, index) => {
            return (
              <p key={index} className="text-gray-500 text-base text-left">
                {"· " + des}
              </p>
            );
          })}
      </div>
      {props.tags &&
        props.tags.map((tag, index) => {
          return (
            <span
              key={index}
              className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-gray-500"
            >
              {"#" + tag}
            </span>
          );
        })}
      <div className="my-4">
        {props.demoName && (
          <a
            className="text-yellow-500 text-base text-left"
            target="_blank"
            href={props.demoLink}
            rel="noreferrer"
          >
            {props.demoName}
          </a>
        )}
      </div>
    </div>
  );
}
