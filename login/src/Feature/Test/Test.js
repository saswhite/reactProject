import React,{useState,useEffect,useRef} from 'react'

/* style */
import "./Test.css"

export default function Test() {
    let inputRef = useRef([]);

    let pattern = /^\d+$/

    let [value,setValue] = useState("")

    let control = (e)=>{
        let v = e.target.value;
        if (v.length >= 4) {
            v = v.substring(0, 4);
        }

        if(!pattern.test(Number(v))){
            v=""
        }


        setValue(v)
    }


    let change = ()=>{
        inputRef.current[0].focus()
    }

    useEffect(() => {
        if(value.length === 4){
            console.log(value)
        }

    }, [value])
    

    return (
        <div>
            <div className="content">
                <div>请输入验证码</div>
                <div className="content-container">
                    <div className="content-container-section">{pattern.test(value[0])?value[0]:""}</div>
                    <div className="content-container-section">{pattern.test(value[1])?value[1]:""}</div>
                    <div className="content-container-section">{pattern.test(value[2])?value[2]:""}</div>
                    <div className="content-container-section">{pattern.test(value[3])?value[3]:""}</div>
                </div>
            </div>

            <div className="container">
                <input 
                className="input"
                autoFocus="autofocus"
                ref={(el) => { inputRef.current[0] = el; }}
                value={value}
                onChange={control}
                onBlur={change}
                />
                <div className="mask"></div>
            </div>
        </div>
    )
}
