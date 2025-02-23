import Courses from "./lib/component/utilityCom/Courses";
import Hero from "./lib/component/utilityCom/Hero";
import MainNavbar from "./lib/component/utilityCom/MainNavbar";

 

export default function Home({children}) {
  

  return (
    <div> 
      <MainNavbar/>
      <Courses/>
    </div>
  );
}