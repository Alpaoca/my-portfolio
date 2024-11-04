import ProjectShowCase from "../shared/ProjectShowcase";
import { VelocityScroll } from "../ui/scroll-based-velocity";

function Project1() {
  return (
    <>
      <VelocityScroll
        text={`Work In Projects            `}
        default_velocity={5}
        className="font-display text-center text-4xl font-extrabold whitespace-pre tracking-tight text-white bg-[#363377] md:text-5xl md:leading-[6rem]"
      />
      <div className="w-full h-screen flex justify-center items-end bg-[#1C1A5A] text-[#1C1A5A]">
        <div className="rounded-t-xl w-10/12 h-5/6 bg-[#817FB2]">
          <div className="text-white font-extrabold flex justify-center items-center gap-8 flex-col">
            <h1 className="drop-shadow-[5px_10px_5px_rgba(0,0,0,0.05)] text-[8rem]">
              Projects
            </h1>
            <ProjectShowCase
              src="./images/ecommerce-project.png"
              h1="Ecommerce Project"
              p="Lorem"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Project1;
