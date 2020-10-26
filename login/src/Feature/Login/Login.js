import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Login() {

    let history = useHistory();

    let [value, setValue] = useState('');

    function control(e) {

        let v = e.target.value;

        if (v.length >= 11) {
            // 截断
            v = v.substring(0, 11);
        }

        setValue(v);

        let pattern = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
        let flag = pattern.test(v);
        if (flag) {
            console.log('flag===>', flag)
            history.push('/vcode')
        }
    }

    return (
        <div>
            <div>请输入手机号码：</div>
            <input
                autoFocus="autofocus"
                value={value}
                onChange={control} />
        </div>
    );
}
