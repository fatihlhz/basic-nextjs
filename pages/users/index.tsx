import Layout from "../../components/layout"
import { useRouter } from "next/router"
import styles from "../../styles/User.module.css"

interface UserProps {
  dataUser: Array<any>
;}

export default function users(props: UserProps) {
  const { dataUser } = props;
  const router = useRouter();

  console.log(dataUser);
  return (
      <Layout pageTitle="Users">
          {dataUser.map(user => {
            return(
              <>
              <div key={user.id} onClick={() => {router.push(`/users/${user.id}`)}} className={styles.card} >
                <p>{user.name}</p>
                <p>{user.email}</p>
              </div>
              </>
            )
          })}
      </Layout>
   
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUser = await res.json();
  return {
    props: {
      dataUser,
    }
  }
}