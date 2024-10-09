import BlurFade from "../ui/blur-fade";
import Confetti from "../ui/confetti";

function About() {
  return (
    <>
      <section
        id="header"
        className="absolute w-full h-screen flex items-center justify-center bg-[#363377] text-[#0A093B] gap-[50px]"
      >
        <Confetti className="absolute left-0 top-0 size-full" />
        <div className="w-full h-screen top-0 flex items-center justify-center flex-col gap-[20px]">
          <BlurFade delay={0.25} inView>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Hi I'm Preecha 🍆
            </h1>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <p className="text-3xl font-bold">Front-End Developer</p>
          </BlurFade>
        </div>
      </section>
    </>
  );
}

export default About;
