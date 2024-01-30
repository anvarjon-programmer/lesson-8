import React, { useEffect, useState } from "react";
import {
  useGetUsersQuery,
  useDeleteUserMutation,
} from "../features/users/apiSlice";
import UsersModal from "./UsersModal";

export default function OpenModal() {
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState("");
  const { data: users } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();

  console.log(users);
  const toggle = () => {
    setModal(false);
    // setEdit('')
    setEdit("");
  };
  const openeditModal = (item) => {
    setEdit(item);
    setModal(true);
  };

  return (
    <div className="container">
      <UsersModal open={modal} toggle={toggle} edit={edit} />
      <button className="btn btn-success" onClick={() => setModal(true)}>
        oppen add modal
      </button>
      <div className="row">
        {users?.map((item, index) => {
          return (
            <div className="col-lg-3">
              <div className="card my-10px">
                <h2>{item.name}</h2>
                <h2>{item.age}</h2>
                <h2>{item.address}</h2>
                <h2>{item.phone}</h2>
                <div className="btn-wraper">
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(item.id)}
                  >
                    delet
                  </button>
                  <button
                    className="btn btn-info"
                    onClick={() => openeditModal(item)}
                  >
                    edit
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

