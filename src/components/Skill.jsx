import SkillSection from "./SkillSection";

export default function Skill() {
  return (
    <div className="container items-center justify-between mx-auto px-4 leading-normal text-center mt-4 mb-24">
      <h2 className="font-black uppercase pb-4 text-3xl text-yellow-500">
        🔧 我的技能
      </h2>

      <div className="md:w-8/12 w-10/12 mx-auto">
        <SkillSection
          title="⌨️ 语言"
          skills={[
            { name: "Python", icon: "fab fa-python fa-3x" },
            { name: "Javascript", icon: "fab fa-js-square fa-3x" },
            { name: "Java", icon: "fab fa-java fa-3x" },
            { name: "C", icon: "fas fa-copyright fa-3x" },
            { name: "SQL", icon: "fas fa-database fa-3x" },
            { name: "R", icon: "fas fa-registered fa-3x" },
            { name: "HTML", icon: "fab fa-html5 fa-3x" },
            { name: "CSS", icon: "fab fa-css3-alt fa-3x" },
          ]}
        />

        <SkillSection
          title="📚 库/框架"
          skills={[
            { name: "React", icon: "fab fa-react fa-3x" },
            { name: "ExpressJS", icon: "fas fa-server fa-3x" },
            { name: "Spring", icon: "fa fa-leaf fa-3x" },
            { name: "Flask", icon: "fas fa-pepper-hot fa-3x" },
            { name: "Mongoose", icon: "fas fa-sitemap fa-3x" },
            { name: "jQuery", icon: "fas fa-copyright fa-3x" },
            { name: "NumPy", icon: "fas fa-table fa-3x" },
            { name: "Pandas", icon: "fas fa-file-csv fa-3x" },
          ]}
        />

        <SkillSection
          title="🔨 工具"
          skills={[
            { name: "Git", icon: "fab fa-git-square fa-3x" },
            { name: "Shell", icon: "fas fa-terminal fa-3x" },
            { name: "Docker", icon: "fab fa-docker fa-3x" },
            { name: "AWS", icon: "fab fa-aws fa-3x" },
            { name: "LaTex", icon: "fas fa-subscript fa-3x" },
            { name: "Heroku", icon: "fas fa-code-branch fa-3x" },
            { name: "Tableau", icon: "far fa-chart-bar fa-3x" },
            { name: "Figma", icon: "fab fa-figma fa-3x" },
          ]}
        />

        <p className="font-rubik font-semibold text-xl text-center text-gray-800 mt-8">
          ... 持续增加中
        </p>
      </div>
    </div>
  );
}
