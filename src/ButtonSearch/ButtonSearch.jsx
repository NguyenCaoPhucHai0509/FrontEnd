import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import InputComponent from '../components/input/InputComponent'
import ButtonComponent from '../components/ButtonComponent/ButtonComponent'
const ButtonSearch = (props) => {
    const {size, placeholder,borderless, text, 
        backgroundColorinput = 'white',
        backgroundColorButon = 'white',
        colorButton = 'black'
    } = props
    return (
    <div style={{display:'Flex'}}>
        <InputComponent
         size={size}
         placeholder={placeholder}
         borderless={borderless}
         style ={{backgroundColor: {backgroundColorinput}}}
        />

        <ButtonComponent
         size={size}
         styleButton ={{ background: backgroundColorButon, border: !borderless && 'none'}}
         icon={<SearchOutlined color='{colorButton}' style={{ color: 'black' }} />}
         text={text}
         styleTextButton ={{color: colorButton}}
        />
    </div>
  )
}

export default ButtonSearch