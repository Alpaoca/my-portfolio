import BlurFade from "../ui/blur-fade";
import BoxComponent from "./BoxComponent";
import Button from "./Button";
import useLinkNavigation from "../hook/useLinkNavigation";

function ProjectShowCase({
  containerStyle,
  src,
  h1,
  p,
  stackIcons,
  websiteUrl,
  githubUrl,
  alt,
}: any) {
  const navigate = useLinkNavigation();

  return (
    <>
      <div
        className={`bg-white h-10/12 w-5/6 p-4 gap-8 xl:flex xl:p-8 ${containerStyle}`}
      >
        <BlurFade
          className="object-scale-down w-full xl:w-4/6"
          duration={0.8}
          inView
        >
          <img
            src={src}
            className="rounded-xl drop-shadow-[5px_5px_20px_rgba(0,0,0,0.05)]"
            alt={alt}
          />
        </BlurFade>

        <div className="text-black flex flex-col justify-between pt-2 gap-4 md:p-4 md:w-full md:gap-4 xl:w-2/6 xl:p-0">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold tracking-tight xl:text-3xl">
              {h1}
            </h1>
            <p className="font-normal font-sans text-pretty text-sm md:text-base xl:text-lg text-muted-foreground">
              {p}
            </p>
          </div>
          <div className="flex flex-col gap-2 xl:gap-4">
            <div className="flex flex-wrap gap-2">
              {stackIcons.map((tech: any, index: number) => (
                <BoxComponent key={tech + index} text={tech} />
              ))}
            </div>

            <div className="flex justify-between gap-2">
              <Button
                url="./images/globe.svg"
                imgStyle="max-h-6 left-3"
                buttonStyle="bg-[#151515] w-full pl-[2rem] hover:bg-[#454545] transition duration-150"
                text="Website"
                textStyle=""
                onclick={() => navigate(websiteUrl)}
              />
              <Button
                url="./images/github.svg"
                imgStyle="max-h-8 left-2"
                buttonStyle="bg-[#151515] w-full pl-[2rem] hover:bg-[#454545] transition duration-150"
                text="Source"
                textStyle=""
                onclick={() => navigate(githubUrl)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectShowCase;
