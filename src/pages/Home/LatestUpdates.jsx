import React from 'react'

const updates = [
  { id: 1, tag: 'New Batch', color: 'blue', text: 'New Batch for SSC CGL (Pre + Mains) Starting from 27 May 2024' },
  { id: 2, tag: 'Test Series', color: 'green', text: 'All India Mega Mock Test on 25 May 2024' },
  { id: 3, tag: 'Result', color: 'red', text: 'Bihar SI Final Result 2023 Declared' },
]

const tagStyles = {
  blue: 'bg-blue-600 text-white',
  green: 'bg-green-700 text-white',
  red: 'bg-red-600 text-white',
}

const LatestUpdates = () => {
  // duplicate items so the loop looks seamless
  const loopItems = [...updates, ...updates]

  return (
    <div
      className="relative flex items-center overflow-hidden rounded-2xl px-4 py-3"
      style={{
        background: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.12)',
      }}
    >
      <span className="shrink-0 pr-4 text-lg font-bold text-blue-900 whitespace-nowrap">
        Latest Updates
      </span>

      <div className="shrink-0 h-6 w-px bg-gray-400/40 mr-4" />

      <div className="relative flex-1 overflow-hidden">
        <div className="flex w-max animate-marquee gap-8">
          {loopItems.map((u, i) => (
            <div key={`${u.id}-${i}`} className="flex items-center gap-2 whitespace-nowrap">
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tagStyles[u.color]}`}>
                {u.tag}
              </span>
              <span className="text-sm text-gray-800">{u.text}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-ltr {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee-ltr 18s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default LatestUpdates