export function Works({
    imgsrc = "lady_bug.jpg",
    imgname = "image here",
    title = "Title of the project work",
    year = "2025",
    category = "Dashboard",
    content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In illo nostrum minus voluptatem mollitia, itaque qui vitae provident harum minima blanditiis exercitationem nulla. Doloribus blanditiis maxime natus fuga sit nesciunt!"
}) {
    return (
        <>
            <div className="py-6 sm:py-8 px-2 sm:px-4 border-b-2 border-b-[#E0E0E0] flex flex-col lg:flex-row items-center">
                <div className="px-2 sm:px-8 lg:px-0 w-72">
                    <img src={imgsrc} alt={imgname} className="aspect-square object-cover rounded-lg" />
                </div>
                <div className="mx-2 sm:mx-8 mt-4 md:my-1 hover:cursor-pointer overflow-clip">
                    <h5 className="font-semibold text-3xl">{title}</h5>
                    <p className="my-5">
                        <span className="rounded-2xl bg-blue-950 text-white py-1 px-3 mr-5 font-semibold">
                            {year}
                        </span>
                        {category}
                    </p>
                    <p>{content}</p>
                </div>
            </div>
        </>
    );
};

