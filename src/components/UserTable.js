import React from 'react';

function UserTable({ users, userUsernameSearch, handleInputChange, handleDeleteUser, handleSearchUser }) {
  let userList;

  if (users.length === 0) {
    userList = (
      <tr key="no-user">
        <td colSpan="6" textAlign="center">
          No user
        </td>
      </tr>
    );
  } else {
    userList = users.map((user) => (
      <tr key={user.id}>
        <td>
          <button
            type="button"
            className="delete-button"
            disabled={user.username === 'admin'}
            onClick={() => handleDeleteUser(user.username)}
          >
            <i className="fas fa-trash"></i>
          </button>
        </td>
        <td>{user.id}</td>
        <td>{user.username}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
      </tr>
    ));
  }

  return (
    <>
      <form onSubmit={handleSearchUser}>
        <input
          type="text"
          name="userUsernameSearch"
          placeholder="Search by Username"
          value={userUsernameSearch}
          onChange={handleInputChange}
        />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th width="1"></th>
            <th width="1">ID</th>
            <th width="3">Username</th>
            <th width="4">Name</th>
            <th width="5">Email</th>
            <th width="2">Role</th>
          </tr>
        </thead>
        <tbody>{userList}</tbody>
      </table>
    </>
  );
}

export default UserTable;