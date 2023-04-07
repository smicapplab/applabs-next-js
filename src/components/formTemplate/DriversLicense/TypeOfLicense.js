import styles from "../../../pages/preview/Preview.module.css";

export default function TypeOfLicense({ value }) {
  return (
    <>
      {value === "StudentPermit" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 549, left: 19 }}
        >
          x
        </div>
      )}
      {value === "NonProfessional" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 571, left: 19 }}
        >
          x
        </div>
      )}
      {value === "Professional" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 594, left: 19 }}
        >
          x
        </div>
      )}
      {value === "Conductor" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 615, left: 19 }}
        >
          x
        </div>
      )}
    </>
  );
}
