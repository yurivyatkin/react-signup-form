import { Shell } from "@/components/layout/Shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { EnvelopeClosedIcon } from '@radix-ui/react-icons'


import { Button } from "@/components/form/Button";
import { IconInput } from "@/components/form/IconInput";
import { Label } from "@/components/form/Label";
import { PasswordInput } from "@/components/form/PasswordInput";

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
            <form 
              className="h-[70vh] w-full flex flex-col gap-4 items-center justify-between"
              onSubmit={(e) => e.preventDefault()}
              >
              <div className="flex flex-col w-[90vw] max-w-[400px] h-[56px]">
                <Label className="text-gray-700 mb-1" htmlFor="username">
                  Username
                </Label>
                <IconInput
                  icon={<EnvelopeClosedIcon />}
                  type="email"
                  id="username"
                  name="username"
                />
              </div>
              <div className="flex flex-col mt-[56px] w-[90vw] max-w-[400px] h-[56px]">
                <Label className="text-gray-700 mb-1" htmlFor="password">
                  Create password
                </Label>
                <PasswordInput
                  id="password"
                  name="password"
                />
              </div>
              <div className="flex flex-col w-[90vw] max-w-[400px] h-[56px]">
                <Label className="text-gray-700 mb-1" htmlFor="confirm-password">
                  Confirm password
                </Label>
                <PasswordInput
                  id="confirm-password"
                  name="confirm-password"
                />
              </div>
              <div className="flex flex-col mb-[56px] mt-[56px] w-[90vw] max-w-[400px] h-[56px]">
                <Button
                  className="px-[14px] py-[10px] bg-[#404eff] rounded-[25px] border border-solid border-[#4f93ff] shadow-sm text-white hover:bg-[#4f93ff] hover:text-white [font-family:'Poppins',Helvetica] text-[20px]"
                >Sign Up</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </Shell>
    </Shell>
  );
}

export { SignUpPage };
