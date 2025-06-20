const JoinForm = () => {
  return (
    <section id="join" className="relative py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-[28px] sm:text-[32px] font-poppins font-semibold text-header">
            Join the MicoHood Community Today
          </h1>
          <p className="text-gray-600 mt-4 text-base max-w-md mx-auto lg:mx-0">
            Be part of a community that stays informed, supports local businesses, and thrives together.
          </p>
        </div>

        <form className="w-full lg:w-1/2 flex flex-col gap-4 p-6 rounded-xl">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-md text-base cursor-pointer font-medium hover:bg-primary transition"
          >
            Get Started
          </button>
        </form>
      </div>
    </section>
  );
};

export default JoinForm;
