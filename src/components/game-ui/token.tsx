import React from "react"; 

export const Token: React.FC<{total?: number}> = ({
  total
}) => {
  return (
    <div className="flex flex-row gap-4 rounded-full w-[100px] h-[100px] bg-[#B5B7BB] items-center justify-center">
      <div className="bg-orange-500 w-[70px] h-[70px] rounded-full flex items-center justify-center">
        <p className="text-4xl font-bold text-slate-200">
          {!total ? "" : total}
        </p>
      </div>
    </div>
  );
};