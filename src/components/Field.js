export default function Field({ field, valueChanged, formData }) {
  const { name, label, type, options } = field;
  return (
    <>
      {type === "text" && (
        <input
          type={type}
          name={name}
          onChange={valueChanged}
          className={`${
            !formData[name] && "border-red-300 border-2"
          } block w-full p-4 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400`}
          value={formData[name]}
        />
      )}
      {type === "date" && (
        <input
          type={type}
          name={name}
          onChange={valueChanged}
          value={formData[name]}
          className={`${
            !formData[name] && "border-red-300 border-2"
          } block w-full p-4 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400`}
        />
      )}
      {type === "select" && (
        <select
          name={name}
          onChange={valueChanged}
          value={formData[name]}
          className={`${!formData[name] && "border-red-300 border-2"} block w-full p-4 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400`}>
          <option value="" disabled>
            Please Select
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </>
  );
}
