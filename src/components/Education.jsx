import EducationCard from "./EducationCard";

export default function Education() {
  return (
    <div
      id="education"
      className="container items-center justify-between mx-auto px-4 leading-normal text-center mt-24 mb-24"
    >
      <h2 className="font-black uppercase pb-8 text-3xl text-yellow-500">
        👩🏻‍🎓 我的教育经历
      </h2>

      <div className="md:w-8/12 w-10/12 mx-auto">
        {[
          // 在此处修改或新增教育经历卡片
          // 如需新增卡片，复制下方整个被{}包围的对象，修改字符串内容；每个对象用逗号分隔。
          {
            img: "education.jpg",
            title: "XX大学",
            time: "20XX年X月 - 20XX年X月",
            descriptions: [
              "我是XX大学计算机专业的大四学生，预计将于20XX年6月获得荣誉理学学士学位。",
              "我当前的总绩点是 X.XX/4.00，在校期间多次获得XXX奖学金。",
            ],
          },
        ].map((item, index) => {
          return (
            <EducationCard
              key={index}
              img={item.img}
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
