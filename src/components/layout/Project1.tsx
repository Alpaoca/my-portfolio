import ProjectShowCase from "../shared/ProjectShowcase";

function Project1() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-end bg-[#1C1A5A] text-[#1C1A5A]">
        <div className="rounded-t-xl w-10/12 h-5/6 bg-[#817FB2]">
          <div className="text-white font-extrabold flex justify-center items-center gap-8 flex-col">
            <h1 className="drop-shadow-[5px_10px_5px_rgba(0,0,0,0.05)] text-[8rem]">
              Projects
            </h1>
            <ProjectShowCase
              src="./images/ecommerce-project.png"
              h1="Ecommerce Project"
              p="This project is a challenge from Frontend Mentor to build a beautiful product page by using JS skills to create a lightbox product gallery and cart functionality!"
              stackIcons={[
                "React",
                "TailwindCSS",
                "Typescript",
                "Vite",
                "Redux",
              ]}
              websiteUrl="https://alpaoca.github.io/e-commerce-product-page/"
              githubUrl="https://github.com/Alpaoca/e-commerce-product-page"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Project1;
