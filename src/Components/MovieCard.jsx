export default function MovieCard({title, poster_path, release_date}) {
    const dots = (
        <div className="dot-row">
            {
                Array(7).fill().map((val, index = 0) => (
                    <span className="dot" key={index++}></span>
                ))
            }
        </div>
    )
    
    const date = new Date(release_date)

    return (
        <div className="card">
            {dots}
            <div className="card-detail">
                <img src={"https://image.tmdb.org/t/p/w92" + poster_path}>{}</img>
                <div>
                    <p className="title">{title}</p>
                    <small className="date">Release: {date.toLocaleDateString()}</small>
                </div>
            </div>
            {dots}
        </div>
    )
}