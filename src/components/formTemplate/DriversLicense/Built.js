import styles from "../../../pages/preview/Preview.module.css";

export default function Built({ value }) {
  return (
    <>
      {value === "Light" && <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 700, left: 392 }}
      >
        x
      </div>}

      {value === "Medium" && <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 718, left: 392 }}
      >
        x
      </div>}

      {value === "Heavy" && <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 735, left: 392 }}
      >
        x
      </div>}
    </>
  );
}
