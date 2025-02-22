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
  // images\364621182_618854306980280_6133984518278106161_n (1).png
  return (
    <>
      <div className="w-full h-screen flex justify-center md:items-center bg-[#1C1A5A] text-[#1C1A5A] py-8 box-content">
        <div className="rounded-xl  w-11/12  xl:w-8/12">
          <div className="flex flex-col gap-[2rem] xl:flex-row items-center">
            <img
              src="/my-portfolio/images/PXL_20250129_035630482~3.jpg"
              className="rounded-xl block shadow-[0px_0px_20px_5px_rgba(0,0,0,0.3)] max-w-[10rem] md:max-h-[28rem] xl:max-w-[20rem]"
              alt="Profile picture"
            />
            <div className="bg-[#817FB2] rounded-xl shadow-[0px_0px_20px_5px_rgba(0,0,0,0.3)] xl:flex">
              <div className="p-6 pt-3 pb-4 flex flex-col gap-2 xl:p-8">
                <BoxReveal boxColor="#575594" duration={0.5}>
                  <p className="text-2xl font-bold xl:text-4xl">About</p>
                </BoxReveal>
                <BoxReveal boxColor="#575594" duration={0.5}>
                  <p className="text-sm md:text-base xl:text-lg">
                    Civil Aviation Training Center graduate specialized experise
                    in aviation cargo management with 1 year experience in-plant
                    logistic warehouse operations.
                  </p>
                </BoxReveal>
                <BoxReveal boxColor="#575594" duration={0.5}>
                  <p className="text-sm md:text-base xl:text-lg">
                    Currently focusing on transitioning into software
                    development
                  </p>
                </BoxReveal>
              </div>
              <div className="bg-white rounded-b-lg xl:rounded-r-xl shadow-[0px_0px_20px_5px_rgba(0,0,0,0.3)] p-4 pt-3 pb-4 flex flex-col justify-between gap-4 xl:p-8">
                <section className="flex flex-col gap-2 xl:gap-4 ">
                  <h2 className="text-2xl font-bold xl:text-4xl">Contact</h2>
                  <InfoItems
                    src="/my-portfolio/svg/phone-call.svg"
                    onClick={() => copyToClipboard("+6691-185-8818")}
                  >
                    <p className="transition text-sm md:text-base xl:text-lg md:font-bold sm:font-normal hover:text-[#9E7AFF] duration-300">
                      +6691-185-8818
                    </p>
                  </InfoItems>

                  <InfoItems
                    src="/my-portfolio/svg/envelope.svg"
                    onClick={() => copyToClipboard("preechak10123@gmail.com")}
                  >
                    <a
                      href="mailto: preechak10123@gmail.com"
                      className="transition text-sm md:text-base xl:text-lg md:font-bold sm:font-normal hover:text-[#9E7AFF] duration-300"
                    >
                      preechak10123@gmail.com
                    </a>
                  </InfoItems>

                  <InfoItems
                    src="/my-portfolio/svg/marker.svg"
                    onClick={() => copyToClipboard("Samut Prakan, Bangkok")}
                  >
                    <p className="transition text-sm md:text-base xl:text-lg md:font-bold sm:font-normal hover:text-[#9E7AFF] duration-300">
                      Samut Prakan, Bangkok
                    </p>
                  </InfoItems>
                </section>
                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-row gap-1.5 sm:flex-col">
                    <Button
                      url="/my-portfolio/svg/envelope-open-text.svg"
                      imgStyle="max-h-6 bg-white left-1.5 p-1 xl:left-4"
                      buttonStyle="bg-[#4843FF] hover:bg-[#6C69FF] transition duration-150"
                      text="Resume"
                      textStyle="pl-5 md:pl-0 text-xs xl:text-lg"
                      onclick={() =>
                        navigate(
                          "https://docs.google.com/document/d/1IafuyRIpXPV7Hcod8RnHoJUEpLBgmWk3ZwcsRnvrhqw/edit?usp=sharing"
                        )
                      }
                    />
                    <Button
                      url="/my-portfolio/svg/github.svg"
                      imgStyle="max-h-8 left-0.5 p-[2px] xl:p-0 xl:left-3"
                      buttonStyle="bg-black hover:bg-[#181818] transition duration-150"
                      text="Github"
                      textStyle="pl-5 md:pl-0 text-xs xl:text-lg"
                      onclick={() => navigate("https://github.com/Alpaoca")}
                    />
                  </div>

                  <Button
                    url="/my-portfolio/svg/linkedin.svg"
                    imgStyle="max-h-6 left-1.5 xl:left-4"
                    buttonStyle="bg-[#1785FF] hover:bg-[#439cff] transition duration-150"
                    text="Linkedin"
                    textStyle="text-xs xl:text-lg"
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
