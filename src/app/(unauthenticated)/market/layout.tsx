// import AgentSidebar from "./_components/AgentSidebar";

// import Feautured from "@/components/Feautured";
// import Searchbar from "./_components/Searchbar";


export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return(
        <div className="flex flex-wrap py-12 gap-6 w-[80%] max-w-screen-2xl mx-auto">
          {/* <div className="md:w-[70%]"> */}
            {children}
    {/* <div className="md:w-[25%] ">
      <div className="sticky top-4 right-0 ">
        <div className="flex flex-col gap-10">
      <Searchbar/>
      <Feautured/>
      </div>
      </div>
    </div> */}
            </div>
    )
}