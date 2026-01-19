import Nav from "../nav/Navbar";
import Header from "../header/Header";
import Footer from "../footer/Footer";

interface LayoutProps {
    children: React.ReactNode;
}


function Layout({ children }: LayoutProps) {
    return (
        <div className="flex flex-col min-h-screen bg-neutral-950">
            <Nav />
            <div className="max-w-6xl mx-auto px-4 py-8 flex-1 w-full">
                <Header />
                <main className="space-y-8">
                    {children} {/* Render children components here, React will automatically render any nested components passed as children */}
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;