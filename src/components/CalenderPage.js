'use client';


export default function CalenderPage({year, month, date, weekday}) {
  

  return (
    <>
        <div className='relative bg-gray-50 rounded-2xl 
        flex items-center justify-center flex-col text-[#3228c3] p-5'> 
        <div className='flex justify-between gap-2 font-bold'>
            <div className=''> {year} </div>
            <div className=''> 乙巳年[蛇]四月初四 </div>
            <div className='' > {month}月 </div>
        </div>
        <div className='text-[220px] font-extrabold'> {date} </div>
        <div className='text-[70px] font-extrabold'> 星期{weekday} </div>
        </div>
    </>
  );
}
