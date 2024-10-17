'use client'

import { useState, useEffect } from 'react'
import { useUser } from '@clerk/clerk-react'
import RiskPredict from '@/components/cards/RiskPredict'
import Data from '@/components/table/Data'

export default function Risk() {
  const [patientData, setPatientData] = useState(null)
  const { user } = useUser()

  const fetchPatientRecords = async (userId) => {
    try {
      const response = await fetch(`/api/getPatients?userId=${userId}`, {
        method: 'GET',
      })
      const data = await response.json()

      if (response.ok) {
        setPatientData(data.data)
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
    <section className="w-full grid grid-cols-1 gap-3 items-start">
      <RiskPredict
        user={user}
        refreshPatientData={() => fetchPatientRecords(user.id)}
      />
      <Data patientData={patientData} />
    </section>
  )
}
