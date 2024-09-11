import React from 'react'
import { useSelector } from 'react-redux';
const User = () => {
  const drives=useSelector((state)=>state.drives.drives);
  return (
    <div>
      <div>
        {drives?(
            <>
            <ul>
            {drives.map((drive)=>(
              <div key={drive.id}>
                <p> <b>Company Name:</b>{drive.companyName}</p>
                <p><b>jobTitle:</b> {drive.jobTitle}</p>
                <p><b>jobTitle:</b> {drive.jobLocation}</p>
                <p><b>jobTitle:</b> {drive.package}</p>
                <p><b>jobTitle:</b> {drive.skills}</p>
                {/* <p><b>End Date:</b>{drive.endDate.toLocaleString()}</p> */}
              </div>
            ))}
            </ul>
            </>
        ):(
          <>
          <p>No drives are added at</p>
          </>
        )}
      </div>
    </div>
  )
}

export default User
