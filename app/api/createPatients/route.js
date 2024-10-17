import { createPatients } from '@/actions'

export async function POST(req) {
  try {
    const { userId, formData } = await req.json()

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
    const result = await createPatients(userId, formData)

    // Return result from createPatients
    return new Response(
      JSON.stringify({
        success: result.success,
        message: result.message || 'Patient Created Successfully',
        flaskData: result.flaskData, // Pass Flask data if needed in response
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
