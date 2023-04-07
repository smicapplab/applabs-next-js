import styles from "../../../pages/preview/Preview.module.css";

export default function RestrictionCode({ value }) {
  return (
    <>
      {value === "MotorcycleMotorized" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 385, left: 607 }}
        >
          x
        </div>
      )}

      {value === "VehiclesUp4500GVW" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 432, left: 607 }}
        >
          x
        </div>
      )}

      {value === "VehiclesAbove4500GVW" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 478, left: 607 }}
        >
          x
        </div>
      )}

      {value === "AutomaticClutchOnlyUp4500" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 524, left: 607 }}
        >
          x
        </div>
      )}

      {value === "AutomaticClutchOnlyAbove4500GVW" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 550, left: 607 }}
        >
          x
        </div>
      )}

      {value === "Articulated1600GVWAndBelow" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 572, left: 607 }}
        >
          x
        </div>
      )}

      {value === "Articulated1601Up4500GVW" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 594, left: 607 }}
        >
          x
        </div>
      )}

      {value === "Articulated4501GVWAndAbove" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 615, left: 607 }}
        >
          x
        </div>
      )}
    </>
  );
}
