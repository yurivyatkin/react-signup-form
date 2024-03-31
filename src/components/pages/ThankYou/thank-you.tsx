import { Shell } from "@/components/layout/Shell";
import { Card, CardContent } from "@/components/ui/Card";

function ThankYouPage() {
  return (
    <Shell className="[background:linear-gradient(150deg,rgb(79,147,255)_22.94%,rgb(216,170,250)_77.55%)]">
      <div className="absolute bottom-0 bg-wave bg-no-repeat bg-[center] bg-contain h-[50vh] w-full "></div>
      <Shell className="flex items-center justify-center">
        <Card className="flex items-center justify-center w-[500px] h-[90vh] bg-[#ffffff3d] rounded-[20px]">
          <CardContent>
            <h1 className="text-white text-3xl">Thank you for signing up!</h1>
          </CardContent>
        </Card>
      </Shell>
    </Shell>
  );
}

export { ThankYouPage };
