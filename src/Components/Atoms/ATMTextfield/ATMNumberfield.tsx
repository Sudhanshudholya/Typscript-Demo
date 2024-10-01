type Props = {
    value: string | number; // Allow value to be either string or number
    name: string;
    label: string;
    onChange: (event: any) => void;
    placeholder: string;
    className?: string;
};

const ATMNumberfield = ({ name, value, onChange, label, placeholder, className }: Props) => {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                name={name}
                type={"number"} // Changed type to number
                onChange={onChange}
                placeholder={placeholder}
                value={value}
                className={`border border-gray-400 rounded h-[28px] p-1 w-full outline-sky-500 ${className || ''}`}
            />
        </div>
    );
};

export default ATMNumberfield;
