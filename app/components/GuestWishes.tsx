"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function GuestWishes() {
  // Static mock data for the messages
  const initialWishes = [
    {
      id: 1,
      name: "Sokha & Bopha",
      message:
        "Congratulations! Wishing you a lifetime of love and happiness together.",
      date: "Mar 20",
    },
    {
      id: 2,
      name: "Dara",
      message:
        "So happy for both of you! Your wedding photos look absolutely stunning. 🥂",
      date: "Mar 21",
    },
    {
      id: 3,
      name: "Leakhena",
      message:
        "The traditional Khmer outfits are so beautiful! Wishing you the best.",
      date: "Mar 22",
    },
    {
      id: 4,
      name: "Sokha & Bopha",
      message:
        "Congratulations! Wishing you a lifetime of love and happiness together.",
      date: "Mar 20",
    },
    {
      id: 5,
      name: "Dara",
      message:
        "So happy for both of you! Your wedding photos look absolutely stunning. 🥂",
      date: "Mar 21",
    },
    {
      id: 6,
      name: "Leakhena",
      message:
        "The traditional Khmer outfits are so beautiful! Wishing you the best.",
      date: "Mar 22",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center gap-3 mt-8">
        <Image
          src="/images/icon4.png"
          alt="Icon Image"
          width={100}
          height={70}
          className="mx-auto rotate-180"
        />
        <p className="font-chenla font-bold text-gold-dark text-2xl text-center leading-relaxed">
          សារជូនពរ
        </p>
        <Image
          src="/images/icon4.png"
          alt="Icon Image"
          width={100}
          height={70}
          className="mx-auto"
        />
      </div>
      <div className="flex flex-col items-center gap-6 w-full max-w-[600px] p-8 border shadow-md rounded-xl bg-cream">
        {/* 2. Input Form */}
        <div className="w-full space-y-4 flex flex-col items-center">
          <Textarea
            placeholder="Name"
            className="min-h-[50px] bg-transparent border shadow-md focus-visible:ring-1"
          />
          <Textarea
            placeholder="Write your message here..."
            className="min-h-[100px] bg-transparent border shadow-md focus-visible:ring-1"
          />
          <button className="bg-gold-dark hover:bg-gold text-white p-2 rounded-md">
            Send message
          </button>
        </div>

        <Separator className="my-2" />

        {/* 3. Messages List (Scrollable) */}
        <ScrollArea className="h-[400px] w-full pr-4">
          <div className="flex flex-col gap-6">
            {initialWishes.map((wish) => (
              <div key={wish.id} className="flex gap-4 items-start">
                <Avatar className="h-10 w-10 border">
                  <AvatarFallback className="bg-transparent text-gold text-xs">
                    {wish.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-gold-dark">
                      {wish.name}
                    </h4>
                    <span className="text-[10px] text-muted-foreground uppercase">
                      {wish.date}
                    </span>
                  </div>
                  <div className="bg-transparent p-3 rounded-2xl rounded-tl-none border border-slate-200">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {wish.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </>
  );
}
