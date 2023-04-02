import styles from "./Preview.module.css";

export default function Preview() {
  return (
    <div className="overflow-hidden shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Preview
        </h3>
        <div className={styles.formDiv}>
            <img src={`${process.env.NEXT_PUBLIC_LOGIN_API}/forms/lto-license.png`} alt="preview" className="w-full h-full"/>
            <div className={`${styles.labels} `}>This is my div</div>
        </div>
      </div>
    </div>
  );
}
