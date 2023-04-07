import { useRouter } from "next/router";
import { useRef, useState } from "react";

export default function Login() {
  const [hasError, setHasError] = useState(false);
  const refUsername = useRef(null);
  const refPassword = useRef(null);
  const router = useRouter();

  const validatePassCode = async () => {
    const rawResponse = await fetch(process.env.NEXT_PUBLIC_LOGIN_API, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: refUsername.current.value,
        password: refPassword.current.value,
      }),
    });
    const content = await rawResponse.json();
    if (content.success) {
      router.push("/forms");
    } else {
      setHasError(true);
    }
  };

  return (
    <div className="flex items-center flex-col justify-center h-screen bg-white">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          {hasError && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Oooooooopsie!</strong>
              <span className="block sm:inline">
                Incorrect username or password
              </span>
              <span
                className="absolute top-0 bottom-0 right-0 px-4 py-3"
                onClick={() => setHasError(false)}
              >
                <svg
                  className="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          )}

          <div className="rounded-md shadow-sm">
            <div>
              <input
                ref={refUsername}
                className="mb-2 rounded-xl w-full p-4 border-gray-800 border-2 focus:outline-none focus:ring-1 focus:border-transparent placeholder-gray-400"
                placeholder="Enter your username"
                type="text"
                name="spouseName"
              />
            </div>
            <div>
              <input
                ref={refPassword}
                className="mb-2 rounded-xl w-full p-4 border-gray-800 border-2 focus:outline-none focus:ring-1 focus:border-transparent placeholder-gray-400"
                placeholder="Enter your password"
                type="password"
                name="spouseName"
              />
            </div>
            <div>
              <button
                onClick={validatePassCode}
                className="group relative p-4 flex w-full justify-center rounded-xl bg-indigo-600 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-16"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                Sign in
              </button>
            </div>
            <div  className="p-4 bg-slate-200">
              <h4>Test Account</h4>
              <p>User: applicant</p>
              <p>Password: qu1ck3rf0rms!!!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
