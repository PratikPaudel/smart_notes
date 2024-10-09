import NavBar from "@/app/notes/NavBar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavBar />
      <main className="m-auto max-w-7xl p-4">{children}</main>
    </div>
  );
}
