package main

import "fmt"

func main() {
	// Declaracion de estructuras

	// ARRAY
	// Forma tradicional
	var listaFrutas = [4]string{"Naranja", "Manzana", "Pera", "Plátano"}
	fmt.Println("Lista de frutas: ", listaFrutas[2])

	// (Autodetection) Go puede detectar el tipo de dato
	var listaVerduras = []string{"Zanahoria", "Lechuga", "Tomate"}
	fmt.Println("Lista de verduras: ", listaVerduras[0])

	// Forma corta, (:=) solo se puede usar dentro de funciones
	listaNumeros := []int{1, 2, 3, 4, 5}
	fmt.Println("Lista de numeros: ", listaNumeros[3])

	listaPaises := [3]string{"España", "Francia", "Alemania"}
	fmt.Println("Lista de paises: ", listaPaises[1])
	listaPaises[1] = "Italia" // Modificar un elemento del array
	fmt.Println("Lista de paises: ", listaPaises[1])

	// SLICES
	sliceFrutas := []string{"Naranja", "Manzana", "Pera", "Plátano"}
	fmt.Println("Slice de frutas: ", sliceFrutas[2])
	sliceFrutas = append(sliceFrutas, "Kiwi") // Añadir un elemento al slice
	fmt.Println("Slice de frutas actualizado: ", sliceFrutas)

	sliceFrutas = sliceFrutas[1:3] // Subslice, obtiene un rango de elementos
	fmt.Println("Subslice de frutas: ", sliceFrutas)

	sliceFrutas = sliceFrutas[:2] // Subslice, obtiene los primeros 2 elementos
	fmt.Println("Subslice de frutas (primeros 2): ", sliceFrutas)

	sliceFrutas = sliceFrutas[2:] // Subslice, obtiene los ultimos 2 elementos
	fmt.Println("Subslice de frutas (ultimos 2): ", sliceFrutas)

}
