const dynamic = "force-dynamic";

export default function SecondLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2>Second Layout</h2>
      {children}
    </div>
  );
}
