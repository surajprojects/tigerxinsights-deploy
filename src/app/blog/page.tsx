import { BlogPost } from "@/components/cards/blogpost";

export default function Blog() {
    return (
        <>
            {/* Container 1 */}
            <div className="w-full px-4 sm:px-20 md:px-32 xl:px-60 2xl:px-96 py-10">
                {/* Container for title */}
                <div className="flex justify-between">
                    <h2 className="font-bold text-4xl">Blog</h2>
                    {/* <ButtonLight btntext="Create" /> */}
                </div>
                {/* Container for cards */}
                <div>
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                </div>
            </div>
        </>
    );
};