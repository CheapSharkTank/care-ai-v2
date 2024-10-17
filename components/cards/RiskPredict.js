'use client'

import { useState, useEffect } from 'react'
import { useUser } from '@clerk/clerk-react'

import { Button } from '../ui/button'
import PredictionLayout from './PredictionLayout'
import { commonInput, inputFormData } from '@/common/layoutData'
import { Card, CardContent } from '@/components/ui/card'

function valuetext(value) {
  return `${value}°C`
}

const isFormDataValid = (formData) => {
  return Object.values(formData).every(
    (value) => value !== '' && value !== null && value !== undefined
  )
}

function RiskPredict() {
  const [formData, setFormData] = useState(inputFormData)
  console.log(formData)

  const { user } = useUser()

  async function handleSubmit(e) {
    e.preventDefault()

    let modifiedFormData = { ...formData }
    if (Array.isArray(formData.restBPM)) {
      modifiedFormData.restBPM = formData.restBPM[1] // Set restBPM to the second element of the array
    }

    if (user?.id && isFormDataValid(modifiedFormData)) {
      console.log(modifiedFormData)

      try {
        const response = await fetch('/api/createPatients', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId: user.id, formData: modifiedFormData }),
        })

        const result = await response.json()
        if (result.success) {
          console.log(result.message)
          await fetchPatientRecords(user.id)
        } else console.error(result.message)
      } catch (error) {
        console.error(error)
      }
    }
  }

  const fetchPatientRecords = async (userId) => {
    try {
      const response = await fetch(`/api/getPatients?userId=${userId}`, {
        method: 'GET',
      })
      const data = await response.json()

      if (response.ok) {
        console.log('Patient records:', data.data)
      } else {
        console.error('Error fetching patient records:', data.message)
      }
    } catch (error) {
      console.error('An error occurred:', error)
    }
  }

  useEffect(() => {
    if (user?.id) {
      fetchPatientRecords(user.id)
    }
  }, [user?.id])

  return (
    <div className="flex flex-col gap-4 w-full max-w-4xl p-4">
      <form onSubmit={handleSubmit}>
        <Card className="pt-4 w-full">
          <CardContent className="space-y-2">
            {/* RENDER INPUT FIELDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {commonInput &&
                commonInput.length > 1 &&
                commonInput.map((currentInputData, index) => (
                  <div className="w-full">
                    <PredictionLayout
                      formData={formData}
                      setFormData={setFormData}
                      currentControl={currentInputData}
                    />
                  </div>
                ))}
            </div>
            <Button
              type="submit"
              variant="outline"
              className="bg-secondaryTheme hover:bg-primaryTheme text-white transition-colors duration-150"
            >
              Continue
            </Button>
          </CardContent>
        </Card>
      </form>

      {/* TABLE */}
    </div>
  )
}

export default RiskPredict
