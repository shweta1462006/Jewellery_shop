import { FaExchangeAlt, FaChartPie, FaUsers } from "react-icons/fa";

const stats = [
  {
    id: 1,
    name: "Transactions every 24 hours",
    value: "44 Million",
    icon: <FaExchangeAlt className="text-4xl" />,
  },
  {
    id: 2,
    name: "Assets under holding",
    value: "$119 Trillion",
    icon: <FaChartPie className="text-4xl" />,
  },
  {
    id: 3,
    name: "New users annually",
    value: "46,000",
    icon: <FaUsers className="text-4xl" />,
  },
];

export default function Example() {
  return (
    <div className="py-28 sm:py-36 bg-white text-gray-600">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900">
            Trusted Worldwide
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Delivering excellence through secure, scalable, and globally recognized infrastructure.
          </p>
        </div>

        {/* Stats Section */}
        <dl className="grid grid-cols-1 gap-10 text-center md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col items-center py-10 px-8 rounded-2xl border 
                         border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 
                         transition-all duration-300 bg-white"
            >
              {/* Icon Box */}
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full 
                              bg-gray-100 shadow-inner">
                {stat.icon}
              </div>

              {/* Value */}
              <dd className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>

              {/* Description Text */}
              <dt className="mt-3 text-base text-gray-500 font-medium">
                {stat.name}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
