import { useContext } from "react";
import styles from "./Preview.module.css";
import formDataContext from "@/store/formDataContext";
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";

export default function Preview() {
  const router = useRouter();
  const { id } = router.query;

  const DynamicHeader = dynamic(() => import(`../../components/formTemplate/${id}`), {
    ssr: false,
  })

  return (
    <div className="overflow-hidden shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Preview
        </h3>
        <DynamicHeader />
      </div>
    </div>
  );
}
