
import AgentSidebar from "../../../components/AgentSidebar";


export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-wrap py-12 justify-center  w-[80%] max-w-screen-2xl mx-auto">
      {children}
      <div className="md:w-[30%]">
        <h2 className="flex items-center gap-2 text-lg justify-end mb-14">
          {/* See All
          <ArrowRight color="#043A53" /> */}
        </h2>
        <AgentSidebar />

      </div>
    </div>
  );
}
