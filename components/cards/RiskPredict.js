'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import PredictionLayout from './PredictionLayout'
import { commonInput, inputFormData } from '@/common/layoutData'
import { Card, CardContent } from '@/components/ui/card'

const isFormDataValid = (formData) => {
  return Object.values(formData).every(
    (value) => value !== '' && value !== null && value !== undefined
  )
}

function RiskPredict({ user, refreshPatientData }) {
  const [formData, setFormData] = useState(inputFormData)
  // Data Fetching and Creating Actions
  async function handleSubmit(e) {
    e.preventDefault()

    let modifiedFormData = { ...formData }
    if (Array.isArray(formData.restBPM)) {
      modifiedFormData.restBPM = formData.restBPM[1] // Set restBPM to the second element of the array
    }

    if (user?.id && isFormDataValid(modifiedFormData)) {
      try {
        const response = await fetch('/api/createPatients', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: user?.id,
            formData: modifiedFormData,
          }),
        })

        const result = await response.json()
        if (result.success) {
          console.log(result.message)
          refreshPatientData()
        } else console.error(result.message)
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <div className="grid gap-5 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2">
      <form onSubmit={(e) => handleSubmit(e)}>
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

      <p>Hello world</p>
    </div>
  )
}

export default RiskPredict
