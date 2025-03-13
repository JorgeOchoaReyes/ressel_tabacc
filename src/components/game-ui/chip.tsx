import React from "react"; 

export const Chips: React.FC<{total?: number}> = ({
  total
}) => {
  return (
    <div className="flex flex-row gap-4 rounded-full w-[150px] h-[150px] bg-[#B5B7BB] items-center justify-center">
      <div className="bg-orange-500 w-[105px] h-[105px] rounded-full flex items-center justify-center">
        <p className="text-4xl font-bold text-slate-200">
          {!total ? "" : total}
        </p>
      </div>
    </div>
  );
};