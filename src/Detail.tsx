import {useParams} from "react-router-dom";

const Detail = () => {
  const { name } = useParams<{ name: string }>()

  return (
    <>{name}</>
  )
}

export default Detail
