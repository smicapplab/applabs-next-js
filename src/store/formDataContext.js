import { createContext } from "react";

const formDataContext = createContext({
    formData: {},
    setFormData: () => {}
});

export default formDataContext;