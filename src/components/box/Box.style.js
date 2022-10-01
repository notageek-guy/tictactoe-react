import styled from "styled-components";
import { motion } from "framer-motion"
export const Button = styled(motion.div)
`
  background-color: white;
  border: none;
  border-radius: 10%;
  box-shadow: 0px 0px 8px #888;
  width: 5rem;
  height: 5rem;
  text-align: center;
  font-family: "Fredoka", sans-serif;
  line-height: 5rem;
  font-weight: bold;
  margin: 0.5rem;
  font-size:2.5rem;
  color: ${props=> props.value==="X" ? "red" : "blue"};
`;
