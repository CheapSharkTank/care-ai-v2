import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GoBack } from '@/components/Social'
import { Button } from '@/components/ui/button'

export default function Welcome() {
  // Model of userData prop --tba
  // const userData = {
  //     userId: 5445,
  //     userName: "John",
  //     patientCount: 45656,
  //     onResetAll : function,
  // }

  return (
    <Card className="w-full max-w-md shadow-none border-none">
      <CardHeader>
        <CardTitle className="text-base sm:text-lg md:text-3xl">
          <span className="text-primaryTheme tracking-wide">
            Welcome Back,&nbsp;
          </span>
          <span className="text-secondaryTheme tracking-wide">John!</span>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col">
          <p>Patient Count</p>

          <div className="flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-2xl font-semibold">
              122,265
            </p>
            <Button
              variant="outline"
              className="hover:bg-primaryBtnClr transition-colors duration-150"
            >
              <GoBack />
              <span className="text-xs">Reset All</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
