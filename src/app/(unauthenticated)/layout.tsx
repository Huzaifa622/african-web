import { Metadata } from "next";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";

export const metadata: Metadata = {
  title: "AAW",
  description: "All Africa Web",
};
export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return(
        <div>
            <Navbar/>
            {children}
            <Footer/>
            </div>
    )
}