export function BlogPost({
    title = "Title of the blog post",
    publishedon = "27-Jan-2025",
    category = "Dashboard",
    content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolor commodi, est quibusdam perferendis voluptatum neque eaque, aperiam dignissimos, expedita sint pariatur! Exercitationem earum, distinctio impedit quas commodi veniam? Odit."
}) {
    return (
        <>
            <div className="py-6 sm:py-8 px-2 sm:px-4 border-b-2 border-b-[#E0E0E0]">
                <div className="mx-2 sm:mx-8 mt-4 md:my-1">
                    <h5 className="font-semibold text-3xl">{title}</h5>
                    <p className="my-5">
                        <span className="mr-3">{publishedon}</span>|<span className="ml-3">{category}</span>
                    </p>
                    <p>{content}</p>
                </div>
            </div>
        </>
    );
};