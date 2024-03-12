import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { FormControl, Input, InputLabel, Stack } from '@mui/material';
import { Bounce, toast } from 'react-toastify';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalDuc({ onUpdateUser }) {
  // console.log(user);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = React.useState("");
  const [mssv, setMssv] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const storedUser = localStorage.getItem('user');
  if (!storedUser) {
    const user = {
      'name': 'Trương Công Đức',
      'mssv': 'PK03303',
      'phone': '0706252156',
      'address':'160 Ymoan, bmt'
    }
    localStorage.setItem('user', JSON.stringify(user));
  }
  const handleUser = () => {
    if (name === '' || mssv === ''|| phone === ''|| address === '') {
      toast.error('Không Được bỏ trống!', {
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
    } else {
      const user = {
        'name': name,
        'mssv': mssv,
        'phone': phone,
        'address': address
      }
      localStorage.setItem('user', JSON.stringify(user));
      onUpdateUser(user); // Gọi hàm onUpdateUser để cập nhật thông tin người dùng ở component cha
      toast.success('Sửa Thành Công!', {
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
      handleClose();
    }
    // console.log(user);
}
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  const handleMssvChange = (event) => {
    setMssv(event.target.value);
  }
  const handlePhoneChange=(event) => { 
    setPhone(event.target.value);
  }
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  }
  return (
    <div>
      <Button onClick={handleOpen}>Sua  thong tin</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Stack spacing={2}>
            <FormControl>
              <InputLabel htmlFor="my-input">Tên</InputLabel>
              <Input id="my-input" value={name} onChange={handleNameChange} aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="mssv">MSSV</InputLabel>
              <Input id="mssv" value={mssv} onChange={handleMssvChange} aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="phone">phone</InputLabel>
              <Input id="phone" value={phone} onChange={handlePhoneChange} aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="address">address</InputLabel>
              <Input id="address" value={address} onChange={handleAddressChange} aria-describedby="my-helper-text" />
            </FormControl>
            <Button variant="contained" onClick={handleUser}>Lưu thông tin</Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
