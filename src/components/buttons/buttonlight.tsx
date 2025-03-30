export function ButtonLight({ btntext = "Button Here" }) {
    return (
        <>
            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 hover:border-b-green-400 font-medium rounded-lg text-sm px-5 py-2.5">{btntext}</button>
        </>
    );
};