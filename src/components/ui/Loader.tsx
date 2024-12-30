import React from 'react'



const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen w-[80%] mx-auto">
    <img
      src="/images/aww1.png" // Ensure the path to the logo is correct
      alt="Loading..."
      className="w-32 h-32 animate-zoomLoader"
    />
  </div>
  )
}

export default Loader