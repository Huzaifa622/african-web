import { Monitor } from "lucide-react";
import Card from "./ui/Card";

export default function Section3(){
    return(
        <div>
            <div className="flex flex-col gap-4 w-[80%] mx-auto max-w-screen-2xl py-12 font-raleway">
                <h1 className="capitalize text-[#0E1F51] font-bold text-center text-4xl">Featured Members</h1>
                <div className="flex flex-wrap gap-6 justify-center">
                    <Card icon={<Monitor color="#FF0000" size={60}/>} title="SEMINIS EAST AFRICA" className="w-[350px]" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                    <Card icon={<Monitor color="#FF0000" size={60}/>} title="SEMINIS EAST AFRICA" className="w-[350px]" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                    <Card icon={<Monitor color="#FF0000" size={60}/>} title="SEMINIS EAST AFRICA" className="w-[350px]" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                    <Card icon={<Monitor color="#FF0000" size={60}/>} title="SEMINIS EAST AFRICA" className="w-[350px]" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                    <Card icon={<Monitor color="#FF0000" size={60}/>} title="SEMINIS EAST AFRICA" className="w-[350px]" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                    <Card icon={<Monitor color="#FF0000" size={60}/>} title="SEMINIS EAST AFRICA" className="w-[350px]" para="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                </div>
                <div className="text-[#FF0000] text-right font-semibold text-xl">Browse All Featured Members</div>
            </div>
        </div>
    )
}