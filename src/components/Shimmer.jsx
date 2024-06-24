const Shimmer = () => {
    const ShimmerCard = () => (
        <div className="shimmer-card"></div>
    )
    const arr = [1,2,3,4,5,6,7,8]
    return (
        <div className="shimmer-container" >
            {arr.map(ele => <ShimmerCard />)}
        </div>
    )
}
export default Shimmer;