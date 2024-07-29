import {useQuery} from "@tanstack/react-query";
import {Link} from "react-router-dom";

type Result = {
    name: string;
    url: string;
}

type ListRes = {
    count: number,
    next?: string
    previous?: string,
    results: Result[]
}

function List() {
    const {data} = useQuery({
        queryKey: ['list'],
        queryFn: () => fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then<ListRes>((res) => res.json())
    })

    return (
        <ul key="hello">
            {
                data?.results.map((item) => {
                    return (
                        <li key={item.url}><Link to={`/${item.name}`}>{item.name}</Link></li>
                    )
                })
            }
        </ul>
    )
}

export default List
