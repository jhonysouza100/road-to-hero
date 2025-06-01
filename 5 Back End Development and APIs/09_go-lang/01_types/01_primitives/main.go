package main

import "fmt"

func main() {
	// Declaracion de variables

	// Forma tradicional
	var nombre string = "Juan"
	// (Autodetection) Go puede detectar el tipo de dato
	var apellido = "Perez"
	// Forma corta, (:=) solo se puede usar dentro de funciones
	ciudad := "Madrid"

	// Declaracion de numeros
	var year int16 = 2025
	edad := 30

	fmt.Println("Hola Mundo! " + nombre + " " + apellido)

	fmt.Println("Ciudad ", ciudad)

	fmt.Println("year ", year)

	fmt.Println("edad ", edad)

}
