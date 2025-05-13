'use client';

import MobileFrame from "@/components/layout/MobileFrame";

export default function QuestionPage({questionIndex}) {
  

  return (
    <>
      <MobileFrame>
        QuestionPage: Q{questionIndex + 1}
      </MobileFrame>
    </>
  );
}
