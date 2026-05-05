

const UserList = ()=>{
    const users = [
        {id: 1, name:"alice", email: "alice@gmail.com"},
        {id: 2, name:"user2", email: "user2@gmail.com"},
        {id: 4, name:"user3", email: "user3@gmail.com"},
        {id: 3, name:"user4", email: "user4@gmail.com"},
        {id: 5, name:"user5", email: "user5@gmail.com"},
    ]

    return (
        <div>
            <div>
                {
                    users.map((user)=>(
                        <ul key={user.id}>
                            <li>{user.name} : <span>{user.email}</span></li>
                        </ul>
                    ))
                }
            </div>
        </div>
    )
}

export default UserList;