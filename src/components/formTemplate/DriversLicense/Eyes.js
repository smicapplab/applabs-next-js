import styles from "../../../pages/preview/Preview.module.css";

export default function Eyes({ value }) {
  return (
    <>
      {value === "Black" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 700, left: 275 }}
        >
          x
        </div>
      )}

      {value === "Brown" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 718, left: 275 }}
        >
          x
        </div>
      )}

      {value === "Gray" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 735, left: 275 }}
        >
          x
        </div>
      )}

      {value === "Others" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 755, left: 275 }}
        >
          x
        </div>
      )}
    </>
  );
}
