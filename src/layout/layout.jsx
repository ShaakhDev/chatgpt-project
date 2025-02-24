import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";

export function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full relative">
        <div className="flex justify-between p-5 absolute z-10 bg-[#242424] left-0 right-0">
          <SidebarTrigger />
          <div className="flex gap-2">
            <Button className="bg-white">Login</Button>
            <Button>Signup</Button>
          </div>
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
