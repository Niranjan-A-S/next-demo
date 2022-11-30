import { User } from "../components/user";

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Record<string, string>;
}

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
}

interface IUsers {
  users: IUser[];
}

const UserList = (props: IUsers) => {
  const { users } = props;
  return (
    <div>
      <h1>List of users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <User user={user} />
        </div>
      ))}
    </div>
  );
};

export default UserList;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return {
    props: {
      users,
    },
  };
};
