import User from "../../types/user";

interface Props {
  users: User[];
}

const UserList: React.FC<Props> = (props: Props) => {
  const { users } = props;

  if (users.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {users.map((user, index) => {
        return (
          <li key={index}>
            {user.id} - {user.name}
          </li>
        );
      })}
    </ul>
  );
};

export default UserList;
