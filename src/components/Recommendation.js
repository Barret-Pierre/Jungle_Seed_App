function Recommendation() {
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >= 2 && currentMonth <= 5
    const recommendation = isSpring ? (
        <div>Il est temps de rempoter</div>
    ) : (
        <div>Il est temps de faire des affaires !</div>
    )

    return recommendation
}

export default Recommendation