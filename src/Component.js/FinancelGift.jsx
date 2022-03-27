import React from "react";

const content = {
  firstTitle : "مميزات اضافية لعرض رمضان لهذا العام",
  firstContent : [
    `سوف يظهر لك مبلغ الايداع مع البونص الذي سوف ادخل مبلغ الايداع واضغط على احسب البونص`,
    `10 بطاقات سحب ارباح مجانية لعدد 10 من الفائزين حيث قيمة البطاقة 80 دولار امريكي`,
    `اسحب ارباحك دون خوف لمرة واحدة فقط`
  ],
}
const FinancelGift = () => {
  return (
    <div
      className="offers flex lg:flex-row justify-between lg:items-start md:flex-col  md:justify-end md:items-end lg:mt-28  lg:gap-44 "
      style={{ maxWidth: 828 }}
      id="offers"
    >
      <div className="fin-content" style={{ minWidth:260 ,maxWidth:350}}>
        <h4 className="fin-title mb-2 font-bold text-4xl" >{content.firstTitle}</h4>
        {content.firstContent.map(content => <p className="points">{content}</p>)}
        <img width={215} src={require('../Assets/mony.png')} />
      </div>
      <div
        className="flex flex-col max-w-sm  relative"
        style={{ minWidth: 366, maxWidth: 401 }}
      >
        <p
          className=" text-right font-bold text-white  "
          style={{ letterSpacing: -0.15, fontSize: 40 }}
        >
          عرض{" "}
          <span className="text-amber-400">
            {" "}
            الجوائز المالية
            <br />{" "}
          </span>
        </p>
        <p
          className="text-white font-bold text-right mt-2"
          style={{ letterSpacing: -0.15, fontSize: 18 }}
        >
          سوف تقوم اف اكس دي دي بالسحب على 300 جائزه نقدية بقيم مختلفه لكل جائزة
          موزعه على مدار الشهر الكريم ويدخل في السحوبات كل العملاء الذين قاموا
          بدعم حساباتهم طول الشهر الكريم. سوف يتم وضع مبلغ الجائزه في نفس الحساب
          الذي تم فيه الايداع ويمكن استخدامها في التداول والهامش وسحب الارباح
          المحققه منها
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

export default FinancelGift;
