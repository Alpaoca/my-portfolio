import BlurFade from "../ui/blur-fade";
import BoxComponent from "./BoxComponent";
import Button from "./Button";
import useLinkNavigation from "../hook/useLinkNavigation";

function ProjectShowCase({
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
      <div className="bg-white rounded-xl h-10/12 w-5/6 flex p-8 gap-8">
        <BlurFade className="object-scale-down w-4/6" duration={0.8} inView>
          <img
            src={src}
            className="rounded-xl drop-shadow-[5px_5px_20px_rgba(0,0,0,0.05)]"
            alt={alt}
          />
        </BlurFade>

        <div className="text-black flex flex-col justify-between w-2/6">
          <h1 className="text-3xl font-bold tracking-tight">{h1}</h1>
          <p className="font-normal font-sans text-pretty text-xl/relaxed text-muted-foreground">
            {p}
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-2">
              {stackIcons.map((tech) => (
                <BoxComponent text={tech} />
              ))}
            </div>

            <div className="flex justify-between gap-2">
              <Button
                url="./images/globe.svg"
                img="max-h-6 left-3"
                style="bg-[#151515] w-full pl-[2rem] hover:bg-[#454545] transition duration-150"
                text="Website"
                onclick={() => navigate(websiteUrl)}
              />
              <Button
                url="./images/github.svg"
                img="max-h-8 left-2"
                style="bg-[#151515] w-full pl-[2rem] hover:bg-[#454545] transition duration-150"
                text="Source"
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
