import Layout from '../../components/layout';

interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    website: string;
}

interface UserDetailProps {
    user: User;
}

interface getStaticProps {
    params: {
        id: string;
    }
}

export default function UserDetail(props: UserDetailProps) {
    const { user } = props;
    return (
        <Layout pageTitle='Detail'>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
        </Layout>
    );
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUser = await res.json();

    const paths = dataUser.map((user: User) => ({
        params: {
            id: `${user.id}`,
        },
    }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context: getStaticProps) {
    const { id } = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();
    return {
      props: {
        user,
      }
    } 
}