import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden relative z-10">
        {/* Top Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-10">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
