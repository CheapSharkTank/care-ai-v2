'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

export default function Page() {
  return (
    <SignUp.Root>
      <Card className="m-auto px-3 py-4 w-[400px]">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            {/* ACCOUNT DETAILS */}
            <SignUp.Step name="start" className="space-y-3">
              <Clerk.Field name="emailAddress">
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

              <Clerk.Field name="username">
                <div className="flex flex-col space-y-1.5">
                  <Clerk.Label asChild>
                    <Label htmlFor="name" className="text-label">
                      Username
                    </Label>
                  </Clerk.Label>
                  <Clerk.Input asChild>
                    <Input
                      id="name"
                      type="name"
                      placeholder="Your username here"
                    />
                  </Clerk.Input>
                  <Clerk.FieldError className="block text-red-500 text-sm" />
                </div>
              </Clerk.Field>

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
                  <Clerk.FieldError className="block text-red-500 text-sm" />
                </div>
              </Clerk.Field>

              <SignUp.Action submit asChild>
                <Button className="uppercase w-full mt-1">Continue</Button>
              </SignUp.Action>
            </SignUp.Step>

            {/* VERIFICATION */}
            <SignUp.Step name="verifications" className="space-y-3">
              <SignUp.Strategy name="email_code">
                <Clerk.Field name="code">
                  <div className="flex flex-col space-y-1.5">
                    <Clerk.Label asChild>
                      <Label htmlFor="code" className="text-label">
                        Verification Code
                      </Label>
                    </Clerk.Label>

                    <Clerk.Input
                      type="otp"
                      className="flex justify-center has-[:disabled]:opacity-50"
                      autoSubmit
                      render={({ value, status }) => {
                        return (
                          <div
                            data-status={status}
                            className={cn(
                              'relative flex size-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
                              {
                                'z-10 ring-2 ring-ring ring-offset-background':
                                  status === 'cursor' || status === 'selected',
                              }
                            )}
                          >
                            {value}
                            {status === 'cursor' && (
                              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                <div className="animate-caret-blink h-4 w-px bg-foreground duration-1000" />
                              </div>
                            )}
                          </div>
                        )
                      }}
                    />

                    <Clerk.FieldError className="block text-red-500 text-sm" />
                  </div>
                </Clerk.Field>

                <SignUp.Action submit asChild>
                  <Button className="uppercase w-full mt-1">Verify</Button>
                </SignUp.Action>
              </SignUp.Strategy>
            </SignUp.Step>

            {/* VERIFICATION through SOCIAL */}
          </div>
        </CardContent>
      </Card>
    </SignUp.Root>
  )
}

// <SignUp />
