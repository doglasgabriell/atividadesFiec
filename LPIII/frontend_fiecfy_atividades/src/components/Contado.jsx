const Badge = ({count}) => {
  return (  
        <div className="flex justify-center items-center text-center w-auto h-auto">
            <div className="bg-red-700 p-2 rounded-full">
                <span>{count}</span>
            </div>
        </div>
  )
}

export default Badge
