import { useEffect, useState } from 'react'
import type { User } from '../../../lib/types';
import Button from '../../../components/custom/Button';
import UserForm from '../../../components/UserForm';

const UserListPage = () => {

  const [userList, setUserList] = useState<User[]>([]);

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const fetchUsers = async () => {
    const getUserList = localStorage.getItem('userList');
    if (getUserList) {
      setUserList(JSON.parse(getUserList));
    }
  }
  
  useEffect(() => {

    fetchUsers();
    
  }, [])


  const onSuccess = () => {
    setSelectedUser(null);
    fetchUsers();
  }

  
  return (
    <div className='user-list-page'>
      {(userList.length > 0 && !selectedUser) &&
        userList.map(item => {
          const { id, name, email, role } = item;
          return (
            <div key={id} className='user-card'>
              <h3>{name}</h3>
              <p>{email}</p>
              <p>{role}</p>
              <div className="btn-container">
                <Button onClick={() => setSelectedUser(item)}>Edit</Button>
              </div>
            </div>
          )
        })
      }

      {
        selectedUser &&
        <UserForm 
          item={selectedUser}
          onSuccess={onSuccess}
          onClose={() => setSelectedUser(null)}
        />
      }
    </div>
  )
}

export default UserListPage