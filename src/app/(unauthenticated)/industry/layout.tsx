// import AgentSidebar from "./_components/AgentSidebar";

// import AgentSidebar from "@/components/AgentSidebar";
// import Feautured from "@/components/Feautured";



export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return(
        <div className="flex flex-wrap py-12 gap-4 w-[80%] max-w-screen-2xl mx-auto">
          {/* <div className="md:w-[70%]"> */}
            {children}
    {/* <div className="md:w-[28%] ">
      <div className="sticky top-4 right-0 ">
        <div className="flex flex-col gap-10">
      
      <Feautured/>
      <AgentSidebar/>
      </div>
      </div>
    </div> */}
            </div>
    )
}