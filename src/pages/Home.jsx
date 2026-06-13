import React from 'react'
import { useState, useEffect, useRef } from 'react';

const HERO_STATS = [
  { value: '6', label: 'Companies' },
  { value: '12', label: 'Years' },
  { value: '5', label: 'Industries' },
  { value: '30', label: 'Countries' },
]

const PERFORMANCE_DATA = [
  { id: 1, percent: 100, label: 'Quality', subLabel: 'Top grade knitwear' },
  { id: 2, percent: 100, label: 'On Time Delivery', subLabel: 'Reliable logistics' },
  { id: 3, percent: 99, label: 'Buyer Satisfaction', subLabel: 'Trusted by clients' },
  { id: 4, percent: 100, label: 'Manufacturing', subLabel: 'End to end solutions' },
  { id: 5, percent: 97, label: 'Flexible MOQs', subLabel: 'Low minimums' },
]

export default function Home() {
  const [animatedPercentages, setAnimatedPercentages] = useState(PERFORMANCE_DATA.map(() => 0))
  const performanceRef = useRef(null)

  useEffect(() => {
    let animationFrame = 0
    let animationStart = 0

    const duration = 1200

    const animate = (timestamp) => {
      if (!animationStart) animationStart = timestamp
      const elapsed = Math.min(timestamp - animationStart, duration)
      const progress = elapsed / duration

      setAnimatedPercentages(
        PERFORMANCE_DATA.map((item) => Math.round(item.percent * progress))
      )

      if (elapsed < duration) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.disconnect()
            animationFrame = requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.35 }
    )

    if (performanceRef.current) {
      observer.observe(performanceRef.current)
    }

    return () => {
      observer.disconnect()
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <main className="bg-[#BEF4B8]">
      <section className="w-full max-w-7xl mx-auto pt-44 px-6 py-12 sm:px-8 sm:py-16">
        <div className="grid min-h-[calc(100vh-11rem)] items-center grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Left side: image placeholders */}
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white/80 shadow-[0_24px_70px_-34px_rgba(16,128,53,0.35)]">
                <div className="aspect-[4/3] bg-slate-100" aria-label="Hero image placeholder 1" role="img" />
              </div>
              <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white/80 shadow-[0_24px_70px_-34px_rgba(16,128,53,0.35)]">
                <div className="aspect-[4/3] bg-slate-100" aria-label="Hero image placeholder 2" role="img" />
              </div>
              <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white/80 shadow-[0_24px_70px_-34px_rgba(16,128,53,0.35)]">
                <div className="aspect-[4/3] bg-slate-100" aria-label="Hero image placeholder 3" role="img" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-[36px] border border-white/70 bg-white/80 shadow-[0_26px_90px_-34px_rgba(16,128,53,0.35)]">
                <div className="aspect-[5/4] bg-slate-100" aria-label="Hero image placeholder 4" role="img" />
              </div>
              <div className="overflow-hidden rounded-[36px] border border-white/70 bg-white/80 shadow-[0_26px_90px_-34px_rgba(16,128,53,0.35)]">
                <div className="aspect-[5/4] bg-slate-100" aria-label="Hero image placeholder 5" role="img" />
              </div>
            </div>
          </div>

          {/* Right side: textual content */}
          <div className="flex flex-col justify-start">
            <span className="mb-6 inline-flex rounded-full bg-white/50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#108035]">
              EST. 2014 - GLOBAL OPERATIONS
            </span>

            <h1 className="mb-6 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
              Six Season Group
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-700">
              A forward-thinking global group empowering growth across industries with strong operational expertise and a people-first approach.
            </p>

            <div className="mb-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-[#108035] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Explore Our Companies
              </button>
              <button className="rounded-full border-2 border-[#108035] px-8 py-3.5 text-sm font-semibold text-[#108035] transition-all duration-300 hover:bg-[#108035]/10">
                Learn More
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
                {HERO_STATS.map((stat) => (
                  <div key={stat.label} className="rounded-[24px] bg-white px-4 py-5 text-center shadow-[0_18px_48px_-28px_rgba(15,120,48,0.28)]">
                    <p className="text-2xl font-bold text-[#108035]">{stat.value}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex h-20 w-20 min-w-[80px] items-center justify-center rounded-full bg-white shadow-[0_16px_40px_-20px_rgba(16,128,53,0.25)]">
                <svg className="h-10 w-10 text-[#108035]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.707 12.293a.999.999 0 0 0-1.414 0L15.586 13.414a2 2 0 0 1-2.828 0l-1.172-1.172a2 2 0 0 0-2.828 0L6.293 14.293a.999.999 0 1 0 1.414 1.414l1.172-1.172a2 2 0 0 1 2.828 0l1.172 1.172a2 2 0 0 0 2.828 0l1.293-1.293a.999.999 0 0 0 0-1.414zM19.071 3.343A9 9 0 0 0 5 3c-1.657 0-3 1.343-3 3v12c0 1.657 1.343 3 3 3h14c1.657 0 3-1.343 3-3V6c0-1.657-1.343-3-3-3zm0 15H5c-.551 0-1-.449-1-1V6c0-.551.449-1 1-1h14c.551 0 1 .449 1 1v12c0 .551-.449 1-1 1z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full border-t border-[#108035]/15 bg-[#011d01]">
        <div className="mx-auto flex h-24 max-w-7xl items-center overflow-hidden px-6 text-sm font-semibold text-[#f6faf7] sm:px-8">
          <div className="promo-ticker inline-flex whitespace-nowrap">
            <span className="mr-12">🔥 Offer: Use code SEASON24 for 15% off all global partnership plans.</span>
            <span className="mr-12">✨ Limited time: Free consultation for enterprise members.</span>
            <span className="mr-12">📦 Promo: Join now and get exclusive priority business support.</span>
            <span className="mr-12">🔥 Offer: Use code SEASON24 for 15% off all global partnership plans.</span>
            <span className="mr-12">✨ Limited time: Free consultation for enterprise members.</span>
          </div>
        </div>
      </div>

      <section className="w-full max-w-7xl mx-auto px-6 py-12 sm:px-8 sm:py-16">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-6">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#073107]/10 p-2 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]">
            <div className="h-[500px] rounded-[28px] bg-[#083a0b]/20 shadow-inner" />
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#083a0b]/15 p-2 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]">
              <div className="h-[240px] rounded-[24px] bg-[#0b4b10]/20 shadow-inner" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#083a0b]/15 p-2 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]">
                <div className="h-[240px] rounded-[24px] bg-[#0b4b10]/20 shadow-inner" />
              </div>
              <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#083a0b]/15 p-2 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]">
                <div className="h-[240px] rounded-[24px] bg-[#0b4b10]/20 shadow-inner" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mt-12">
          <div className="rounded-[28px] border border-white/20 bg-white/10 p-8 shadow-[0_18px_48px_-26px_rgba(16,128,53,0.18)]">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl">Placeholder heading</h2>
            <p className="mb-4 max-w-2xl text-base leading-8 text-slate-700">
              This is a placeholder paragraph to describe the next section of the page. Replace this with your own elegant and informative text.
            </p>
            <p className="text-base leading-8 text-slate-700">
              Another placeholder paragraph for more detail. The typography is designed to stay clean and readable as content changes.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">  
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="group rounded-[24px] border border-white/20 bg-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-28px_rgba(16,128,53,0.18)]">
                <div className="mb-4 h-12 w-12 rounded-2xl bg-[#108035]/10" />
                <p className="text-sm font-semibold text-slate-900">Feature title</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Short description placeholder for a feature or benefit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-6 py-20 sm:px-8 sm:py-20">
        <div className="text-center">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Placeholder section headline
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
            This section introduces the next part of the landing page with clean, modern copy and room for your detailed messaging.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start mt-8">
          <div className="space-y-6 text-slate-700">
            <p className="text-base leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
            </p>
            <p className="text-base leading-8">
              Cras venenatis euismod malesuada. Proin sit amet ligula at augue varius tempor eget a purus.
            </p>
            <p className="text-base leading-8">
              Sed pulvinar nunc sit amet urna facilisis, eget luctus orci tincidunt. Maecenas pretium nisi sit amet leo efficitur.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="row-span-2 overflow-hidden rounded-[28px] border border-white/20 bg-white/10 p-4 shadow-[0_18px_48px_-26px_rgba(16,128,53,0.18)]">
              <div className="h-full rounded-[24px] bg-[#ecf5ed]" />
            </div>
            <div className="overflow-hidden rounded-[28px] border border-white/20 bg-white/10 p-4 shadow-[0_18px_48px_-26px_rgba(16,128,53,0.18)]">
              <div className="h-[180px] rounded-[24px] bg-[#ecf5ed]" />
            </div>
            <div className="overflow-hidden rounded-[28px] border border-white/20 bg-white/10 p-4 shadow-[0_18px_48px_-26px_rgba(16,128,53,0.18)]">
              <div className="h-[180px] rounded-[24px] bg-[#ecf5ed]" />
            </div>
            <div className="overflow-hidden rounded-[28px] border border-white/20 bg-white/10 p-4 shadow-[0_18px_48px_-26px_rgba(16,128,53,0.18)]">
              <div className="h-[180px] rounded-[24px] bg-[#ecf5ed]" />
            </div>
            <div className="overflow-hidden rounded-[28px] border border-white/20 bg-white/10 p-4 shadow-[0_18px_48px_-26px_rgba(16,128,53,0.18)]">
              <div className="h-[180px] rounded-[24px] bg-[#ecf5ed]" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-6 py-16 sm:px-8">
        <div className="text-center">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Explore Our Global Presence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="relative overflow-hidden flex flex-col items-center justify-center p-6 aspect-square rounded-[28px] border border-white/20 bg-white/10 shadow-[0_18px_48px_-26px_rgba(16,128,53,0.18)]"
            >
              {/* Background flag placeholder with 5% opacity */}
              <div
                className="absolute inset-0 w-full h-full bg-slate-200 opacity-[0.05] pointer-events-none"
                aria-hidden="true"
              />

              {/* Center circle */}
              <div className="relative z-10 w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#108035]/10" />
              </div>

              {/* Bottom text */}
              <p className="relative z-10 mt-4 text-center font-medium text-slate-900">
                Placeholder Text
              </p>
            </div>        
          ))}
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-6 py-20 sm:px-8">
        <div className="relative">
          <div className="sticky top-24 z-20 text-center bg-[#011d01] backdrop-blur-md px-6 py-6 rounded-lg -mx-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80">
              Our Companies
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold mt-2 text-white">
              Six Powerhouses, One Vision
            </h2>
            <p className="max-w-2xl text-white/80 mx-auto mt-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
            </p>
          </div>

          <div className="mt-12 space-y-20 z-0">
            <div className="min-h-screen flex flex-col justify-center pt-32">
              <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20">
                <div className="rounded-2xl bg-[#042211] p-6 mb-4 flex items-center gap-6">
                  <div className="w-24 h-24 rounded-full flex-shrink-0 border-2 border-white/20 bg-white/5" />
                  <div>
                    <p className="text-sm font-semibold text-amber-200">Est. 2014</p>
                    <h3 className="text-xl font-bold mt-1 text-white">Six Season Agro Traders</h3>
                    <p className="text-sm text-white/70 mt-2 leading-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-[#042211] p-6 flex items-center gap-6">
                  <div className="w-24 h-24 rounded-full flex-shrink-0 border-2 border-white/20 bg-white/5" />
                  <div>
                    <p className="text-sm font-semibold text-amber-200">Est. 2017</p>
                    <h3 className="text-xl font-bold mt-1 text-white">Six Season Global Business LTD</h3>
                    <p className="text-sm text-white/70 mt-2 leading-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-h-screen flex flex-col justify-center pt-32">
              <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20">
                <div className="rounded-2xl bg-[#042211] p-6 mb-4 flex items-center gap-6">
                  <div className="w-24 h-24 rounded-full flex-shrink-0 border-2 border-white/20 bg-white/5" />
                  <div>
                    <p className="text-sm font-semibold text-amber-200">Est. 2020</p>
                    <h3 className="text-xl font-bold mt-1 text-white">Company Name 3</h3>
                    <p className="text-sm text-white/70 mt-2 leading-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-[#042211] p-6 flex items-center gap-6">
                  <div className="w-24 h-24 rounded-full flex-shrink-0 border-2 border-white/20 bg-white/5" />
                  <div>
                    <p className="text-sm font-semibold text-amber-200">Est. 2022</p>
                    <h3 className="text-xl font-bold mt-1 text-white">Company Name 4</h3>
                    <p className="text-sm text-white/70 mt-2 leading-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-h-screen flex flex-col justify-center pt-32">
              <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20">
                <div className="rounded-2xl bg-[#042211] p-6 mb-4 flex items-center gap-6">
                  <div className="w-24 h-24 rounded-full flex-shrink-0 border-2 border-white/20 bg-white/5" />
                  <div>
                    <p className="text-sm font-semibold text-amber-200">Est. 2023</p>
                    <h3 className="text-xl font-bold mt-1 text-white">Company Name 5</h3>
                    <p className="text-sm text-white/70 mt-2 leading-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-[#042211] p-6 flex items-center gap-6">
                  <div className="w-24 h-24 rounded-full flex-shrink-0 border-2 border-white/20 bg-white/5" />
                  <div>
                    <p className="text-sm font-semibold text-amber-200">Est. 2025</p>
                    <h3 className="text-xl font-bold mt-1 text-white">Company Name 6</h3>
                    <p className="text-sm text-white/70 mt-2 leading-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline/Journey Section */}
      <section className="w-full bg-[#011d01] py-20">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8">
          {/* Centered Headings */}
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80">
              Our Journey
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold mt-2 text-white text-center">
              A Decade of Evolution
            </h2>
          </div>

          {/* Main Timeline Container */}
          <div className="max-w-6xl mx-auto mt-12 bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/20 min-h-[500px] relative flex flex-col justify-center">
            {/* Horizontal Connecting Line */}
            <div className="absolute top-1/3 left-10 right-10 border-t border-white/30" />

            {/* Timeline Cards Grid */}
            <div className="relative z-10">
              {/* Row 1: Top Layer - 2 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 px-4">
                {/* Card 1: 2014 */}
                <div className="border border-emerald-500/40 p-4 rounded-xl bg-white/5 backdrop-blur-md">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold text-emerald-400">2014</span>
                    <span className="text-xl">🚩</span>
                  </div>
                  <h3 className="font-bold text-sm text-emerald-400 mb-2">
                    Six Season Agro Traders
                  </h3>
                  <p className="text-xs text-white/70 mt-2 leading-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero.
                  </p>
                </div>

                {/* Card 2: 2017 */}
                <div className="border border-emerald-500/40 p-4 rounded-xl bg-white/5 backdrop-blur-md">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold text-emerald-400">2017</span>
                    <span className="text-xl">🚩</span>
                  </div>
                  <h3 className="font-bold text-sm text-emerald-400 mb-2">
                    Six Season Global Business LTD
                  </h3>
                  <p className="text-xs text-white/70 mt-2 leading-5">
                    Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
                  </p>
                </div>
              </div>

              {/* Row 2: Bottom Layer - 3 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {/* Card 3: 2019 */}
                <div className="border border-emerald-500/40 p-4 rounded-xl bg-white/5 backdrop-blur-md">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold text-emerald-400">2019</span>
                    <span className="text-xl">🚩</span>
                  </div>
                  <h3 className="font-bold text-sm text-emerald-400 mb-2">
                    Six Season Global Ventures
                  </h3>
                  <p className="text-xs text-white/70 mt-2 leading-5">
                    Proin sit amet ligula at augue varius tempor. Sed pulvinar nunc sit amet urna facilisis.
                  </p>
                </div>

                {/* Card 4: 2020 */}
                <div className="border border-emerald-500/40 p-4 rounded-xl bg-white/5 backdrop-blur-md">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold text-emerald-400">2020</span>
                    <span className="text-xl">🚩</span>
                  </div>
                  <h3 className="font-bold text-sm text-emerald-400 mb-2">
                    Six Season Enterprises
                  </h3>
                  <p className="text-xs text-white/70 mt-2 leading-5">
                    Maecenas pretium nisi sit amet leo efficitur. Suspendisse potenti tortor tincidunt.
                  </p>
                </div>

                {/* Card 5: 2023 */}
                <div className="border border-emerald-500/40 p-4 rounded-xl bg-white/5 backdrop-blur-md">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold text-emerald-400">2023</span>
                    <span className="text-xl">🚩</span>
                  </div>
                  <h3 className="font-bold text-sm text-emerald-400 mb-2">
                    Six Season Global Collective
                  </h3>
                  <p className="text-xs text-white/70 mt-2 leading-5">
                    Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors / Industries Section - Tall Pillars */}
      <section className="w-full py-20 bg-[#BEF4B8]">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black">
              Industries
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold mt-2 text-black text-center">
              Diverse Sectors, Unified Strength
            </h2>
            <p className="max-w-2xl text-black/80 mx-auto mt-4 text-center leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black">
              Sectors
            </p>
          </div>

          <div className="mt-16 flex flex-row flex-nowrap justify-center items-stretch gap-12 md:gap-16 max-w-6xl mx-auto">
            {[
              'Agriculture',
              'Global Trade',
              'Garments',
              'Logistics',
              'Fashion & Lifestyle',
            ].map((sector) => (
              <div
                key={sector}
                className="flex flex-col items-center justify-center h-[500px] w-40 bg-[#042211] border border-white/10 rounded-2xl p-4 transform transition-all duration-300 hover:-translate-y-2 text-white text-center"
              >
                {/* TOP: circular image holder */}
                <div className="w-24 h-24 rounded-full border-2 border-white/20 bg-white/5 shadow-md flex items-center justify-center mb-3" />

                {/* Vertical sector name centered within the pillar */}
                <div className="flex-1 flex items-center justify-center">
                  <div
                    style={{ writingMode: 'vertical-rl' }}
                    className="select-none font-semibold text-xl tracking-widest text-white whitespace-nowrap"
                  >
                    {sector}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#BEF4B8] py-20">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-black text-center">
              Our Team & Management
            </h2>
            <p className="max-w-2xl text-black/80 mx-auto mt-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="bg-[#EDFAEE] p-10 md:p-14 rounded-3xl max-w-6xl mx-auto mt-12 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full border-4 border-white bg-white/50 shadow-md flex items-center justify-center" />
                  <p className="text-lg font-bold text-neutral-800 mt-4">Team Member Name</p>
                  <p className="text-sm text-neutral-600 mt-1">Lorem ipsum dolor sit amet</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#BEF4B8] py-20">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/80">
              Our Sister Concern
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold mt-2 text-black text-center">
              United Under One Umbrella
            </h2>
            <p className="max-w-2xl text-black/80 mx-auto mt-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="max-w-6xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { year: '2014', name: 'Six Season Agro Traders', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero.' },
                { year: '2017', name: 'Six Season Global Business LTD', desc: 'Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.' },
                { year: '2020', name: 'Six Season Global Ventures', desc: 'Proin sit amet ligula at augue varius tempor. Sed pulvinar nunc sit amet urna facilisis.' },
                { year: '2022', name: 'Six Season Enterprises', desc: 'Maecenas pretium nisi sit amet leo efficitur. Suspendisse potenti tortor tincidunt.' },
                { year: '2023', name: 'Six Season Global Collective', desc: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.' },
                { year: '2025', name: 'Six Season Premium Group', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#011d01] rounded-3xl p-8 shadow-lg flex flex-col justify-between text-left"
                >
                 <div>
                      <p className="text-emerald-400 font-medium text-xs">Est. {item.year}</p>
                      <h3 className="text-xl font-bold text-white mt-2">{item.name}</h3>
                      <p className="text-sm text-white/80 mt-3 line-clamp-3">{item.desc}</p>
                 </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className="w-full bg-[#BEF4B8] py-20">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/80">
              What's Included
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold mt-2 text-black text-center">
              Comprehensive Business Solution
            </h2>
            <p className="max-w-2xl text-black/80 mx-auto mt-4 text-center">
              Every partnership with Six Season Group come with a full spectrum of capabilities and commitments
            </p>
          </div>      

          <div className="max-w-6xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {  name: 'Quality Assurance', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero.' },
                {  name: 'Global Sypply Chain', desc: 'Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.' },
                {  name: 'Technology Integration', desc: 'Proin sit amet ligula at augue varius tempor. Sed pulvinar nunc sit amet urna facilisis.' },
                {  name: 'Dedicated Suppoer Team', desc: 'Maecenas pretium nisi sit amet leo efficitur. Suspendisse potenti tortor tincidunt.' },
                {  name: 'Fast & Reliable Delivery', desc: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.' },
                {  name: 'Custom Solutions', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#011d01] rounded-3xl p-8 shadow-lg flex flex-col justify-between text-left"
                >
                  <div>

                    
              
              <div className="w-12 h-12 rounded-full border-2 border-white/20 bg-white/5 mb-4 flex items-center justify-center overflow-hidden flex-shrink-0">
                {/* ekhane <img> tag diye pore image er link boshiye dite hobe */}
              </div>
                    
                    <h3 className="text-xl font-bold text-white mt-2">{item.name}</h3>
                      <p className="text-sm text-white/80 mt-3 line-clamp-3">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#011d01] py-20">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80">
              Our working process
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold mt-2 text-white text-center">
              How We Deliver Results
            </h2>
            <p className="max-w-2xl text-white/80 mx-auto mt-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="max-w-6xl mx-auto mt-12 bg-green-100 p-12 rounded-3xl min-h-[500px] relative shadow-2xl flex flex-col justify-center">
            {/* Connecting Path Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              <line x1="25%" y1="35%" x2="75%" y2="35%" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
              <line x1="75%" y1="35%" x2="75%" y2="65%" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
              <line x1="75%" y1="65%" x2="25%" y2="65%" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
            </svg>

            {/* Grid Layout with 4 Steps */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Row 1: Top Layer */}
              <div className="flex flex-col items-center space-y-4">
                {/* Step 2: Planning & Design */}
                <div className="flex flex-col items-center text-center">
                  <div className="text-6xl font-bold text-black border-4 border-black/20 w-24 h-24 rounded-full flex items-center justify-center bg-white shadow-xl mb-4">
                    1
                  </div>
                  <div className="border border-black/20 p-4 rounded-xl bg-neutral-50 shadow-md w-full">
                    <h3 className="font-bold text-neutral-900">Delivery & Strategy</h3>
                    <p className="text-xs text-black/70 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4">
                {/* Step 4: Review & Growth */}
                <div className="flex flex-col items-center text-center">
                  <div className="text-6xl font-bold text-black border-4 border-black/20 w-24 h-24 rounded-full flex items-center justify-center bg-white shadow-xl mb-4">
                    2
                  </div>
                  <div className="border border-black/20 p-4 rounded-xl bg-neutral-50 shadow-md w-full">
                    <h3 className="font-bold text-neutral-900">Planning & Design</h3>
                    <p className="text-xs text-black/70 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
                  </div>
                </div>
              </div>

              {/* Row 2: Bottom Layer */}
              <div className="flex flex-col items-center space-y-4">
                {/* Step 1: Delivery & Strategy */}
                <div className="flex flex-col items-center text-center">
                  <div className="text-6xl font-bold text-black border-4 border-black/20 w-24 h-24 rounded-full flex items-center justify-center bg-white shadow-xl mb-4">
                    4
                  </div>
                  <div className="border border-black/20 p-4 rounded-xl bg-neutral-50 shadow-md w-full">
                    <h3 className="font-bold text-neutral-900">Review & Growth</h3>
                    <p className="text-xs text-black/70 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4">
                {/* Step 3: Execution & Delivery */}
                <div className="flex flex-col items-center text-center">
                  <div className="text-6xl font-bold text-black border-4 border-black/20 w-24 h-24 rounded-full flex items-center justify-center bg-white shadow-xl mb-4">
                    3
                  </div>
                  <div className="border border-black/20 p-4 rounded-xl bg-neutral-50 shadow-md w-full">
                    <h3 className="font-bold text-neutral-900">Excecution & Delivery</h3>
                    <p className="text-xs text-black/70 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#BEF4B8] py-20">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-center text-black">
              Join Our Growing Journey
            </h2>
            <p className="max-w-2xl text-black/80 mx-auto mt-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[40px] max-w-6xl mx-auto mt-12 shadow-xl">
            <div className="flex flex-col gap-6">
              {[
                { title: 'Strategic Planning & Consultation', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { title: 'Seamless Implementation Process', desc: 'Vivamus lacinia odio vitae vestibulum vestibulum.' },
                { title: 'Continuous Support & Optimization', desc: 'Proin sit amet ligula at augue varius tempor.' },
                { title: 'Long-Term Partnership Growth', desc: 'Maecenas pretium nisi sit amet leo efficitur.' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-neutral-50 border border-neutral-100 rounded-2xl p-6 flex items-center gap-8"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-100/50 border-2 border-emerald-500/20 flex-shrink-0 flex items-center justify-center" />
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
                    <p className="text-sm text-neutral-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#BEF4B8] py-20">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/80">
              Why choose us
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold mt-2 text-black text-center">
              The Six Season Advantage
            </h2>
            <p className="max-w-2xl text-black/80 mx-auto mt-4 text-center text-sm">
              What sets us apart is not just what we do-it's how we do it
            </p>
            <div className="border-t border-white/20 max-w-4xl mx-auto mt-8" />
          </div>

          <div className="flex flex-col gap-6 max-w-5xl mx-auto mt-12 pl-6 md:pl-12">
            {[
              {
                number: '1',
                title: 'Global Presence',
                description: 'Global reach, local expertise',
                widthClass: 'max-w-xl',
                // least pointy
                clip: 'polygon(0% 0%, 92% 0%, 97% 50%, 92% 100%, 0% 100%)',
              },
              {
                number: '2',
                title: 'Trusted Quality',
                description: 'Trusted worldwide through rigorous quality standards',
                widthClass: 'max-w-3xl',
                // slightly pointier
                clip: 'polygon(0% 0%, 94% 0%, 98% 50%, 94% 100%, 0% 100%)',
              },
              {
                number: '3',
                title: 'Innovation Driven',
                description: 'Driving innovation through tech and forward-thinking strategies.',
                widthClass: 'max-w-4xl',
                // more pointy
                clip: 'polygon(0% 0%, 96% 0%, 99% 50%, 96% 100%, 0% 100%)',
              },
              {
                number: '4',
                title: 'Multi-Industry Expertise',
                description: 'Cross sector knowledge that enables excellence in any environment.',
                widthClass: 'max-w-5xl',
                // most pointy
                clip: 'polygon(0% 0%, 98% 0%, 100% 50%, 98% 100%, 0% 100%)',
              },
            ].map((item) => (
              <div key={item.number} className={`${item.widthClass} relative flex items-center`}>
                <div className="w-16 h-16 rounded-full bg-white text-black text-2xl font-bold flex items-center justify-center shadow-[0_12px_40px_-8px_rgba(16,128,53,0.45)] ring-4 ring-[#108035]/20 z-10 absolute -left-2">
                  {item.number}
                </div>
                <div
                  className="ml-10 rounded-l-full bg-[#011d01] shadow-md flex items-center gap-6 pl-[4.75rem] pr-8 py-4"
                  style={{ clipPath: item.clip }}
                >
                  <p className="text-lg font-bold text-white whitespace-nowrap">
                    {item.title}
                  </p>
                  <p className="text-xs md:text-sm text-white/70">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#BEF4B8] py-20">
  <div className="w-full max-w-7xl mx-auto px-6 sm:px-8">
    
    <div 
      className="max-w-6xl mx-auto mt-8 rounded-3xl overflow-hidden relative min-h-[500px] shadow-2xl grid grid-cols-1 md:grid-cols-2"
      style={{
        background: 'linear-gradient(135deg, #012406 49.8%, #ffffff 49.9%, #ffffff 50.1%, #EDFAEE 50.2%)'
      }}
    >
      
      {/* LEFT SIDE - Philosophy Side */}
      <div className="flex items-center justify-start p-8 md:p-16 bg-[#012406] md:bg-transparent z-10">
        <div className="text-left max-w-md">
          <p className="text-base md:text-lg text-white font-medium italic leading-relaxed">
            "Six Season Group represents the future of diversified business - where agriculture meets fashion, and local expertise meets global reach."
          </p>
          <h3 className="text-xl font-bold text-white mt-8">
            Six Season Group
          </h3>
          <p className="text-xs text-white/50 tracking-wider uppercase mt-1">
            Corporate Philosophy
          </p>
        </div>
      </div>

      {/* RIGHT SIDE - CTA Side */}
      <div className="flex items-center justify-end p-8 md:p-16 bg-[#EDFAEE] md:bg-transparent z-10">
        <div className="text-center md:text-right max-w-md w-full">
          <p className="text-sm font-medium text-neutral-600">
            - Get in touch
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mt-2 leading-tight">
            Let's Build the <br className="hidden md:block"/>
            <span className="text-emerald-600">Future Together</span>
          </h2>
          <p className="text-xs md:text-sm text-neutral-600 mt-4 ml-auto">
            Join Six Season Group in shaping tomorrow's global business landscape with innovation, integrity, and excellence.
          </p>
          <button className="mt-8 px-8 py-3 bg-white border border-neutral-300 rounded-full text-neutral-800 font-semibold flex items-center gap-2 hover:bg-neutral-50 transition shadow-sm mx-auto md:mr-0">
            CONTACT US
            <span>→</span>
          </button>
        </div>
      </div>

    </div>
  </div>
</section>



<section className="w-full bg-[#BEF4B8] py-20">
  <div className="w-full max-w-7xl mx-auto px-6 sm:px-8">
    
    
    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/80">
        Our Global Footprint
      </p>
      <h7 className="text-3xl lg:text-5xl font-bold mt-2 text-black text-center">
        Connecting the World, One Partnership at a Time
      </h7>
      <p className="max-w-2xl text-black/80 mx-auto mt-4 text-center">
        With a presence in over 30 countries, Six Season Group is a truly global enterprise. Our strategic locations and partnerships enable us to deliver excellence worldwide.
      </p>
    </div>
        
    
    <div className="w-full max-w-6xl mx-auto mt-8 bg-[#011d01]/30 border border-white/10 rounded-[40px] min-h-[500px] flex items-center justify-center relative overflow-hidden shadow-2xl backdrop-blur-sm">
      
      <div className="text-white/20 text-sm font-medium tracking-widest uppercase select-none">
        Animated Map Holder (Placeholder)
      </div>

     

    </div>

   
    <div className="w-full text-center mt-6">
      <p className="text-xs md:text-sm text-black/120 max-w-3xl mx-auto font-normal tracking-wide">
        Bangladesh • Ship products to 30+ countries around the world, including the USA and Canada
      </p>
    </div>

  </div>
</section>


<section className="w-full bg-[#BEF4B8] py-20">
  <div className="w-full max-w-7xl mx-auto px-6 sm:px-8">
    
    
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-5xl font-bold text-black text-center">
        Our Performance Scale at a Glance
      </h2>
      <p className="max-w-2xl text-black/80 mx-auto mt-4 text-center text-sm">
        Key milestones and measurable growth across our operations 
      </p>
    </div>

    
    <div className="max-w-2xl mx-auto grid grid-cols-5 gap-2 md:gap-4 items-end min-h-[450px] bg-white/40 p-6 md:p-8 rounded-[40px] backdrop-blur-sm shadow-xl">
      
      {[
        { id: 1, percent: '100%', heightClass: 'h-[350px]', topText: 'Quality', bottomText: 'Top grade knitwear' },
        { id: 2, percent: '100%', heightClass: 'h-[350px]', topText: 'On Time Delivery', bottomText: 'Reliable logistics' },
        { id: 3, percent: '99%', heightClass: 'h-[346px]',  topText: 'Buyer Satisfaction', bottomText: 'Trusted by clients' }, 
        { id: 4, percent: '100%', heightClass: 'h-[350px]', topText: 'Manufacturing', bottomText: 'End to end solutions' },
        { id: 5, percent: '97%', heightClass: 'h-[339px]',  topText: 'Flexible MOQs', bottomText: 'Low minimums' }  
      ].map((col) => (
        <div key={col.id} className="flex flex-col items-center gap-3 h-full justify-end">
          
          
          <span className="text-10px font-semibold text-black/50 tracking-wider uppercase text-center min-h-[16px]">
            {col.topText}
          </span>

          
          <div className={`w-full ${col.heightClass} bg-[#012406] rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden transition-all duration-500 hover:scale-105`}>
            
            
            <span className="text-white font-bold text-base md:text-xl tracking-widest uppercase [writing-mode:vertical-lr] rotate-180">
              {col.percent}
            </span>

          </div>

          
          <span className="text-xs font-medium text-black/60 text-center min-h-[16px]">
            {col.bottomText}
          </span>

        </div>
      ))}

    </div>

  </div>
</section>

<section className="w-full bg-[#BEF4B8] py-20">
  <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/70">
        WE'RE HERE TO HELP YOU
      </p>
      <h2 className="text-4xl lg:text-5xl font-extrabold text-black mt-4 leading-tight">
        Discuss Your Knitwear & Export Needs
      </h2>
      <p className="text-sm lg:text-base text-black/80 max-w-md mt-6 leading-relaxed">
        If you need quality knitwear, flexible MOQ or full service manufacturing tell us about the product, quantities and delivery country. We'll response with pricing and lead times.
      </p>

     <div className="mt-8 flex flex-wrap gap-3">
  
  
  <div className="bg-white/15 backdrop-blur-md border border-white/25 px-5 py-2.5 rounded-full text-xs md:text-sm text-black flex items-center gap-2.5 shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all hover:bg-white/20">
    <span className="text-base">✉️</span>
    <span className="font-medium tracking-wide">info@sixseasongroup.com</span>
  </div>
  
          
  <div className="bg-white/15 backdrop-blur-md border border-white/25 px-5 py-2.5 rounded-full text-xs md:text-sm text-black flex items-center gap-2.5 shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all hover:bg-white/20">
    <span className="text-base">📞</span>
    <span className="font-medium tracking-wide">+88 01958486943</span> 
  </div>

</div>

    </div>

    <div className="w-full max-w-lg bg-white rounded-[32px] p-8 md:p-10 shadow-2xl ml-auto">
      <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-6">
        Request a Quote
      </h3>

      <div className="space-y-5">
        <label className="block text-sm font-bold text-neutral-800 mb-2" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your name"
          className="w-full bg-[#EDFAEE] border border-neutral-300 rounded-full px-5 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
        />

        <label className="block text-sm font-bold text-neutral-800 mb-2" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          className="w-full bg-[#EDFAEE] border border-neutral-300 rounded-full px-5 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
        />

        <label className="block text-sm font-bold text-neutral-800 mb-2" htmlFor="product">
          Product / Interested in
        </label>
        <input
          id="product"
          type="text"
          placeholder="Knitwear, garments, etc."
          className="w-full bg-[#EDFAEE] border border-neutral-300 rounded-full px-5 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
        />

        <label className="block text-sm font-bold text-neutral-800 mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Tell us about your product, quantities and delivery country"
          className="w-full bg-[#EDFAEE] border border-neutral-300 rounded-[20px] px-5 py-4 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition min-h-[100px] resize-none"
        />
      </div>

      <div className="flex items-center gap-4 mt-8">
        <button className="px-6 py-3 bg-[#012406] hover:bg-[#023b0a] text-white font-bold text-xs tracking-wider uppercase rounded-full shadow-md transition">
          GET A SOLUTION
        </button>
        <button className="px-6 py-3 bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-700 font-bold text-xs tracking-wider uppercase rounded-full transition">
          CLEAR
        </button>
      </div>
    </div>
  </div>
</section>

<footer className="w-full bg-[#012406] pt-16 pb-8 text-white">
  <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
    <div>
      <h3 className="text-2xl md:text-3xl font-bold text-white">Six Season Group</h3>
      <p className="text-sm text-white/70 mt-6 leading-relaxed max-w-sm">
        Creating exceptional garments with attention to detail and sustainable practices since 2014. Our commitment to quality defines every piece we produce.
      </p>
      <div className="mt-8 space-y-4 text-sm">
        <div className="flex items-start gap-3 text-white/80">
          <span className="mt-1">📞</span>
          <span>+8801958486943</span>
        </div>
        <div className="flex items-start gap-3 text-white/80">
          <span className="mt-1">✉️</span>
          <span>info@sixseasongroup.com</span>
        </div>
        <div className="flex items-start gap-3 text-white/80 leading-relaxed">
          <span className="mt-1">📍</span>
          <span>House #6, Main Road, Rajbari, Kamarpara, Turaga, Dhaka – 1230, Bangladesh.</span>
        </div>
      </div>
    </div>

    <div>
      <h5 className="text-lg font-semibold text-white tracking-wide border-b border-white/20 pb-2 mb-4 max-w-[100px]">
        Popular Pages
      </h5>
      <div className="space-y-3 text-sm text-white/70">
        <a href="#" className="block hover:text-emerald-400 transition-colors duration-200">Career</a>
        <a href="#" className="block hover:text-emerald-400 transition-colors duration-200">About Us</a>
        <a href="#" className="block hover:text-emerald-400 transition-colors duration-200">Management</a>
        <a href="#" className="block hover:text-emerald-400 transition-colors duration-200">Contact Us</a>
        <a href="#" className="block hover:text-emerald-400 transition-colors duration-200">Privacy Policy</a>
        <a href="#" className="block hover:text-emerald-400 transition-colors duration-200">Terms of Service</a>
      </div>
    </div>

    <div>
      <h5 className="text-lg font-semibold text-white tracking-wide border-b border-white/20 pb-2 mb-4 max-w-[120px]">
        Sister Concern
      </h5>
      <div className="space-y-3 text-sm text-white/70">
        <a href="#" className="block hover:text-emerald-400 transition-colors duration-200">Six Season Agro Traders</a>
        <a href="#" className="block hover:text-emerald-400 transition-colors duration-200">Six Season Global Business LTD</a>
        <a href="#" className="block hover:text-emerald-400 transition-colors duration-200">Six Season USA LLC</a>
        <a href="#" className="block hover:text-emerald-400 transition-colors duration-200">Marss Outwear Creation</a>
        <a href="#" className="block hover:text-emerald-400 transition-colors duration-200">Delivery 24</a>
        <a href="#" className="block hover:text-emerald-400 transition-colors duration-200">AMRISS</a>
      </div>
    </div>

    <div>
      <h5 className="text-lg font-semibold text-white tracking-wide border-b border-white/20 pb-2 mb-4 max-w-[80px]">
        More Info
      </h5>
      <div className="space-y-3 text-sm text-white/70">
        <a href="#" className="block hover:text-emerald-400 transition-colors duration-200">FAQs</a>
        <a href="#" className="block hover:text-emerald-400 transition-colors duration-200">Contact Us</a>
        <a href="#" className="block hover:text-emerald-400 transition-colors duration-200">Terms & Conditions</a>
        <a href="#" className="block hover:text-emerald-400 transition-colors duration-200">Privacy Policy</a>
        <a href="#" className="block hover:text-emerald-400 transition-colors duration-200">Patient Portal</a>
        <a href="#" className="block hover:text-emerald-400 transition-colors duration-200">Billing Support</a>
      </div>
    </div>
  </div>

  <div className="w-full border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 sm:px-8">
    <p className="text-sm text-white/60">© 2026 Six Season Group. All rights reserved.</p>
    <div className="flex items-center gap-6 text-white/70 text-lg">
      <a href="#" className="hover:text-white transition-colors cursor-pointer">🔵</a>
      <a href="#" className="hover:text-white transition-colors cursor-pointer">🐦</a>
      <a href="#" className="hover:text-white transition-colors cursor-pointer">🔗</a>
      <a href="#" className="hover:text-white transition-colors cursor-pointer">📸</a>
      <a href="#" className="hover:text-white transition-colors cursor-pointer">▶️</a>
    </div>
  </div>
</footer>

    </main>
  )
}