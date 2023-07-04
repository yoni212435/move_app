import "./info.css"

export default function Info({j, data}) {
    return (
        <div className="info all_info">
            {data && <img src={data[j]?.image?.medium} alt="main img" width="250px"/>}

            <div className="list_info">
                {data && <>
                    <p>name: {data[j]?.name}</p>
                    <p>language: {data[j]?.language}</p>
                    <p>premiered: {data[j]?.premiered}</p>
                    <p>rating: {data[j]?.rating.average}</p>
                    <p>name company: {data[j]?.network.name}</p>
                    <div dangerouslySetInnerHTML={{__html: data[j]?.summary}}/>
                </>}
            </div>
        </div>

    )
}
