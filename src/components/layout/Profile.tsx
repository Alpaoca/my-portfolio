import BlurFade from "../ui/blur-fade";
import Confetti from "../ui/confetti";

function Profile() {
  return (
    <section id="header" className="w-full h-full">
      <Confetti className="absolute left-0 top-0 z-0 size-full" />
      <div className="w-full h-screen flex items-center justify-center flex-col gap-[50px]">
        <BlurFade delay={0.25} inView>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Hi I'm Preecha 👋
          </h1>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <span className="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none">
            ปรีชา กาญจนกังวาฬกุล
          </span>
        </BlurFade>
      </div>
    </section>
  );
}

export default Profile;
