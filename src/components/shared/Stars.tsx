import { Star } from "lucide-react";
import React from "react";

export default function Stars({ amount }: { amount: number }) {
  return (
    <div>
      {[...Array(amount)].map((_, index) => (
        <Star
          key={index}
          className="h-5 w-5 inline-flex text-green-600 fill-green-600"
        />
      ))}
    </div>
  );
}
