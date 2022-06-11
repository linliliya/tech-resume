export default function SkillSection(props) {
  return (
    <div>
      <p className="font-rubik font-semibold text-xl text-center text-gray-800 mt-8">
        {props.title}
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-center mt-4">
        {props.skills &&
          props.skills.map((skill, index) => {
            return (
              <div
                key={index}
                className="m-2 w-full py-2 sm:mx-0 sm:my-4 sm:w-auto md:mx-2 bg-background-light rounded-lg shadow-md hover:bg-gray-50"
              >
                <i className={skill.icon + " text-gray-500"}></i>
                <h3 className="text-gray-600 pt-2">{skill.name}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
}
