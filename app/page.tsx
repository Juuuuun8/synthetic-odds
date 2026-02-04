import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-4">New App Template</h1>
      <p className="text-muted-foreground mb-4">
        ここから開発をスタートします。
      </p>
      <Button>Shadcn Button Test</Button>
    </div>
  );
}