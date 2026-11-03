// import Sidebar from './components/Sidebar';
// import Player from './components/Player';
import Header from './components/Header';
import PlaylistGrid from './components/PlaylistGrid';
import Greeting from './components/Greeting';
import Badge from './components/Contado';
// import SidebarItem from './components/SidebarItem';
import UserBadge from './components/UserBadge';
import Button from './components/Button';
import CompactCard from './components/CompactCard';
import UserState from './components/UserState';
import Badges from './components/Badges';

function App() {
  return (
    <>
      <div className="h-screen bg-black text-white flex flex-col">
        <UserBadge img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQZzF_rzqM5L_-WQuCdlLpBw8LmW9S99QDX7KYV2OpwtjZRbKSru7jEK8&s=10"}/>
        {/* Os componentes serão chamados abaixo */}
        <div className='flex flex-1 overflow-hidden'>
          <Badge count={5}/>
           {/* <Sidebar />
            <SidebarItem 
              label={"Inicio"}
            />
            <SidebarItem 
              label={"Buscar"}
            /> */}

            <main className='flex-1 bg-zinc-900 rounded-lg m-2 p-6 overflow-y-auto'>
            
            
                <Header />
                <Greeting name={"Dôglas"}/>
                <CompactCard 
                  title={"Matue"}
                  imgUrl={"https://cdn-images.dzcdn.net/images/cover/b194565849b7ecaa93bd835b1867922f/0x1900-000000-80-0-0.jpg"}
                />
                <div className="h-800px]">
                  <p className='text-zinc-400'>Seus álbuns serão exibidos aqui!</p>

                  <Badges 
                    texto={'Ao vivo'}
                    corFundo={'red'}
                  />


                  <PlaylistGrid />
                <Button children={"Play"}/>
              </div>
            </main>


        < UserState />
        </div>


        {/* <Player /> */}
      </div>
    </>
  )
}

export default App;
