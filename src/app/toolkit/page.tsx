import { Tool } from "@/components/cards/toolkit";

interface toolkitType {
    toolkitData: {
        id: number,
        title: string,
        description: string,
        snippet: string,
        link: string,
        category: {
            id: number,
            name: string
        }
    }[];
};

export default async function Toolkit() {
    const response = await fetch("http://localhost:3000/api/toolkit", { cache: "no-store" });
    const data: toolkitType = await response.json();
    return (
        <>
            {/* Container 1 */}
            <div className="w-full px-4 sm:px-12 md:px-28 xl:px-56 2xl:px-52 py-10">
                {/* Container for title */}
                <div className="mx-0 md:mx-16 flex justify-between">
                    <h2 className="font-bold text-4xl">Toolkit</h2>
                    {/* <ButtonLight btntext="Create" /> */}
                </div>
                {/* Container for cards */}
                <div className="px-0 2xl:px-16 my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
                    {data.toolkitData.map((tool) => {
                        if (tool.category.name === "snippet") {
                            return <Tool
                                key={tool.id}
                                title={tool.title}
                                description={tool.description}
                                isLink={false}
                                category={tool.category.name}
                                snippet={tool.snippet}
                            />
                        }
                        else {
                            return <Tool
                                key={tool.id}
                                title={tool.title}
                                description={tool.description}
                                category={tool.category.name}
                                link={tool.link}
                            />
                        }
                    })}
                </div>
            </div>
        </>
    );
};