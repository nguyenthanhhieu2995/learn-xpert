export default function FeaturesCenter({ text1, text2, svg }: { text1: string, text2: string, svg: JSX.Element }) {

    return (
        <div className="flex flex-col gap-4 bg-gray-800 border border-gray-200 rounded-lg p-4 md:p-8">
            <div className="basis-1/2 flex justify-center">
                {svg}
            </div>
            <h2 className="basis-1/4 text-center text-white text-xl font-extrabold mb-2">{text1}</h2>
            <p className="basis-1/4 text-center text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">{text2}</p>
        </div>
    )
}