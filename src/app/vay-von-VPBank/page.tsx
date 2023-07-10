/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import "./styleV.scss";
import { title } from "process";
export default function page() {
  return (
    <div className="bg-[#FEFFFF]">
      <section className="main-container mx-auto ">
        <div className="h-[68px] w-full bg-green-400"></div>
        <HomeContent />
        <Content2 />
        <Content3 />
        <Content4 />
        <Content5 />
        {/* <Content6 /> */}
        <div className="h-[1000px] w-full "></div>
      </section>
    </div>
  );
}

function HomeContent() {
  return (
    <div className="flex mt-[40px]">
      <div className="">
        <h1 className="w-[20ch] text-[#df1720] font-bold text-5xl leading-tight mb-[15px] tracking-[-0.015em]">
          VAY VỐN SIÊU TỐC KHÔNG THẾ CHẤP
        </h1>
        <p className="text-lg leading-7">
          Chương trình vay vốn dành cho khách hàng kinh doanh
        </p>
        <h4 className="font-bold text-lg leading-7 mb-8">
          sử dụng phần mềm Nhanh.vn hoặc kinh doanh trên sàn TMĐT.
        </h4>
        <ul className="leading-7 space-y-3">
          <li className="flex items-center gap-2">
            <img
              className=" h-[22px]"
              src="https://landing.nvncdn.net/business/124/check_20230626154008.png"
              // width="22px"
              // height="22px"
              alt=""
            />
            Giải ngân tối đa trong 3 ngày
          </li>
          <li className="flex items-center gap-2">
            <img
              className=" h-[22px]"
              src="https://landing.nvncdn.net/business/124/check_20230626154008.png"
              // width="22px"
              // height="22px"
              alt=""
            />
            Lãi suất thấp nhất trên thị trường
          </li>
          <li className="flex items-center gap-2">
            <img
              className=" h-[22px]"
              src="https://landing.nvncdn.net/business/124/check_20230626154008.png"
              // width="22px"
              // height="22px"
              alt=""
            />
            Hạn mức vay không thế chấp lên tới 1 tỷ
          </li>
          <li className="flex items-center gap-2">
            <img
              className=" h-[22px]"
              src="https://landing.nvncdn.net/business/124/check_20230626154008.png"
              // width="22px"
              // height="22px"
              alt=""
            />
            Thời hạn vay tối đa 5 năm
          </li>
        </ul>
        <button className="mt-9 bg-[#df1720] font-bold text-xl leading-[30px] text-white py-1.5 px-3 rounded-lg">
          ĐĂNG KÝ NGAY
        </button>
      </div>
      <Image
        className="-mt-40"
        src="/assets/vaytpbank/asset 0.webp"
        width={387}
        height={0}
        alt={"aa"}
      />
    </div>
  );
}

