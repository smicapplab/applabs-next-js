import formDataContext from "@/store/formDataContext";
import Field from "./Field";
import { useContext, useEffect } from "react";

export default function Form({ form }) {
  const { name, fields } = form;
  const { formData, setFormData } = useContext(formDataContext);

  const valueChanged = (e) => {
    const newData = {
      ...formData,
      [e.target.name]: e.target.value,
    }
    setFormData(newData);
    localStorage.setItem("formData", JSON.stringify(newData));
  };

  useEffect(() => {
    const cachedData = JSON.parse(localStorage.getItem("formData"))
    if( cachedData ){
      setFormData(cachedData);  
    }
  }, []);

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          {name}
        </h3>
        <div className="grid sm:grid-cols-2">
          {fields.map((field, i) => (
            <div className="p-2" key={i}>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                {field.label}
              </label>
              <div className="relative rounded-md shadow-sm">
                <Field field={field} valueChanged={valueChanged} formData={formData}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
