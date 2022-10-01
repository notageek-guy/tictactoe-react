import styled from "styled-components";
import { motion } from "framer-motion"
export const ResetButton = styled(motion.button)`
border:none;
background-color:rgb(0,110,255);
color:white;
font-size:1.2rem;
padding:0.5rem 1rem;
margin:2rem auto;
display:block;
border-radius:0.5rem;
&:hover {
    background-color:rgb(0,80,255);
    transform:translateY(-5px);

}

`
