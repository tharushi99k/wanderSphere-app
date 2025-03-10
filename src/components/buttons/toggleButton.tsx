"use client"
import React, { useState } from 'react';
import { motion } from "framer-motion";

function ToggleButton({isLogin, setIsLogin}: any) {
    
    console.log(isLogin)
    return (
        <div className="flex items-center justify-center w-full">
      <div 
        onClick={() => setIsLogin(!isLogin)} 
        className={`flex w-3/4 cursor-pointer rounded-2xl ${isLogin ? "justify-end bg-[#E7F5FF]" : "justify-start bg-[#E7F5FF]"} p-1`}
      >
        <motion.div 
          className="py-2 w-2/4 rounded-2xl bg-white" 
          layout 
          transition={{ type: "spring", stiffness: 700, damping: 40 }}
        >
          <div className="flex items-center justify-center w-full">
            <h3 className="text-black text-xl font-medium">
              {isLogin ? 'Signup' : 'Login'}
            </h3>
          </div>
        </motion.div>
      </div>
    </div>
    );
}

export default ToggleButton;
