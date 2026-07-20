// import { Users, Trophy, User, Award } from "lucide-react";

// const stats = [
//   {
//     icon: Users,
//     value: "5000+",
//     label: "Students Trained",
//     bg: "bg-blue-800",
//   },
//   {
//     icon: Trophy,
//     value: "1000+",
//     label: "Selections",
//     bg: "bg-yellow-500",
//   },
//   {
//     icon: User,
//     value: "15+",
//     label: "Expert Faculty",
//     bg: "bg-blue-800",
//   },
//   {
//     icon: Award,
//     value: "10+",
//     label: "Years of Excellence",
//     bg: "bg-yellow-500",
//   },
// ];

// const StatsBar = () => {
//   return (
//     <div
//       className=" mt-12 mx-auto w-full max-w-6xl rounded-2xl border border-white/40 px-6 py-8 shadow-lg backdrop-blur-xl sm:px-10"
//       style={{
//         background: "rgba(255, 255, 255, 0.25)",
//       }}
//     >
//       <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-black/10">
//         {stats.map((stat, index) => {
//           const Icon = stat.icon;
//           return (
//             <div
//               key={index}
//               className="flex items-center justify-center gap-4 px-2 lg:justify-start lg:px-6 first:lg:pl-0"
//             >
//               <div
//                 className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full sm:h-16 sm:w-16 ${stat.bg}`}
//               >
//                 <Icon className="h-6 w-6 text-white sm:h-7 sm:w-7" strokeWidth={2} />
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
//                   {stat.value}
//                 </span>
//                 <span className="text-xs font-medium text-gray-600 sm:text-sm">
//                   {stat.label}
//                 </span>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default StatsBar;



import { Users, Trophy, User, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "5000+",
    label: "Students Trained",
    bg: "bg-blue-800",
  },
  {
    icon: Trophy,
    value: "1000+",
    label: "Selections",
    bg: "bg-yellow-500",
  },
  {
    icon: User,
    value: "15+",
    label: "Expert Faculty",
    bg: "bg-blue-800",
  },
  {
    icon: Award,
    value: "10+",
    label: "Years of Excellence",
    bg: "bg-yellow-500",
  },
];

const StatsBar = () => {
  return (
    <section className="mt-12 px-4">
      <div
        className="mx-auto w-full max-w-7xl rounded-3xl border border-white/40 bg-white/20 backdrop-blur-xl shadow-xl p-6 sm:p-8 lg:p-10"
      >
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-gray-300/40">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center lg:flex-row lg:justify-center lg:text-left lg:px-8"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full shadow-md ${stat.bg}`}
                >
                  <Icon
                    className="h-8 w-8 text-white"
                    strokeWidth={2}
                  />
                </div>

                <div className="mt-3 lg:mt-0 lg:ml-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {stat.value}
                  </h2>

                  <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-tight">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;