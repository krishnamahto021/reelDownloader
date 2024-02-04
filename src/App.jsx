import Form from "./Components/Form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    <ToastContainer/>
      <main className="bg-gradient-to-r from-purple-500 to-pink-500  flex flex-col items-center justify-center min-h-screen ">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-center ">
          Download your Favorite reel for free 😍
        </h1>
        <Form />
      </main>
    </>
  );
}

export default App;
