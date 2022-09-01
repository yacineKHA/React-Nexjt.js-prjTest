import {useRouter} from "next/router";


export default function article(){

    const router = useRouter()

    console.log(router)

    return(
        <div>
            <h1>10 plats savoureux</h1>
            <p>{router.query.slug}</p>
        </div>
    )
}