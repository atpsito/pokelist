import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function SolutionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen items-center">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
