import React, { useState } from 'react';
import 'scss/button.scss';
import Modal from 'components/layout/Modal';
import ModalTest from 'components/mock/ModalTestMock';

const Help = () => {
    const [showModal, setShowModal] = useState(false);
    const handleClickHelpBtn = () => {
        setShowModal(true);
    };
    const handleClickTopBtn = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const closeModal = () => {
        console.log('closeModal');
        setShowModal(false);
    };

    return (
        <>
            <Modal
                title={'ModalTitleTest'}
                show={showModal}
                close={closeModal}
                children={<ModalTest />}
            />
            <div className="btn_bottom">
                <button className=" btn_gotoTop" onClick={handleClickTopBtn}>
                    <span>top</span>
                </button>
                <button className=" btn_help" onClick={handleClickHelpBtn}>
                    <span>help</span>
                </button>
            </div>
        </>
    );
};

export default Help;
