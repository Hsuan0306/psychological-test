'use client';

import MobileFrame from "@/components/layout/MobileFrame";
import Image from "next/image";
import titleImg from '@/../public/0.start/title.svg';
import startBtn from '@/../public/0.start/startBtn.png';
import circle2Img from '@/../public/1.question/blur-circle-2.png';
import bread1Img from '@/../public/1.question/bread-up.png';
import bread2Img from '@/../public/1.question/bread-down.png';
import { usePsyStore, useQuestionStore } from "@/app/store/store";


export default function QuestionPage({questionIndex, nextStep}) {
  
  const questionData = useQuestionStore((state) => state);

  const clickAnswer = function(){
    nextStep();
    console.log("click!");
  }

  return (
    <>
      <MobileFrame>
        <Image className="absolute top-0 -translate-y-1/2" src={circle2Img} alt='circle2'/>
        
        <div className="flex flex-col items-center gap-[26px]">

          <Image src={bread1Img} className='w-[88px] mb-[30px]' alt='bread1Up' />
          
          <div className="text-[#90B62A] border-2 border-[#90B62A] rounded-full w-[48px] h-[48px] flex justify-center items-center font-bold text-[20px]">
            Q{questionIndex + 1}
          </div>
          
          <div className="text-center font-extrabold text-[28px] text-[#90B62A] mb-[30px]">麵包師傅要你「靜置 30 分鐘」，你會怎麼做？</div>
          
          <div className=" bg-[#BEE351] w-full rounded-full text-white text-[16px] font-medium p-5
          flex justify-center items-center shadow-[0px_4px_0px_1px_#90B62A] cursor-pointer hover:translate-y-0.5 transition"
          onClick={clickAnswer}>
            乖乖待著… 然後偷偷膨脹三倍大
          </div>

          <div className=" bg-[#BEE351] w-full rounded-full text-white text-[16px] font-medium p-5
          flex justify-center items-center shadow-[0px_4px_0px_1px_#90B62A] cursor-pointer hover:translate-y-0.5 transition">
            等個屁！我已經開始發酵狂飆了
          </div>
          <div className=" bg-[#BEE351] w-full rounded-full text-white text-[16px] font-medium p-5
          flex justify-center items-center shadow-[0px_4px_0px_1px_#90B62A] cursor-pointer hover:translate-y-0.5 transition">
            發…什麼？我忘記了，我睡著了
          </div>

          <Image src={bread2Img} className='w-[88px] mt-[30px]' alt='bread2Up' />

        </div>

        <Image className=" absolute bottom-0 translate-y-1/2" src={circle2Img} alt='circle2'/>
        
      </MobileFrame>
    </>
  );
}
