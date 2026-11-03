import UserBadge from "./UserBadge";

const SideBar = () => {
  return (
   <aside className="w-72 bg-black p-6 flex flex-col gap-6">
      <UserBadge img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQZzF_rzqM5L_-WQuCdlLpBw8LmW9S99QDX7KYV2OpwtjZRbKSru7jEK8&s=10"}/>

      <nav className="flex flex-col gap-4">
        <a href="#" className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors font-semibold">
          <div className="w-6 h-6 bg-zinc-300 rounded-sm"></div> Início
        </a>

        <a href="#" className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors font-semibold">
          <div className="w-6 h-6 bg-zinc-300 rounded-sm"></div> Buscar
        </a>

      </nav>

      <div className="w-full h-px bg-zinc-800"></div>

      <nav>
        <a href="#" className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors font-semibold">
          <div className="w-6 h-6 bg-zinc-300 rounded-sm"></div> Sua Biblioteca
        </a>
      </nav>  
    </aside>
  )
}

export default SideBar
