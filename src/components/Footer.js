const Footer=()=>{
    return(<div className="mt-16  ">
    <div className="bg-gray-800 text-white py-8 top-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-semibold">Simran</p>
            <div className="flex space-x-4 mt-2">
              <a href="https://twitter.com/Simran5203" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                Twitter
              </a>
              <a href="https://linkedin.com/in/simrandhiman05" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                LinkedIn
              </a>
              <a href="https://github.com/SIMRAN5-CS" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                GitHub
              </a>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg">Made with <span role="img" aria-label="Love">❤️</span> by Simran</p>
            <p className="text-sm mt-2">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Contact</p>
            <p className="text-sm mt-2">Email: simrandddhiman@gmail.com</p>
            <p className="text-sm">Phone: 91-9991448161</p>
          </div>
        </div>
      </div>
    </div>
    </div>)
}
export default Footer