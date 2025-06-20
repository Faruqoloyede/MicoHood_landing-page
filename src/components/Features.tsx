import { features } from "../constants"


const Features = () => {
  return (
    <section id='feature' className='relative sm:py-12 py-6 bg-gray'>
        <div className="container">
            <h2 className="text-[40px] leading-[140%] text-center">Features</h2>
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-10 mt-10">
                {features.map(({id, icon, title, content})=>(
                    <div key={id} className="bg-gray border-[1px] border-primary flex flex-col items-center justify-center p-6 rounded-[16px]">
                        <div className=" bg-background h-[72px] w-[72px] flex items-center justify-center rounded-md mb-4">
                            <span className="text-[48px] text-primary">{icon}</span>
                        </div>
                        <h3 className="text-[20px] leading-[140%] text-center mb-2">{title}</h3>
                        <p className="text-[16px] leading-[140%] text-center text-gray-600 px-4">{content}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Features