import React, { useState } from 'react'
import type { User } from '../lib/types'
import { getUserList } from '../utils/helper'
import Input from './custom/Input'
import Button from './custom/Button'

type UserFormProps = {
  item?: User | null,
  viewOnly?: boolean,
  onSuccess?: () => void
  onClose?: () => void
}

const initialState: User = {
  id: getUserList().length + 1,
  name: '',
  email: '',
  password: '',
  role: 'associate'
}

const UserForm = ({
  item,
  viewOnly = false,
  onSuccess = () => { },
  onClose = () => { }
}: UserFormProps) => {

  const [formData, setFormData] = useState<User>(item || initialState);


  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  
  const submitCreateUser = () => {
    const users = getUserList();
    users.push(formData);
    localStorage.setItem('userList', JSON.stringify(users));
    alert('User created successfully!');
    setFormData(initialState);
  }


  const submitEditUser = () => {
    const users = getUserList();
    const updatedUsers = users.map(user => 
      user.id === formData.id ? formData : user
    );
    localStorage.setItem('userList', JSON.stringify(updatedUsers));
    alert('User updated successfully!');
    onSuccess();
  }


  return (
    <div>
      <Input
        type="text"
        name="name"
        onChange={handleOnChange}
        value={formData?.name}
        placeholder="Name"
        readOnly={viewOnly}
      />

      <Input
        type="email"
        name="email"
        onChange={handleOnChange}
        value={formData?.email}
        placeholder="Email"
        readOnly={viewOnly}
      />

      <Input
        type="password"
        name="password"
        onChange={handleOnChange}
        value={formData?.password}
        placeholder="Password"
        readOnly={viewOnly}
      />

      <select onChange={handleOnChange} name="role" defaultValue={formData.role} disabled={viewOnly}>
        <option value="admin">Admin</option>
        <option value="supervisor">Supervisor</option>
        <option value="associate">Associate</option>
      </select>

      {
        !viewOnly &&
        <>
          <Button onClick={onClose}>
            Close
          </Button>

          <Button onClick={item ? submitEditUser : submitCreateUser}>
            {item ? 'Update User' : 'Create User'}
          </Button>
        </>
      }

    </div>
  )
}

export default UserForm