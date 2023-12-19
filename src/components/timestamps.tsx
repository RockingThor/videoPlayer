import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Timestamps() {
  return (
    <div className="p-2 w-full">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Timestamps</CardTitle>
          <CardDescription>Click to expand to deep dive</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex justify-between">
          <Button>Close</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
