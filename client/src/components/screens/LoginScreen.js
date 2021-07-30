import React, {useEffect, createRef} from 'react';
import ReactDOM from 'react-dom';

const LoginScreen = () => {

    const modalRef = createRef();

    const handleClass = () => {
        console.log(modalRef.style);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleClass);

        return () => {
            window.removeEventListener('scroll', handleClass)
        }

    }, []);

        

    return ReactDOM.createPortal(
        <div ref={modalRef} className='ui dimmer modals visible active modal__dimmer'>
            <div className='ui standard modal visible active modal__active'>
                Are you sure you want to delete it?
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default LoginScreen;