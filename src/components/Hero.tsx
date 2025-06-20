import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative bg-background h-screen">
      <div className="container mx-auto px-4 pt-32 flex max-lg:flex-col items-center justify-between gap-10">
        
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="font-poppins font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-tight text-hero capitalize">
            Stay connected with your neighborhood
          </h1>
          <p className="text-base text-gray-600 mt-4 max-w-lg mx-auto lg:mx-0">
            MicoHood helps you stay informed and support local businesses—all in one app.
          </p>
          <button className="bg-primary cursor-pointer text-white px-6 py-3 rounded-md mt-8 hover:bg-primary/90 transition">
            <a href="#join">Join Now</a>
          </button>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img
            src="/hero.png"
            alt="Neighborhood illustration"
            className="w-[300px] sm:w-[360px] md:w-[440px] lg:w-[500px] h-auto object-contain"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
