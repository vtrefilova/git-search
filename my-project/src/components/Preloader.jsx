import preloaderImg from '../images/preloader.svg';

export const Preloader = ({styles}) => {
    return(
        <div className={'flex justify-center fixed items-center inset-x-0 bottom-0 bg-white' + ' ' + styles}>
            <img src={preloaderImg}/>
        </div>
    );
}