// Custom Toggle Button Component
const ToggleButtonGroup = ({ options, value, name, onChange }) => {
  return (
    <div className="flex space-x-2">
      {options.map((option, index) => (
        <button
          key={index}
          type="button"
          className={`px-4 py-2 rounded-md border ${
            value === option
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-black'
          }`}
          onClick={() => onChange(name, option)}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

export default ToggleButtonGroup
