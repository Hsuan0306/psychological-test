'use client';

import { useState } from 'react';
import { DatePicker, Space } from 'antd';
import CalenderPage from '@/components/CalenderPage';


export default function TestUI() {
  
  const onChange = (date, dateString) => {
    console.log(date, dateString);
    alert("你選的是：" + dateString);
  };

  return (
    <div className="w-screen h-screen bg-gray-200 flex justify-center items-center gap-5 flex-wrap overflow-auto">
      {/* <DatePicker onChange={onChange} needConfirm /> */}
      
      <CalenderPage year="2025" month="五" date="01" weekday="四"></CalenderPage>
      <CalenderPage year="2025" month="五" date="02" weekday="五"></CalenderPage>
      <CalenderPage year="2025" month="五" date="03" weekday="六"></CalenderPage>
      <CalenderPage year="2025" month="五" date="04" weekday="日"></CalenderPage>
      <CalenderPage year="2025" month="五" date="05" weekday="一"></CalenderPage>
      <CalenderPage year="2025" month="五" date="06" weekday="二"></CalenderPage>
      <CalenderPage year="2025" month="五" date="07" weekday="三"></CalenderPage>

    </div>
  );
}
