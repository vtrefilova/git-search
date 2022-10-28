export const CustomButton = ({children, onClick, type, disabled}) => {
    return(
        <button 
            onClick={onClick}
            type={type}
            disabled={disabled}
            className=" tracking-wide bg-[#3d8bfd] rounded-lg px-4 py-1.5 text-white font-semibold 
            text-xl font-inter hover:opacity-90 transform transition duration-500 active:scale-90 disabled:bg-[#E2E6EA] disabled:text-[#343A40]"
        >
            {children}
        </button>
    );
}