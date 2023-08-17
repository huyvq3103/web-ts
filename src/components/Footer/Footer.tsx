import React from 'react'
import { Wrapper } from './StyleFooter'
import Container from '../Container'

const footerTex =[
  "Shop ABC",
  "Sản phẩm chất lượng cao",
  "Liên hệ :0354235481",
  "Địa chỉ :Cầu Giấy,Hà Nội"
]
const Footer = () => {
  return (
    <Wrapper>
     <Container>
      {footerTex.map((o,i)=>(
        <span className='footer-item' key={i}>{o}</span>
      ))}
     </Container>
    </Wrapper>
  )
}

export default Footer