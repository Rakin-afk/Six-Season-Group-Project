import React from 'react';

const AboutUs = () => {
  return (
    <div className="w-full min-h-screen pt-28 md:pt-36 pb-16 flex flex-col items-center justify-start text-center relative overflow-hidden bg-[#BEF4B8] text-gray-900">
      {/* Hero Content Container */}
      <div className="w-full max-w-4xl mx-auto px-6 flex flex-col items-center">
        <div className="bg-[#EDFAEE] text-gray-900 px-6 py-2 rounded-full text-xs md:text-sm font-semibold uppercase tracking-widest shadow-sm mb-6 md:mb-8">
          SINCE 2014
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#108035] tracking-wide uppercase mb-6 md:mb-8">
          SIX SEASON GROUP
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-900/85 font-normal max-w-2xl leading-relaxed mb-12 md:mb-16">
          A premier knitwear manufacturer and exporter from Bangladesh, crafting quality apparel for global fashion brands with excellence, ethics and innovation
        </p>

        <div className="bg-white/90 rounded-[24px] border border-white/40 p-6 md:p-8 max-w-3xl w-full shadow-xl">
          <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 tracking-wide text-center leading-relaxed">
            Proud Member of Bangladesh Knitwear Manufacturer & Exporters Association (BKMEA) | ISO Certified | Global Export Compliance
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="w-full mt-16 bg-transparent">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-16 md:py-24 relative">
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 relative pb-2 mb-4 tracking-wide flex flex-col items-center">
              Our Story
              <span className="mt-3 h-[1px] w-16 bg-gray-700/30"></span>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-gray-900/80 font-medium max-w-3xl mx-auto leading-relaxed mb-12 md:mb-16 text-center">
              From humble beginnings in 2014 to becoming a leading global knitwear manufacturer, or journey is defined by commitment to quality, innovation and sustainable growth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <p className="text-sm md:text-base text-gray-900/75 leading-relaxed font-light">
                Six Season Group began in 2014 as Six Season Agro Traders, establishing our foundational values of integrity, reliability and excellence in international trade. Recognizing the immense potential in Bangladesh's rapidly growing textile sector, we strategically pivoted to leverage our expertise in global markets. In 2017, we established Six Season Global Business LTD, formalizing our entry into the global garment manufacturing industry. This marked the beginning of our focused journey in knitwear production, combining traditional craftsmanship with modern manufacturing techniques.
              </p>

              <p className="text-sm md:text-base text-gray-900/75 leading-relaxed font-light">
                Our commitment to vertical integration led to the creation of Marss Outwear Creation in 2018, enhancing our production capabilities with state-of-the-art facilities. This strategic expansion allowed us to maintain complete control over our manufacturing processes, ensuring quality at every stage.
              </p>

              <p className="text-base md:text-lg text-gray-900 font-semibold leading-relaxed mt-8">
                Today, Six Season Group specializes exclusively in knitwear manufacturing, producing everything from basic t-shirts and polo shirts to sophisticated activewear, sweaters and fashion-forward knit items for leading global brands across 35+ countries.
              </p>
            </div>

            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="flex gap-4 items-stretch h-[520px] md:h-[560px] w-full max-w-xl mx-auto">
                <div className="flex flex-col gap-4 w-1/2 h-full">
                  <div className="flex-[1.25] rounded-[32px] bg-white/80 border border-white/30 shadow-xl overflow-hidden relative">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='900'%3E%3Crect width='600' height='900' fill='%23e6efe6'/%3E%3C/svg%3E"
                      alt="Factory floor layout placeholder"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-[1.15] rounded-[32px] bg-white/80 border border-white/30 shadow-xl overflow-hidden relative">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='800'%3E%3Crect width='600' height='800' fill='%23e6efe6'/%3E%3C/svg%3E"
                      alt="Industrial sewing row placeholder"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-1/2 h-full rounded-[32px] bg-white/80 border border-white/30 shadow-xl overflow-hidden relative">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='1200'%3E%3Crect width='600' height='1200' fill='%23e6efe6'/%3E%3C/svg%3E"
                    alt="Office leadership team placeholder"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="w-full">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-16 flex justify-center items-center relative">
          <div className="w-full max-w-4xl mx-auto">
            <div className="rounded-[32px] bg-[#EDFAEE]/90 border border-white/40 shadow-xl shadow-green-900/5 w-full">
              <div className="flex flex-col items-center justify-center text-center p-8 md:p-14 max-w-4xl w-full mx-auto space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                  1 Million+ Garments Produced Annually
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 font-normal max-w-2xl leading-relaxed">
                  Serving clients across Europe, North America, Australia and Asia with precision, quality and timely delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>





{/* =========================================================================
    GROWTH TIMELINE SECTION (Pixel-Perfect Snake Connection Fix)
   ========================================================================= */}
<section className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-16 relative z-10">
  
  {/* Section Headers */}
  <div className="text-center mb-10 md:mb-14">
    <h2 className="text-3xl md:text-5xl font-semibold text-black tracking-wide mb-4">
      Our Growth Timeline
    </h2>
    <p className="text-sm sm:text-base md:text-lg text-black/80 font-normal max-w-3xl mx-auto leading-relaxed">
      A journey of strategic expansion and continuous evolution across six specialized companies
    </p>
  </div>

  {/* Main Timeline Card Container */}
  <div className="bg-[#E7FBF3] rounded-[36px] border border-white/40 p-8 md:p-16 max-w-6xl w-full mx-auto shadow-xl relative flex flex-col gap-24 overflow-hidden">
    
    {/* Global SVG Definition for Arrowheads */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
      <defs>
        <marker id="arrow-right" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto" fill="#374151">
          <path d="M 0 1 L 7 5 L 0 9 z" />
        </marker>
        <marker id="arrow-left" viewBox="0 0 10 10" refX="1" refY="5" markerWidth="6" markerHeight="6" orient="auto" fill="#374151">
          <path d="M 7 1 L 0 5 L 7 9 z" />
        </marker>
      </defs>
    </svg>

    {/* -------------------------------------------------------------------------
        ROW 1: Top Line (2014 -> 2017 -> 2018)
        ------------------------------------------------------------------------- */}
    <div className="relative grid grid-cols-3 text-center">
      
      {/* Local SVG Line for Row 1 to Row 2 Drop */}
      <svg className="absolute top-7 left-0 w-full h-[150px] pointer-events-none z-0" aria-hidden="true">
        {/* 2014 -> 2017 */}
        <line x1="16.6%" y1="0" x2="48%" y2="0" stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrow-right)" />
        {/* 2017 -> 2018 */}
        <line x1="50%" y1="0" x2="81%" y2="0" stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrow-right)" />
        {/* 🎯 2018 Drop Down & Connect to 2019 (Safe Outer Path) */}
        <path d="M 83.3% 0 L 94% 0 L 94% 145 L 64% 145" stroke="#374151" strokeWidth="1.5" fill="none" strokeLinejoin="round" markerEnd="url(#arrow-left)" />
      </svg>

      {/* 2014 - Six Season Agro Traders */}
      <div className="flex flex-col items-center px-4 relative z-10">
        <span className="text-gray-600 text-lg font-medium mb-1">2014</span>
        <div className="w-[14px] h-[14px] rounded-full bg-[#9CD1B9] border-2 border-gray-700 flex items-center justify-center mb-3">
          <div className="w-[4px] h-[4px] bg-gray-700 rounded-full"></div>
        </div>
        <h4 className="text-gray-900 font-bold text-sm md:text-base mb-1">Six Season Agro Traders</h4>
        <p className="text-gray-600 text-[11px] md:text-xs max-w-[210px] leading-relaxed font-normal">
          Foundation of our business with agricultural trading, establishing core values of integrity and reliability in international commerce.
        </p>
      </div>

      {/* 2017 - Six Season Global Business LTD */}
      <div className="flex flex-col items-center px-4 relative z-10">
        <span className="text-gray-600 text-lg font-medium mb-1">2017</span>
        <div className="w-[14px] h-[14px] rounded-full bg-[#99B2D1] border-2 border-gray-700 flex items-center justify-center mb-3">
          <div className="w-[4px] h-[4px] bg-gray-700 rounded-full"></div>
        </div>
        <h4 className="text-gray-900 font-bold text-sm md:text-base mb-1">Six Season Global Business LTD</h4>
        <p className="text-gray-600 text-[11px] md:text-xs max-w-[210px] leading-relaxed font-normal">
          Formal establishment of our export-focused garment manufacturing division, entering the global knitwear industry with certified production facilities.
        </p>
      </div>

      {/* 2018 - Marss Outwear Creation */}
      <div className="flex flex-col items-center px-4 relative z-10">
        <span className="text-gray-600 text-lg font-medium mb-1">2018</span>
        <div className="w-[14px] h-[14px] rounded-full bg-[#99BCD1] border-2 border-gray-700 flex items-center justify-center mb-3">
          <div className="w-[4px] h-[4px] bg-gray-700 rounded-full"></div>
        </div>
        <h4 className="text-gray-900 font-bold text-sm md:text-base mb-1">Marss Outwear Creation</h4>
        <p className="text-gray-600 text-[11px] md:text-xs max-w-[210px] leading-relaxed font-normal">
          Expansion with dedicated outwear manufacturing facility featuring modern machinery, skilled workforce and quality control systems.
        </p>
      </div>
    </div>

    {/* -------------------------------------------------------------------------
        ROW 2: Middle Line (2020 Delivery 24 <- 2019 Six Season USA LLC)
        ------------------------------------------------------------------------- */}
    <div className="relative grid grid-cols-4 text-center">
      
      {/* Local SVG Line for Row 2 to Row 3 Drop */}
      <svg className="absolute top-7 left-0 w-full h-[150px] pointer-events-none z-0" aria-hidden="true">
        {/* 2019 <- 2020 Delivery 24 */}
        <line x1="60.5%" y1="0" x2="39.5%" y2="0" stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrow-left)" />
        {/* 🎯 2020 Delivery 24 Drop Down & Connect to final Center Node (AMRISS) */}
        <path d="M 37.5% 0 L 22% 0 L 22% 145 L 48.5% 145" stroke="#374151" strokeWidth="1.5" fill="none" strokeLinejoin="round" markerEnd="url(#arrow-right)" />
      </svg>

      <div className="col-span-1"></div>

      {/* 2020 - Delivery 24 */}
      <div className="flex flex-col items-center px-4 col-span-1 relative z-10">
        <span className="text-gray-600 text-lg font-medium mb-1">2020</span>
        <div className="w-[14px] h-[14px] rounded-full bg-[#D1C299] border-2 border-gray-700 flex items-center justify-center mb-3">
          <div className="w-[4px] h-[4px] bg-gray-700 rounded-full"></div>
        </div>
        <h4 className="text-gray-900 font-bold text-sm md:text-base mb-1">Delivery 24</h4>
        <p className="text-gray-600 text-[11px] md:text-xs max-w-[210px] leading-relaxed font-normal">
          Launch of integrated logistics and supply chain division ensuring timely delivery, efficient operations and end-to-end shipment tracking.
        </p>
      </div>

      {/* 2019 - Six Season USA LLC */}
      <div className="flex flex-col items-center px-4 col-span-1 relative z-10">
        <span className="text-gray-600 text-lg font-medium mb-1">2019</span>
        <div className="w-[14px] h-[14px] rounded-full bg-[#D19999] border-2 border-gray-700 flex items-center justify-center mb-3">
          <div className="w-[4px] h-[4px] bg-gray-700 rounded-full"></div>
        </div>
        <h4 className="text-gray-900 font-bold text-sm md:text-base mb-1">Six Season USA LLC</h4>
        <p className="text-gray-600 text-[11px] md:text-xs max-w-[210px] leading-relaxed font-normal">
          Strategic expansion into North America with dedicated corporate entity for client service, market development and logistics coordination.
        </p>
      </div>

      <div className="col-span-1"></div>
    </div>

    {/* -------------------------------------------------------------------------
        ROW 3: Bottom Center Node (2020 AMRISS)
        ------------------------------------------------------------------------- */}
    <div className="relative flex justify-center text-center">
      {/* 2020 - AMRISS */}
      <div className="flex flex-col items-center px-4 max-w-[280px] relative z-10">
        <span className="text-gray-600 text-lg font-medium mb-1">2023</span>
        <div className="w-[14px] h-[14px] rounded-full bg-[#C199D1] border-2 border-gray-700 flex items-center justify-center mb-3">
          <div className="w-[4px] h-[4px] bg-gray-700 rounded-full"></div>
        </div>
        <h4 className="text-gray-900 font-bold text-sm md:text-base mb-1">AMRISS</h4>
        <p className="text-gray-600 text-[11px] md:text-xs leading-relaxed font-normal">
          Introduction of our fashion-forward brand representing commitment to design innovation, contemporary style and market responsiveness.
        </p>
      </div>
    </div>

  </div>
