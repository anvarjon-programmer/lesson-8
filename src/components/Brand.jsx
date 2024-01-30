import React, { useEffect, useState } from "react";
import {
  useGetUsersQuery,
  useDeleteUserMutation,
} from "../features/users/apiSlice";
import UsersModal from "./UsersModal";

const Brend = () => {
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState("");
  const { data: users } = useGetUsersQuery();
  const [filterUsers, setFilterUsers] = useState([]);

  useEffect(() => {
    if (users) {
      const filteredUsers = users.filter((e) => e.category === "brand");
      setFilterUsers(filteredUsers);
    }
  }, [users]);

  const [deleteUser] = useDeleteUserMutation();

  const toggle = () => {
    setModal(false);
    setEdit("");
  };
  const handle_delete = (item) => {
    deleteUser(item)
  }
  const openEditModal = (item) => {
    setEdit(item);
    setModal(true);
  };

  return (
    <div className="container">
      <UsersModal open={modal} toggle={toggle} edit={edit} />
      <button className="btn btn-success" onClick={() => setModal(true)}>
        Open add modal
      </button>
      <div className="row">
        {filterUsers.map((item, index) => (
          <div className="col-lg-3" key={index}>
            <div className="card my-10px">
              <h2>{item.name}</h2>
              <h2>{item.age}</h2>
              <h2>{item.address}</h2>
              <h2>{item.phone}</h2>
              <div className="btn-wraper">
                <button
                  className="btn btn-danger"
                  onClick={() =>handle_delete(item)}
                >
                  Delete
                </button>
                {console.log(item)}
                <button
                  className="btn btn-info"
                  onClick={() => openEditModal(item)}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brend;
