import "@/styles/globals.css";
import formDataContext from "@/store/formDataContext";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [formData, setFormData] = useState({});

  return (
    <formDataContext.Provider value={{ formData, setFormData }}>
      <Component {...pageProps} />
    </formDataContext.Provider>
  );
}
