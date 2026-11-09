import React from "react";

function ProjectList({
  projects,
  deleteProject,
}) {
  return (
    <>
      {projects.map(
        (project) => (
          <React.Fragment
            key={project.id}
          >
            <div>
              <h3>
                {project.name}
              </h3>

              <p>
                {
                  project.description
                }
              </p>

              <p>
                Datos API:
                {" "}
                {
                  project.apiData
                }
              </p>

              <button
                onClick={() =>
                  deleteProject(
                    project.id
                  )
                }
              >
                Eliminar
              </button>
            </div>

            <hr />
          </React.Fragment>
        )
      )}
    </>
  );
}

export default ProjectList;