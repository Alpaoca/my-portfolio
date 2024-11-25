import toast from "react-hot-toast";
import Button from "../shared/Button";
import BoxReveal from "../ui/box-reveal";
import InfoItems from "../shared/InfoItems";
import useLinkNavigation from "../hook/useLinkNavigation";

function Profile() {
  const navigate = useLinkNavigation();

  function copyToClipboard(content: string) {
    navigator.clipboard.writeText(content);
    toast("Text copied");
  }

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-[#1C1A5A] text-[#1C1A5A]">
        <div className="rounded-xl w-8/12 h-5/6 flex justify-center items-center">
          <div className="flex flex-row gap-[2rem]">
            <img
              src="images\364621182_618854306980280_6133984518278106161_n (1).png"
              className="rounded-xl object-cover block max-h-[70%] max-w-[30%] shadow-[0px_0px_20px_5px_rgba(0,0,0,0.3)]"
              alt="Profile picture"
            />
            <div className="bg-[#817FB2] w-full rounded-xl shadow-[0px_0px_20px_5px_rgba(0,0,0,0.3)] flex flex-row">
              <div className="max-w-[60%] p-[2rem] flex flex-col gap-2">
                <BoxReveal boxColor="#575594" duration={0.5}>
                  <p className="text-[3rem] font-bold tracking-tighter leading-tight">
                    Preecha Kanchanakungwalkul
                  </p>
                </BoxReveal>
                <BoxReveal boxColor="#575594" duration={0.5}>
                  <p className="text-[1.5rem] font-bold ">
                    Self motivated and perfectionist <br />
                    with 1 year experience in
                    <br />
                    inplant logistic warehouse
                  </p>
                </BoxReveal>
                <BoxReveal boxColor="#575594" duration={0.5}>
                  <p className="text-[1.5rem] font-bold ">
                    Gratuated from Civil Aviation Training Center
                    <br />
                    inplant logistic warehouse
                  </p>
                </BoxReveal>
              </div>
              <div className="bg-white min-w-[40%] rounded-r-xl shadow-[0px_0px_20px_5px_rgba(0,0,0,0.3)] p-[2rem] flex flex-col justify-between gap-7">
                <section className="flex flex-col gap-7">
                  <h2 className="text-6xl font-bold">Contact</h2>
                  <InfoItems
                    src="./images/phone-call.svg"
                    onClick={() => copyToClipboard("+6691-185-8818")}
                  >
                    <p className="transition text-md md:font-bold sm:font-normal hover:text-[#9E7AFF] duration-300">
                      +6691-185-8818
                    </p>
                  </InfoItems>

                  <InfoItems
                    src="./images/envelope.svg"
                    onClick={() => copyToClipboard("preechak10123@gmail.com")}
                  >
                    <a
                      href="mailto: preechak10123@gmail.com"
                      className="transition text-md md:font-bold sm:font-normal hover:text-[#9E7AFF] duration-300"
                    >
                      preechak10123@gmail.com
                    </a>
                  </InfoItems>

                  <InfoItems
                    src="./images/marker.svg"
                    onClick={() => copyToClipboard("Samut Prakan, Bangkok")}
                  >
                    <p className="transition text-md md:font-bold sm:font-normal hover:text-[#9E7AFF] duration-300">
                      Samut Prakan, Bangkok
                    </p>
                  </InfoItems>
                </section>
                <div className="flex flex-col gap-1.5">
                  <Button
                    url="./images/envelope-open-text.svg"
                    style="bg-[#4843FF] hover:bg-[#6C69FF] transition duration-150"
                    img="max-h-6 bg-white left-4 p-1"
                    text="Resume"
                    onclick={() =>
                      navigate(
                        "https://docs.google.com/document/d/187wAu9oBWNUAg-8n58rDE6rfaLQEwkim8Yhu9eYFOWk/edit?usp=sharing"
                      )
                    }
                  />
                  <Button
                    url="./images/github.svg"
                    img="max-h-8 left-3"
                    style="bg-black hover:bg-[#181818] transition duration-150"
                    text="Github"
                    onclick={() => navigate("https://github.com/Alpaoca")}
                  />
                  <Button
                    url="./images/linkedin.svg"
                    img="max-h-6 left-4"
                    style="bg-[#1785FF] hover:bg-[#439cff] transition duration-150"
                    text="Linkedin"
                    onclick={() =>
                      navigate(
                        "https://www.linkedin.com/in/preecha-kanchanakungwalkul-2410601b4/"
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
