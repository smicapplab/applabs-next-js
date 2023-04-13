import { forms } from "@/data/form";
import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();

  const openForm = (form) => {
    router.push(`/create?id=${form}`);
  }

  return (
    <div className="sm:p-6 lg:10 p-2 ">
      <div className="w-full bg-white shadow sm:rounded-lg mb-2">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Recently Used Forms
          </h3>
          <div className="grid gap-4 lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-6 grid-cols-6 pt-5">
            {forms.map((form, i) => (
              <div key={i} className="w-full cursor-pointer" onClick={(e)=>{ e.preventDefault(); openForm(i)}}>
                <img src={form.image} alt={form.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Available Forms
          </h3>
          <div className="grid gap-4 lg:grid-cols-12 md:grid-cols-8 sm:grid-cols -6 grid-cols-6 pt-5">
            {forms.map((form, i) => (
              <div key={i} className="w-full cursor-pointer" onClick={()=>openForm(i)}>
                <img src={form.image} alt={form.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
