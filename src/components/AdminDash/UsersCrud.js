// Importar tu componente React
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import Modal from 'react-modal';


function UsersCrud() {
    const [users, setUsers] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);
    const [confirmarContrasena, setConfirmarContrasena] = useState();

    const [usuarios, setUsuarios] = useState({
        Nombre: "",
        Correo: "",
        Contrasena: "",
        Imagen: null,
        FK_Tipo_Usuario: 1,
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
        console.log(user)
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

    const cerrarCreateModal = () => {
        setModalIsOpen(false);
        setUsuarios({
            Nombre: "",
            Correo: "",
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
            if (usuarios.Contrasena !== confirmarContrasena) {
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
                })
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
                    cerrarCreateModal()
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
        console.log(users)
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
        console.log(userId)
        if (Number(localStorage.getItem("Usuario")) === userId) {
            Swal.fire({
                icon: "warning",
                title: 'No te puedes eliminar a ti mismo',
                showDenyButton: false,
                showCancelButton: false,
                confirmButtonText: 'Ok',
            })
            return;
        }
        try {
            await axios.delete(`http://localhost:4000/Usuarios/${userId}`);
            // Actualizar la lista de usuarios después de la eliminación exitosa
            fetchUsers();
        } catch (error) {
            console.error('Error al eliminar un usuario', error);
        }
    };

    const actualizarUsuarioForm = async (e) => {
        e.preventDefault();
        console.log(updateUsuario);
        try {
            await axios.put(`http://localhost:4000/Usuarios/${updateUsuario.Id_Usuario}`, updateUsuario);
            cerrarUpdateModal();
            fetchUsers();
            console.log(updateUsuario)
            if(updateUsuario.Correo === localStorage.getItem("Correo")){
                localStorage.setItem("TipoUsuario", updateUsuario.FK_Tipo_Usuario)
            }
            // Verificar si el rol ha cambiado de administrador a usuario
            if (updateUsuario.FK_Tipo_Usuario == 1 && updateUsuario.Correo === localStorage.getItem("Correo")) {
                console.log("Se esta ejecutando esto")
                // Cerrar sesión
                localStorage.clear();
                Swal.fire({
                    title: 'Oops, ya no tienes acceso a esta pagina',
                    icon: "warning",
                    showDenyButton: false,
                    showCancelButton: false,
                    confirmButtonText: 'Ok',
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "/Login";
                    }
                })
            } else {
                Swal.fire({
                    title: 'Usuario actualizado correctamente',
                    showDenyButton: false,
                    showCancelButton: false,
                    confirmButtonText: 'Ok',
                })
            }
        } catch (error) {
            console.error("Error al actualizar el usuario", error)
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="md:text-5xl text-3xl font-bold text-center italic text-zinc-800">Gestión de usuarios</h2>

            {/* Formulario para crear usuarios */}
            <Modal isOpen={modalIsOpen} onRequestClose={cerrarCreateModal} className="w-8/12 m-auto my-10 rounded-xl  bg-zinc-50">
                <button className=' text-3xl font-bold m-5' onClick={cerrarCreateModal}> x </button>
                <h1 className="md:text-5xl text-3xl font-bold text-center italic text-zinc-800">Agregar usuario</h1>
                <form className='mt-10 flex flex-col' onSubmit={crearUsuarioForm}>
                    <input
                        type="text"
                        minLength={5}
                        className="w-10/12 mx-auto p-2 mb-4 border font-medium text-lg text-zinc-800 bg-gray-200 border-gray-300 rounded-xl outline-none placeholder:text-zinc-700"
                        placeholder="Nombre Completo"
                        required
                        value={usuarios.Nombre}
                        onChange={(e) => setUsuarios({ ...usuarios, Nombre: e.target.value })}
                    />
                    <input
                        type="email"
                        className="w-10/12 mx-auto p-2 mb-4 border font-medium text-lg text-zinc-800 bg-gray-200 border-gray-300 rounded-xl outline-none placeholder:text-zinc-700"
                        placeholder="Correo Electrónico"
                        value={usuarios.Correo}
                        onChange={(e) => setUsuarios({ ...usuarios, Correo: e.target.value })}
                        required
                    />
                    <input
                        type="password"
                        minLength={8}
                        className="w-10/12 mx-auto p-2 mb-4 border font-medium text-lg text-zinc-800 bg-gray-200 border-gray-300 rounded-xl outline-none placeholder:text-zinc-700"
                        placeholder="Contraseña"
                        value={usuarios.Contrasena}
                        onChange={(e) => setUsuarios({ ...usuarios, Contrasena: e.target.value })}
                        required
                    />
                    <input
                        type="password"
                        className="w-10/12 mx-auto p-2 mb-4 border font-medium text-lg text-zinc-800 bg-gray-200 border-gray-300 rounded-xl outline-none placeholder:text-zinc-700"
                        placeholder="Confirmar Contraseña"
                        onChange={(e) => setConfirmarContrasena(e.target.value )}
                        required
                    />
                    <select
                        className="w-10/12 mx-auto p-2 mb-4 border font-medium text-lg text-zinc-800 bg-gray-200 border-gray-300 rounded-xl outline-none placeholder:text-zinc-700"
                        onChange={(e) => setUsuarios({ ...usuarios, FK_Tipo_Usuario: e.target.value })}
                    >
                        <option value="2" className='font-medium text-lg text-zinc-800 bg-gray-200'>Administrador</option>
                        <option value="1" selected className='font-medium text-lg text-zinc-800 bg-gray-200'>Usuario</option>
                    </select>
                    <div className='flex justify-center'>
                        <button type='submit' className="bg-[#1F4172] hover:bg-blue-600 text-white py-2 w-40 rounded-xl font-bold m-5"> Registrar usuario </button>
                    </div>

                </form>
            </Modal>

            {/* Formulario para actualizar usuarios */}
            <Modal isOpen={updateModalIsOpen} onRequestClose={cerrarUpdateModal} className="w-8/12 m-auto my-20 rounded-xl  bg-zinc-50">
                <button className=' text-3xl font-bold mx-5' onClick={cerrarUpdateModal}> x </button>
                <h1 className="md:text-5xl text-3xl font-bold text-center italic text-zinc-800">Editar usuario</h1>
                <form className='mt-10 flex flex-col' onSubmit={actualizarUsuarioForm}>
                    <input
                        type="text"
                        minLength={5}
                        className="w-10/12 mx-auto p-2 mb-4 border font-medium text-lg text-zinc-800 bg-gray-200 border-gray-300 rounded-xl outline-none placeholder:text-zinc-700" // Agrega las clases de Tailwind para estilos
                        placeholder="Nombre Completo"
                        required
                        value={updateUsuario.Nombre}
                        onChange={(e) => setUpdateUsuario({ ...updateUsuario, Nombre: e.target.value })}
                    />
                    <input
                        type="email"
                        className="w-10/12 mx-auto p-2 mb-4 border font-medium text-lg text-zinc-800 bg-gray-200 border-gray-300 rounded-xl outline-none placeholder:text-zinc-700" // Agrega las clases de Tailwind para estilos
                        placeholder="Correo Electrónico"
                        value={updateUsuario.Correo}
                        onChange={(e) => setUpdateUsuario({ ...updateUsuario, Correo: e.target.value })}
                        required
                    />
                    <input
                        type="password"
                        minLength={8}
                        className="w-10/12 mx-auto p-2 mb-4 border font-medium text-lg text-zinc-800 bg-gray-200 border-gray-300 rounded-xl outline-none placeholder:text-zinc-700" // Agrega las clases de Tailwind para estilos
                        placeholder="Contraseña"
                        value={updateUsuario.Contrasena}
                        onChange={(e) => setUpdateUsuario({ ...updateUsuario, Contrasena: e.target.value })}
                        required
                    />
                    <select
                        className="w-10/12 mx-auto p-2 mb-4 border font-medium text-lg text-zinc-800 bg-gray-200 border-gray-300 rounded-xl outline-none placeholder:text-zinc-700"
                        onChange={(e) => setUpdateUsuario({ ...updateUsuario, FK_Tipo_Usuario: e.target.value })}
                        value={updateUsuario.FK_Tipo_Usuario}
                    >
                        <option value="2" className='font-medium text-lg text-zinc-800 bg-gray-200'>Administrador</option>
                        <option value="1" className='font-medium text-lg text-zinc-800 bg-gray-200'>Usuario</option>
                    </select>
                    <div className='flex justify-center align-middle items-center'>
                        <button type='submit' className="bg-[#1F4172] hover:bg-blue-600 text-white py-2 w-40  rounded-xl font-bold m-5"> Actualizar </button>
                    </div>

                </form>
            </Modal>


            {/* Lista de usuarios */}
            <div className="container mx-auto p-4">
                <div className='flex justify-between mx-6 my-5'>
                    <h3 className="md:text-2xl text-xl font-semibold italic my-auto">Lista de Usuarios</h3>
                    <button className='bg-[#1F4172] font-medium text-lg text-white py-2 px-4 w-70 rounded-xl hover:bg-blue-600' onClick={abrirModal}> añadir usuario</button>
                </div>


                {users.length > 0 ?
                    (<>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 text-center font-semibold italic my-auto bg-gray-200">Nombre</th>
                                        <th className="py-2 px-4 text-center font-semibold italic my-auto bg-gray-200">Correo</th>
                                        <th className="py-2 px-4 text-center font-semibold italic my-auto bg-gray-200">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user, index) => (
                                        <tr key={user.Id_Usuario} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                            <td className="py-2 text-center font-normal italic my-auto px-4 sm:px-2 md:px-4">{user.Nombre}</td>
                                            <td className="py-2 text-center font-normal italic my-auto px-4 sm:px-2 md:px-4">{user.Correo}</td>
                                            <td className="py-2 text-center font-normal italic my-auto px-4 sm:px-2 md:px-4">
                                                {user.FK_Tipo_Usuario === 1 ? (
                                                    <button className="bg-[#B31312] text-white px-2 py-1 rounded cursor-pointer font-semibold md:my-auto my-2 mx-3" onClick={() => handleDeleteUser(user.Id_Usuario)}>Eliminar</button>
                                                ) : null}
                                                <button className="bg-[#1F4172] text-white px-2 py-1 rounded cursor-pointer md:my-auto font-semibold my-2" onClick={() => abrirUpdateModal(user)}>Editar</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>


                    </>) :
                    (<>
                        <p className='md:text-2xl text-xl font-semibold italic my-auto text-center'> Todavia no hay usuarios añadidos </p>
                    </>)}



            </div>


        </div>
    );
}

export default UsersCrud;
