import Courses from "./lib/component/utilityCom/Courses";
import MainNavbar from "./lib/component/utilityCom/MainNavbar";

 

export default function Home({children}) {
  
  

  return (
    <div> 
      <MainNavbar/>
      <Courses/>
    </div>
  );
}