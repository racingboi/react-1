import React, { useState } from 'react';

function Contact() {
  const [fullName, setFullName] = useState('');
  const [mssv, setMssv] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSaveChanges = () => {
    // Cập nhật submittedData với dữ liệu mới
    setSubmittedData({ fullName, mssv });
  };

  return (
    <div className="col-6 offset-3">
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
      {/* Hiển thị dữ liệu đã submit */}
      {submittedData && (
        <div>
          <p>Full Name: {submittedData.fullName}</p>
          <p>MSSV: {submittedData.mssv}</p>
        </div>
      )}
    </div>
  );
}
export default Contact;
