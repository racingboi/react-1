import React, { useCallback } from 'react';

const PrintComponent = () => {
  const printDocument = useCallback(() => {
    window.print();
  }, []);

  return (
    <div>
      <button onClick={printDocument}>In Tài Liệu</button>
      <div id="print-section">
        {/* Nội dung bạn muốn in */}
        <h1>Chào mừng đến với trang in của chúng tôi!</h1>
      </div>
    </div>
  );
}

export default PrintComponent;
