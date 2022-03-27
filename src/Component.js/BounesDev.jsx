import React, { useEffect, useState } from "react";

const BounesDev = () => {
  const [amount, setAmount] = useState(null);
  const [bounes, setBounes] = useState(1);
  const [activeBounesClass, setActiveBounesClass] = useState(false);

  const handelChangeBounes = (e) => {
    setAmount(e.target.value);
    setActiveBounesClass(false);
  };
  // console.log(activeBounesClass);
  const handelBounes = (e) => {
    setActiveBounesClass(true);
    e.preventDefault();
  };
  useEffect(() => {
    cheakBounes();
  }, [amount]);
  const cheakBounes = () => {
    if (amount <= 250) {
      setBounes(amount * 1.2);
    } else if (250 < amount <= 1000) {
      setBounes(amount * 1.5);
    } else {
      setBounes(1500 + (amount - 1000) * 1.2);
    }
  };

  return (
    <div
      className="bonus flex lg:flex-row justify-between lg:items-start md:flex-col  md:justify-end md:items-end md:mt-8 md:mb-12 lg:mb-0  lg:gap-44"
      
      style={{ alignItems: "flex-start", maxWidth: 828 }}
      id="bouns"
    >
      <div className="flex flex-col align-middle md:-mt-10 lg:mt-0" style={{ maxWidth: 360,minWidth:220 }}>
        <p
          className=" text-right  text-white  font-bold "
          style={{ fontSize: 36, letterSpacing: 0.15 }}
        >احسب البونص
        </p>
        <p
          className=" text-right font-bold pt-1.5 text-white "
          style={{ fontSize: 18, letterSpacing: 0.15 }}
        >
          سوف يظهر لك مبلغ الايداع مع البونص الذي ادخل مبلغ الايداع واضغط على
          احسب البونص وتحصل علية
        </p>
        <div className="flex flex-row justify-end mt-3">
          <div
            className={
              activeBounesClass == true
                ? "bg-amber-400 hover:bg-amber-400 text-center items-center text-white text-lg font-semibold hover:text-white  border border-white hover:border-transparent rounded "
                : "hidden"
            }
            style={{ minWidth: 112,alignItems:'center',height:42 }}
          >
            <span>{bounes}</span>
          </div>
          <button
            className="bg-white  text-center hover:bg-amber-400 text-slate-800 felx justify-center  rounded inline-flex items-center ml-1"
            style={{ minWidth: 112,alignItems:'center',height:42,fontSize:16 }}
            onClick={handelBounes}
          >احسب البونص
          </button>
          <input
            className="bg-transparent text-center items-center appearance-none border-2  border-gray-200 rounded w-16 felx justify-center text-white leading-tight focus:outline-none  focus:border-white"
            style={{ minWidth: 102,alignItems:'center',height:42 }}
            onChange={handelChangeBounes}
          />
        </div>
      </div>

      <div
        className="flex flex-col align-top md:mt-12 lg:mt-0  md:mb-12 lg:mb-0 "
        style={{ maxWidth: 360, minWidth: 360 }}
      >
        <p
          className=" text-right font-bold text-white leading-10 "
          style={{ letterSpacing: -0.15, fontSize: 44 }}>
           عروض  <span className="text-amber-400">
            البونص
            <br />
          </span>
        </p>
        <p
          className="text-white font-bold text-right mt-4"
          style={{ fontSize: 17,letterSpacing: -0.15,   }}
        >
          يسر أف أكس دي دي تقديم عرض بونص شهر رمضان المميز على الحسابات ذات
          الاسبرد المتحرك والثابت والتي تصل الى 50% من قيمة الايداع. لمعرفة حجم
          البونص الذي سوف تحصل علية كل ما عليك القيام به هو استخدام الحاسبة
          التاليه لمعرفة حجم البونص الذي سوف تحصل عليه
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
  );
};

export default BounesDev;
