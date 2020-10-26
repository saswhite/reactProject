import React,{ useState } from 'react';

import { useSelector,useDispatch } from 'react-redux';

import { Modal } from 'antd';

/* action */
import { hideModal,hideExModal } from '../../Redux/Action/ModalTimeout';

export default function ModalTimeout () {

    let dispatch = useDispatch();

    let [ confirmLoading,setConfirmLoading ] = useState(false);

    let visible = useSelector(state => state.modalTimeout.isShow);

    let handleOk = () => {
        setConfirmLoading(true);
        setTimeout( () => {
            setConfirmLoading(false);
            dispatch(hideExModal());
        }, 2000);
    };

    let handleCancel = () => {
        dispatch(hideModal());
    };

    return (
        <div>
            <Modal
                title="兑换商品"
                visible={ visible }
                onOk={ handleOk }
                confirmLoading={ confirmLoading }
                onCancel={ handleCancel }
            >
                <p>你确定要兑换这个商品吗？</p>
            </Modal>
        </div>
    );
}

