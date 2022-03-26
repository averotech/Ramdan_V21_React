import React from "react";

const EidGift = () => {
  return (
    <div
      className="flex flex-col align-middle mt-44"
      style={{ alignItems: "center"}}
      id="EidGift"
    >
      <div
        className=" flex lg:flex-row lg:justify-between md:flex-col md:justify-end md:mb-8 relative gap-x-40 h-2/4"
        id="EidDiv"
        style={{ alignItems: "center", alignSelf: "center",maxWidth:828  }}
      >
        <div className="flex flex-col w-80  items-center">
          <img style={{ maxWidth:'200%' }}
            className="bg-no-repeat bg-cover "
            src={require("../Assets/ihpone13.png")}
          />
        </div>
        <div className="flex flex-col max-w-sm " style={{ maxWidth: 401 }}>
          <p
            className=" text-right font-bold text-white"
            style={{ letterSpacing: -0.15, fontSize: 40 }}
          >
            جائزة
            <span className="text-amber-400">
              
              العيد الكبرى
              <br />
            </span>
          </p>
          <p
            className="text-white font-bold text-right mt-2"
            style={{ letterSpacing: -0.15, fontSize: 18 }}
          >
            سوف يتم السحب على جائزة العيد الكبرى وهي جهاز
            <span className="text-amber-400"> أيفون 13 برو ماكس </span>
            وهو احدث اجهزة الايفون الفخمة. سوف يتم السحب على الجائزه من بين كل
            العملاء الذين اودعوا وتداولاوا خلال الشهرالكريم.
          </p>
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
      <button className="bg-transparent relative hover:bg-blue-500 text-lg text-white font-semibold max-w-xs hover:text-white py-2 px-4 border border-white hover:border-transparent rounded mb-48">
        <a
          href="https://s3.amazonaws.com/static.fxdd.com/uploads/1617913603.pdf"
          target="_blank"
        >
          شروط العرض
        </a>
      </button>
    </div>
  );
};

export default EidGift;
