// import React from 'react'
// import { bg1 } from '../../assets'

// function HeroSection() {
//   return (
//     <div className='min-h-screen'>
//         <img src={bg1} alt=""/>
//         <h2>Welcome to E-mandi!!</h2>
//         <h5>A One Place Solution for Fresh Vegetables anf Fruits.</h5>
//     </div>
//   )
// }

// export default HeroSection
import { motion } from "framer-motion";

import { styles } from "../styles";
import { farmer } from "../../assets";

const Hero = () => {
  return (
    <section
    className='relative w-full h-screen mx-auto'
    >
      <div
      className={`${ styles.paddingX } absolute insert-0 top-[120px] max-w-7xl mx-auto flex dlex-row items-start gap-5`}>
        <div className="flex flex-col 
        justify-center items-center mt-5
        // ">
        {/* <div className="w-5 h-5 rounded-full bg-[#445D48]"/>
        <div className="w-1 sm:h-80 h-40"/> */}
        </div>

        <div>
        <h1 className={`${styles.heroHeadText} text-[#FDE5D4]`}>
            Welcome to <span className='text-[#445D48]'>E-Mandi</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#FDE5D4]`}>One Stop Solution for your fresh vegetables,fruits and grains directy from Framers.<br className="sm:block hidden"/>Get Everything Fresh</p>
        </div>
        <div>
          <img src={farmer} alt="" className=" w-[30rem] sm:h-96 h-28"/>
        </div>
      </div>
      <div
      className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"
      > 
      <a href="/allproducts">
      <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify center items-start p-2">
          <motion.dev
          animate={{
            y:[0,24,0]
          }}
          transition={{
            duration: 1.5,
            repeat : Infinity,
            repeatType: 'loop'
          }}
          className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
</div>
          </a>    
          </div> 
    </section>
  )
}

export default Hero