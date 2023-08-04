import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";

export default function CardS({ item }) {
  return (
    <Card className="w-[300px] h-[400px] shadow-md p-0 relative">
      <CardHeader className="w-full">
        <Image
          src={
            "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
          }
          width="300"
          height="200"
          alt=""
        />

        <span className="absolute top-1/2 px-2 py-1 bg-purple-500 rounded-r-md shadow-md text-white  left-0">
          Popular ✨
        </span>
      </CardHeader>
      <CardContent className="py-2">
        <span className="flex justify-start items-center w-full text-right py-4 my-2">
          <h3 className="text-xl text-purple-700">${item.price}</h3>/month
        </span>
        <h4>{item.name}</h4>
        <p className="text-slate-400">{item.address}</p>
      </CardContent>
      <CardFooter className="flex justify-center items-center gap-3 text-muted">
        <span className="text-slate-600">{item.beds} Beds</span>
        <span className="text-slate-600">
          {item.bathroom}
          Bathrooms
        </span>
        <span className="text-slate-600 text-base">{item.area} &#13217;</span>
      </CardFooter>
    </Card>
  );
}
