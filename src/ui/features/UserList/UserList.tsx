import { User } from '@/entities/user';

import { UserListItem } from './components/UserListItem';

interface Props {
  users: User[];
  onUserDeleted: () => void;
}

function UserList({ users, onUserDeleted }: Props) {
  if (users.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {users.map((user) => {
        return <UserListItem key={user.id} user={user} onDelete={() => onUserDeleted()} />;
      })}
    </ul>
  );
}

export default UserList;
