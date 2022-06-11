import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <div
      id="project"
      className="container items-center justify-between mx-auto px-4 leading-normal text-center mt-4 mb-24"
    >
      <h2 className="font-black uppercase pb-8 text-3xl text-yellow-500">
        👩🏻‍💻 我的项目经历
      </h2>

      <div className="md:w-8/12 w-10/12 mx-auto lg:grid grid-cols-2">
        {[
          {
            img: "project1.jpg",
            title: "XX训练视频指标提取平台",
            time: "20XX年X月 - 20XX年X月",
            descriptions: [
              "领导团队模拟软件产品精益创业过程，组织与XXX合作伙伴的会议。产出的SaaS产品基于计算机视觉算法从运动训练视频中提取关键身体指标，为训练提供数据洞察。",
              "在由两名软件工程师组成的开发团队中担任前端工程师。通过React实现包括拖拽视频上传，视频在线播放，发送视频处理请求，数据云端保存，数据过滤和排序等功能，并结合Material-UI实现良好用户操作界面。",
            ],
            tags: [
              "Javascript",
              "React",
              "JEST",
              "Material-UI",
              "Python",
              "Flask",
              "MongoDB",
            ],
          },
          {
            img: "project2.jpg",
            title: "XX大学餐车点餐平台",
            time: "20XX年X月 - 20XX年X月",
            descriptions: [
              "在四人团队中担任全栈工程师，创建支持学生线上预定校园餐车食物的网站应用程序。",
              "定义数据库模式，结合 Express.js 和 Mongoose 实现应用程序的后端服务器，包括 RESTful API、CRUD操作、用户身份验证、Session等。",
              "通过 React 和 Material-UI 实现用户前端界面，支持菜单展示、加入购物车和提货预订。",
            ],
            tags: [
              "Javascript",
              "React",
              "RESTful API",
              "ExpressJS",
              "MongoDB",
              "Mongoose",
            ],
          },
          {
            img: "project3.jpg",
            title: "操作系统之自定文件系统",
            time: "20XX年X月 - 20XX年X月",
            descriptions: [
              "借助用户空间文件系统（FUSE），通过C语言实现一个客制化文件系统。支持常用Linux文件操作命令，包括 ls，touch，echo，cat，truncate，rm，mkdir，以及rmdir。",
            ],
            tags: ["C", "Operating System"],
          },
          {
            img: "project4.jpg",
            title: "简单的路由实现",
            time: "20XX年X月 - 20XX年X月",
            descriptions: [
              "基于Mininet仿真静态路由表实现一个简单的路由器，支持接收原始以太网帧，处理数据包并将数据包转发到正确的传出接口。",
            ],
            tags: ["C", "Computer Network"],
          },
        ].map((item, index) => {
          return (
            <ProjectCard
              key={index}
              img={item.img}
              title={item.title}
              time={item.time}
              descriptions={item.descriptions}
              tags={item.tags}
            />
          );
        })}
      </div>
    </div>
  );
}
