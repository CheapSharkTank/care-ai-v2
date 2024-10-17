'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Github, Google } from '@/components/Social'

// SIGN IN AUTH
export default function Page() {
  return (
    <SignIn.Root>
      <Card className="m-auto px-3 py-5 w-[400px]">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            {/* EMAIL */}
            <SignIn.Step name="start">
              <Clerk.Field name="identifier">
                <div className="flex flex-col space-y-1.5">
                  <Clerk.Label asChild>
                    <Label htmlFor="email" className="text-label">
                      Email
                    </Label>
                  </Clerk.Label>
                  <Clerk.Input asChild>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email here"
                    />
                  </Clerk.Input>
                  <Clerk.FieldError className="block text-red-500 text-sm" />
                </div>
              </Clerk.Field>

              <SignIn.Action submit asChild>
                <Button className="uppercase w-full my-2">Continue</Button>
              </SignIn.Action>
            </SignIn.Step>
            {/* VERIFICATION */}
            <SignIn.Step name="verifications">
              {/* VERIFICATION through PASS */}
              <SignIn.Strategy name="password">
                <Clerk.Field name="password">
                  <div className="flex flex-col space-y-1.5">
                    <Clerk.Label asChild>
                      <Label htmlFor="password" className="text-label">
                        Password
                      </Label>
                    </Clerk.Label>
                    <Clerk.Input asChild>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Your password here"
                      />
                    </Clerk.Input>
                    <Clerk.FieldError />
                  </div>
                </Clerk.Field>
                <SignIn.Action submit asChild>
                  <Button className="uppercase w-full my-2">Continue</Button>
                </SignIn.Action>
              </SignIn.Strategy>
            </SignIn.Step>

            {/* VERIFICATION through SOCIAL */}
            <SignIn.Step name="start">
              <Separator className="mb-4" />
              <div className="grid grid-cols-2 gap-1">
                <Clerk.Connection name="google" asChild>
                  <Button variant="outline" className="w-full">
                    <Google className="mr-2" />
                    <p className="text-sm">Google</p>
                  </Button>
                </Clerk.Connection>
                <Clerk.Connection name="github" asChild>
                  <Button variant="outline" className="w-full">
                    <Github className="mr-2" />
                    <p className="text-sm">GitHub</p>
                  </Button>
                </Clerk.Connection>
              </div>
            </SignIn.Step>
          </div>
        </CardContent>
      </Card>
    </SignIn.Root>
  )
}
