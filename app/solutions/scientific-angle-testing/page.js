
import { motion, AnimatePresence } from 'framer-motion';
import AngleEvidence from "./evidence";
import Hero from "./hero";
import HiddenCost from "./hidden";
import AttentionTrap from "./proble";
import SolutionSection from "./solu";
import ExecutionMethod from './execution';
import HookVsAngle from './hook';



const AngleTesting =()=> {
    return(
          <>
        <Hero/>
        <AttentionTrap/>
        <HiddenCost />
        <SolutionSection />
        <AngleEvidence/>
       <ExecutionMethod/>
       <HookVsAngle/>
        </>
      
    );
}
export default AngleTesting;