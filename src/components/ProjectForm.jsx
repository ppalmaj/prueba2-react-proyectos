import { useState, useRef } from "react";
import axios from "axios";
import SimpleReactValidator from "simple-react-validator";

function ProjectForm({ addProject }) {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [, forceUpdate] = useState(0);

  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "El campo :attribute es obligatorio.",
        min: "El campo :attribute debe tener al menos :min caracteres."
      }
    })
  );

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (validator.current.allValid()) {

      const randomId =
        Math.floor(Math.random() * 10) + 1;

      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${randomId}`
      );

      await addProject({
        name,
        description,
        apiData: response.data.title
      });

      setName("");
      setDescription("");

    } else {

      validator.current.showMessages();
      forceUpdate(n => n + 1);

    }
  };

  return (

    <form onSubmit={handleSubmit}>

      <div>

        <label>Nombre Proyecto</label>

        <br />

        <input
          type="text"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <div>
          {validator.current.message(
            "Nombre",
            name,
            "required"
          )}
        </div>

      </div>

      <br />

      <div>

        <label>Descripción</label>

        <br />

        <textarea
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
        />

        <div>
          {validator.current.message(
            "Descripción",
            description,
            "required|min:10"
          )}
        </div>

      </div>

      <br />

      <button type="submit">
        Guardar Proyecto
      </button>

    </form>

  );
}

export default ProjectForm;