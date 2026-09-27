
export const SolutionsDisconnectSection = () => {
  const disconnects = [
    { num: "01", text: "Disconnected information" },
    { num: "02", text: "Slow downtime response" },
    { num: "03", text: "Reactive maintenance" },
    { num: "04", text: "Repeated failures" },
    { num: "05", text: "Weak shift continuity" },
    { num: "06", text: "Poor inventory visibility" },
    { num: "07", text: "Knowledge dependency" },
    { num: "08", text: "Limited accountability" }
  ];

  return (
    <section className="w-full py-24 bg-white relative">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start">

        {/* Left Content */}
        <div className="flex flex-col max-w-xl">
          <span className="t-overline text-action-primary mb-4 block">The operational disconnect</span>
          <h2 className="t-h2 text-text-main mb-6">
            When information is scattered, operational response suffers
          </h2>
          <p className="t-body-lg text-text-muted mb-4">
            Critical plant information is often spread across paper logs, whiteboards, disjointed apps and fragmented communications.
          </p>
          <p className="t-body-lg text-text-muted">
            AdunniTrak creates a connected operational record that brings these pieces together.
          </p>
        </div>

        {/* Right Content - Grid of 8 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
          {disconnects.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-1 bg-[#ECEDEE] p-4 shadow-elev-1 rounded-lg">
              <span className="t-caption text-[#525A72] font-bold">{item.num}</span>
              <span className="t-h6 text-text-main">{item.text}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
