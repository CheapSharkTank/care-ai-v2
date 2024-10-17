import { fetchPatients } from '@/actions'

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Missing userId in query parameters',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Fetch patient records using the userId
    const result = await fetchPatients(userId)

    // Return the result from fetchPatients
    return new Response(JSON.stringify(result), {
      status: result.success ? 200 : 500,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Server error',
        error: err.message,
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
