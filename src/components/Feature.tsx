interface FeatureProps {
  title: string;
  description: string;
  icon: JSX.Element;
}
export default function Feature({ title, description, icon }: FeatureProps) {
  return (
    <div className="flex flex-col gap-4 bg-[#252B42] border border-gray-200 rounded-lg md:p-2 md:gap-2">
      <div className="basis-1/2 flex justify-center">{icon}</div>
      <h2 className="basis-1/4 text-center text-white text-xl font-extrabold mb-2">
        {title}
      </h2>
      <p className="basis-1/4 text-center text-lg font-normal text-gray-500 dark:text-gray-400 mb-4 tracking-wide">
        {description}
      </p>
    </div>
  );
}
