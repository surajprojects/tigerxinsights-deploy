import { Works } from "@/components/cards/work";

export default function Work() {
    return (
        <>
            {/* Container 1 */}
            <div className="w-full px-4 sm:px-20 md:px-32 xl:px-60 2xl:px-72 py-10">
                {/* Container for title */}
                <div className="flex justify-between">
                    <h2 className="font-bold text-4xl">Work</h2>
                    {/* <ButtonLight btntext="Create" /> */}
                </div>
                {/* Container for cards */}
                <div>
                    <Works />
                    <Works />
                    <Works />
                </div>
            </div>
        </>
    );
};