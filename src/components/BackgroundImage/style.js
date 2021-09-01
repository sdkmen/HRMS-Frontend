import styled from 'styled-components'
import GrayLine from '../../assets/4.jpg'

export const BackgroundImage = styled.div`
overflow-x: hidden;
height: 100%;
min-height: 94.5vh;
width: 100%;
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
background-attachment: fixed;
background-image: url(${ GrayLine });
`