import React from "react"; 
import {Box, Flex} from "@chakra-ui/react"; 
import MonthandYear from "./MonthandYear";
import logo from "../logo.png"; 
 
const Footer = () => { 
  const currentYear = new Date().getFullYear();
 return ( 
   <Box backgroundColor="#18181b"> 
     <footer> 
       <Flex 
         margin="0 auto" 
         px={12} 
         color="white" 
         justifyContent="center" 
         alignItems="center" 
         maxWidth="1024px" 
         height={16} 
       > 
        <div style={{ 
          display: "flex",
          gap: '1rem',
          }}>
          <img src={logo} alt="logo" width={30} />
          <MonthandYear />
        </div>
       </Flex> 
     </footer> 
   </Box> 
 ); 
}; 
 
export default Footer; 
