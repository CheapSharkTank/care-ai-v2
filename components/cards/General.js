import Welcome from './Welcome'
import BarCard from './BarCard'

function General() {
  // will be deleted after testing
  // we will ues /api/validateData route for the data
  const data = [
    {
      country: 'AD',
      'hot dog': 17,
      'hot dogColor': 'hsl(101, 70%, 50%)',
      burger: 8,
      burgerColor: 'hsl(189, 70%, 50%)',
      sandwich: 156,
      sandwichColor: 'hsl(257, 70%, 50%)',
      kebab: 44,
      kebabColor: 'hsl(272, 70%, 50%)',
      fries: 178,
      friesColor: 'hsl(338, 70%, 50%)',
      donut: 189,
      donutColor: 'hsl(208, 70%, 50%)',
    },
    {
      country: 'AE',
      'hot dog': 52,
      'hot dogColor': 'hsl(128, 70%, 50%)',
      burger: 113,
      burgerColor: 'hsl(98, 70%, 50%)',
      sandwich: 83,
      sandwichColor: 'hsl(310, 70%, 50%)',
      kebab: 19,
      kebabColor: 'hsl(81, 70%, 50%)',
      fries: 150,
      friesColor: 'hsl(188, 70%, 50%)',
      donut: 105,
      donutColor: 'hsl(232, 70%, 50%)',
    },
    {
      country: 'AF',
      'hot dog': 27,
      'hot dogColor': 'hsl(341, 70%, 50%)',
      burger: 134,
      burgerColor: 'hsl(144, 70%, 50%)',
      sandwich: 17,
      sandwichColor: 'hsl(13, 70%, 50%)',
      kebab: 125,
      kebabColor: 'hsl(301, 70%, 50%)',
      fries: 194,
      friesColor: 'hsl(94, 70%, 50%)',
      donut: 92,
      donutColor: 'hsl(152, 70%, 50%)',
    },
    {
      country: 'AG',
      'hot dog': 173,
      'hot dogColor': 'hsl(218, 70%, 50%)',
      burger: 110,
      burgerColor: 'hsl(33, 70%, 50%)',
      sandwich: 132,
      sandwichColor: 'hsl(133, 70%, 50%)',
      kebab: 156,
      kebabColor: 'hsl(92, 70%, 50%)',
      fries: 70,
      friesColor: 'hsl(143, 70%, 50%)',
      donut: 132,
      donutColor: 'hsl(345, 70%, 50%)',
    },
    {
      country: 'AI',
      'hot dog': 33,
      'hot dogColor': 'hsl(111, 70%, 50%)',
      burger: 122,
      burgerColor: 'hsl(307, 70%, 50%)',
      sandwich: 139,
      sandwichColor: 'hsl(34, 70%, 50%)',
      kebab: 112,
      kebabColor: 'hsl(332, 70%, 50%)',
      fries: 79,
      friesColor: 'hsl(256, 70%, 50%)',
      donut: 110,
      donutColor: 'hsl(76, 70%, 50%)',
    },
    {
      country: 'AL',
      'hot dog': 52,
      'hot dogColor': 'hsl(327, 70%, 50%)',
      burger: 190,
      burgerColor: 'hsl(213, 70%, 50%)',
      sandwich: 22,
      sandwichColor: 'hsl(117, 70%, 50%)',
      kebab: 147,
      kebabColor: 'hsl(154, 70%, 50%)',
      fries: 18,
      friesColor: 'hsl(173, 70%, 50%)',
      donut: 177,
      donutColor: 'hsl(217, 70%, 50%)',
    },
    {
      country: 'AM',
      'hot dog': 192,
      'hot dogColor': 'hsl(27, 70%, 50%)',
      burger: 134,
      burgerColor: 'hsl(136, 70%, 50%)',
      sandwich: 143,
      sandwichColor: 'hsl(42, 70%, 50%)',
      kebab: 180,
      kebabColor: 'hsl(180, 70%, 50%)',
      fries: 179,
      friesColor: 'hsl(56, 70%, 50%)',
      donut: 138,
      donutColor: 'hsl(322, 70%, 50%)',
    },
  ]

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-4 w-full h-full p-5">
        {/* WELCOME USER */}
        <Welcome />

        <div class="bg-green-500">Item 2</div>
        {/* RISK CHART ACCORDING TO AGE */}
        <BarCard
          title={'Risk'}
          desc={'Risk of heart attacks according to age'}
          data={data}
        />

        {/* COMMON DISEASES AMONG MAJORITY OF THE PATIENTS */}
        <BarCard
          title={'Patient Population'}
          desc={'Common things among majority of the patients'}
          data={data}
        />
      </section>
    </>
  )
}
export default General
