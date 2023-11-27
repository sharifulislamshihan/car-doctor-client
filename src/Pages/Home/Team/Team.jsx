import TeamPic from "./TeamPic";

const Team = () => {
    return (
        <div className=" text-center my-16">
            <div className="space-y-5">
                <h3 className="text-[#FF3811] text-xl font-bold">Team</h3>
                <h2 className="text-[#151515] text-5xl font-bold">Meet Our Team</h2>
                <h3 className="text-[#737373] text-base font-normal">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </h3>
            </div>

            <div className="mx-5 md:mx-16 my-16">
                <TeamPic></TeamPic>
            </div>

        </div>
    );
};

export default Team;