</section>






{/* =========================================================================
    FOUR-BOX GRID FEATURE SECTION (Enhanced Text Size & Ideal Premium Padding)
   ========================================================================= */}
<section className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-16 relative z-10">
  
  {/* Top Middle Header */}
  <div className="text-center mb-12 md:mb-16">
    <h2 className="text-3xl md:text-5xl font-semibold text-black tracking-wide mb-4">
      Production Capabilities
    </h2>
    <p className="text-sm sm:text-base md:text-lg text-black/80 font-normal max-w-2xl mx-auto leading-relaxed">
      State of the art manufacturing facilities specializing  exclusively in knitwear
production with complete vertical integration
    </p>
  </div>

  {/* 2x2 Grid Container */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto w-full">
    
    {/* ─── BOX 1 ─── */}
    <div className="bg-[#042211] rounded-[28px] border border-white/40 p-8 md:p-12 shadow-xl min-h-[260px] flex items-start">
      {/* Outer Flex Layer: Image Left, Content Right */}
      <div className="flex items-start gap-6 w-full">
        
        {/* Circular Image Holder (Stays fixed on the left) */}
        <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/30 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-inner">
          <span className="text-sm text-white/70 font-medium">Img</span>
        </div>
        
        {/* Text Group Container (Strict vertical alignment with bigger text) */}
        <div className="flex flex-col text-left justify-center pt-1">
          {/* Bigger Bold Title */}
          <h3 className="text-white font-bold text-xl md:text-2xl leading-tight mb-3 tracking-wide">
            Basic Knitwear
          </h3>
          {/* Bigger Body Text with ideal line-height */}
          <p className="text-white/90 text-sm md:text-base leading-relaxed font-normal">
            T-shirts, polo shirts, tank tops and basic knit items with precision cutting and stitching.
          </p>
        </div>

      </div>
    </div>

    {/* ─── BOX 2 ─── */}
    <div className="bg-[#042211] rounded-[28px] border border-white/40 p-8 md:p-12 shadow-xl min-h-[260px] flex items-start">
      <div className="flex items-start gap-6 w-full">
        
        <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/30 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-inner">
          <span className="text-sm text-white/70 font-medium">Img</span>
        </div>
        
        <div className="flex flex-col text-left justify-center pt-1">
          <h3 className="text-white font-bold text-xl md:text-2xl leading-tight mb-3 tracking-wide">
            Active & Sportswear
          </h3>
          <p className="text-white/90 text-sm md:text-base leading-relaxed font-normal">
            Performance fabrics, moisture-wicking technology and ergonomic designs for athletic wear.
          </p>
        </div>

      </div>
    </div>

    {/* ─── BOX 3 ─── */}
    <div className="bg-[#042211] rounded-[28px] border border-white/40 p-8 md:p-12 shadow-xl min-h-[260px] flex items-start">
      <div className="flex items-start gap-6 w-full">
        
        <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/30 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-inner">
          <span className="text-sm text-white/70 font-medium">Img</span>
        </div>
        
        <div className="flex flex-col text-left justify-center pt-1">
          <h3 className="text-white font-bold text-xl md:text-2xl leading-tight mb-3 tracking-wide">
            Sweaters & Cardigans
          </h3>
          <p className="text-white/90 text-sm md:text-base leading-relaxed font-normal">
            Intricate knitting patterns, varied gauges and premium yarns for cold weather apparel.
          </p>
        </div>

      </div>
    </div>

    {/* ─── BOX 4 ─── */}
    <div className="bg-[#042211] rounded-[28px] border border-white/40 p-8 md:p-12 shadow-xl min-h-[260px] flex items-start">
      <div className="flex items-start gap-6 w-full">
        
        <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/30 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-inner">
          <span className="text-sm text-white/70 font-medium">Img</span>
        </div>
        
        <div className="flex flex-col text-left justify-center pt-1">
          <h3 className="text-white font-bold text-xl md:text-2xl leading-tight mb-3 tracking-wide">
            Fashion Knit Items
          </h3>
          <p className="text-white/90 text-sm md:text-base leading-relaxed font-normal">
            Designer knitwear with complex patterns, textures and contemporary styling.
          </p>
        </div>

      </div>
    </div>

  </div>
</section>






{/* =========================================================================
    FOUR-BOX GRID FEATURE SECTION (Enhanced Text Size & Ideal Premium Padding)
   ========================================================================= */}
<section className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-16 relative z-10">
  
  {/* Top Middle Header */}
  <div className="text-center mb-12 md:mb-16">
    <h2 className="text-3xl md:text-5xl font-semibold text-black tracking-wide mb-4">
      Our Core Values
    </h2>
    <p className="text-sm sm:text-base md:text-lg text-black/80 font-normal max-w-2xl mx-auto leading-relaxed">
      The principles that guide our operations, relationships and commitment to
excellence
    </p>
  </div>

  {/* 2x2 Grid Container */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto w-full">
    
    {/* ─── BOX 1 ─── */}
    <div className="bg-[#042211] rounded-[28px] border border-white/40 p-8 md:p-12 shadow-xl min-h-[260px] flex items-start">
      {/* Outer Flex Layer: Image Left, Content Right */}
      <div className="flex items-start gap-6 w-full">
        
        {/* Circular Image Holder (Stays fixed on the left) */}
        <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/30 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-inner">
          <span className="text-sm text-white/70 font-medium">Img</span>
        </div>
        
        {/* Text Group Container (Strict vertical alignment with bigger text) */}
        <div className="flex flex-col text-left justify-center pt-1">
          {/* Bigger Bold Title */}
          <h3 className="text-white font-bold text-xl md:text-2xl leading-tight mb-3 tracking-wide">
            Quality Excellence
          </h3>
          {/* Bigger Body Text with ideal line-height */}
          <p className="text-white/90 text-sm md:text-base leading-relaxed font-normal">
            Rigorous quality control at every production stage ensuring international standards compliance and client satisfaction
          </p>
        </div>

      </div>
    </div>

    {/* ─── BOX 2 ─── */}
    <div className="bg-[#042211] rounded-[28px] border border-white/40 p-8 md:p-12 shadow-xl min-h-[260px] flex items-start">
      <div className="flex items-start gap-6 w-full">
        
        <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/30 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-inner">
          <span className="text-sm text-white/70 font-medium">Img</span>
        </div>
        
        <div className="flex flex-col text-left justify-center pt-1">
          <h3 className="text-white font-bold text-xl md:text-2xl leading-tight mb-3 tracking-wide">
            Sustainable Practices
          </h3>
          <p className="text-white/90 text-sm md:text-base leading-relaxed font-normal">
            Environmentally responsible manufacturing with sustainable processes materials and waste reduction initiatives.

          </p>
        </div>

      </div>
    </div>

    {/* ─── BOX 3 ─── */}
    <div className="bg-[#042211] rounded-[28px] border border-white/40 p-8 md:p-12 shadow-xl min-h-[260px] flex items-start">
      <div className="flex items-start gap-6 w-full">
        
        <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/30 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-inner">
          <span className="text-sm text-white/70 font-medium">Img</span>
        </div>
        
        <div className="flex flex-col text-left justify-center pt-1">
          <h3 className="text-white font-bold text-xl md:text-2xl leading-tight mb-3 tracking-wide">
            Ethical Manufacturing
          </h3>
          <p className="text-white/90 text-sm md:text-base leading-relaxed font-normal">
            Safe working conditions, fair wages and respect for workers rights across all facilities.
          </p>
        </div>

      </div>
    </div>

    {/* ─── BOX 4 ─── */}
    <div className="bg-[#042211] rounded-[28px] border border-white/40 p-8 md:p-12 shadow-xl min-h-[260px] flex items-start">
      <div className="flex items-start gap-6 w-full">
        
        <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/30 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-inner">
          <span className="text-sm text-white/70 font-medium">Img</span>
        </div>
        
        <div className="flex flex-col text-left justify-center pt-1">
          <h3 className="text-white font-bold text-xl md:text-2xl leading-tight mb-3 tracking-wide">
            Innovation Driven
          </h3>
          <p className="text-white/90 text-sm md:text-base leading-relaxed font-normal">
            Continuous investment in technology, design innovation and process improvement.
          </p>
        </div>

      </div>
    </div>

  </div>
</section>




{/* =========================================================================
    GLOBAL PRESENCE SECTION (Image + Right Sidebar Cards Layout)
   ========================================================================= */}
<section className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-16 relative z-10">
  
  {/* Section Header */}
  <div className="text-center mb-10 md:mb-12">
    <h2 className="text-3xl md:text-5xl font-semibold text-black tracking-wide mb-4">
      Global Presence
    </h2>
    <p className="text-sm sm:text-base md:text-lg text-black/80 font-normal max-w-3xl mx-auto leading-relaxed">
      Serving clients across continents with efficient logistics and dedicated support teams
    </p>
  </div>

  {/* Main White Card Container */}
  <div className="bg-white rounded-[32px] p-6 md:p-10 max-w-6xl w-full mx-auto shadow-2xl relative">
    
    {/* Grid System: 1 Column on Mobile, 12 Columns on Desktop */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      
      {/* ─── LEFT SIDE: Map/Image Placeholder (Spans 8 Columns) ─── */}
      <div className="lg:col-span-8 w-full aspect-[4/3] lg:h-[480px] bg-gray-100 border border-gray-200 rounded-[24px] overflow-hidden relative flex items-center justify-center group shadow-inner">
        {/* Placeholder Text/Icon (You can drop your <img> tag here later) */}
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <svg className="w-12 h-12 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <span className="text-sm font-medium tracking-wide">Global Map Image Placeholder</span>
        </div>
      </div>

      {/* ─── RIGHT SIDE: Three Cards Info Sidebar (Spans 4 Columns) ─── */}
      <div className="lg:col-span-4 flex flex-col gap-5 w-full">
        
        {/* Card 1: Headquarters */}
        <div className="bg-[#E7FBF3] rounded-[24px] border border-blue-200 p-6 shadow-sm flex flex-col justify-center min-h-[110px] text-left transition-all duration-300 hover:shadow-md">
          <h3 className="text-gray-900 font-bold text-lg md:text-xl mb-1 tracking-tight">
            Headquarters
          </h3>
          <p className="text-gray-600 text-sm md:text-base font-normal">
            Dhaka, Bangladesh
          </p>
        </div>

        {/* Card 2: USA Office */}
        <div className="bg-[#E7FBF3] rounded-[24px] border border-blue-200 p-6 shadow-sm flex flex-col justify-center min-h-[110px] text-left transition-all duration-300 hover:shadow-md">
          <h3 className="text-gray-900 font-bold text-lg md:text-xl mb-1 tracking-tight">
            USA Office
          </h3>
          <p className="text-gray-600 text-sm md:text-base font-normal">
            New Jersey, USA
          </p>
        </div>

        {/* Card 3: Markets Served */}
        <div className="bg-[#E7FBF3] rounded-[24px] border border-blue-200 p-6 shadow-sm flex flex-col justify-center min-h-[110px] text-left transition-all duration-300 hover:shadow-md">
          <h3 className="text-gray-900 font-bold text-lg md:text-xl mb-1 tracking-tight">
            Markets Served
          </h3>
          <p className="text-gray-600 text-sm md:text-base font-normal">
            35+ countries
          </p>
        </div>

      </div>

    </div>

  </div>
</section>


{/* =========================================================================
    SUSTAINABILITY COMMITMENT SECTION (Fixed Precise Ribbon Layout)
   ========================================================================= */}
<section className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-16 relative z-10">
  
  {/* Section Header */}
  <div className="text-center mb-10 md:mb-12">
    <h2 className="text-3xl md:text-5xl font-semibold text-black tracking-wide mb-4">
      Sustainability Commitment
    </h2>
    <p className="text-sm sm:text-base md:text-lg text-black/80 font-normal max-w-3xl mx-auto leading-relaxed">
      Integrating environmental responsibility with ethical manufacturing practices.
    </p>
  </div>

  {/* Main White Card Container */}
  <div className="bg-white rounded-[32px] p-8 md:p-14 max-w-6xl w-full mx-auto shadow-2xl relative flex flex-col gap-8 md:gap-10">
    
    {/* ─── ROW 1: Item One ─── */}
    <div className="w-full relative flex flex-col items-start text-left">
      {/* 🎯 Pure CSS Custom Shape Header (No broken elements) */}
      <div 
        className="bg-[#052211] text-white font-bold text-lg md:text-2xl pl-6 pr-14 py-3 rounded-tl-[12px] relative z-10 inline-block min-w-[280px] md:min-w-[340px]"
        style={{ clipPath: 'polygon(0 0, 92% 0, 100% 100%, 0% 100%)' }}
      >
        Eco Friendly Material
      </div>
      
      {/* Light Green Content Box with Light Blue Border */}
      <div className="w-full bg-[#E7FBF3] border border-blue-200 rounded-[16px] rounded-tl-none p-5 md:p-6 mt-[-1px] relative z-0 shadow-sm">
        <p className="text-gray-800 text-sm md:text-base leading-relaxed font-normal">
          Utilization of organic cotton, recycled polyester, and sustainable fibers in production processes with reduced water consumption and chemical usage.
        </p>
      </div>
    </div>

    {/* ─── ROW 2: Item Two ─── */}
    <div className="w-full relative flex flex-col items-start text-left">
      {/* 🎯 Pure CSS Custom Shape Header */}
      <div 
        className="bg-[#052211] text-white font-bold text-lg md:text-2xl pl-6 pr-14 py-3 rounded-tl-[12px] relative z-10 inline-block min-w-[280px] md:min-w-[340px]"
        style={{ clipPath: 'polygon(0 0, 92% 0, 100% 100%, 0% 100%)' }}
      >
        Energy Efficiency
      </div>
      
      {/* Light Green Content Box with Light Blue Border */}
      <div className="w-full bg-[#E7FBF3] border border-blue-200 rounded-[16px] rounded-tl-none p-5 md:p-6 mt-[-1px] relative z-0 shadow-sm">
        <p className="text-gray-800 text-sm md:text-base leading-relaxed font-normal">
         Implementation of energy-saving technologies, solar power integration and waste heat recovery systems across manufacturing facilities
        </p>
      </div>
    </div>

    {/* ─── ROW 3: Item Three ─── */}
    <div className="w-full relative flex flex-col items-start text-left">
      {/* 🎯 Pure CSS Custom Shape Header */}
      <div 
        className="bg-[#052211] text-white font-bold text-lg md:text-2xl pl-6 pr-14 py-3 rounded-tl-[12px] relative z-10 inline-block min-w-[280px] md:min-w-[340px]"
        style={{ clipPath: 'polygon(0 0, 92% 0, 100% 100%, 0% 100%)' }}
      >
        Waste Management
      </div>
      
      {/* Light Green Content Box with Light Blue Border */}
      <div className="w-full bg-[#E7FBF3] border border-blue-200 rounded-[16px] rounded-tl-none p-5 md:p-6 mt-[-1px] relative z-0 shadow-sm">
        <p className="text-gray-800 text-sm md:text-base leading-relaxed font-normal">
          Comprehensive recycling programs, fabric waste reduction initiatives and responsible disposal of manufacturing by products.
        </p>
      </div>
    </div>

  </div>
</section>



{/* =========================================================================
    FOUR-BOX GRID FEATURE SECTION (Text-Centered & No Image Holders)
   ========================================================================= */}
<section className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-16 relative z-10">
  
  {/* Top Middle Header */}
  <div className="text-center mb-12 md:mb-16">
    <h2 className="text-3xl md:text-5xl font-semibold text-black tracking-wide mb-4">
      Quality Assurance Process
    </h2>
    <p className="text-sm sm:text-base md:text-lg text-black/80 font-normal max-w-2xl mx-auto leading-relaxed">
      Multi-stage quality control ensuring excellence from raw materials to finished products.
    </p>
  </div>

  {/* 2x2 Grid Container */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto w-full">
    
    {/* ─── BOX 1 ─── */}
    <div className="bg-[#042211] rounded-[28px] border border-white/40 p-8 md:p-12 shadow-xl min-h-[260px] flex items-center justify-center text-center">
      {/* Text Group Container (Centered vertically and horizontally) */}
      <div className="flex flex-col items-center justify-center max-w-lg">
        {/* Centered Bold Title */}
        <h3 className="text-white font-bold text-xl md:text-2xl leading-tight mb-3 tracking-wide">
          Raw Material Inspection
        </h3>
        {/* Centered Body Text */}
        <p className="text-white/90 text-sm md:text-base leading-relaxed font-normal">
         Comprehensive testing of yarns, fabrics, trims and accessories against international quality standards before production begins.
        </p>
      </div>
    </div>

    {/* ─── BOX 2 ─── */}
    <div className="bg-[#042211] rounded-[28px] border border-white/40 p-8 md:p-12 shadow-xl min-h-[260px] flex items-center justify-center text-center">
      <div className="flex flex-col items-center justify-center max-w-lg">
        <h3 className="text-white font-bold text-xl md:text-2xl leading-tight mb-3 tracking-wide">
          In Process Quality Control
        </h3>
        <p className="text-white/90 text-sm md:text-base leading-relaxed font-normal">
          Continuous monitoring during cutting, sewing and knitting stages with real-time corrections and adjustments.
        </p>
      </div>
    </div>

    {/* ─── BOX 3 ─── */}
    <div className="bg-[#042211] rounded-[28px] border border-white/40 p-8 md:p-12 shadow-xl min-h-[260px] flex items-center justify-center text-center">
      <div className="flex flex-col items-center justify-center max-w-lg">
        <h3 className="text-white font-bold text-xl md:text-2xl leading-tight mb-3 tracking-wide">
          Finished Product Audit
        </h3>
        <p className="text-white/90 text-sm md:text-base leading-relaxed font-normal">
          Detailed inspection of completed garments for construction, stitching, sizing and finishing before packaging.
        </p>
      </div>
    </div>

    {/* ─── BOX 4 ─── */}
    <div className="bg-[#042211] rounded-[28px] border border-white/40 p-8 md:p-12 shadow-xl min-h-[260px] flex items-center justify-center text-center">
      <div className="flex flex-col items-center justify-center max-w-lg">
        <h3 className="text-white font-bold text-xl md:text-2xl leading-tight mb-3 tracking-wide">
          Final Random Inspection
        </h3>
        <p className="text-white/90 text-sm md:text-base leading-relaxed font-normal">
          AQL-based random sampling and testing for compliance with client specifications and international standards
        </p>
      </div>
    </div>

  </div>
</section>




{/* =========================================================================
    BY THE NUMBERS SECTION (Vertical Pillars & Top Badge Layout)
   ========================================================================= */}
<section className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-20 relative z-10">
  
  {/* Section Header */}
  <div className="text-center mb-16 md:mb-24">
    <h2 className="text-3xl md:text-5xl font-semibold text-black tracking-wide mb-4">
      By The Numbers
    </h2>
    <div className="w-full max-w-6xl mx-auto border-b border-black/20 mt-4"></div>
  </div>

  {/* Pillars Grid Container - 3 Columns on Mobile, 6 Columns on Desktop */}
  <div className="grid grid-cols-3 lg:grid-cols-6 gap-y-16 gap-x-4 sm:gap-x-6 max-w-5xl mx-auto w-full items-start">
    
    {/* ─── PILLAR 1 ─── */}
    <div className="flex flex-col items-center relative group">
      {/* Top White Number Circle */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#E7FBF3] border-2 border-blue-300 flex items-center justify-center shadow-lg relative z-10 mb-[-12px]">
        <span className="text-gray-900 font-extrabold text-base sm:text-xl tracking-tight">12+</span>
      </div>
      {/* Vertical Ribbon/Pillar Body with Bottom Sharp Cut */}
      <div 
        className="w-12 sm:w-16 bg-[#052211] pt-8 pb-10 flex items-center justify-center relative min-h-[280px] sm:min-h-[340px]"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)' }}
      >
        {/* Vertical Rotated Text */}
        <p className="text-white font-medium text-xs sm:text-sm tracking-wider uppercase whitespace-nowrap select-none original-vertical-text">
          Years of Experience
        </p>
      </div>
    </div>

    {/* ─── PILLAR 2 ─── */}
    <div className="flex flex-col items-center relative group">
       <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#E7FBF3] border-2 border-blue-300 flex items-center justify-center shadow-lg relative z-10 mb-[-12px]">
        <span className="text-gray-900 font-extrabold text-base sm:text-xl tracking-tight">500+</span>
      </div>
      <div 
        className="w-12 sm:w-16 bg-[#052211] pt-8 pb-10 flex items-center justify-center relative min-h-[280px] sm:min-h-[340px]"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)' }}
      >
        <p className="text-white font-medium text-xs sm:text-sm tracking-wider uppercase whitespace-nowrap select-none original-vertical-text">
          Skilled Employees
        </p>
      </div>
    </div>

    {/* ─── PILLAR 3 ─── */}
    <div className="flex flex-col items-center relative group">
       <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#E7FBF3] border-2 border-blue-300 flex items-center justify-center shadow-lg relative z-10 mb-[-12px]">
        <span className="text-gray-900 font-extrabold text-base sm:text-xl tracking-tight">1M+</span>
      </div>
      <div 
        className="w-12 sm:w-16 bg-[#052211] pt-8 pb-10 flex items-center justify-center relative min-h-[280px] sm:min-h-[340px]"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)' }}
      >
        <p className="text-white font-medium text-xs sm:text-sm tracking-wider uppercase whitespace-nowrap select-none original-vertical-text">
          Garments Annual Production
        </p>
      </div>
    </div>

    {/* ─── PILLAR 4 ─── */}
    <div className="flex flex-col items-center relative group">
       <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#E7FBF3] border-2 border-blue-300 flex items-center justify-center shadow-lg relative z-10 mb-[-12px]">
        <span className="text-gray-900 font-extrabold text-base sm:text-xl tracking-tight">35+</span>
      </div>
      <div 
        className="w-12 sm:w-16 bg-[#052211] pt-8 pb-10 flex items-center justify-center relative min-h-[280px] sm:min-h-[340px]"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)' }}
      >
        <p className="text-white font-medium text-xs sm:text-sm tracking-wider uppercase whitespace-nowrap select-none original-vertical-text">
          Countries Served
        </p>
      </div>
    </div>

    {/* ─── PILLAR 5 ─── */}
    <div className="flex flex-col items-center relative group">
       <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#E7FBF3] border-2 border-blue-300 flex items-center justify-center shadow-lg relative z-10 mb-[-12px]">
        <span className="text-gray-900 font-extrabold text-base sm:text-xl tracking-tight">6</span>
      </div>
      <div 
        className="w-12 sm:w-16 bg-[#052211] pt-8 pb-10 flex items-center justify-center relative min-h-[280px] sm:min-h-[340px]"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)' }}
      >
        <p className="text-white font-medium text-xs sm:text-sm tracking-wider uppercase whitespace-nowrap select-none original-vertical-text">
          Specialised Companies
        </p>
      </div>
    </div>

    {/* ─── PILLAR 6 ─── */}
    <div className="flex flex-col items-center relative group">
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#E7FBF3] border-2 border-blue-300 flex items-center justify-center shadow-lg relative z-10 mb-[-12px]">
        <span className="text-gray-900 font-extrabold text-base sm:text-xl tracking-tight">98%</span>
      </div>
      <div 
        className="w-12 sm:w-16 bg-[#052211] pt-8 pb-10 flex items-center justify-center relative min-h-[280px] sm:min-h-[340px]"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)' }}
      >
        <p className="text-white font-medium text-xs sm:text-sm tracking-wider uppercase whitespace-nowrap select-none original-vertical-text">
          On Time Delivery Rate
        </p>
      </div>
    </div>

  </div>

  {/* CSS Styles injection for exact cross-browser vertical text rendering */}
  <style dangerouslySetInnerHTML={{__html: `
    .original-vertical-text {
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      text-orientation: mixed;
    }
  `}} />
