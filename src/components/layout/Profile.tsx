import Button from "../shared/Button";
import BoxReveal from "../ui/box-reveal";

function Profile() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-[#1C1A5A] text-[#1C1A5A]">
        <div className="rounded-xl w-8/12 h-5/6 flex justify-center items-center">
          <div className="">
            <div className="flex flex-row gap-[2rem]">
              <img
                src="images\364621182_618854306980280_6133984518278106161_n (1).png"
                className="rounded-xl object-cover block max-h-[70%] max-w-[30%] shadow-[0px_0px_20px_5px_rgba(0,0,0,0.3)]"
              />
              <div className="bg-[#817FB2] w-full rounded-xl shadow-[0px_0px_20px_5px_rgba(0,0,0,0.3)] flex flex-row">
                <div className="max-w-[60%] p-[2rem]">
                  <BoxReveal boxColor="#575594" duration={0.5}>
                    <p className="text-[3rem] font-bold tracking-tighter ">
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
                <div className="bg-white min-w-[40%] rounded-r-xl shadow-[0px_0px_20px_5px_rgba(0,0,0,0.3)] p-[2rem] flex flex-col justify-between">
                  <p className="font-bold text-xl">Contact</p>
                  <section>
                    <div className="flex flex-row">
                      <img src="./images/phone-call.svg" className="h-5" />
                      <p className="text-xl md:font-bold sm:font-normal ">
                        +6691-185-8818
                      </p>
                    </div>
                    <div className="flex flex-row">
                      <img src="./images/envelope.svg" className="h-5" />
                      <a
                        href="mailto: preechak10123@gmail.com"
                        className="text-xl md:font-bold sm:font-normal"
                      >
                        preechak10123@gmail.com
                      </a>
                    </div>
                    <div className="flex flex-row">
                      <img src="./images/marker.svg" className="h-5" />
                      <p className="text-xl md:font-bold sm:font-normal">
                        Samut Prakan Bangkok
                      </p>
                    </div>
                  </section>
                  <div className="flex flex-col gap-1.5">
                    <Button
                      url="./images/envelope-open-text.svg"
                      style="bg-[#4843FF]"
                      img="max-h-6 bg-white left-4 p-1"
                      text="Resume"
                    />
                    <Button
                      url="./images/github.svg"
                      img="max-h-8 left-3"
                      style="bg-black"
                      text="Github"
                    />
                    <Button
                      url="./images/linkedin.svg"
                      img="bg-white max-h-6 p-1 left-4"
                      style="bg-[#439cff]"
                      text="Linkedin"
                    />
                  </div>
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
