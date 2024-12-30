import { MessagesSquare } from "lucide-react";
import Card from "./ui/Card";

export default function Section1() {
  return (
    <div className="py-12 font-raleway w-full">
      <div className="flex flex-col gap-6 w-full">
        <h3 className="text-[#FF0000] text-2xl text-center font-semibold capitalize">As a paid member,</h3>
        <h1 className="text-[#0E1F51] text-3xl md:text-5xl text-center  max-w-screen-2xl w-[90%] 2xl:w-[60%] mx-auto capitalize font-semibold">
          You’ll Get An Opportunity to reach your target audiences in Africa
          through...
        </h1>
        <div className="w-[90%] max-w-screen-2xl gap-6 justify-center flex flex-wrap mx-auto">
            <Card icon={<MessagesSquare color="#FF0000" size={60}/>} title="WhatsApp Chat" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry." num="01"/>
            <Card icon={<MessagesSquare color="#FF0000" size={60}/>} title="WhatsApp Chat" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry." num="01"/>
            <Card icon={<MessagesSquare color="#FF0000" size={60}/>} title="WhatsApp Chat" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry." num="01"/>
            <Card icon={<MessagesSquare color="#FF0000" size={60}/>} title="WhatsApp Chat" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry." num="01"/>

        </div>
        <div className="text-[#0E1F51] text-xl font-bold text-center">and many more...</div>
      </div>
    </div>
  );
}
