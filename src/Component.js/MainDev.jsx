import React from "react";

const MainDev = () => {
  return (
    <div
      className="main flex lg:flex-row justify-between lg:items-start md:flex-col  md:justify-end md:items-end md:mt-8 md:mb-12  lg:gap-44 lg:mt-40 "
      id="main"
      style={{ maxWidth: 828 }}
    >
      <div className="flex flex-col " style={{ maxWidth: 315, minWidth: 315 }}>
        <p
          className="text-3xl text-right font-bold text-white leading-10 "
          style={{ letterSpacing: -0.15, }}
        >
          رمضان كريم
        </p>
        <p
          className="text-white  font-bold text-right pt-3 sm:mb-16 "
          style={{ letterspacing: -0.15,fontSize:18 }}
        >
          طوال خمسة عشرة عاما حرصت اف اكس دي دي على مشاركة عملائها الكرام
          في الوطن العربي بالاحتفال بشهر رمضان الكريم بعروض حصرية مميزه هذا
          العام يسعدنا ان نشارككم أقوى عروضنا بجوائز مالية نقدية تتجاوز 30 ألف
          دولار واجمالي مكافئات مالية غير مسبوقة تتجاوز اكثر من 100 ألف دولار
         بالأضافة الى الجوائز العينية القيمة الفخمة
        </p>
      </div>
      <div className="flex flex-col align-middle" style={{ minWidth: 240,maxWidth:320 }}>
        <p
          className="text-right text-white  font-bold"
          style={{ letterspacing: -0.15,  fontSize: 36 }}
        >
          <span
            className="font-Montserrat text-amber-400"
            style={{ letterspacing: -0.15,  fontSize: 37 }}
          >
            FXDD
          </span>
          عروض
          <br />
          لشهر رمضان كريم
        </p>
        <div className="flex flex-row justify-end pt-1 items-center">
          <p
            className=" text-white font-normal leading-10 pr-1.5 mb-1 "
            style={{ letterSpacing: -0.15, fontSize: 17.5 }}
          >
            جوائز مالية نقدية باكثر من <span className="font-bold " style={{ fontWeight:1000,fontSize:17.5 }}>30 الف دولار</span>
          </p>
          <span
            className="h-2 w-2 mb-1 bg-amber-400 inline-block "
            style={{ borderRadius: "50%" }}
          ></span>
        </div>
        <div className="flex flex-row justify-end items-center -mt-3">
          <p
            className=" mt-1.5 text-white font-normal leading-10 pr-1.5"
            style={{ letterSpacing: -0.15, fontSize: 17.5  }}
          >
             اجمالي بوانص تصل الى <span style={{ fontWeight:1000,fontSize:17.5 }}>100 الف دولار</span>
          </p>
          <span
            className="h-2 w-2 mt-1 bg-amber-400 inline-block"
            style={{ borderRadius: "50%" }}
          ></span>
        </div>
        <div className="flex flex-row justify-end mt-4">
          <a
            className="bg-white flex justify-center text-slate-800 font-bold  mr-1.5 rounded-lg text-center"
            style={{ minWidth: 111,fontSize:14,height:42 ,alignItems:"center"}}
            href="https://www.fxddtrading.com/bm/ar/trading/deposit"
            target="_blank"
          >
            اودع المال
          </a>
          <a
            href="https://fxdemo.fxdd.com/olreg/applyonline/LiveRegistrationInfoAction?ibrokerCode=FXDD_L000B&languageId=ar_SA"
            target="_blank"
            className="bg-transparent flex justify-center hover:bg-amber-400 font-bold text-white max-w-xs hover:text-white px-4 border text-center border-white items-center hover:border-transparent rounded-lg"
            style={{ minWidth: 145,fontSize:14,height:42,alignItems:"center" }}
          >
            افتح حساب الان
          </a>
        </div>
      </div>
    </div>
  );
};
export default MainDev;
