
export const IndustriesDeploymentSection = () => {
  const steps = [
    {
      step: "Step 1",
      title: "Operational discovery",
      desc: "Review the facility structure, departments, equipment logic and current workflows."
    },
    {
      step: "Step 2",
      title: "Workflow assessment",
      desc: "Understand how production, downtime, maintenance, and shift communication occurs."
    },
    {
      step: "Step 3",
      title: "Platform configuration",
      desc: "Configure the relevant operational structure, terminology, and metrics."
    },
    {
      step: "Step 4",
      title: "Focused pilot",
      desc: "Introduce the platform within a selected department or line to validate impact."
    },
    {
      step: "Step 5",
      title: "Review and improvement",
      desc: "Gather feedback, validate the configuration and refine the application."
    },
    {
      step: "Step 6",
      title: "Scaled deployment",
      desc: "Extend the approved configuration across additional departments or facilities."
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24  ">
      <div className="  bg-[#031231] w-full mx-auto py-20 px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

        {/* Left Content */}
        <div className="lg:col-span-5 flex flex-col">
          <span className="text-[#1656E8] text-[12px] font-bold tracking-[0.06em] uppercase mb-4 block">
            From discovery to deployment
          </span>
          <h2 className="text-[30px] md:text-[36px] leading-[38px] md:leading-[44px] font-extrabold text-white tracking-[-0.01em] mb-6">
            Begin with the operation
          </h2>
          <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-white/70 mb-6">
            Every AdunniTrak implementation begins with an understanding of the physical operation and the teams that run it.
          </p>
          <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-white/70">
            Implementation can begin with one department, one facility or across a broader industrial network.
          </p>
        </div>

        {/* Right Steps Grid */}
        <div className="lg:col-span-7 lg:pl-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-10">
          {steps.map((item, idx) => (
            <div key={idx} className="flex flex-col bg-[#192F5D] rounded-sm shadow-md p-4">
              <span className="text-[#1656E8] text-[12px] font-bold uppercase mb-2">
                {item.step}
              </span>
              <h4 className="text-[16px] font-bold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-[14px] leading-[22px] text-white/70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
