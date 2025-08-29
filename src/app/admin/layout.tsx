// app/admin/layout.tsx
export const metadata = {
  title: "Admin",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* ⚡️ No Nav, no Footer */}
        {children}
      </body>
    </html>
  );
}
