import styles from "../../../pages/preview/Preview.module.css";

export default function TypeOfApplication({ value }) {
  return (
    <>
      {value === "New" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 386, left: 12, maxWidth: 560 }}
        >
          x
        </div>
      )}
      {value === "DelinquentDormantLicense" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 408, left: 12, maxWidth: 560 }}
        >
          x
        </div>
      )}
      {value === "ForeignLicenseConversion" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 388, left: 179 }}
        >
          x
        </div>
      )}
      {value === "Renewal" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 410, left: 179 }}
        >
          x
        </div>
      )}
      {value === "AdditionalRestrictionCode" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 430, left: 179 }}
        >
          x
        </div>
      )}
      {value === "Duplicate" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 453, left: 179 }}
        >
          x
        </div>
      )}
      {value === "RevisionOfRecords" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 477, left: 179 }}
        >
          x
        </div>
      )}
      {value === "ChangeAddress" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 501, left: 212 }}
        >
          x
        </div>
      )}

      {value === "ChangeCivilStatus" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 388, left: 413 }}
        >
          x
        </div>
      )}
      {value === "ChangeName" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 410, left: 413 }}
        >
          x
        </div>
      )}
      {value === "ChangeDateOfBirth" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 430, left: 413 }}
        >
          x
        </div>
      )}
      {value === "Others" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 453, left: 413 }}
        >
          x
        </div>
      )}

      {value === "ProfToNonProf" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 478, left: 35 }}
        >
          x
        </div>
      )}
      {value === "NonProfToProf" && (
        <div
          className={`${styles.labels} `}
          style={{ position: "absolute", top: 501, left: 35 }}
        >
          x
        </div>
      )}
    </>
  );
}
