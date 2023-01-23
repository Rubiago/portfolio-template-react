import { ChakraProvider } from "@chakra-ui/react"; 
import Header from "./components/Header/Header"; 
import LandingSection from "./components/LandingSection/LandingSection"; 
import ProjectsSection from "./components/ProjectsSection/ProjectsSection"; 
import ContactMeSection from "./components/ContactMeSection/ContactMeSection"; 
import Footer from "./components/Footer/Footer"; 
import { AlertProvider } from "./context/alertContext"; 
import Alert from "./components/Alert/Alert"; 

function App() { 
 return ( 
   <ChakraProvider> 
     <AlertProvider> 
       <main> 
         <Header /> 
         <LandingSection /> 
         <ProjectsSection /> 
         <ContactMeSection /> 
         <Footer /> 
         <Alert /> 
       </main> 
     </AlertProvider> 
   </ChakraProvider> 
 ); 
} 

export default App;