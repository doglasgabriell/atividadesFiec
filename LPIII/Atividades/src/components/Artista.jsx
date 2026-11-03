

export default function Artista({nome, ouvintes}) {
  return (
    <div className="bg-zinc-900 p-4 rounded-lg">
      <h3 className="text-white font-bold">{nome}</h3>
      <p className="text-zinc-400">{ouvintes} ouvintes mensais</p>
    </div>
  );
}
