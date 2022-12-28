import React, { useState } from "react";
import { User } from "../../../../../entities/user";
import { DeleteUser } from "../../../../../app/use-cases/delete-user";
import { DC } from "../../../../../externals/dependency-container";

interface Props {
  user: User;
  onDelete: () => void;
}

const UserList: React.FC<Props> = ({ user, onDelete }: Props) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const onDeleteUser = async () => {
    try {
      setIsDeleting(true);
      await DeleteUser.execute({ userId: user.id!, userRepository: DC.repositories.userRepository });
      onDelete();
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <li>
      <button style={{ marginInlineEnd: '1em' }} onClick={onDeleteUser}>
        { isDeleting ? 'Deleting...' : 'Delete' }
      </button>
      {user.id} - {user.name}
    </li>
  );
};

export default UserList;
