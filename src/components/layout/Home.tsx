import BlurFade from "../ui/blur-fade";
import Confetti, { ConfettiButton } from "../ui/confetti";

function Home() {
  return (
    <section
      id="header"
      className="h-screen flex items-center justify-center bg-[#363377] text-white gap-[50px] snap-start"
    >
      <Confetti />
      <div className="size-full top-0 flex items-center justify-center flex-col gap-[20px] z-40">
        <BlurFade delay={0.25} inView>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none ">
            Hi I'm Preecha{" "}
            <ConfettiButton className=" rounded-full bg-transparent p-0 hover:bg-transparent">
              🎉
            </ConfettiButton>
          </h1>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <p className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-center">
            (Soon to be) Front-End Developer
          </p>
        </BlurFade>
      </div>
    </section>
  );
}

export default Home;
