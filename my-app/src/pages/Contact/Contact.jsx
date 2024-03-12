import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';
import ModalDuc from '../../component/Modal/Modal';

function Contact() {
  const [fullName, setFullName] = useState('');
  // tạo hàm điều hướng dưới tên navigate
  const navigate = useNavigate();
  const [mssv, setMssv] = useState('');
  const [submittedData, setSubmittedData] = useState(null);
  const handleSaveChanges = () => {
   const user = {
      'name' : fullName,
      'mssv': mssv
    }
    localStorage.setItem('user', JSON.stringify(user));
    toast.success('Sửa thành công!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    navigate('/cv');
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
    </div>
  );
}
export default Contact;