</section>



{/* =========================================================================
    LEADERSHIP TEAM HIERARCHY SECTION (100% Alignment & Shape Fixed)
   ========================================================================= */}
<section className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-16 relative z-10">
  
  {/* Section Header */}
  <div className="text-center mb-10 md:mb-14">
    <h2 className="text-3xl md:text-5xl font-semibold text-black tracking-wide mb-4">
      Leadership Team
    </h2>
    <p className="text-sm sm:text-base md:text-lg text-black/80 font-normal max-w-3xl mx-auto leading-relaxed">
      Experienced professionals guiding Six Season Group with vision, expertise and strategic direction
    </p>
  </div>

  {/* Main White Card Container */}
  <div className="bg-white rounded-[32px] p-8 md:p-14 max-w-6xl w-full mx-auto shadow-2xl relative overflow-x-auto">
    
    {/* Hierarchy Tree Wrapper */}
    <div className="min-w-[850px] lg:min-w-full flex flex-col items-center relative">
      
      {/* ─── LEVEL 1: Chairman ─── */}
      <div className="flex flex-col items-center relative z-10">
        <div className="flex items-center justify-center h-20 relative">
          
          {/* Name Tag (Left - Fully Rounded Pill) */}
          <div className="bg-[#052211] text-white font-bold text-sm md:text-base pl-6 pr-8 py-2.5 rounded-l-full min-w-[160px] text-center shadow-sm z-10 mr-[-10px]">
            Md Robiul Islam
          </div>
          
          {/* Circle Image Holder (Perfect Center Anchor) */}
          <div className="w-20 h-20 rounded-full border-[3px] border-blue-400 bg-gray-100 flex-shrink-0 z-20 flex items-center justify-center overflow-hidden shadow-md">
            <span className="text-[10px] text-gray-400 font-bold uppercase">Image</span>
          </div>
          
          {/* Role Tag (Right - Same Rounded Pill Shape to Match Left Side) */}
          <div className="bg-[#E7FBF3] text-gray-900 font-bold text-sm md:text-base pl-8 pr-6 py-2.5 rounded-r-full border border-blue-200 border-l-0 min-w-[160px] text-center shadow-sm z-10 ml-[-10px]">
            Chairman
          </div>
          
        </div>
      </div>

      {/* Vertical Line: Level 1 to Level 2 */}
      <div className="w-[2px] h-12 bg-gray-400 relative z-0"></div>

      {/* ─── LEVEL 2: Founder & CEO ─── */}
      <div className="flex flex-col items-center relative z-10">
        <div className="flex items-center justify-center h-20 relative">
          
          {/* Name Tag (Left) */}
          <div className="bg-[#052211] text-white font-bold text-sm md:text-base pl-6 pr-8 py-2.5 rounded-l-full min-w-[160px] text-center shadow-sm z-10 mr-[-10px]">
            Al Amin Hossain
          </div>
          
          {/* Circle Image Holder (Perfect Center Anchor) */}
          <div className="w-20 h-20 rounded-full border-[3px] border-blue-400 bg-gray-100 flex-shrink-0 z-20 flex items-center justify-center overflow-hidden shadow-md">
            <span className="text-[10px] text-gray-400 font-bold uppercase">Image</span>
          </div>
          
          {/* Role Tag (Right - Same Rounded Pill Shape to Match Left Side) */}
          <div className="bg-[#E7FBF3] text-gray-900 font-bold text-sm md:text-base pl-8 pr-6 py-2.5 rounded-r-full border border-blue-200 border-l-0 min-w-[160px] text-center shadow-sm z-10 ml-[-10px]">
            Founder & CEO
          </div>
          
        </div>
      </div>

      {/* Vertical Line: Level 2 down to the T-junction split */}
      <div className="w-[2px] h-12 bg-gray-400 relative z-0"></div>

      {/* ─── LEVEL 3: T-Junction Branching & Directors ─── */}
      <div className="w-full relative pt-6">
        
        {/* Horizontal Connecting Line */}
        <div className="absolute top-0 left-[12.5%] right-[12.5%] h-[2px] bg-gray-400"></div>
        
        {/* 4 Columns for the Bottom Directors */}
        <div className="grid grid-cols-4 w-full justify-items-center">
          
          {/* Director 1: Operations */}
          <div className="flex flex-col items-center relative">
            <div className="w-[2px] h-6 bg-gray-400 absolute top-[-24px]"></div>
            <div className="w-20 h-20 rounded-full border-[3px] border-blue-400 bg-gray-100 flex items-center justify-center overflow-hidden shadow-md mb-2 relative z-10">
              <span className="text-[10px] text-gray-400 font-bold uppercase">Image</span>
            </div>
            <div className="flex flex-col items-center w-[175px] shadow-sm">
              <div className="w-full bg-[#052211] text-white text-center font-bold text-xs md:text-sm py-1.5 px-2 rounded-t-[4px]">
                Solayman Hossain
              </div>
              <div className="w-full bg-[#E7FBF3] text-gray-800 text-center text-[11px] md:text-xs py-1.5 px-2 border border-blue-200 border-t-0 rounded-b-[4px]">
                Director of Operations
              </div>
            </div>
          </div>

          {/* Director 2: Quality Assurance */}
          <div className="flex flex-col items-center relative">
            <div className="w-[2px] h-6 bg-gray-400 absolute top-[-24px]"></div>
            <div className="w-20 h-20 rounded-full border-[3px] border-blue-400 bg-gray-100 flex items-center justify-center overflow-hidden shadow-md mb-2 relative z-10">
              <span className="text-[10px] text-gray-400 font-bold uppercase">Image</span>
            </div>
            <div className="flex flex-col items-center w-[175px] shadow-sm">
              <div className="w-full bg-[#052211] text-white text-center font-bold text-xs md:text-sm py-1.5 px-2 rounded-t-[4px]">
                Saiful Islam
              </div>
              <div className="w-full bg-[#E7FBF3] text-gray-800 text-center text-[11px] md:text-xs py-1.5 px-2 border border-blue-200 border-t-0 rounded-b-[4px]">
                Quality Assurance Director
              </div>
            </div>
          </div>

          {/* Director 3: USA LLC */}
          <div className="flex flex-col items-center relative">
            <div className="w-[2px] h-6 bg-gray-400 absolute top-[-24px]"></div>
            <div className="w-20 h-20 rounded-full border-[3px] border-blue-400 bg-gray-100 flex items-center justify-center overflow-hidden shadow-md mb-2 relative z-10">
              <span className="text-[10px] text-gray-400 font-bold uppercase">Image</span>
            </div>
            <div className="flex flex-col items-center w-[175px] shadow-sm">
              <div className="w-full bg-[#052211] text-white text-center font-bold text-xs md:text-sm py-1.5 px-2 rounded-t-[4px]">
                Md Rakibul Islam
              </div>
              <div className="w-full bg-[#E7FBF3] text-gray-800 text-center text-[11px] md:text-xs py-1.5 px-2 border border-blue-200 border-t-0 rounded-b-[4px]">
                CEO(Six Season USA LLC)
              </div>
            </div>
          </div>

          {/* Director 4: Design & Innovation */}
          <div className="flex flex-col items-center relative">
            <div className="w-[2px] h-6 bg-gray-400 absolute top-[-24px]"></div>
            <div className="w-20 h-20 rounded-full border-[3px] border-blue-400 bg-gray-100 flex items-center justify-center overflow-hidden shadow-md mb-2 relative z-10">
              <span className="text-[10px] text-gray-400 font-bold uppercase">Image</span>
            </div>
            <div className="flex flex-col items-center w-[175px] shadow-sm">
              <div className="w-full bg-[#052211] text-white text-center font-bold text-xs md:text-sm py-1.5 px-2 rounded-t-[4px]">
                Monzil Hossain
              </div>
              <div className="w-full bg-[#E7FBF3] text-gray-800 text-center text-[11px] md:text-xs py-1.5 px-2 border border-blue-200 border-t-0 rounded-b-[4px]">
                Head of Design & Innovation
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

  </div>
