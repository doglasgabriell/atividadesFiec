const Badges = ({texto, corFundo}) => {
  return (
    <div>
         <span className="px-3 py-1 text-sm rounded-full text-white " style={{backgroundColor: corFundo}}> 
            {texto}
        </span>

    </div>
  )
}
export default Badges

{/*em jsx, a propriedade style não aceita valor em texto como backgroundColor = "red". Aceita apenas objeto JavaScript. Por isso, passamos a props vindo da function. */}