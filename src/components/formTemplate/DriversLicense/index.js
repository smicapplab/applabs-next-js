import { useContext } from "react";
import styles from "../../../pages/preview/Preview.module.css";
import formDataContext from "@/store/formDataContext";
import TypeOfApplication from "./TypeOfApplication";
import TypeOfLicense from "./TypeOfLicense";
import EducationalAttainment from "./EducationalAttainment";
import RestrictionCode from "./RestrictionCode";
import CivilStatus from "./CivilStatus";
import Hair from "./Hair";
import Eyes from "./Eyes";
import Built from "./Built";
import Complexion from "./Complexion";

export default function DriversLicense() {
  const { formData } = useContext(formDataContext);

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
        <span style={{ letterSpacing: 12 }}>{`${formData.lastName.toUpperCase() || ""} `}</span>
        <span style={{ letterSpacing: 13, paddingLeft:6 }}>{formData.firstName.toUpperCase() || ""}</span>
        <span>,</span>
        <span style={{ padding: 10 }}></span>
        <span style={{ letterSpacing: 12 }}>{formData.middleName.toUpperCase() || ""}</span>
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 260, left: 15, maxWidth: 560 }}
      >
        {formData.presentAddress || ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 260, left: 600 }}
      >
        {formData.mobile || ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 260, left: 800 }}
      >
        {formData.tin || ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 335, left: 15 }}
      >
        {formData.nationality || ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 335, left: 175 }}
      >
        {formData.gender || ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 335, left: 270 }}
      >
        {formData.birthDate || ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 335, left: 470 }}
      >
        {formData.height || ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 335, left: 540 }}
      >
        {formData.weight || ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 335, left: 540 }}
      >
        {formData.weight || ""}
      </div>
      <TypeOfApplication value={formData.licenseTypeOfApplication} />
      <TypeOfLicense value={formData.licenseTypeOfLicense} />
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
      <EducationalAttainment value={formData.educationalAttainment} />
      <RestrictionCode value={formData.restrictionCode} />

      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 650, left: 135 }}
      >
        {formData.bloodType || ""}
      </div>

      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 637, left: 472 }}
      >
        {formData.organDonor === "Yes" ? "x" : ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 660, left: 472 }}
      >
        {formData.organDonor === "No" ? "x" : ""}
      </div>

      <CivilStatus value={formData.civilStatus}/>
      <Hair value={formData.hair}/>

      <Eyes value={formData.eyes}/>
      <Built value={formData.built}/>
      <Complexion value={formData.complexion}/>

      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 835, left: 19 }}
      >
        {formData.birthPlace || ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 902, left: 19 }}
      >
        {formData.fathersName || ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 964, left: 19 }}
      >
        {formData.mothersName || ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 1030, left: 19 }}
      >
        {formData.spouseName || ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 1090, left: 19 }}
      >
        {formData.employersBusinessName || ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 1090, left: 450 }}
      >
        {formData.employerContact || ""}
      </div>
      <div
        className={`${styles.labels} `}
        style={{ position: "absolute", top: 1150, left: 19 }}
      >
        {formData.employersBusinessAddress || ""}
      </div>
    </div>
  );
}
