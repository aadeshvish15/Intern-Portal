import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const LeaderBoard = () => {
  const [users, setUsers] = useState([]);

  const getleaderBoardData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/getleaderboard`
      );

      const data = await response.json();
      if (data.success) {
        setUsers(data.leaderboard);
      } else {
        console.error("Failed to fetch leaderboard");
      }
      // console.log(data);
    } catch (error) {
      console.log(
        "There was a problem in fetching the leaderboard data",
        error
      );
    }
  };

  useEffect(() => {
    getleaderBoardData();
  }, []);

  return (
    <Card className="w-[600px] mx-auto p-4">
      <CardHeader className="flex justify-center">
        <CardTitle className="text-2xl">🏆 Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] rounded-md border border-black">
          <Table className="w-full">
            <TableHeader className="sticky top-0 z-50 bg-[#0A174E] ">
              <TableRow>
                <TableHead className="text-center text-white w-[80px]">Rank</TableHead>
                <TableHead className="text-center text-white">Name</TableHead>
                <TableHead className="text-right text-white w-[150px] pr-4">
                  Amount Raised
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.length > 0 ? (
                users.map((user, i) => (
                  <TableRow key={user._id}>
                    <TableCell className="text-center font-medium">
                      {i + 1}
                    </TableCell>
                    <TableCell className="text-center">{user.name}</TableCell>
                    <TableCell className="text-right pr-4">
                      ₹{user.amountRaised}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="text-center">
                    No data available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default LeaderBoard;
