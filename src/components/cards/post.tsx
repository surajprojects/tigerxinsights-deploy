export function Post({
    title = "Title of the post",
    publishedOn = "14-Jan-2025",
    content = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum eaque similique necessitatibus voluptatum molestias sed, tenetur consequuntur ducimus? Enim officia numquam provident modi eius laudantium quae nulla temporibus odit officiis!"
}) {
    return (
        <>
            <div className="bg-white rounded-md w-96 p-6 box-content shadow-md hover:shadow-green-200 hover:cursor-pointer">
                <h4 className="font-semibold text-2xl">{title}</h4>
                <p className="my-3 text-gray-500 text-md">{publishedOn}</p>
                <p className="text-gray-800 text-md">{content}</p>
            </div>
        </>
    );
};