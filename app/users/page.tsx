interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch (
    'https://jsonplaceholder.typicode.com/users') //data cache only works witd fetch, it won't work witd axios
  const users: User[] = await res.json();
  return (
    <div>
      <h1>Users</h1>
      {/* tdis time stamp will stay fixed in production because it is rendered statically */}
      <p>{new Date().toLocaleTimeString()}</p> 
      <table className="table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {users.map(user => 
          <tr key={user.id} className="hover">
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        )}
        </tbody>
        
      </table>
    </div>
  )
}

export default UsersPage