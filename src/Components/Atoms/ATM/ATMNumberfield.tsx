// type Props = {
//     value: string | number; // Allow value to be either string or number
//     name: string;
//     label: string;
//     onChange: (event: any) => void;
//     placeholder: string;
//     className?: string;
// };

// const ATMNumberfield = ({ name, value, onChange, label, placeholder, className }: Props) => {
//     return (
//         <div className="flex flex-col gap-1">
//             <label htmlFor={name}>{label}</label>
//             <input
//                 id={name}
//                 name={name}
//                 type={"number"} // Changed type to number
//                 onChange={onChange}
//                 placeholder={placeholder}
//                 value={value}
//                 className={`border border-gray-400 rounded h-[28px] p-1 w-full outline-sky-500 ${className || ''}`}
//             />
//         </div>
//     );
// };

// export default ATMNumberfield;

type Props = {
    value: string | number; // Allow value to be either string or number
    name: string;
    label: string;
    onChange: (event: any) => void;
    onBlur?: (event: any) => void; // Optional onBlur prop
    placeholder: string;
    className?: string;
    size?: 'small' | 'medium' | 'large'; // Add size prop
    color?: 'primary' | 'secondary'; // Add color prop
    errorMessage?: string; // Error message for validation
    touched?: boolean; // Track if the field has been touched
};

const ATMNumberField = ({
    name,
    value,
    onChange,
    onBlur,
    label,
    placeholder,
    className = '',
    size = 'medium',
    color = 'primary',
    errorMessage = '',
    touched = false,
}: Props) => {
    // Handle different sizes for the input
    const getSizeClass = () => {
        switch (size) {
            case 'small':
                return 'h-[28px] p-1';
            case 'large':
                return 'h-[40px] p-2';
            default:
                return 'h-[32px] p-1.5'; // medium is the default size
        }
    };

    // Handle different colors for the input
    const getColorClass = () => {
        switch (color) {
            case 'secondary':
                return 'border-gray-500 focus:border-gray-700';
            default:
                return 'border-sky-500 focus:border-sky-700'; // primary is the default color
        }
    };

    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={name} className="font-semibold">
                {label}
            </label>
            <input
                id={name}
                name={name}
                type="number"
                onChange={onChange}
                onBlur={onBlur} // Attach onBlur event
                placeholder={placeholder}
                value={value}
                className={`border rounded ${getSizeClass()} ${getColorClass()} w-full outline-none ${className}`}
            />
            {/* Show error message if the field has been touched and there's an error */}
            {touched && errorMessage && (
                <p className="text-red-500 text-sm">{errorMessage}</p>
            )}
        </div>
    );
};

export default ATMNumberField;

