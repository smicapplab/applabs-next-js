import { useContext } from "react";
import styles from "../../pages/preview/Preview.module.css";
import formDataContext from "@/store/formDataContext";

export default function Form0() {
  const { formData, setFormData } = useContext(formDataContext);

  return (
    <div className={styles.formDiv}>
      <img
        src={`${process.env.NEXT_PUBLIC_API}/forms/lto-license.png`}
        alt="preview"
        className="w-full h-full"
      />
      <div
        className={`${styles.labels} `}
        style={{
          position: "absolute",
          top: 200,
          left: 15,
        }}
      >
        <span style={{ letterSpacing: 15 }}>{formData.lastName || ""}</span>
        <span style={{ padding: 10 }}></span>
        <span style={{ letterSpacing: 15 }}>{formData.firstName || ""}</span>
        <span style={{ padding: 5 }}>,</span>
        <span style={{ padding: 15 }}></span>
        <span style={{ letterSpacing: 13 }}>{formData.middleName || ""}</span>
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 260, left: 15, maxWidth: 560 }}
      >
        {formData.presentAddress || ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 260, left: 600, maxWidth: 560 }}
      >
        {formData.mobile || ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 260, left: 800, maxWidth: 560 }}
      >
        {formData.tin || ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 335, left: 15, maxWidth: 560 }}
      >
        {formData.nationality || ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 335, left: 175, maxWidth: 560 }}
      >
        {formData.gender || ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 335, left: 270, maxWidth: 560 }}
      >
        {formData.birthDate || ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 335, left: 470, maxWidth: 560 }}
      >
        {formData.height || ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 335, left: 540, maxWidth: 560 }}
      >
        {formData.weight || ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 335, left: 540, maxWidth: 560 }}
      >
        {formData.weight || ""}
      </div>

      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 386, left: 12, maxWidth: 560 }}
      >
        {formData.licenseTypeOfApplication === "New" ? "x" : ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 408, left: 12, maxWidth: 560 }}
      >
        {formData.licenseTypeOfApplication === "DelinquentDormantLicense"
          ? "x"
          : ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 388, left: 179 }}
      >
        {formData.licenseTypeOfApplication === "ForeignLicenseConversion"
          ? "x"
          : ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 410, left: 179 }}
      >
        {formData.licenseTypeOfApplication === "Renewal" ? "x" : ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 430, left: 179 }}
      >
        {formData.licenseTypeOfApplication === "AdditionalRestrictionCode"
          ? "x"
          : ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 453, left: 179 }}
      >
        {formData.licenseTypeOfApplication === "Duplicate" ? "x" : ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 477, left: 179 }}
      >
        {formData.licenseTypeOfApplication === "RevisionOfRecords" ? "x" : ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 501, left: 212 }}
      >
        {formData.licenseTypeOfApplication === "ChangeAddress" ? "x" : ""}
      </div>

      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 388, left: 413 }}
      >
        {formData.licenseTypeOfApplication === "ChangeCivilStatus" ? "x" : ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 410, left: 413 }}
      >
        {formData.licenseTypeOfApplication === "ChangeName" ? "x" : ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 430, left: 413 }}
      >
        {formData.licenseTypeOfApplication === "ChangeDateOfBirth" ? "x" : ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 453, left: 413 }}
      >
        {formData.licenseTypeOfApplication === "Others" ? "x" : ""}
      </div>

      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 478, left: 35 }}
      >
        {formData.licenseTypeOfApplication === "ProfToNonProf" ? "x" : ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 501, left: 35 }}
      >
        {formData.licenseTypeOfApplication === "NonProfToProf" ? "x" : ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 549, left: 19 }}
      >
        {formData.licenseTypeOfLicense === "StudentPermit" ? "x" : ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 571, left: 19 }}
      >
        {formData.licenseTypeOfLicense === "NonProfessional" ? "x" : ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 594, left: 19 }}
      >
        {formData.licenseTypeOfLicense === "Professional" ? "x" : ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 615, left: 19 }}
      >
        {formData.licenseTypeOfLicense === "Conductor" ? "x" : ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 549, left: 175 }}
      >
        {formData.drivingSkillRequired === "DrivingSchool" ? "x" : ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 594, left: 175 }}
      >
        {formData.drivingSkillRequired === "LicensePrivatePerson" ? "x" : ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 549, left: 330 }}
      >
        {formData.educationalAttainment === "InformalSchooling" ? "x" : ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 594, left: 330 }}
      >
        {formData.educationalAttainment === "Elementary" ? "x" : ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 615, left: 330 }}
      >
        {formData.educationalAttainment === "HighSchool" ? "x" : ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 549, left: 457 }}
      >
        {formData.educationalAttainment === "Vocational" ? "x" : ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 572, left: 457 }}
      >
        {formData.educationalAttainment === "College" ? "x" : ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 594, left: 457 }}
      >
        {formData.educationalAttainment === "PostGraduate" ? "x" : ""}
      </div>
    </div>
  );
}
