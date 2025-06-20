
const Footer = () => {
  return (
    <div className="my-2 text-center md:text-start">
      <p className="text-gray-500 text-xs">Very, very, very loosly <span className="text-gray-50">redesigned</span>. Built with <span className="text-gray-50">Next.js</span> and <span className="text-gray-50">ShadCN.</span>
      </p>
      <p className="text-gray-500 text-xs">UI inspired <span className="text-gray-50"><i>(some might say I copied 99% of the UI)</i></span> from <span> <a href="https://brittanychiang.com/" className="text-gray-50">Brittany Chiang</a></span></p>
      <div className="flex  text-gray-50 text-xs text-center my-4 space-x-3">
        <p>@2025 JoyBiswas.Com</p>
        <p> | </p>
        <p>All rights reserved </p>
      </div>
    </div>
  )
}

export default Footer