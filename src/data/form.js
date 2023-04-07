const forms = [
  { name: "Driver's License", image: "/forms/lto-license.png", fields: [
    { name: "firstName", label:"First Name", type: "text" },
    { name: "middleName", label:"Middle Name",  type: "text" },
    { name: "lastName", label:"Last Name",  type: "text" },
    { name: "presentAddress", label:"Present Address",  type: "text" },
    { name: "mobile", label:"Mobile",  type: "text" },
    { name: "birthDate", label:"Birth Date",  type: "date" },
    { name: "tin", label:"Tin",  type: "text" },
    { name: "nationality", label:"Nationality",  type: "text" },
    { name: "gender", label:"Gender (M/F)",  type: "text" },
    { name: "height", label:"Height (cm)",  type: "text" },
    { name: "weight", label:"Weight (kg)",  type: "text" },
    { name: "licenseTypeOfApplication", label:"Type Of Application (TOA)",  type: "select", options: [
      { value:"New", label:"New" },
      { value:"DelinquentDormantLicense", label:"Delinquent/Dormant License" },
      { value:"ProfToNonProf", label:"Change Classification - Prof to Non-Prof" },
      { value:"NonProfToProf", label:"Change Classification - Non-Prof to Prof" },
      { value:"ForeignLicenseConversion", label:"Foreign Licnse Conversion" },
      { value:"Renewal", label:"Renewal" },
      { value:"AdditionalRestrictionCode", label:"Additional Restriction Code" },
      { value:"Duplicate", label:"Duplicate" },
      { value:"RevisionOfRecords", label:"Revision of Records" },
      { value:"ChangeAddress", label:"Change Address" },
      { value:"ChangeCivilStatus", label:"Change Civil Status" },
      { value:"ChangeName", label:"Change Name" },
      { value:"ChangeDateOfBirth", label:"Change Date of Birth" },
      { value:"Others", label:"Others" },      
    ] },
    { name:"restrictionCode", label:"Restriction Code", type:"select", options: [ 
      { value: "MotorcycleMotorized", label: "Motorcycle/Motorized Tricycles/E-Bikes (LSV) Trikes (A-1)" },
      { value: "VehiclesUp4500GVW", label: "Vehicles Up To 4500 Kgs. GVW (Manual and Automatic Clutch)" },
      { value: "VehiclesAbove4500GVW", label: "Vehicles Above 4500 Kgs. GVW (Manual and Automatic Clutch)" },
      { value: "AutomaticClutchOnlyUp4500", label: "Automatic Clutch Only Up To 4500 Kgs GVW " },
      { value: "AutomaticClutchOnlyAbove4500GVW", label: "Automatic Clutch Only Above To 4500 Kgs GVW" },
      { value: "Articulated1600GVWAndBelow", label: "Articulated 1600 GVW and Below" },
      { value: "Articulated1601Up4500GVW", label: "Articulated 1601 Up To 4500 GVW" },
      { value: "Articulated4501GVWAndAbove", label: "Articulated 4501 GVW and Above (Truck-Trailer)" },
    ] },
    { name: "licenseRestrictionCode", label:"Restriction Code",  type: "text" },
    { name: "licenseTypeOfLicense", label:"Type Of License Applied (TLA) For",  type: "select", options: [
      { value: "StudentPermit", label:"Student Permit" },
      { value: "NonProfessional", label:"Non-Professional" },
      { value: "Professional", label:"Professional" },
      { value: "Conductor", label:"Conductor" },
    ] },
    { name: "drivingSkillRequired", label:"Driving Skill Required",  type: "select", options: [
      { value: "DrivingSchool", label:"Driving School" },
      { value: "LicensePrivatePerson", label:"License Private Person" },
    ]},
    { name: "educationalAttainment", label:"Educational Attainment",  type: "select", options:[ 
      { value:"InformalSchooling", label:"Informal Schooling" },
      { value:"Elementary", label:"Elementary" },
      { value:"HighSchool", label:"High School" },
      { value:"Vocational", label:"Vocational" },
      { value:"College", label:"College" },
      { value:"PostGraduate", label:"Post Graduate" },
    ] },
    { name: "bloodType", label:"Blood Type",  type: "text" },
    { name: "organDonor", label:"Organ Donor",  type: "select", options: [ 
      { value:"Yes", label:"Yes" },
      { value:"No", label:"No" },
     ]},
    { name: "civilStatus", label:"Civil Status",  type: "select", options: [
      { value: "Single", label: "Single" },
      { value: "Married", label: "Married" },
      { value: "Widower", label: "Widower" },
      { value: "Separated", label: "Separated" },
    ] }, 
    { name: "hair", label:"Hair",  type: "select", options: [
      { value: "Black", label: "Black" },
      { value: "Brown", label: "Brown" },
      { value: "Blond", label: "Blond" },
      { value: "Gray", label: "Gray" },
      { value: "Others", label: "Others" },
    ]},
    { name: "eyes", label:"Eyes",  type: "select", options: [
      { value: "Black", label: "Black" },
      { value: "Brown", label: "Brown" },
      { value: "Gray", label: "Gray" },
      { value: "Others", label: "Others" },
    ]},
    { name: "built", label:"Built",  type: "select", options: [
      { value: "Light", label: "Light" },
      { value: "Medium", label: "Medium" },
      { value: "Heavy", label: "Heavy" },
    ] },
    { name: "complexion", label:"Complexion",  type: "select", options: [
      { value: "Light", label: "Light" },
      { value: "Fair", label: "Fair" },
      { value: "Dark", label: "Dark" },
    ] },
    { name: "birthPlace", label:"Birth Place",  type: "date" },
    { name: "fathersName", label:"Father's Name",  type: "text" },


    { name: "mothersName", label:"Mother's Name",  type: "text" },
    { name: "spouseName", label:"Spouse Name",  type: "text" },
    { name: "employersBusinessName", label:"Employer's Business Name",  type: "text" },
    { name: "employersBusinessAddress", label:"Employer's Business Address",  type: "text" },    
  ] },
];

export { forms };
