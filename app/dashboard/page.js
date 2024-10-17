import { createUser } from '@/actions'
import { currentUser } from '@clerk/nextjs/server'

import General from '@/components/cards/General'

export default async function Dashboard() {
  const { id: userId, username } = await currentUser()

  if (userId && username) {
    const result = await createUser(userId, username, '/dashboard')

    if (result.success) console.log(result.message)
    else console.error(result.message)
  }

  return (
    <div className="w-full h-full">
      <General />
    </div>
  )
}
