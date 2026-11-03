const CompactCard = ({title, imgUrl}) => {
  return (
    <div>
      <div className="flex flex-row gap-4 justify-center items-center">
        <img className="w-15" src={imgUrl} alt="Texto alternativo"/>
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export default CompactCard
