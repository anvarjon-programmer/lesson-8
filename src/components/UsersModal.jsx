import React, { useState } from 'react'
import { Modal ,ModalBody } from 'reactstrap'
import { useAddUserMutation , useUpdateUserMutation} from '../features/users/apiSlice';

export default function UsersModal({open,toggle,edit}) {
    const [selectData, setSelectData] = useState("brand")
    console.log(selectData);
    const [addUser] = useAddUserMutation()
    const [updateUser] = useUpdateUserMutation()

    const handleSubmit =(e) =>{
      
        e.preventDefault();
        let payload = {
            name: e.target[0].value ? e.target[0].value : edit.name,
            age: e.target[1].value ? e.target[1].value : edit.age,
            address: e.target[2].value ? e.target[2].value : edit.address,
            phone: e.target[3].value ? e.target[3].value : edit.phone,
            category: selectData
        }
        if (edit !== '') {
            updateUser({ ...payload, id: edit.id })
        } else {
            addUser({ ...payload })
        }
        toggle();
    }
  return (
    <Modal isOpen={open} toggle={toggle}>
        <ModalBody>
            <form onSubmit={handleSubmit}>
                <input type="text" defaultValue={edit.name} placeholder='Prodact Name..' className='form-control my-2'/>
                <input type="text" defaultValue={edit.address} placeholder='from which country...' className='form-control my-2'/>
                <input type="number" defaultValue={edit.age} placeholder='Price...' className='form-control my-2'/>
                <input type="number" defaultValue={edit.phone} placeholder='Phone...' className='form-control my-2'/>
                <div className="select-btn flex">
                <button className='btn btn-success'>Add</button>
                <select onChange={(e) => setSelectData(e.target.value)} name="" id=""  class="form-select" aria-label="Disabled select example">
                    <option value="brand">Brand</option>
                    <option value="model">Model</option>
                    <option value="product">Product</option>
                </select>
                </div>
            </form>
        </ModalBody>
    </Modal>
  )
}
