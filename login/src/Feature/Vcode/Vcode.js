import React, { useRef, useEffect, useState } from 'react';
import _ from 'lodash';

/* style */
import './Vcode.css'

export default function Vcode() {
    let pattern = /^\d+$/
    let isKey = false;
    let inputRef = useRef([]);
    let [value, setValue] = useState([])

    /* 给value重新赋值 */
    let set = (v,index)=>{
        let valueClone =  _.cloneDeep(value)
        valueClone[index] = v 
        setValue(valueClone)
    }

    /* 裁剪value指定位置的值 */
    let splice = (index) => {
        let valueClone =  _.cloneDeep(value)
        valueClone.splice(index,1)
        setValue(valueClone)
    }


    /* onkeydown事件根据index和按的值来判断 */
    let change = (e,index)=>{
        isKey = true
        if(index === 0 ){
            if(inputRef.current[index].value.length === 0 ){
                if(e.keyCode >= 48 && e.keyCode <=57){
                    set(e.code.toString().replace('Digit',""),0)
                    e.preventDefault()
                    inputRef.current[index + 1].focus()
                }
            }
        }else if (index === (inputRef.current.length - 1)){
            if(inputRef.current[index].value.length === 1){
                if(e.keyCode === 8){
                    splice(inputRef.current.length - 1)
                    e.preventDefault()
                    inputRef.current[index - 1].focus()
                }
            }
        }else if (index > 0 &&  index < inputRef.current.length){
            if(inputRef.current[index].value.length === 0){
                if(e.keyCode >= 48 && e.keyCode <=57){
                    set(e.code.toString().replace('Digit',""),index)
                    e.preventDefault()
                    inputRef.current[index + 1].focus()
                }else if(e.keyCode === 8) {
                    splice(index - 1)
                    e.preventDefault()
                    inputRef.current[index - 1].focus()
                }
            }
        }
    }

    let blur = (index)=>{
        if(!isKey){
            inputRef.current[index].focus()
        }
    }

    /* 给change事件绑定并动态的裁剪和赋值 */
    let control=(e, index)=> {
        let v = e.target.value;
        if (v.length >= 1) {
            v = v.substring(0, 1);
        }
        set(v,index)
    }


    /* 监测value的变化 */
    useEffect(() => {
        /* 输出value */
        if(value.length === inputRef.current.length){
            console.log(value.join(","))
        }
    }, [value])

    return (
        <div>
            <div>请输入验证码</div>
            <div className="input-container">
                <input
                    className="input-vcode"
                    value={pattern.test(value[0])?value[0]:""}/* 正则判断，只显示数字 */
                    onChange={(e) => { control(e, 0) }}/* 绑定change事件 */
                    ref={(el) => { inputRef.current[0] = el; }}/* 使用引用 */
                    onKeyDown={(e)=>{change(e,0)}}
                    autoFocus="autoFocus"
                    onBlur={()=>{blur(0)}}></input>
                <input 
                    className="input-vcode"
                    value={pattern.test(value[1])?value[1]:""}
                    onChange={(e) => { control(e, 1) }}
                    ref={(el) => { inputRef.current[1] = el }}
                    onKeyDown={(e)=>{change(e,1)}}
                    onBlur={()=>{blur(1)}}></input>
                <input
                    className="input-vcode"
                    value={pattern.test(value[2])?value[2]:""}
                    onChange={(e) => { control(e, 2) }}
                    ref={(el) => { inputRef.current[2] = el }}
                    onKeyDown={(e)=>{change(e,2)}}
                    onBlur={()=>{blur(2)}}></input>
                <input
                    className="input-vcode"
                    value={pattern.test(value[3])?value[3]:""}
                    onChange={(e) => { control(e, 3) }}
                    ref={(el) => { inputRef.current[3] = el }}
                    onKeyDown={(e)=>{change(e,3)}}
                    onBlur={()=>{blur(3)}}></input>
            </div>
        </div >
    );
}
