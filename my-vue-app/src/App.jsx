import React from "react";
import Home from "./home";
import UploadForm from "./components/UpLoadForm";
function App() {
  return (
    <>
      <div>
        <h2 className="text-white p-4 bg-red-400 text-center mt-2">
          Api Integeration
        </h2>
        <Home />
        <UploadForm />
      </div>
    </>
  );
}

export default App;
