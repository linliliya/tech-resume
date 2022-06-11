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
        <EducationCard
          img="education.jpg"
          title="XX大学"
          time="20XX年9月 - 20XX年6月"
          p1="我是XX大学计算机专业的大四学生，预计将于20XX年6月获得荣誉理学学士学位。"
          p2="我当前的总绩点是 X.XX/4.00，在校期间多次获得XXX奖学金。"
        />
      </div>
    </div>
  );
}
