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

interface IUserProps {
  user: IUser;
}

export const User = (props: IUserProps) => {
  const {
    user: { name, email },
  } = props;
  return (
    <>
      <h2>{name}</h2>
      <h2>{email}</h2>
    </>
  );
};
