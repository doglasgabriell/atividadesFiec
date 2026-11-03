const PlaylistCard = ({img, altImg, nomeMusica, nomeArtista}) => {
  return (
    <div className="bg-zinc-900 rounded-lg p-4 hover:bg-zinc-700 transition-colors g-5">
      <img className="rounded-lg mb-3 object-cover h-50" src={img} alt={altImg} />
      <div>
        <h2>{nomeMusica}</h2>
        <p>{nomeArtista}</p>
      </div>
    </div>
  )
}

export default PlaylistCard
