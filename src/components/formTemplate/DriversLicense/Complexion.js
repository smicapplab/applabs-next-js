import styles from "../../../pages/preview/Preview.module.css";

export default function Complexion({ value }) {
  return (
    <>
      {value === "Light" && <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 700, left: 492 }}
      >
        x
      </div>}

      {value === "Fair" && <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 718, left: 492 }}
      >
        x
      </div>}

      {value === "Dark" && <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 735, left: 492 }}
      >
        x
      </div>}
    </>
  );
}
