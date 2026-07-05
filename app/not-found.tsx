import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-background text-foreground">
      <h2 className="text-4xl font-bold mb-4">404</h2>
      <p className="mb-4">Page Not Found</p>
      <Link href="/" className="px-4 py-2 bg-primary text-white rounded">
        Return Home
      </Link>
    </div>
  );
}
