import React from "react";
import Dashboard from "./Dashboard";
import LeaderBoard from "./LeaderBoard";

const Page = () => {
 

  return (
    <div className="bg-[#F5D042] w-[100vw] h-[100vh] flex flex-col items-center gap-2 pt-[50px]">
      <Dashboard />
      <LeaderBoard />
    </div>
  );
};

export default Page;
