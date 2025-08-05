import React, { useEffect, useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MdContentCopy } from "react-icons/md";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };
  const [user, setUser] = useState({
    name: "",
    referralCode: "",
    amountRaised: 0,
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  const handleReferral = (e) => {
    e.preventDefault();
    if (user?.referralCode) {
      navigator.clipboard.writeText(user.referralCode);
      toast.success("Referral code copied!");
    }
  };

  return (
    <Card className="w-2xl max-h-40 flex gap-2 ">
      <CardHeader>
        <CardTitle className="text-3xl">{user.name}</CardTitle>
        <CardAction>
          <Button
            variant="outline"
            className=" bg-[#0A174E] text-white font-bold cursor-pointer"
            onClick={handleLogout}
          >
            Log out
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex gap-2 flex-col">
        <div className="flex gap-1 items-center">
          <p className="font-medium">Your Referral code :</p>
          <p>{user.referralCode}</p>
          <button onClick={handleReferral} className="cursor-pointer">
            <MdContentCopy />
          </button>
        </div>
        <div className="flex gap-1">
          <p>Donations raised :</p>
          <p>₹{user.amountRaised}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Dashboard;