</section>




{/* =========================================================================
    CERTIFICATE & COMPLIANCE SECTION (2 + 3 Row Alignment Fix)
   ========================================================================= */}
<section className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-16 relative z-10">
  
  {/* Section Header */}
  <div className="text-center mb-10 md:mb-16">
    <h2 className="text-3xl md:text-5xl font-semibold text-black tracking-wide mb-4">
      Certificate & Compliance
    </h2>
    <p className="text-sm sm:text-base md:text-lg text-black/80 font-normal max-w-3xl mx-auto leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>

  {/* Main Layout Container */}
  <div className="flex flex-col gap-6 md:gap-8 max-w-6xl mx-auto">
    
    {/* ─── ROW 1: 2 Cards ─── */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl w-full mx-auto">
      
      {/* Card 1 */}
      <div className="bg-[#042211] rounded-[24px] p-6 md:p-8 flex flex-col items-center text-center shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300">
        {/* Top Middle Image Holder */}
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-[3px] border-blue-400 bg-gray-100 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-sm mb-4 md:mb-5">
          <span className="text-[10px] text-white-400 font-bold uppercase">Img</span>
        </div>
        {/* Centered Content */}
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-wide">
  BKMEA Member
</h3>
<p className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed max-w-sm">
Bangladesh Knitwear Manufacturers & Exporters Association</p>
      </div>

      {/* Card 2 */}
      <div className="bg-[#042211] rounded-[24px] p-6 md:p-8 flex flex-col items-center text-center shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300">
        {/* Top Middle Image Holder */}
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-[3px] border-blue-400 bg-gray-100 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-sm mb-4 md:mb-5">
          <span className="text-[10px] text-gray-400 font-bold uppercase">Img</span>
        </div>
        {/* Centered Content */}
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-wide">
  ISO Standard
</h3>
<p className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed max-w-sm">
  Quality Management
System Certification
</p>
      </div>

    </div>

    {/* ─── ROW 2: 3 Cards ─── */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
      
      {/* Card 3 */}
      <div className="bg-[#042211] rounded-[24px] p-6 md:p-8 flex flex-col items-center text-center shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300">
        {/* Top Middle Image Holder */}
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-[3px] border-blue-400 bg-gray-100 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-sm mb-4 md:mb-5">
          <span className="text-[10px] text-gray-400 font-bold uppercase">Img</span>
        </div>
        {/* Centered Content */}
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-wide">
  Export Compliance
</h3>
<p className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed max-w-sm">
  International Trade
Regulations
</p>
      </div>

      {/* Card 4 */}
      <div className="bg-[#042211] rounded-[24px] p-6 md:p-8 flex flex-col items-center text-center shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300">
        {/* Top Middle Image Holder */}
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-[3px] border-blue-400 bg-gray-100 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-md mb-4 md:mb-5">
          <span className="text-[10px] text-gray-400 font-bold uppercase">Img</span>
        </div>
        {/* Centered Content */}
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-wide">
  Substainability 
</h3>
<p className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed max-w-sm">
 Environmental
Management Systems
</p>
      </div>

      {/* Card 5 */}
      <div className="bg-[#042211] rounded-[24px] p-6 md:p-8 flex flex-col items-center text-center shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300 sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-full lg:w-full">
        {/* Top Middle Image Holder */}
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-[3px] border-blue-400 bg-gray-100 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-md mb-4 md:mb-5">
          <span className="text-[10px] text-gray-400 font-bold uppercase">Img</span>
        </div>
        {/* Centered Content */}
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-wide">
  Ethical Compliance
</h3>
<p className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed max-w-sm">
  Social Accountability
Standards
</p>
      </div>

    </div>

  </div>
</section>


{/* =========================================================================
    OUR FUTURE VISION SECTION (2 + 1 Grid Layout)
   ========================================================================= */}
<section className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-16 relative z-10">
  
  {/* Section Header */}
  <div className="text-center mb-10 md:mb-14">
    <h2 className="text-3xl md:text-5xl font-semibold text-black tracking-wide mb-4">
      Our Future Vision
    </h2>
  </div>

  {/* Main White Card Container */}
  <div className="bg-white rounded-[32px] p-6 sm:p-8 md:p-14 max-w-6xl w-full mx-auto shadow-2xl">
    
    {/* Inner Layout Wrapper */}
    <div className="flex flex-col gap-8 md:gap-10">
      
      {/* ROW 1: 2 Top Cards (Equal Height & Width) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
        
        {/* Top Left Card */}
        <div className="bg-[#E7FBF3] rounded-[24px] border border-emerald-300 p-8 md:p-10 flex items-center justify-center text-center shadow-sm min-h-[220px] md:min-h-[260px]">
          <p className="text-sm sm:text-base md:text-lg text-gray-800 font-normal leading-relaxed max-w-md">
            Charting the course for continued growth, innovation, and global leadership in knitwear manufacturing. As we look to the future, Six Season Group is committed to expanding our global footprint while deepening our commitment to sustainable and ethical manufacturing practices. Our strategic vision focuses on three key pillars:
          </p>
        </div>

        {/* Top Right Card */}
        <div className="bg-[#E7FBF3] rounded-[24px] border border-emerald-300 p-8 md:p-10 flex items-center justify-center text-center shadow-sm min-h-[220px] md:min-h-[260px]">
          <p className="text-sm sm:text-base md:text-lg text-gray-800 font-normal leading-relaxed max-w-md">
            We plan to expand production through new strategic facilities, invest in sustainable materials and processes, and strengthen partnerships with global fashion brands. By 2030, we aim to achieve carbon neutrality, double our production capacity, and grow into new knitwear categories while delivering value to clients, employees, and communities.
          </p>
        </div>

      </div>

      {/* ROW 2: Bottom Full-Width Horizontal Card */}
      <div className="w-full bg-[#052211] rounded-full p-4 sm:p-5 md:py-6 md:px-10 shadow-md flex items-center justify-center">
        <p className="text-sm sm:text-base md:text-lg text-white font-normal leading-relaxed text-center max-w-4xl">
          <span className="font-bold text-emerald-400">Technological Innovation:</span> Investing in Industry 4.0 technologies, automation, and digital transformation to enhance efficiency, precision, and customization capabilities across our production processes. 
        </p>
      </div>
    </div>
  </div>
</section>

   

    </div>
  );
};

export default AboutUs;