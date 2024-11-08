"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const menuPage = document.querySelector(".menu-container");
const formPage = document.querySelector(".big-container");
const resumePage = document.querySelector(".dynamic-resume-container");
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
const resumePhoto = document.getElementById("resumePhoto");
const resumeName = document.getElementById("resumeName");
const resumeTitle = document.getElementById("resumeTitle");
const resumeAbout = document.getElementById("resumeAbout");
const resumePhone = document.getElementById("resumePhone");
const resumeEmail = document.getElementById("resumeEmail");
const resumeLocation = document.getElementById("resumeLocation");
const resumeDesignation = document.getElementById("resumeDesignation");
const resumeCompanyName = document.getElementById("resumeCompanyName");
const resumeCompanyLocation = document.getElementById("resumeCompanyLocation");
const resumeCompanyJobTime = document.getElementById("resumeCompanyJobTime");
const resumeJobDescription = document.getElementById("resumeJobDescription");
const resumeDegree = document.getElementById("resumeDegree");
const resumeIntituteName = document.getElementById("resumeIntituteName");
const resumeField = document.getElementById("resumeField");
const resumeTimePeriod = document.getElementById("resumeTimePeriod");
const resumeSkills = document.getElementById("resumeSkills");
const resumeLanguage = document.getElementById("resumeLanguage");
////////////////////////////////////////////////////////////
const form = document.getElementById("resume-form");
form.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    const naam = document.getElementById("name").value;
    const userName = document.getElementById("username")
        .value;
    const profilePicture = document.getElementById("photo");
    const userlocation = document.getElementById("location")
        .value;
    const userEmail = document.getElementById("email")
        .value;
    const userPhone = document.getElementById("phone")
        .value;
    const Profile = document.getElementById("profile")
        .value;
    const title = document.getElementById("title").value;
    const companyName = document.getElementById("companyName").value;
    const companyLocation = document.getElementById("companyLocation").value;
    const desgination = document.getElementById("desgination").value;
    const JobTime = document.getElementById("JobTime")
        .value;
    const jobDescription = document.getElementById("jobDescription").value;
    const instituteName = document.getElementById("instituteName").value;
    const degree = document.getElementById("degree").value;
    const field = document.getElementById("field").value;
    const passedYear = document.getElementById("passed-year").value;
    const skills = document.getElementById("skills")
        .value;
    const languages = document.getElementById("languages")
        .value;
    const submit = document.getElementById("submit");
    const clear = document.getElementById("clear");
    const photoFile = profilePicture.files ? profilePicture.files[0] : null;
    let photoCheck = "";
    if (photoFile) {
        photoCheck = yield fileToBase64(photoFile);
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
}));
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const filereader = new FileReader();
        filereader.onloadend = () => {
            resolve(filereader.result);
        };
        filereader.onerror = reject;
        filereader.readAsDataURL(file);
    });
}
////////////////////////////////////////////////////////////
const experienceFieldset = document.getElementById("experience-item");
const addExperienceButton = document.getElementById("add-experience");
const removeExperienceButton = document.getElementById("remove-experience");
const educationFieldset = document.getElementById("education-item");
const addEducationButton = document.getElementById("add-education");
const removeEducationButton = document.getElementById("remove-education");
addExperienceButton === null || addExperienceButton === void 0 ? void 0 : addExperienceButton.addEventListener("click", () => {
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
addEducationButton === null || addEducationButton === void 0 ? void 0 : addEducationButton.addEventListener("click", () => {
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
removeExperienceButton === null || removeExperienceButton === void 0 ? void 0 : removeExperienceButton.addEventListener("click", () => {
    const lastExperience = experienceFieldset.querySelector(".experience-item:last-child");
    if (lastExperience) {
        experienceFieldset.removeChild(lastExperience);
    }
});
removeEducationButton === null || removeEducationButton === void 0 ? void 0 : removeEducationButton.addEventListener("click", () => {
    const lastEducation = educationFieldset.querySelector(".education-item:last-child");
    if (lastEducation) {
        educationFieldset.removeChild(lastEducation);
    }
});
////////////////////////////////////////////////////////////
