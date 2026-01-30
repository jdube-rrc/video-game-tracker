import { Outlet } from "react-router-dom";
import Nav from "./nav/Navbar";
import Header from "./header/Header";
import Footer from "./footer/Footer";

interface LayoutProps {
  isEditing?: boolean;
  onToggleEdit?: () => void;
}

function Layout({ isEditing = false, onToggleEdit }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950">
      <Nav isEditing={isEditing} onToggleEdit={onToggleEdit} />
      <div className="max-w-6xl mx-auto px-4 py-8 flex-1 w-full">
        <Header />
        <main className="space-y-8">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
