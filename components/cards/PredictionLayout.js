import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import ToggleButtonGroup from '@/components/ToogleButton'

function RangeSliderInput({
  currentControl,
  formData,
  handleInputBoxChange,
  handleSliderChange,
}) {
  return (
    <>
      <Label>{currentControl.label}</Label>

      <div className="flex flex-col gap-2 justify-between">
        <div className="flex space-x-2">
          {formData[currentControl.name].map((value, index) => (
            <Input
              key={index}
              type={currentControl.name}
              value={value} // Left and Right values dynamically mapped
              onChange={(e) =>
                handleInputBoxChange(e, currentControl.name, index)
              }
              className="w-16"
            />
          ))}
        </div>
        <Box className="sm:w-full md:w-[170px]">
          <Slider
            getAriaLabel={() => currentControl.label}
            value={formData[currentControl.name]} // Slider is controlled by formData
            onChange={handleSliderChange(currentControl.name)} // Pass name directly
            valueLabelDisplay="auto"
            getAriaValueText={(value) => `${value}`} // You can define the display format for the value
            min={currentControl.min} // Set slider min
            max={currentControl.max} // Set slider max
          />
        </Box>
      </div>
    </>
  )
}

// Render Input by Component Type
function PredictionLayout({ formData, setFormData, currentControl }) {
  let content = null

  const handleSliderChange = (name) => (e, newValue) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }))
  }

  const handleInputBoxChange = (e, name, index) => {
    const { value } = e.target
    const newValue = [...formData[name]]
    newValue[index] = value ? Number(value) : 0
    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }))
  }

  switch (currentControl.componentType) {
    case 'input':
      content = (
        <>
          <Label>{currentControl.label}</Label>
          <Input
            type={currentControl.inputType || 'text'}
            placeholder={currentControl.placeholder}
            name={currentControl.name}
            id={currentControl.name}
            value={formData[currentControl.name]}
            onChange={(e) => {
              setFormData((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
              }))
            }}
          />
        </>
      )
      break

    case 'range slider input':
      content = (
        <RangeSliderInput
          currentControl={currentControl}
          formData={formData}
          handleInputBoxChange={handleInputBoxChange}
          handleSliderChange={handleSliderChange}
        />
      )
      break

    case 'toggle':
      content = (
        <>
          <Label>{currentControl.label}</Label>
          <ToggleButtonGroup
            options={currentControl.options}
            value={formData[currentControl.name]}
            name={currentControl.name}
            onChange={(name, selectedValue) => {
              setFormData((prevState) => ({
                ...prevState,
                [name]: selectedValue,
              }))
            }}
          />
        </>
      )
      break

    case 'slider':
      content = (
        <>
          <Label>{currentControl.label}</Label>
          <Box className="sm:w-full md:w-[170px]">
            <Slider
              defaultValue={currentControl.defaultValue}
              aria-label="age"
              valueLabelDisplay="auto"
              min={currentControl.min} // Set slider min
              max={currentControl.max} // Set slider max
              onChange={(e, newValue) => {
                setFormData((prevState) => ({
                  ...prevState,
                  [currentControl.name]: newValue,
                }))
              }}
            />
          </Box>
        </>
      )
  }

  return content
}
export default PredictionLayout
