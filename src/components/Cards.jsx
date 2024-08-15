import React, { useState } from "react";
import celularesData from "../Json/phones.json";
import "../css/global.css";
import "../css/cards.css";
import "../css/form-add.css";
import "../css/formActions.css";

export const Cards = ({ searchQuery }) => {
  const [celulares, setCelulares] = useState(celularesData);
  const [editingCelular, setEditingCelular] = useState(null);
  const [editedCelular, setEditedCelular] = useState({});
  const [newCelular, setNewCelular] = useState({});
  const [showAddForm, setShowAddForm] = useState(false);

  const filteredCelulares = celulares.filter((celular) =>
    celular.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id) => {
    const updatedCelulares = celulares.filter((celular) => celular.id !== id);
    setCelulares(updatedCelulares);
  };

  const handleEdit = (id) => {
    const celularToEdit = celulares.find((celular) => celular.id === id);
    if (celularToEdit) {
      setEditingCelular(celularToEdit);
      setEditedCelular({ ...celularToEdit });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCelular((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSave = () => {
    const updatedCelulares = celulares.map((celular) =>
      celular.id === editedCelular.id ? editedCelular : celular
    );
    setCelulares(updatedCelulares);
    setEditingCelular(null);
    setEditedCelular({});
  };

  const handleAdd = () => {
    const newId = celulares.length
      ? Math.max(...celulares.map((cel) => cel.id)) + 1
      : 1;
    const celularToAdd = { ...newCelular, id: newId };
    setCelulares([...celulares, celularToAdd]);
    setNewCelular({});
    setShowAddForm(false);
  };

  return (
    <div className="cards-container">
      <div className="button-add">
        <h1>Lista de Celulares</h1>
        <button
          className="add-button"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
        </button>
      </div>
      <ul className="cards-list">
        {filteredCelulares.map((celular) => (
          <li key={celular.id} className="card">
            <img
              src={celular.imagen}
              alt={celular.nombre}
              className="card-image"
            />
            <div className="card-content">
              <h2 className="card-title">{celular.nombre}</h2>
              <p className="card-brand">Marca: {celular.marca}</p>
              <p className="card-price">Precio: {celular.precio}</p>
              <p className="card-description">{celular.descripcion}</p>
            </div>
            <div className="container-buttons">
              <button onClick={() => handleEdit(celular.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                </svg>
              </button>
              <button
                className="button-delete"
                onClick={() => handleDelete(celular.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Formulario de edición */}
      {editingCelular && (
        <div className="edit-form-container">
          <div className="edit-form">
            <h2>Editar Celular</h2>
            <form>
              <label>
                Nombre:
                <input
                  type="text"
                  name="nombre"
                  value={editedCelular.nombre || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
                Marca:
                <input
                  type="text"
                  name="marca"
                  value={editedCelular.marca || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
                Precio:
                <input
                  type="text"
                  name="precio"
                  value={editedCelular.precio || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
                Descripción:
                <textarea
                  name="descripcion"
                  value={editedCelular.descripcion || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
                Imagen URL:
                <input
                  type="text"
                  name="imagen"
                  value={editedCelular.imagen || ""}
                  onChange={handleChange}
                />
              </label>
              <button type="button" onClick={handleSave}>
                Guardar
              </button>
              <button type="button" onClick={() => setEditingCelular(null)}>
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Formulario de adición */}
      {showAddForm && (
        <div className="add-form-container">
          <div className="add-form">
            <h2>Agregar Nuevo Celular</h2>
            <form>
              <label>
                Nombre:
                <input
                  type="text"
                  name="nombre"
                  value={newCelular.nombre || ""}
                  onChange={(e) =>
                    setNewCelular({
                      ...newCelular,
                      nombre: e.target.value,
                    })
                  }
                />
              </label>
              <label>
                Marca:
                <input
                  type="text"
                  name="marca"
                  value={newCelular.marca || ""}
                  onChange={(e) =>
                    setNewCelular({
                      ...newCelular,
                      marca: e.target.value,
                    })
                  }
                />
              </label>
              <label>
                Precio:
                <input
                  type="text"
                  name="precio"
                  value={newCelular.precio || ""}
                  onChange={(e) =>
                    setNewCelular({
                      ...newCelular,
                      precio: e.target.value,
                    })
                  }
                />
              </label>
              <label>
                Descripción:
                <textarea
                  name="descripcion"
                  value={newCelular.descripcion || ""}
                  onChange={(e) =>
                    setNewCelular({
                      ...newCelular,
                      descripcion: e.target.value,
                    })
                  }
                />
              </label>
              <label>
                Imagen URL:
                <input
                  type="text"
                  name="imagen"
                  value={newCelular.imagen || ""}
                  onChange={(e) =>
                    setNewCelular({
                      ...newCelular,
                      imagen: e.target.value,
                    })
                  }
                />
              </label>
              <button type="button" onClick={handleAdd}>
                Agregar
              </button>
              <button type="button" onClick={() => setShowAddForm(false)}>
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
