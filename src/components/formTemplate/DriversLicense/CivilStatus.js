import styles from "../../../pages/preview/Preview.module.css";

export default function CivilStatus({ value }) {
  return (
    <>
      {value === "Single" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 700, left: 19 }}
        >
          {value === "Single" ? "x" : ""}
        </div>
      )}
      {value === "Married" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 718, left: 19 }}
        >
          x
        </div>
      )}
      {value === "Widower" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 735, left: 19 }}
        >
          x
        </div>
      )}
      {value === "Separated" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 755, left: 19 }}
        >
          x
        </div>
      )}
    </>
  );
}
