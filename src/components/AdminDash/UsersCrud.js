// Importar tu componente React
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import Modal from 'react-modal';


function UsersCrud() {
    const [users, setUsers] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);

    const [usuarios, setUsuarios] = useState({
        Nombre: "",
        Correo: "",
        Contrasena: "",
        Imagen: null,
        FK_Tipo_Usuario: null,
        TokenBeFocus: null,
    })

    const [updateUsuario, setUpdateUsuario] = useState({
        Nombre: "",
        Correo: "",
        Contrasena: "",
        Imagen: null,
        FK_Tipo_Usuario: null,
        TokenBeFocus: null,
    });

    const abrirModal = () => {
        setModalIsOpen(true);
    };

    const cerrarModal = () => {
        setModalIsOpen(false);
    };

    const abrirUpdateModal = (user) => {
        setUpdateUsuario(user);
        setUpdateModalIsOpen(true);
    };

    const cerrarUpdateModal = () => {
        setUpdateModalIsOpen(false);
        setUpdateUsuario({
            Nombre: "",
            Correo: "",
            Contrasena: "",
            Imagen: null,
            FK_Tipo_Usuario: null,
            TokenBeFocus: null,
            TokenGoogle: null,
        });
    };

    const crearUsuarioForm = async (e) => {
        e.preventDefault(); // Evitar la recarga de la página

        try {

            console.log(usuarios);

            const formatoCorreoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!formatoCorreoRegex.test(usuarios.Correo)) {
                Swal.fire({
                    title: 'Correo electrónico inválido',
                    text: 'Ingrese un correo electrónico válido. Por favor, inténtelo de nuevo.',
                    icon: 'error',
                    showConfirmButton: true,
                });
                return; // Detener la ejecución si el correo electrónico no es válido
            }
            // Validar que las contraseñas coincidan
            if (usuarios.Contrasena !== usuarios.ConfirmarContrasena) {
                // Las contraseñas no coinciden, mostrar un mensaje de error
                Swal.fire({
                    title: 'Contraseñas no coinciden',
                    text: 'Las contraseñas ingresadas no coinciden. Por favor, inténtelo de nuevo.',
                    icon: 'error',
                    showConfirmButton: true,
                });
                return; // Detener la ejecución si las contraseñas no coinciden
            }
            const espaciosEnBlancoRegex = /\s/;
            if (espaciosEnBlancoRegex.test(usuarios.Contrasena)) {
                Swal.fire({
                    title: 'Contraseña inválida',
                    text: 'La contraseña no puede contener espacios en blanco. Por favor, elija otra contraseña.',
                    icon: 'error',
                    showConfirmButton: true,
                });
                return; // Detener la ejecución si la contraseña contiene espacios en blanco
            }
            // Verificar si el usuario ya existe por su TokenGoogle
            const usuarioExistenteResponse = await fetch(`http://localhost:4000/Usuarios/${usuarios.Correo}`);
            const usuarioExistente = await usuarioExistenteResponse.json();
            console.log(usuarioExistente);

            if (usuarioExistente.message !== 'Usuario no encontrado') {
                // El usuario ya existe, mostrar un mensaje de error o tomar una acción apropiada
                Swal.fire({
                    title: 'Usuario existente',
                    text: 'Este usuario ya está registrado. Por favor, inicie sesión.',
                    icon: 'error',
                    showConfirmButton: true,
                }).then(() => {
                    // Puedes agregar más lógica aquí si es necesario
                });
            }
            else {
                const respuesta = await fetch('http://localhost:4000/Registro', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(usuarios),
                });
                console.log(usuarios)
                if (respuesta.ok) {
                    cerrarModal();
                    const data = await respuesta.json();
                    const token = data.TokenBeFocus;
                    localStorage.setItem("Token", token);
                    localStorage.setItem("Logueado", "True");
                    const response = await axios.get('http://localhost:4000/usuarios');
                    setUsers(response.data);
                    Swal.fire({
                        title: 'Usuario creado correctamente',
                        showDenyButton: false,
                        showCancelButton: false,
                        confirmButtonText: 'Ok',
                    }).then((result) => {
                        if (result.isConfirmed) {
                        } else if (result.isDenied) {
                            Swal.fire('Changes are not saved', '', 'info')
                        }
                    })

                }

            }
        }
        catch (error) {
            console.error('Error de red:', error);
        }
    }
    useEffect(() => {
        // Obtener la lista de usuarios al cargar el componente
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:4000/usuarios'); // Ajusta la URL según la configuración de tu servidor
            setUsers(response.data);
        } catch (error) {
            console.error('Error al obtener la lista de usuarios', error);
        }
    };

    const handleDeleteUser = async (userId) => {
        try {
            await axios.delete(`http://localhost:4000/Usuarios/${userId}`); // Ajusta la URL según la configuración de tu servidor
            // Actualizar la lista de usuarios después de la eliminación exitosa
            fetchUsers();
        } catch (error) {
            console.error('Error al eliminar un usuario', error);
        }
    };

    const actualizarUsuarioForm = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:4000/Usuarios/${updateUsuario.Id_Usuario}`, updateUsuario);
            cerrarUpdateModal();
            fetchUsers();
            Swal.fire({
                title: 'Usuario actualizado correctamente',
                showDenyButton: false,
                showCancelButton: false,
                confirmButtonText: 'Ok',
            })
        } catch (error) {
            console.error("Error al actualizar el usuario", error)
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Tabla de Usuarios</h2>

            {/* Formulario para crear usuarios */}
            <Modal isOpen={modalIsOpen} onRequestClose={cerrarModal} >
                <button className=' text-3xl font-bold' onClick={cerrarModal}> x </button>
                <h1 className='text-2xl font-bold mb-4 text-center'> Crear Usuario </h1>
                <form className='mt-10 flex flex-col' onSubmit={crearUsuarioForm}>
                    <input
                        type="text"
                        minLength={5}
                        className="w-auto p-2 mb-4 border text-black bg-gray-200 border-gray-300 rounded-3xl placeholder-gray-500" // Agrega las clases de Tailwind para estilos
                        placeholder="Nombre Completo"
                        required
                        value={usuarios.Nombre}
                        onChange={(e) => setUsuarios({ ...usuarios, Nombre: e.target.value })}
                    />
                    <input
                        type="email"
                        className="w-auto p-2 mb-4 border text-black bg-gray-200 border-gray-300 rounded-3xl placeholder-gray-500" // Agrega las clases de Tailwind para estilos
                        placeholder="Correo Electrónico"
                        value={usuarios.Correo}
                        onChange={(e) => setUsuarios({ ...usuarios, Correo: e.target.value })}
                        required
                    />
                    <input
                        type="password"
                        minLength={8}
                        className="w-auto p-2 mb-4 border text-black bg-gray-200 border-gray-300 rounded-3xl placeholder-gray-500" // Agrega las clases de Tailwind para estilos
                        placeholder="Contraseña"
                        value={usuarios.Contrasena}
                        onChange={(e) => setUsuarios({ ...usuarios, Contrasena: e.target.value })}
                        required
                    />
                    <input
                        type="password"
                        className="w-auto p-2 mb-4 border text-black bg-gray-200 border-gray-300 rounded-3xl placeholder-gray-500"
                        placeholder="Confirmar Contraseña"
                        value={usuarios.ConfirmarContrasena}
                        onChange={(e) => setUsuarios({ ...usuarios, ConfirmarContrasena: e.target.value })}
                        required
                    />
                    <select
                        className="w-auto p-2 mb-4 border text-black bg-gray-200 border-gray-300 rounded-3xl placeholder-gray-500"
                        onChange={(e) => setUsuarios({ ...usuarios, FK_Tipo_Usuario: e.target.value })}
                    >
                        <option value="2">Administrador</option>
                        <option value="1">Usuario</option>
                    </select>
                    <div className='flex justify-center mt-5'>
                        <button type='submit' className="bg-[#F95757] text-white py-2 w-40 rounded-xl font-bold"> Registrarse </button>
                    </div>

                </form>
            </Modal>

            {/* Formulario para actualizar usuarios */}
            <Modal isOpen={updateModalIsOpen} onRequestClose={cerrarUpdateModal}>
            <button className=' text-3xl font-bold' onClick={cerrarUpdateModal}> x </button>
                <h1 className='text-2xl font-bold mb-4 text-center'> Crear Usuario </h1>
                <form className='mt-10 flex flex-col' onSubmit={actualizarUsuarioForm}>
                    <input
                        type="text"
                        minLength={5}
                        className="w-auto p-2 mb-4 border text-black bg-gray-200 border-gray-300 rounded-3xl placeholder-gray-500" // Agrega las clases de Tailwind para estilos
                        placeholder="Nombre Completo"
                        required
                        value={updateUsuario.Nombre}
                        onChange={(e) => setUpdateUsuario({ ...updateUsuario, Nombre: e.target.value })}
                    />
                    <input
                        type="email"
                        className="w-auto p-2 mb-4 border text-black bg-gray-200 border-gray-300 rounded-3xl placeholder-gray-500" // Agrega las clases de Tailwind para estilos
                        placeholder="Correo Electrónico"
                        value={updateUsuario.Correo}
                        onChange={(e) => setUpdateUsuario({ ...updateUsuario, Correo: e.target.value })}
                        required
                    />
                    <input
                        type="password"
                        minLength={8}
                        className="w-auto p-2 mb-4 border text-black bg-gray-200 border-gray-300 rounded-3xl placeholder-gray-500" // Agrega las clases de Tailwind para estilos
                        placeholder="Contraseña"
                        value={updateUsuario.Contrasena}
                        onChange={(e) => setUpdateUsuario({ ...updateUsuario, Contrasena: e.target.value })}
                        required
                    />
                    <select
                        className="w-auto p-2 mb-4 border text-black bg-gray-200 border-gray-300 rounded-3xl placeholder-gray-500"
                        onChange={(e) => setUpdateUsuario({ ...updateUsuario, FK_Tipo_Usuario: e.target.value })}
                        value={updateUsuario.FK_Tipo_Usuario}
                    >
                        <option value="2">Administrador</option>
                        <option value="1">Usuario</option>
                    </select>
                    <div className='flex justify-center mt-5'>
                        <button type='submit' className="bg-[#427D9D] text-white py-2 w-40 rounded-xl font-bold"> Actualizar </button>
                    </div>

                </form>
            </Modal>


            {/* Lista de usuarios */}
            <div className="container mx-auto p-4">
                <div className='flex justify-between mx-6 mb-3'>
                    <h3 className="text-lg font-semibold mb-2">Lista de Usuarios</h3>
                    <button className='p-2 bg-blue-400 rounded-lg text-white' onClick={abrirModal}> añadir usuario</button>
                </div>


                {users.length > 0 ?
                    (<>
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 text-left bg-gray-200">Nombre</th>
                                    <th className="py-2 px-4 text-left bg-gray-200">Correo</th>
                                    <th className="py-2 px-4 text-left bg-gray-200">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={user.Id_Usuario} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                        <td className="py-2 px-4">{user.Nombre}</td>
                                        <td className="py-2 px-4">{user.Correo}</td>
                                        <td className="py-2 px-4">
                                            {user.FK_Tipo_Usuario === 1 ? (
                                                <button className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer" onClick={() => handleDeleteUser(user.Id_Usuario)}>Eliminar</button>
                                            ) : null}
                                            <button className="bg-blue-500 text-white px-2 py-1 rounded cursor-pointer ml-2" onClick={() => abrirUpdateModal(user)}>Actualizar</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </>) :
                    (<>
                        <p className=' text-6xl text-center font-bold'> Todavia no hay usuarios añadidos </p>
                    </>)}



            </div>


        </div>
    );
}

export default UsersCrud;
