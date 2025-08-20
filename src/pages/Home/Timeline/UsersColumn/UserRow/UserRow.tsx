import './userRow.css'

interface UserRowProp {
   personName: string,
}

function UserRow({ personName }: UserRowProp) {
   return (
      <div className="userRow__container">
         <div className="userRow__name">{personName}</div>
      </div>
   )
}

export default UserRow