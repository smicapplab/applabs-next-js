import styles from "../../../pages/preview/Preview.module.css";

export default function EducationalAttainment({ value }) {
  return (
    <>
      {value === "InformalSchooling" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 549, left: 330 }}
        >
          x
        </div>
      )}
      {value === "Elementary" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 594, left: 330 }}
        >
          x
        </div>
      )}
      {value === "HighSchool" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 615, left: 330 }}
        >
          x
        </div>
      )}
      {value === "Vocational" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 549, left: 457 }}
        >
          x
        </div>
      )}
      {value === "College" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 572, left: 457 }}
        >
          x
        </div>
      )}
      {value === "PostGraduate" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 594, left: 457 }}
        >
          x
        </div>
      )}
    </>
  );
}
