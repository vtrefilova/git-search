import { useState } from "react";
import arrowImg from "../images/arrow.svg";

export const Dropdown = ({items, defaultValue, handleSelect}) => {
    const [isShown, setShown] = useState(false);
    const [selected, setSelected] = useState(defaultValue);

    const handleItemClick = (e) => {
        setSelected(e.target.id);
        handleSelect(items.indexOf(e.target.id) + 1);
        setShown(false);
    }

    const toggleButtonClick = () => {
        setShown(prev => !prev);
    }

    console.log(items);

    return(
        <div
            className="relative"
        >
            <button
                className='flex items-center justify-between w-[121px] p-2 gap-2 hover:text-[#3d8bfd]'
                onClick={toggleButtonClick}
                style={isShown ? {borderTop: 'solid #9ec5fe', borderRight: 'solid #9ec5fe', borderLeft: 'solid #9ec5fe', borderTopRightRadius: '6px', borderTopLeftRadius: '6px'} : null}
            >
                {selected}
                <img
                    className="transform transition duration-500 w-4"
                    src={arrowImg}
                    style={{transform: isShown ? 'rotate(180deg)' : null}}
                    alt='arrow'
                />
            </button>
            {isShown && 
                <menu
                    className="absolute bg-white w-full font-medium"
                    style={isShown ? {border: 'solid #9ec5fe', borderBottomRadius: '4px', borderBottomRightRadius: '6px', borderBottomLeftRadius: '6px'} : null}
                >
                    {items.map(item =>
                        <li
                            key={item}
                            className="py-2 hover:bg-[#E8F0FF] hover:text-[#3d8bfd] cursor-pointer"
                            onClick={handleItemClick}
                            id={item}
                        >
                            {item}
                        </li>)
                    }
                </menu>
            }
        </div>
    );
}