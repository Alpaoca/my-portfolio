import ProjectShowCase from "../shared/ProjectShowcase";

function Project2() {
  return (
    <>
      <div className="w-full h-screen flex justify-center bg-[#1C1A5A] text-[#1C1A5A]">
        <div className="w-10/12 h-full bg-[#817FB2]">
          <div className="text-white font-extrabold flex justify-center items-center gap-8 flex-col">
            <ProjectShowCase
              src="./images/time-tracking-dashboard.png"
              h1="Time Tracking Dashboard"
              p="Lorem"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Project2;
