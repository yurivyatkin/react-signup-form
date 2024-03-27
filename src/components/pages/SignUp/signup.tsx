import { Shell } from "@/components/layout/Shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

import { SignupForm } from "@/components/form/SignupForm";

function SignUpPage() {
  return (
    <Shell className="[background:linear-gradient(150deg,rgb(79,147,255)_22.94%,rgb(216,170,250)_77.55%)]">
      <div className="absolute bottom-0 bg-wave bg-no-repeat bg-[center] bg-contain h-[50vh] w-full "></div>
      <Shell className="flex items-center justify-center">
        <Card className="w-[500px] h-[90vh] bg-[#ffffff3d] rounded-[20px]">
          <CardHeader className="items-center justify-center h-[20vh]">
            <CardTitle className="text-white text-3xl">Sign Up</CardTitle>
          </CardHeader>
          <CardContent>
            <SignupForm />
          </CardContent>
        </Card>
      </Shell>
    </Shell>
  );
}

export { SignUpPage };
