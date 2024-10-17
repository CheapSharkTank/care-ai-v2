import { createPatients } from '@/actions'

export async function POST(req) {
  try {
    const { userId, formData } = await req.json() // Parse the request body

    // Ensure both userId and formData are provided
    if (!userId || !formData) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Missing userId or formData',
        }),
        { status: 400 }
      )
    }

    // Call createPatients action
    const result = await createPatients(userId, formData, '/dashboard/risk') // Provide a path if necessary
    // Return result from createPatients
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Patient Created Successfully',
      }),
      {
        status: result.success ? 200 : 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  } catch (err) {
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Server error',
        error: err.message,
      }),
      { status: 500 }
    )
  }
}
