import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <div
      id="experience"
      className="container items-center justify-between mx-auto px-4 leading-normal text-center mt-24 mb-24"
    >
      <h2 className="font-black uppercase pb-8 text-3xl text-yellow-500">
        💼 我的工作经历
      </h2>

      <div className="md:w-8/12 w-10/12 mx-auto">
        {[
          {
            img: "experience1.jpg",
            role: "XX实习生 - XX组",
            title: "XX有限公司",
            time: "20XX年X月 - 20XX年X月",
            descriptions: [
              "调研了XX的优势和具体业务需求，用XX进行了XX系统的设计和搭建，实现了XX。",
              "基于XX搭建了XX，涉及XX、XX、XX技术栈，将系统的XX提升百分之XX。",
            ],
          },
          {
            img: "experience2.jpg",
            role: "XX实习生 - XX组",
            title: "XX有限公司",
            time: "20XX年X月 - 20XX年X月",
            descriptions: [
              "调研了XX的优势和具体业务需求，用XX进行了XX系统的设计和搭建，实现了XX。",
              "基于XX搭建了XX，涉及XX、XX、XX技术栈，将系统的XX提升百分之XX。",
            ],
          },
        ].map((item, index) => {
          return (
            <ExperienceCard
              key={index}
              img={item.img}
              role={item.role}
              title={item.title}
              time={item.time}
              descriptions={item.descriptions}
            />
          );
        })}
      </div>
    </div>
  );
}
