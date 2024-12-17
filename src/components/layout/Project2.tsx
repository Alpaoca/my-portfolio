import ProjectShowCase from "../shared/ProjectShowcase";
import { VelocityScroll } from "../ui/scroll-based-velocity";

function Project2() {
  return (
    <>
      <div className="w-full flex justify-center bg-[#1C1A5A] text-[#1C1A5A]">
        <div className="w-11/12 bg-[#817FB2] xl:w-10/12">
          <div className="text-white font-extrabold flex justify-center items-center gap-8 flex-col">
            <ProjectShowCase
              src="./images/time-tracking-dashboard.png"
              h1="Time Tracking Dashboard"
              p="This project is also a challenge from Frontend Mentor which teach me how to use CSS Grid."
              stackIcons={["HTML", "CSS", "JS", "SASS/SCSS"]}
              websiteUrl="https://alpaoca.github.io/time-tracking-dashboard-main/"
              githubUrl="https://github.com/Alpaoca/time-tracking-dashboard-main"
              alt="Time tracking dashboard project picture"
            />
          </div>
        </div>
      </div>
      <div className="pb-[5rem] bg-[#1C1A5A]">
        <VelocityScroll
          text={`Work In Progress            `}
          default_velocity={5}
          className="font-display text-center text-4xl font-extrabold whitespace-pre tracking-tight text-white bg-[#363377] md:text-5xl md:leading-[6rem]"
        />
      </div>
      <div className="bg-[#1C1A5A] text-white text-center font-semibold pb-[1rem]">
        <p>© 2024 Preecha Kanchanakungwalkul</p>
      </div>
    </>
  );
}

export default Project2;
