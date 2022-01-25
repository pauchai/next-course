import { useRouter } from "next/router"
import MainContainer from "../../components/MainContainer"
import styles from '../../styles/User.module.scss'


export default function User({user}) {
    const {query} = useRouter()     
    return (
        <MainContainer className={styles.user} keywords={user.name} >
            <h1>User with id {query.id}</h1>
            <div>User name - {user.name}</div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    //console.log(params)
    // {id: 1}
    const response = await fetch(`${process.env.BACKAND_BASE_URL}/users/${params.id}`)
    const user = await response.json()
    return {
        props: {user}, // will be passed to the page component as props
    }
}