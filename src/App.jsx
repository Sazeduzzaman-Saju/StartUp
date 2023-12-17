import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

const App = () => {
  return (
    <div className="max-w-full">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
