
export default function Heading({ title, subtitle }) {
    return(
        <div className="mb-10">
            <h1 className="text-2xl font-semibold mb-2">{title}</h1>
            {subtitle  && (
                <p className="text-gray-600 max-w-2xl">{subtitle}</p>
            )}
        </div>
    );
}