import NavBar from "@components/NavBar";



export default function ComingSoonPage() {
  

  return (
    <>
    <NavBar/>
    <div className="min-h-screen flex items-center justify-center m-10 ">
      <div className="max-w-md  space-y-8 p-10 bg-gray-800 rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="mt-6 text-4xl font-extrabold text-white">Coming Soon</h1>
          <p className="mt-2 text-xl text-gray-300">This feature is under development. Stay tuned for something amazing!</p>
        </div>
        
        <form  className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input 
                id="email-address" 
                name="email" 
                type="email" 
                autoComplete="email" 
                required 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-white bg-gray-700 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm" 
                placeholder="Enter your email address" 
              />
            </div>
          </div>

          <div>
            <button 
              type="submit" 
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out"
            >
              Notify Me
            </button>
          </div>
        </form>

        

        
      </div>
    </div>
    </>
    
  )
}

