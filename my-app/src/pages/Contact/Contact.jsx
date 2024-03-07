import React, { useState } from 'react';

function Contact() {
  const [fullName, setFullName] = useState('');
  const [mssv, setMssv] = useState('');


  const handleSaveChanges = () => {
    console.log(fullName, mssv);
  };
  return (
    <div className="col-6 offset-3">
      {/* <h1>
        <p>Full Name: {fullName}</p>
        <p>mssv: {mssv}</p>
      </h1> */}
      <div className="card">
        <div className="card-body">
          <div className="row mb-3">
            <div className=" text-secondary">
              <h6 className="mb-0">Full Name</h6>
              <input
                type="text"
                className="form-control"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className=" text-secondary">
              <h6 className="mb-0">Mã số sinh viên</h6>
              <input
                type="text"
                className="form-control"
                value={mssv}
                onChange={(e) => setMssv(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-9 text-secondary">
              <input
                type="button"
                className="btn btn-primary px-4"
                value="Save Changes"
                onClick={handleSaveChanges}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
