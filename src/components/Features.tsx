import Feature from "./Feature";
const FEATURES = [
  {
    title: "Learn More Skills",
    description: "The gradual accumulation of information about atomic.",
    icon: (
      <svg
        className="w-[68px] h-[68px] text-white "
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207"
        />
      </svg>
    ),
  },
  {
    title: "Choose Courses",
    description: "The gradual accumulation of information about atomic.",
    icon: (
      <svg
        className="w-[68px] h-[68px]  text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
      </svg>
    ),
  },
  {
    title: "Learn at your own pace",
    description: "The gradual accumulation of information about atomic.",
    icon: (
      <svg
        className="w-[68px] h-[68px]  text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
  },
];
export default function Features() {
  return (
    <div className="grid md:grid-cols-3 gap-8 md:my-32 max-w-screen-xl items-center justify-between mx-auto p-4">
      {FEATURES.map((feature, idx) => (
        <Feature
          key={idx}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
        />
      ))}
    </div>
  );
}
