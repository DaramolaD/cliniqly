import { PublicNavigation } from "@/components/customs/public-navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicNavigation />
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
} 