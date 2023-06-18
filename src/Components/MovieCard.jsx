export default function MovieCard({title, poster_path, release_date}) {
    return (
        <div className="card">
            <img src={"https://image.tmdb.org/t/p/w92" + poster_path}>{}</img>
            <p>{release_date}</p>
            <p>{title}</p>
        </div>
    )
}