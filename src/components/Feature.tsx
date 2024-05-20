interface FeatureProps {
  title: string;
  description: string;
  icon: JSX.Element;
}
export default function Feature({ title, description, icon }: FeatureProps) {
  return (
    <div className="py-8 flex flex-col gap-4 bg-[#252B42] border border-gray-200 rounded-lg p-4 md:gap-2">
      <div className="flex justify-center">{icon}</div>
      <div className="h-20 content-center">
        <h2 className="text-center  text-white text-xl font-extrabold mb-2">
          {title}
        </h2>
      </div>
      <p className="text-center text-lg font-normal text-gray-500 dark:text-gray-400 mb-4 tracking-wide">
        {description}
      </p>
    </div>
  );
}
