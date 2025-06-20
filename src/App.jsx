import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeroSection from "./components/HeroSection";
import StorySection from "./components/StorySection";
import HowItWorksSection from "./components/HowItWorksSection";
import FormSection from "./components/FormSection";
import LaunchTimelineSection from "./components/LaunchTimelineSection";
import Footer from "./components/Footer";

// import AOS from "aos";
// import "aos/dist/aos.css";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

function App() {
  // useEffect(() => {
  //   AOS.init({ once: true, duration: 1000 });
  // }, []);
  return (
    <>
      <HeroSection />
      <StorySection />
      <HowItWorksSection />
      <FormSection />
      <LaunchTimelineSection />
      <Footer />
    </>
  );
}

export default App;
