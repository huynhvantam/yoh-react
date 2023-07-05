import React from "react";

export default function page() {
  return (
    <section className="main-container mx-auto bg-red-100">
      <HomeContent />
      {/* <Content2 />
      <Content3 />
      <Content4 />
      <Content5 />
      <Content6 /> */}
    </section>
  );
}

function HomeContent() {
  return (
    <div className="">
      <div className="">
        <h1 className="w-[15ch]">VAY VỐN SIÊU TỐC KHÔNG THẾ CHẤP</h1>
        <h4>
          Chương trình vay vốn dành cho khách hàng kinh doanh sử dụng phần mềm
          Nhanh.vn hoặc kinh doanh trên sàn TMĐT.
        </h4>
        <ul>
          <li>Giải ngân tối đa trong 3 ngày</li>
          <li>Lãi suất thấp nhất trên thị trường</li>
          <li>Hạn mức vay không thế chấp lên tới 1 tỷ</li>
          <li>Thời hạn vay tối đa 5 năm</li>
        </ul>
      </div>
    </div>
  );
}

function Content2() {
  return <div className="">KHÓ KHĂN MÀ 80% CHỦ SHOP GẶP PHẢI</div>;
}

function Content3() {
  return <div className="">TẠI SAO BẠN NÊN LỰA CHỌN GIẢI PHÁP NÀY?</div>;
}

function Content4() {
  return <div className="">QUY TRÌNH VAY VỐN KINH DOANH KHÔNG THẾ CHẤP</div>;
}

function Content5() {
  return <div className="">BẠN CẦN TƯ VẤN THÊM ?</div>;
}

function Content6() {
  return <div className="">MỘT SỐ CÂU HỎI THƯỜNG GẶP</div>;
}
