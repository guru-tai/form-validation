import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDrives } from "../drives/drivesSlice";
import "./Admin.css";
const Admin = () => {
  const drives = useSelector((state) => state.drives.drives);
  const [create, setCreate] = useState(false);
  const [addDate, setAddDate] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState(false);
  const [formState, setFormState] = useState({
    id: "",
    companyName: "",
    jobTitle: "",
    jobRole: "",
    jobLocation: "",
    package: "",
    skills: "",
    genderPreference: [],
    qualification: "",
    branch: "",
    backlogAllowed: [],
    SSLCMinPercentage: "",
    PUCMinPercentage: "",
    graduateMinPercentage: "",
    gapInEducation: "",
    noOfPositions: "",
    modeOfInterview: "",
    serviceAgreement: "",
    deposit: "",
    relocation: "",
    certificateSubmission: "",
    shifts: "",
    blockingPeriod: "",
    firstRoundDate: "",
    expiresIn: "",
    minEmployibilityScore: "",
    interviewType: "",
    uploadJd: "",
    endDate:''
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    if (saved) {
      isValidate();
    }
  };
  const isValidate = () => {
    const newErrors = {};

    if (!formState.id.trim()) {
      newErrors.id = "id is required";
    }
    if (!formState.companyName.trim()) {
      newErrors.companyName = "company name is required";
    }
    if (!formState.jobTitle.trim()) {
      newErrors.jobTitle = "job title is required";
    }
    if (!formState.jobRole.trim()) {
      newErrors.jobRole = "job role is required";
    }
    if (!formState.jobLocation.trim()) {
      newErrors.jobLocation = "job location is required";
    }
    if (!formState.package.trim()) {
      newErrors.package = "package is required";
    }
    if (!formState.skills.trim()) {
      newErrors.skills = "you should type atleast one skill";
    }
    if (!formState.genderPreference) {
      newErrors.genderPreference = "genderPrference is required";
    }
    if (!formState.qualification.trim()) {
      newErrors.qualification = "qualification is required";
    }
    if (!formState.branch.trim()) {
      newErrors.branch = "branch is required";
    }
    if (!formState.backlogAllowed) {
      newErrors.backlogAllowed = "backlogAllowed is required";
    }
    if (!formState.SSLCMinPercentage.trim()) {
      newErrors.SSLCMinPercentage = " SSLCMinPercentage is required";
    }
    if (!formState.PUCMinPercentage.trim()) {
      newErrors.PUCMinPercentage = "PUCMinPercentage is required";
    }
    if (!formState.graduateMinPercentage) {
      newErrors.graduateMinPercentage = "graduateMinPercentage is required";
    }
    if (!formState.gapInEducation.trim()) {
      newErrors.gapInEducation = "gapInEducation is required";
    }
    if (!formState.noOfPositions) {
      newErrors.noOfPositions = "noOfPositions is required";
    }
    if (!formState.modeOfInterview) {
      newErrors.modeOfInterview = "modeOfInterview is required";
    }
    if (!formState.serviceAgreement.trim()) {
      newErrors.serviceAgreement = "serviceAgreement is required";
    }
    if (!formState.deposit.trim()) {
      newErrors.deposit = "deposit is required";
    }
    if (!formState.relocation.trim()) {
      newErrors.relocation = "relocation is required";
    }
    if (!formState.certificateSubmission.trim()) {
      newErrors.certificateSubmission = "certificateSubmission is required";
    }
    if (!formState.shifts.trim()) {
      newErrors.shifts = "shifts is required";
    }
    if (!formState.blockingPeriod.trim()) {
      newErrors.blockingPeriod = "blockingPeriod is required";
    }
    if (!formState.firstRoundDate) {
      newErrors.firstRoundDate = "firstRoundDate is required";
    }else if(formState.firstRoundDate>new Date()){
      newErrors.firstRoundDate='please select future date'
    }
    if (!formState.expiresIn) {
      newErrors.expiresIn = "expiresIn is required";
    }else if(formState.expiresIn<formState.firstRoundDate){
      newErrors.expiresIn='date should greater than the starting date'
    }
    if (!formState.minEmployibilityScore.trim()) {
      newErrors.minEmployibilityScore = "minEmployibilityScore is required";
    }
    if (!formState.interviewType) {
      newErrors.interviewType = "interviewType is required";
    }
    if (!formState.uploadJd.trim()) {
      newErrors.uploadJd = "uploadJd is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = () => {
    const validate = isValidate();
    if (validate) {
      dispatch(addDrives(formState));
      setCreate(!create);
    } else {
      console.log("it is not validate");
    }
  };

  const handleDate = () => {
    if (date && time) {
      const selectedDate = new Date(`${date}T${time}`);
      if (selectedDate > new Date()) {
        formState.endDate = selectedDate;
      } else {
        alert("please select future date and time");
      }
    }
  };
  return (
    <div>
      <div>
        <button onClick={() => setCreate(!create)}>create a job profile</button>
      </div>
      <div>
        {create && (
          <>
            <div>
              <div>
                <h2>Company Details</h2>
              </div>
              <label>Job Id</label>
              <input
                type="text"
                name="id"
                value={formState.id}
                onChange={handleChange}
              ></input>
            </div>
            {errors.id && <div className="error">{errors.id}</div>}
            <div>
              <label>Company Name:</label>
              <input
                type="text"
                name="companyName"
                value={formState.companyName}
                onChange={handleChange}
              />
            </div>
            {errors.companyName && (
              <div className="error">{errors.companyName}</div>
            )}
            <div>
              <h2>Job Details</h2>
            </div>
            <div>
              <label>Job Title:</label>
              <input
                type="text"
                name="jobTitle"
                value={formState.jobTitle}
                onChange={handleChange}
              />
            </div>
            {errors.jobTitle && <div className="error">{errors.jobTitle}</div>}
            <div>
              <label>Job Role:</label>
              <input
                type="text"
                name="jobRole"
                value={formState.jobRole}
                onChange={handleChange}
              />
            </div>
            {errors.jobRole && <div className="error">{errors.jobRole}</div>}
            <div>
              <label>Job Location:</label>
              <input
                type="text"
                name="jobLocation"
                value={formState.jobLocation}
                onChange={handleChange}
              />
            </div>
            {errors.jobLocation && (
              <div className="error">{errors.jobLocation}</div>
            )}
            <div>
              <label>Package:</label>
              <input
                type="number"
                name="package"
                value={formState.package}
                onChange={handleChange}
              />
            </div>
            {errors.package && <div className="error">{errors.package}</div>}
            <div>
              <label>Skills:</label>
              <input
                type="text"
                name="skills"
                value={formState.skills}
                onChange={handleChange}
              />
            </div>
            {errors.skills && <div className="error">{errors.skills}</div>}
            <div>
              <h2>Job Criteria Details</h2>
            </div>
            <div>
              <label>Gender Preference:</label>
              <select
                name="genderPreference"
                value={formState.genderPreference}
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            {errors.genderPreference && (
              <div className="error">{errors.genderPreference}</div>
            )}
            <div>
              <label>Qualification:</label>
              <input
                type="text"
                name="qualification"
                value={formState.qualification}
                onChange={handleChange}
              />
            </div>
            {errors.qualification && (
              <div className="error">{errors.qualification}</div>
            )}
            <div>
              <label>Branch:</label>
              <input
                type="text"
                name="branch"
                value={formState.branch}
                onChange={handleChange}
              />
            </div>
            {errors.branch && <div className="error">{errors.branch}</div>}
            <div>
              <label>Backlogs Allowed:</label>
              <select
                name="backlogAllowed"
                value={formState.backlogAllowed}
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            {errors.backlogAllowed && (
              <div className="error">{errors.backlogAllowed}</div>
            )}
            <div>
              <label>SSLC Min Percentage:</label>
              <input
                type="number"
                name="SSLCMinPercentage"
                value={formState.SSLCMinPercentage}
                onChange={handleChange}
              />
            </div>
            {errors.SSLCMinPercentage && (
              <div className="error">{errors.SSLCMinPercentage}</div>
            )}
            <div>
              <label>PUC MIn Percentage:</label>
              <input
                type="number"
                name="PUCMinPercentage"
                value={formState.PUCMinPercentage}
                onChange={handleChange}
              />
            </div>
            {errors.PUCMinPercentage && (
              <div className="error">{errors.PUCMinPercentage}</div>
            )}
            <div>
              <label>Graduate Min Percentage In Education:</label>
              <input
                type="number"
                name="graduateMinPercentage"
                value={formState.graduateMinPercentage}
                onChange={handleChange}
              />
            </div>
            {errors.graduateMinPercentage && (
              <div className="error">{errors.graduateMinPercentage}</div>
            )}
            <div>
              <label>Gap In Education:</label>
              <input
                type="text"
                name="gapInEducation"
                value={formState.gapInEducation}
                onChange={handleChange}
              />
            </div>
            {errors.gapInEducation && (
              <div className="error">{errors.gapInEducation}</div>
            )}
            <div>
              <h2>Interview Details</h2>
            </div>
            <div>
              <label>No Of Positions:</label>
              <input
                type="number"
                name="noOfPositions"
                value={formState.noOfPositions}
                onChange={handleChange}
              />
            </div>
            {errors.noOfPositions && (
              <div className="error">{errors.noOfPositions}</div>
            )}
            <div>
              <label>Mode Of Interview:</label>
              <select
                name="modeOfInterview"
                value={formState.modeOfInterview}
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="offline">offline</option>
                <option value="online">online</option>
              </select>
            </div>
            {errors.modeOfInterview && (
              <div className="error">{errors.modeOfInterview}</div>
            )}
            <div>
              <label>Service Agreement:</label>
              <input
                type="text"
                name="serviceAgreement"
                value={formState.serviceAgreement}
                onChange={handleChange}
              />
            </div>
            {errors.serviceAgreement && (
              <div className="error">{errors.serviceAgreement}</div>
            )}
            <div>
              <label>Deposit:</label>
              <input
                type="text"
                name="deposit"
                value={formState.deposit}
                onChange={handleChange}
              />
            </div>
            {errors.deposit && <div className="error">{errors.deposit}</div>}
            <div>
              <label>Relocation</label>
              <select
                name="relocation"
                value={formState.relocation}
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="bengaluru">bengaluru</option>
                <option value="hyderbad">hyderbad</option>
                <option value="delhi">delhi</option>
              </select>
            </div>
            {errors.relocation && (
              <div className="error">{errors.relocation}</div>
            )}
            <div>
              <label>Certificate Submission:</label>
              <input
                type="text"
                name="certificateSubmission"
                value={formState.certificateSubmission}
                onChange={handleChange}
              />
            </div>
            {errors.certificateSubmission && (
              <div className="error">{errors.certificateSubmission}</div>
            )}
            <div>
              <label>Shifts:</label>
              <input
                type="text"
                name="shifts"
                value={formState.shifts}
                onChange={handleChange}
              />
            </div>
            {errors.shifts && <div className="error">{errors.shifts}</div>}
            <div>
              <label>Blocking Period:</label>
              <input
                type="text"
                name="blockingPeriod"
                value={formState.blockingPeriod}
                onChange={handleChange}
              />
            </div>
            {errors.blockingPeriod && (
              <div className="error">{errors.blockingPeriod}</div>
            )}
            <div>
              <label>First Round Date:</label>
              <input
                type="date"
                name="firstRoundDate"
                value={formState.firstRoundDate}
                onChange={handleChange}
              />
            </div>
            {errors.firstRoundDate && (
              <div className="error">{errors.firstRoundDate}</div>
            )}
            <div>
              <label>Expires In:</label>
              <input
                type="date"
                name="expiresIn"
                value={formState.expiresIn}
                onChange={handleChange}
              />
            </div>
            {errors.expiresIn && (
              <div className="error">{errors.expiresIn}</div>
            )}
            <div>
              <h2>Others</h2>
            </div>
            <div>
              <label>Min Employibility Score:</label>
              <input
                type="text"
                name="minEmployibilityScore"
                value={formState.minEmployibilityScore}
                onChange={handleChange}
              />
            </div>
            {errors.minEmployibilityScore && (
              <div className="error">{errors.minEmployibilityScore}</div>
            )}
            <div>
              <label>Interview Type:</label>
              <input
                type="text"
                name="interviewType"
                value={formState.interviewType}
                onChange={handleChange}
              />
            </div>
            {errors.interviewType && (
              <div className="error">{errors.interviewType}</div>
            )}
            <div>
              <label>Upload Jd:</label>
              <input
                type="text"
                name="uploadJd"
                value={formState.uploadJd}
                onChange={handleChange}
              />
            </div>
            {errors.uploadJd && <div className="error">{errors.uploadJd}</div>}
            <button
              onClick={() => {
                handleSubmit();
                setSaved(true);
              }}
            >
              Save
            </button>
          </>
        )}
      </div>

      <div>
        {drives ? (
          <>
            <ul>
              {drives.map((drive) => (
                <div key={drive.id}>
                  <p>
                    {" "}
                    <b>Company Name:</b>
                    {drive.companyName}
                  </p>
                  <p>
                    <b>jobTitle:</b> {drive.jobTitle}
                  </p>
                  <p>
                    <b>jobLocation:</b> {drive.jobLocation}
                  </p>
                  <p>
                    <b>package:</b> {drive.package}
                  </p>
                  <p>
                    <b>skills:</b> {drive.skills}
                  </p>
                  <p>
                    {formState.endDate&&<div>{formState.endDate.toLocaleString()}</div>}
                  </p>
                  <div>
                    {/* <button onClick={() => setAddDate(!addDate)}>
                      Add End Date
                    </button> */}
                    {/* <div>
                      {addDate && (
                        <>
                          <div>
                            <label>Select Date:</label>
                            <input
                              type="date"
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                            ></input>
                            <label>Select Date:</label>
                            <input
                              type="time"
                              value={time}
                              onChange={(e) => setTime(e.target.value)}
                            ></input>
                            <button
                              onClick={(e) => {
                                setAddDate(!addDate);
                                handleDate();
                              }}
                            >
                              Create
                            </button>
                          </div>
                        </>
                      )}
                      
                    </div> */}
                  </div>
                </div>
              ))}
            </ul>
          </>
        ) : (
          <>
            <p>No drives are added at</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Admin;
