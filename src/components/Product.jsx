import React, { useEffect, useState } from "react";
import {
  useGetUsersQuery,
  useDeleteUserMutation,
} from "../features/users/apiSlice";
import UsersModal from "./UsersModal";

const Product = () => {
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState("");
  const { data: users } = useGetUsersQuery();
  const [filterUsers, setFilterUsers] = useState([]);

  useEffect(() => {
    if (users) {
      const filteredUsers = users.filter((e) => e.category === "product");
      setFilterUsers(filteredUsers);
    }
  }, [users]);

  const [deleteUser] = useDeleteUserMutation();

  const toggle = () => {
    setModal(false);
    setEdit("");
  };
  const handle_delete = (item) => {
    console.log(item.id);
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
              <div className="card--body">
              <h4><i>Product name</i>: {item.name}</h4>
              <h4><i>Which </i>: {item.age}</h4>
              <h4><i>Price</i>: ${item.address}</h4>
              <h4><i>Phone</i>: {item.phone}</h4>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
