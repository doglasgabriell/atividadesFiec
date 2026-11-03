const Player = () => {
  return (
    <footer className="h-20 bg-black border-t border-zinc-800 px-4 flex items-center justify-between">
      {/* Bloco 1 */}
      <div className="flex items-center gap-3 w-1/3">
        <div className="w-14 h-14 bg-zinc-800 rounded"></div>
        <div className="flex flex-col">
          <strong>Bohemian Rhapsody</strong>
          <span>Queen</span>
        </div>
      </div>

      {/* Bloco 2 Controle */}
      <div className="flex items-center justify-center w-1/3">
        <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold hover:scale-105 transition-transform">||</button>
      </div>

      {/* Bloco 3 */}
      <div className="flex items-center justify-end w-1/3">
        <div className="w-24 h-1 bg-zinc-600 rounded-full">
          <div className="w-1/2 h-full bg-white rounded-full"></div>
        </div>
      </div>

    </footer>
  )
}

export default Player
