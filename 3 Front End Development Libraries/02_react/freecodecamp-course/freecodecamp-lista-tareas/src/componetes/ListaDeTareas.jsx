
import React, { useState } from 'react';
import Formulario from './Formulario.jsx';
import Tarea from './Tarea.jsx'
import '../estilos/ListaDeTareas.css';
function ListaDeTareas() {
	// useState es un hook representado por un array de dos elementos, un estado y una funcion|
	const [tareas, setTareas] = useState([]);

	const agregarTarea = tarea => {
		if (tarea.texto.trim()) {
			tarea.texto = tarea.texto.trim();
			const tareasActualizada = [tarea, ...tareas]
			setTareas(tareasActualizada);
		}
	};

	const eliminarTarea = id => {
		const tareasActualizadas = tareas.filter(tarea => tarea.id !==id);
		setTareas(tareasActualizadas);
	};

	const completarTarea = id => {
		const tareasActualizadas = tareas.map(tarea => {
			if(tarea.id === id){
				tarea.completada = !tarea.completada;
			}
			return tarea;
		});
		setTareas(tareasActualizadas);
	}

	return (
		<>
			<Formulario onSubmit={agregarTarea} />
			<div className="lista-contenedor-tareas">
				{
					tareas.map((tarea) =>
						<Tarea
							key={tarea.id}
							id={tarea.id}
							texto={tarea.texto}
							completada={tarea.completada}
							eliminarTarea={eliminarTarea}
							completarTarea={completarTarea }
						/>)
				}
			</div>
		</>
	);
}
export default ListaDeTareas;