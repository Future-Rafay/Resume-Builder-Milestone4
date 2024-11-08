const menuPage = document.querySelector(".menu-container") as HTMLDivElement;
const formPage = document.querySelector(".big-container") as HTMLDivElement;
const resumePage = document.querySelector(
  ".dynamic-resume-container"
) as HTMLDivElement;

menuPage.style.display = "block";
formPage.style.display = "none";
resumePage.style.display = "none";

function seeResumebuttonHandler() {
  menuPage.style.display = "none";
  resumePage.style.display = "block";
  formPage.style.display = "none";
}

function createResumebuttonHandler() {
  menuPage.style.display = "none";
  formPage.style.display = "flex";
  resumePage.style.display = "none";
}

////////////////////////////////////////////////////////////

const resumePhoto = document.getElementById("resumePhoto") as HTMLImageElement;

const resumeName = document.getElementById("resumeName") as HTMLHeadingElement;
const resumeTitle = document.getElementById(
  "resumeTitle"
) as HTMLHeadingElement;
const resumeAbout = document.getElementById(
  "resumeAbout"
) as HTMLParagraphElement;

const resumePhone = document.getElementById("resumePhone") as HTMLSpanElement;
const resumeEmail = document.getElementById("resumeEmail") as HTMLSpanElement;
const resumeLocation = document.getElementById(
  "resumeLocation"
) as HTMLSpanElement;

const resumeDesignation = document.getElementById(
  "resumeDesignation"
) as HTMLSpanElement;
const resumeCompanyName = document.getElementById(
  "resumeCompanyName"
) as HTMLSpanElement;
const resumeCompanyLocation = document.getElementById(
  "resumeCompanyLocation"
) as HTMLSpanElement;
const resumeCompanyJobTime = document.getElementById(
  "resumeCompanyJobTime"
) as HTMLSpanElement;
const resumeJobDescription = document.getElementById(
  "resumeJobDescription"
) as HTMLParagraphElement;

const resumeDegree = document.getElementById(
  "resumeDegree"
) as HTMLHeadingElement;
const resumeIntituteName = document.getElementById(
  "resumeIntituteName"
) as HTMLSpanElement;
const resumeField = document.getElementById("resumeField") as HTMLSpanElement;
const resumeTimePeriod = document.getElementById(
  "resumeTimePeriod"
) as HTMLSpanElement;

const resumeSkills = document.getElementById("resumeSkills") as HTMLLIElement;
const resumeLanguage = document.getElementById(
  "resumeLanguage"
) as HTMLLIElement;

////////////////////////////////////////////////////////////

const form = document.getElementById("resume-form") as HTMLFormElement;

form.addEventListener("submit", async (event: Event) => {
  event.preventDefault();

  const naam = (document.getElementById("name") as HTMLInputElement).value;
  const userName = (document.getElementById("username") as HTMLInputElement)
    .value;
  const profilePicture = document.getElementById("photo") as HTMLInputElement;

  const userlocation = (document.getElementById("location") as HTMLInputElement)
    .value;
  const userEmail = (document.getElementById("email") as HTMLInputElement)
    .value;
  const userPhone = (document.getElementById("phone") as HTMLInputElement)
    .value;

  const Profile = (document.getElementById("profile") as HTMLInputElement)
    .value;
  const title = (document.getElementById("title") as HTMLInputElement).value;

  const companyName = (
    document.getElementById("companyName") as HTMLInputElement
  ).value;
  const companyLocation = (
    document.getElementById("companyLocation") as HTMLInputElement
  ).value;
  const desgination = (
    document.getElementById("desgination") as HTMLInputElement
  ).value;
  const JobTime = (document.getElementById("JobTime") as HTMLInputElement)
    .value;
  const jobDescription = (
    document.getElementById("jobDescription") as HTMLInputElement
  ).value;

  const instituteName = (
    document.getElementById("instituteName") as HTMLInputElement
  ).value;
  const degree = (document.getElementById("degree") as HTMLInputElement).value;
  const field = (document.getElementById("field") as HTMLInputElement).value;
  const passedYear = (
    document.getElementById("passed-year") as HTMLInputElement
  ).value;

  const skills = (document.getElementById("skills") as HTMLTextAreaElement)
    .value;

  const languages = (document.getElementById("languages") as HTMLInputElement)
    .value;

  const submit = document.getElementById("submit") as HTMLButtonElement;
  const clear = document.getElementById("clear") as HTMLButtonElement;

  const photoFile = profilePicture.files ? profilePicture.files[0] : null;

  let photoCheck = "";

  if (photoFile) {
    photoCheck = await fileToBase64(photoFile);
    localStorage.setItem("resumePhoto", photoCheck);
    resumePhoto.src = photoCheck;
  }

  formPage.style.display = "none";
  resumePage.style.display = "block";

  resumeName.textContent = naam;
  resumeTitle.textContent = title;
  resumeAbout.textContent = Profile;

  resumePhone.textContent = userPhone;
  resumeEmail.textContent = userEmail;
  resumeLocation.textContent = userlocation;

  resumeDesignation.textContent = desgination;
  resumeCompanyName.textContent = companyName;
  resumeCompanyLocation.textContent = companyLocation;
  resumeCompanyJobTime.textContent = JobTime;
  resumeJobDescription.textContent = jobDescription;

  resumeDegree.textContent = degree;
  resumeIntituteName.textContent = instituteName;
  resumeField.textContent = field;
  resumeTimePeriod.textContent = passedYear;

  resumeSkills.textContent = skills;
  resumeLanguage.textContent = languages;
});

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const filereader = new FileReader();

    filereader.onloadend = () => {
      resolve(filereader.result as string);
    };

    filereader.onerror = reject;
    filereader.readAsDataURL(file);
  });
}
////////////////////////////////////////////////////////////

