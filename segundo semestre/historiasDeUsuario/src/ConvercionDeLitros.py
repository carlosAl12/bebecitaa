__author__ = "Carlos Julian Benavides Burbano"
__license__ = "GPL"
__version__ = "1.0.0"
__email__ = "carlos.benavidesbu@campusucc.edu.co"


class ConvercionDeLitros:
    def __init__(self):
        self.produccionLitros = None
        self.galon = 3.785  # Corregido: usar punto decimal
        self.precioGalon = None
    
    def convertirLitrosaGalon(self):
        try:
            self.produccionLitros = float(input("Ingrese la producción de litros: "))  # Convertir a float

            if self.produccionLitros > 0:
                convercionAgalones = self.produccionLitros / self.galon
                print(f'Serían {convercionAgalones} galones')
                return convercionAgalones  
            else:
                print("Error en el sistema: no se procesan valores negativos o cero.")
        except ValueError:
            print("Error: Ingrese un valor numérico válido.")
    
    def calcularPrecioPorGalon(self):  
        try:
            self.precioGalon = float(input("Ingrese el precio por galón: "))  
            if self.precioGalon < 0 :
                galones = self.convertirLitrosaGalon()  
                if galones is not None:  
                    calcularGanancia = galones * self.precioGalon
                    print(f'La ganancia sería de ${calcularGanancia:.2f}')
            else:
                print("Error en el sistema: no se procesan valores negativos o cero.")
        except ValueError:
            print("Error: Ingrese un valor numérico válido.")


def mostrar_menu():
    print("\n--- Menú ---")
    print("1. Conversión de litros a galones")
    print("2. Calcular precio de los galones")
    print("3. Salir")


def main():
    usuario = ConvercionDeLitros()

    while True:
        mostrar_menu()
        opcion = input("Seleccione una opción: ")

        if opcion == "1":
            usuario.convertirLitrosaGalon()

        elif opcion == "2":
            usuario.calcularPrecioPorGalon()

        elif opcion == "3":
            print("Saliendo del programa.")
            break

        else:
            print("Opción no válida.")


if __name__ == "__main__":
    main()
