'use server'

import connectToDb from '@/database'
import User from '@/models/user'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

// create profile action
export async function createUser(userId, userName, pathToRevalidate) {
  await connectToDb()

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ userId: userId })

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: 'User with this ID already exists',
        },
        { status: 409 }
      ) // Conflict status
    }

    // Create the new user
    await User.create({ userId, userName })
    revalidatePath(pathToRevalidate)

    return NextResponse.json({
      success: true,
      message: 'Successfully created new profile',
    })
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: 'Some error occurred connecting to DB',
        error: 'Internal Server Error',
      },
      { status: 500 }
    )
  }
}

// create patients
export async function createPatients(userId, formData) {
  await connectToDb()

  try {
    const user = await User.findOne({ userId: userId })

    if (!user) {
      return {
        success: false,
        message: 'User not found',
      }
    }

    const response = await fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const flaskData = await response.json()

    // If prediction is successful, append the prediction to formData
    if (flaskData.success) {
      formData.prediction = flaskData.data
    }

    // Save the data in mongodb
    user.patient_records = user.patient_records || []
    user.patient_records.push(formData)
    await user.save()

    // Return success res
    return {
      success: true,
      message: 'Patient record added successfully',
      formData,
    }
  } catch (err) {
    return {
      success: false,
      message: 'Some error occurred connecting to DB',
      error: 'Internal Server Error',
    }
  }
}

// fetch all patients
export async function fetchPatients(userId) {
  await connectToDb()

  try {
    const result = await User.findOne({ userId: userId })

    return {
      success: true,
      message: 'Successfully fetched patient record data',
      data: JSON.parse(JSON.stringify(result.patient_records)),
    }
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: 'Some error occurred connecting to DB',
        error: 'Internal Server Error',
      },
      { status: 500 }
    )
  }
}
