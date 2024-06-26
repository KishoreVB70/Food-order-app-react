const   Shimmer = () => {
    const ShimmerCard = () => (
        <div className="flex flex-col p-2 m-2 h-96 bg-gray-200 hover:border-black hover:border hover:p-1 w-80 items-center"></div>
    )

    const arr = [1,2,3,4,5,6,7,8]
    return (
        <div className="flex flex-wrap p-2 my-2 justify-between" >
            {arr.map((ele, ind) => <ShimmerCard key={ind} />)}
        </div>
    )
}
export default Shimmer;