function Content2() {
  return (
    <div className="">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-[25px] leading-[50px] text-[#df1720] pb-[16px] tracking-[-0.375px]">
          KHÓ KHĂN MÀ 80% CHỦ SHOP GẶP PHẢI
        </h1>
        <div className="bg-[#015aad] w-[245px] h-2 mb-9"></div>
      </div>
      <div
        className="grid grid-cols-3 bg-white rounded-lg pt-5 pb-[60px] relative"
        style={{ boxShadow: "0px 0px 25px 0px rgba(1, 90, 173, 0.08)" } as any}
      >
        <div className="flex justify-center items-center flex-col mb-[7px]">
          <div className="p-[9px]">
            <Icon1 />
          </div>
          <h5 className="text-center w-[17ch]">
            Vòng vốn không đủ để nhập hàng
          </h5>
        </div>
        <div className="flex justify-center flex-col items-center mb-[7px]">
          <div className="p-[9px]">
            <Icon2 />
          </div>
          <h5 className="text-center ">
            <span className="block">Không đủ vốn</span> để mở rộng kinh doanh
          </h5>
        </div>
        <div className="flex justify-center flex-col items-center mb-[7px]">
          <div className="p-[9px]">
            <Icon3 />
          </div>
          <h5 className="text-center w-[25ch]">
            Thiếu vốn mua tài sản cố định, thiết bị sản xuất
          </h5>
        </div>
        <div className="absolute bottom-[-24px] left-[50%] -translate-x-1/2">
          <button className="  mt-9 bg-[#df1720] font-bold text-xl leading-[30px] text-white py-2.5 px-5 rounded-lg animate-zoom">
            GIẢI PHÁP VAY VỐN KINH DOANH SIÊU TỐC
          </button>
        </div>
      </div>
      <div className="mt-[56px] flex justify-center">
        <Image
          src="/assets/vaytpbank/iconDown.svg"
          alt={"icon"}
          width={18}
          height={0}
          className=""
        />
      </div>
    </div>
  );
}

function Content3() {
  const LISTCONTENT3 = [
    {
      title: "Lãi suất 19%",
      color: "#015aad",
      listText: [
        ">=100 triệu ~ 25%/năm",
        ">=200 triệu ~ 22%/năm",
        ">=500 triệu ~ 19%/năm",
      ],
    },
    {
      title: "3 ngày",
      color: "#00b7",
      listText: ["Thời gian xét duyệt", "hồ sơ và giải ngân"],
    },
    {
      title: "1 tỷ",
      color: "#015aad",
      listText: ["Hạn mức vay tối đa", "300% doanh thu", "trung bình tháng"],
    },
    {
      title: "5 năm",
      color: "#00b741",
      listText: ["Thời hạn vay tối đa", "dành cho khách hàng"],
    },
    {
      title: "6 tháng",
      color: "#015aad",
      listText: ["Thời gian hoạt động", "kinh doanh tối thiểu"],
    },
  ];
  return (
    <div className="mt-10">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-[25px] leading-[50px] text-[#df1720] pb-[16px] tracking-[-0.375px]">
          TẠI SAO BẠN NÊN LỰA CHỌN GIẢI PHÁP NÀY?
        </h1>
        <div className="bg-[#015aad] w-[245px] h-2 mb-9"></div>
      </div>
      <div className="grid grid-cols-5 relative gap-3 mt-[20px]">
        {LISTCONTENT3.map((item, i) => (
          <div
            className="relative leading-[25px] pt-[37px]  min-w-[182px] min-h-[154px] even:bg-[#00b741]/20 odd:bg-blue-50/30 rounded-2xl "
            key={i}
            style={{ boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.1)" } as any}
          >
            {item.listText.map((item2, i2) => (
              <div className="text-center " key={i2}>
                {item2}
              </div>
            ))}
            {/* text-[${item.color}] border-[${item.color}] */}
            <button
              className={`absolute top-[-24px] -translate-x-1/2 left-1/2 text-[25px] leading-[45px] font-bold border border-dashed bg-white min-w-[133px] ${
                i % 2 === 0
                  ? "text-[#015aad] border-[#015aad]"
                  : "text-[#00b741] border-[#00b741]"
              } text-center rounded-xl p-1 whitespace-nowrap`}
            >
              {item.title}
            </button>
          </div>
        ))}
        <div className=" absolute bottom-[-124px] left-[50%] -translate-x-1/2">
          <button className="  mt-9 bg-[#df1720] font-bold text-xl leading-[30px] text-white py-2.5 px-5 rounded-lg whitespace-nowrap animate-zoom">
            ĐĂNG KÝ NGAY
          </button>
        </div>
      </div>
    </div>
  );
}

function Content4() {
  const LISTCONTENT4 = [
    {
      title: "Đăng ký",
      number: 1,
      textContent: "Khách hàng đăng ký vay vốn kinh doanh",
    },
    {
      title: "Xác thực doanh thu",
      number: 2,
      textContent:
        "Nhanh.vn xác thực lại doanh thu trên phần mềm Nhanh.vn hoặc sàn TMĐT để gửi tới VP Bank",
    },
    {
      title: "Thẩm định",
      number: 3,
      textContent:
        "VP Bank sẽ xét duyệt, tư vấn và thẩm định hồ sơ của khách hàng",
    },
    {
      title: "Giải ngân",
      number: 4,
      textContent: "VP Bank giải ngân cho khách hàng trong vòng tối đa 03 ngày",
    },
  ];
  return (
    <div className="mt-[183px]">
      <div className="flex flex-col items-center relative z-50">
        <h1 className="font-bold text-[25px] leading-[50px] text-[#df1720] pb-[16px] tracking-[-0.375px]">
          QUY TRÌNH VAY VỐN KINH DOANH KHÔNG THẾ CHẤP
        </h1>
        <div className="bg-[#015aad] w-[245px] h-2 mb-[50px]"></div>
        {/* <div className="bg-red-100 h-32 w-full"></div> */}

        <div className=" w-[630px] md:w-[770px] border-b-2 border-blue-50 absolute top-[150px] -z-10"></div>
        <div className="grid grid-cols-4 gap-[50px]">
          {LISTCONTENT4.map((item, i) => (
            <div className="flex flex-col text-center min-w-[200px]" key={i}>
              <div className="flex justify-center">
                <div className="w-[50px] h-[50px] bg-gradient-to-t to-[#015aad] from-[#00b741] rounded-full flex justify-center">
                  <span className=" text-[25px] font-bold leading-[50px] text-center w-full text-white">
                    {item.number}
                  </span>
                </div>
              </div>
              <h4 className="font-bold text-lg leading-5 mt-4">{item.title}</h4>
              <p className="leading-[25px] mt-2.5">{item.textContent}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="mt-[80px]">
      <h1 className="text-center font-bold text-[25px] leading-[50px] text-[#df1720] tracking-[-0.375px]">
        BẠN CẦN TƯ VẤN THÊM ?
      </h1>
      <p className="leading-[25px] text-center">
        Hãy để lại thông tin để được Nhanh tư vấn nhé!
      </p>
      <Image
        className=""
        src="/assets/vaytpbank/bg.svg"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }} // optional
        alt={"aa"}
      />
      <Image
        className=""
        src="/assets/vaytpbank/bg.svg"
        layout="fill"
        objectFit="contain"
        alt={"aa"}
      />
    </div>
  );
}

function Content6() {
  return <div className="">MỘT SỐ CÂU HỎI THƯỜNG GẶP</div>;
}

function Icon1() {
  return (
    <svg
      width="100%"
      viewBox="0 0 512 512"
      className=" w-8 h-8 fill-indigo-500"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"></path>
    </svg>
  );
}
function Icon2() {
  return (
    <svg
      width="100%"
      viewBox="0 0 512 512"
      className=" w-8 h-8 fill-indigo-500"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M256 416c114.9 0 208-93.1 208-208S370.9 0 256 0 48 93.1 48 208s93.1 208 208 208zM233.8 97.4V80.6c0-9.2 7.4-16.6 16.6-16.6h11.1c9.2 0 16.6 7.4 16.6 16.6v17c15.5.8 30.5 6.1 43 15.4 5.6 4.1 6.2 12.3 1.2 17.1L306 145.6c-3.8 3.7-9.5 3.8-14 1-5.4-3.4-11.4-5.1-17.8-5.1h-38.9c-9 0-16.3 8.2-16.3 18.3 0 8.2 5 15.5 12.1 17.6l62.3 18.7c25.7 7.7 43.7 32.4 43.7 60.1 0 34-26.4 61.5-59.1 62.4v16.8c0 9.2-7.4 16.6-16.6 16.6h-11.1c-9.2 0-16.6-7.4-16.6-16.6v-17c-15.5-.8-30.5-6.1-43-15.4-5.6-4.1-6.2-12.3-1.2-17.1l16.3-15.5c3.8-3.7 9.5-3.8 14-1 5.4 3.4 11.4 5.1 17.8 5.1h38.9c9 0 16.3-8.2 16.3-18.3 0-8.2-5-15.5-12.1-17.6l-62.3-18.7c-25.7-7.7-43.7-32.4-43.7-60.1.1-34 26.4-61.5 59.1-62.4zM480 352h-32.5c-19.6 26-44.6 47.7-73 64h63.8c5.3 0 9.6 3.6 9.6 8v16c0 4.4-4.3 8-9.6 8H73.6c-5.3 0-9.6-3.6-9.6-8v-16c0-4.4 4.3-8 9.6-8h63.8c-28.4-16.3-53.3-38-73-64H32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32z"></path>
    </svg>
  );
}
function Icon3() {
  return (
    <svg
      width="100%"
      viewBox="0 0 512 512"
      className=" w-8 h-8 fill-indigo-500"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"></path>
    </svg>
  );
}
