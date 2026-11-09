import { useState, useEffect } from "react";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";

import { db } from "./services/firebase";

import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

function App() {

  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const loadProjects = async () => {

    try {

      const snapshot = await getDocs(
        collection(db, "projects")
      );

      const projectList = snapshot.docs.map(
        (documento) => ({
          id: documento.id,
          ...documento.data()
        })
      );

      setProjects(projectList);

    } catch (error) {

      console.error(
        "Error cargando proyectos:",
        error
      );

    }

  };

  useEffect(() => {
    loadProjects();
  }, []);

  const addProject = async (project) => {

    try {

      await addDoc(
        collection(db, "projects"),
        project
      );

      await loadProjects();

    } catch (error) {

      console.error(
        "Error agregando proyecto:",
        error
      );

    }

  };

  const deleteProject = async (id) => {

    try {

      await deleteDoc(
        doc(db, "projects", id)
      );

      await loadProjects();

    } catch (error) {

      console.error(
        "Error eliminando proyecto:",
        error
      );

    }

  };

  return (

    <div style={{ padding: "20px" }}>

      <h1>
        Gestión de Proyectos
      </h1>

      <button
        onClick={() =>
          setShowForm(!showForm)
        }
      >
        Agregar Proyecto
      </button>

      {showForm && (
        <ProjectForm
          addProject={addProject}
        />
      )}

      <hr />

      {projects.length === 0 ? (

        <h2>
          No hay proyectos
        </h2>

      ) : (

        <ProjectList
          projects={projects}
          deleteProject={deleteProject}
        />

      )}

    </div>

  );
}

export default App;