const experienceFieldset = document.getElementById(
  "experience-item"
) as HTMLDivElement;
const addExperienceButton = document.getElementById(
  "add-experience"
) as HTMLButtonElement;
const removeExperienceButton = document.getElementById(
  "remove-experience"
) as HTMLButtonElement;

const educationFieldset = document.getElementById(
  "education-item"
) as HTMLDivElement;
const addEducationButton = document.getElementById(
  "add-education"
) as HTMLButtonElement;
const removeEducationButton = document.getElementById(
  "remove-education"
) as HTMLButtonElement;

addExperienceButton?.addEventListener("click", () => {
  const newExperience = document.createElement("div");
  newExperience.classList.add("experience-item");

  newExperience.innerHTML = `
                        <h5>New Experiance Section</h5>
                        <label for="companyName">Company name:</label>
                        <input type="text" id="companyName" placeholder="ABC Tech Solutions" required>

                        <label for="companyLocation">Company location:</label>
                        <input type="text" id="companyLocation" placeholder="Gulshan maymar Karachi, Pakistan" required>

                        <label for="desgination">Designation:</label>
                        <input type="text" id="desgination" placeholder="Front-End Developer Intern" required>

                        <label for="jobTime">Time period:</label>
                        <input type="text" id="JobTime" placeholder="2022-2024" required>

                        <label for="jobDescription">Description:</label>
                        <input type="text" id="jobDescription" placeholder="Some thing about your job (optional)">


    `;

  experienceFieldset.appendChild(newExperience);
});

addEducationButton?.addEventListener("click", () => {
  const newEducation = document.createElement("div");
  newEducation.classList.add("education-item");

  newEducation.innerHTML = `
                        <h5>New Education Section</h5>
                        <label for="instituteName">Institute name:</label>
                        <input type="text" id="instituteName" placeholder="Govt. National College Karachi"required>

                        <label for="degree">Degree name:</label>
                        <input type="text" id="degree" placeholder="Intermediate" required>

                        <label for="field">Which field:</label>
                        <input type="text" id="field" placeholder="Pre-Engineering">

                        <label for="passed-year">Year passed:</label>
                        <input type="text" id="passed-year" placeholder="2023-Present" required>
    `;

  educationFieldset.appendChild(newEducation);
});

removeExperienceButton?.addEventListener("click", () => {
    const lastExperience = experienceFieldset.querySelector(".experience-item:last-child");

    if (lastExperience) {
        experienceFieldset.removeChild(lastExperience);
    }
});

removeEducationButton?.addEventListener("click", () => {
    const lastEducation = educationFieldset.querySelector(".education-item:last-child");

    if (lastEducation) {
        educationFieldset.removeChild(lastEducation);
    }
});

////////////////////////////////////////////////////////////
