"use client";
import React from "react";
import { motion } from "framer-motion"
import { portals } from "../../../../../utils/motion";

function Portals() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-6 sm:px-12">
      <motion.div {...portals(0.1)}>
      <div
        id="/"
        data-w-id="/"
        className="service first" >
        <div className="government border  h-[400px] md:h-[480px] p-8 rounded-lg w-full">
          <h2 className="portal-text text-[2rem] text-white font-semibold mb-2">
            Government Portal
          </h2>
          <p className="text-base  text-white">
            Streamlined processes for regulatory compliance
          </p>
        </div>
      </div>
      </motion.div>

      <motion.div {...portals(0.1)}>
      <div
        id="/"
        data-w-id="/"
        className="service first" >
        <div className="legal border  h-[400px] md:h-[480px] p-8 rounded-lg">
          <h2 className="portal-text text-[2rem] text-white font-semibold mb-2">
          Legal Portal
          </h2>

          <p className="text-base  text-white">
          Integrated legal resources for secure transactions
          </p>
        </div>
      </div>
      </motion.div>
      
     

      <motion.div {...portals(0.1)}>
      <div
        id="/"
        data-w-id="/"
        className="service first" >
        <div className="agent border  h-[400px] md:h-[480px] p-8 rounded-lg">
          <h2 className="portal-text text-[2rem] text-white font-semibold mb-2">
          Real Estate Agent Portal
          </h2>

          <p className="text-base  text-white">
          Tools for agents to enhance client services
          </p>
        </div>
      </div>
      </motion.div>
      

      <motion.div {...portals(0.1)}>
      <div
        id="/"
        data-w-id="/"
        className="service first" >
        <div className="bank border  h-[400px] md:h-[480px] p-8 rounded-lg">
          <h2 className="portal-text text-[2rem] text-white font-semibold mb-2">
          Bank Portal
          </h2>

          <p className="text-base  text-white">
          Efficient banking solutions for financing needs
          </p>
        </div>
      </div>
      </motion.div>
      
    </div>
  
  );
}

export default Portals;
