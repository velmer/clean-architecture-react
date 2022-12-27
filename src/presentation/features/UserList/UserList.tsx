import { User } from "../../../domain/entities/user";
import UserListItem from "./components/UserListItem";

interface Props {
  users: User[];
  onUserDeleted: () => void;
}

const UserList: React.FC<Props> = ({ users, onUserDeleted } : Props) => {
  if (users.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {users.map((user, index) => {
        return (
          <UserListItem key={index} user={user} onDelete={() => onUserDeleted()} />
        );
      })}
    </ul>
  );
};

export default UserList;
