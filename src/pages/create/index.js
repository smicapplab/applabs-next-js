import Form from "@/components/Form";
import { forms } from "@/data/form";
import { useRouter } from "next/router";
import { useState } from "react";
import Preview from "../preview";

export default function Profile() {
  const router = useRouter();
  const [tab, setTab] = useState(0);
  const { id } = router.query;
  const form = forms[id];

  return (
    <div className="flex flex-col justify-center bg-white w-full p-5 items-center">
      <div className="justify-center w-full max-w-5xl ">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 w-full">
          <li className="mr-2">
            <a
              onClick={() => setTab(0)}
              className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
            >
              Form Builder
            </a>
          </li>
          <li className="mr-2">
            <a
              onClick={() => setTab(1)}
              className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            >
              Preview
            </a>
          </li>
        </ul>

        {form && tab === 0 && <Form form={form} />}
        {tab === 1 && <Preview />}
      </div>
    </div>
  );
}
