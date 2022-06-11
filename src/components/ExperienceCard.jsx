import { LazyLoadImage } from "react-lazy-load-image-component";

export default function EducationCard(props) {
  return (
    <div className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 shadow-lg mb-6">
      <LazyLoadImage
        className="w-40 h-40 max-w-full md:rounded rounded-full md:float-left m-6"
        src={props.img}
        alt={props.title}
      />
      <div className="md:p-8 md:text-left space-y-2">
        <p className="text-lg font-semibold">{props.title}</p>
        <div>
          <p className="text-gray-400 my-1 italic">{props.role}</p>
          <p className="text-gray-400 my-1 ">{props.time}</p>
          {props.descriptions &&
            props.descriptions.map((des, index) => {
              return (
                <p key={index} className="text-gray-500 text-base text-left">
                  {"· " + des}
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
}
