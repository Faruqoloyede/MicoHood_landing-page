import Features from "./components/Features"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import JoinForm from "./components/JoinForm"

const App = () => {
  return ( 
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <JoinForm/>
      <Footer />
    </div>
  )
}

export default App