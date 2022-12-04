import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function AddEmployee(props) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [img, setImg] = useState('');


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="block mx-auto m-3 px-4 py-1 text-sm text-purple-600 font-semibold rounded border border-3 border-purple hover:text-white hover:bg-purple-600">
        + Add Employee
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee`s</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            setName('');
            setRole('');
            setImg('');
            props.newEmployee(name, role, img)
          }}
          id='addbutton'  
          className="w-full max-w-sm">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
                Full Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                id="name" 
                type="text" 
                placeholder='Lanre'
                required
                value={name}
                onChange={(e) => {setName(e.target.value)}}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="role">
                Role
              </label>
            </div>
            <div className="md:w-2/3">
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                id="role" 
                type="text" 
                placeholder='Manager'
                required
                value={role}
                onChange={(e) => {setRole(e.target.value)}}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="role">
                Img Url
              </label>
            </div>
            <div className="md:w-2/3">
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                id="img" 
                type="text" 
                placeholder='https://image.com'
                required
                value={img}
                onChange={(e) => {setImg(e.target.value)}}
              />
            </div>
          </div>
        </form>
        </Modal.Body>
        <div id='message' className='flex flex-wrap justify-center items-center font-semibold text-slate-500 mt-0 mb-3'></div>
        <Modal.Footer>
          <button onClick={handleClose} className='px-3 py-2 text-sm text-white bg-gray-500 font-semibold rounded hover:bg-gray-400' >
            Close
          </button>
          <button 
          form='addbutton' 
          onClick={handleClose} 
          className='px-3 py-2 text-sm text-purple-600 font-semibold rounded border border-purple-300 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-1 focus:ring-purple-600 focus:ring-offset-2' >
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddEmployee;