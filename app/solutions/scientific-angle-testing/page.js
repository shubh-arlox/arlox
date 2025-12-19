
import { motion, AnimatePresence } from 'framer-motion';
import AngleEvidence from "./evidence";
import Hero from "./hero";
import HiddenCost from "./hidden";
import AttentionTrap from "./proble";
import SolutionSection from "./solu";
import ExecutionMethod from './execution';
import HookVsAngle from './hook';
import ArloxUniqueness from './unique';
import TestingComparison from './compro';
import TheClose from './cta';
import FAQSection from './faq';



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
       <ArloxUniqueness/>
       <TestingComparison/>
       <FAQSection/>
        </>
      
    );
}
export default AngleTesting;