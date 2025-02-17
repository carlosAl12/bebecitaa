__author__ = "Carlos Julian Benavides Burbano"
__license__ = "GPL"
__version__ = "1.0.0"
__email__ = "carlos.benavidesbu@campusucc.edu.co"


class SistemaCitas:
    def __init__(self):
        self.tarifas = {
            (1, 2, 3): 200000,  
            (4, 5): 150000,     
            (6, 7, 8): 100000, 
        }
        self.tarifa_default = 50000  
        self.citas = []  

    def calcular_costo_cita(self, numero_cita):
        for i, tarifa in self.tarifas.items():
            if numero_cita in i:
                return tarifa
        return self.tarifa_default  

    def agregar_cita(self, numero_cita):
        if numero_cita <= 0:
            print("Error: El número de cita debe ser mayor a 0.")
            return

        costo_cita = self.calcular_costo_cita(numero_cita)
        self.citas.append(costo_cita)
        print(f"Cita {numero_cita} - Costo: ${costo_cita:,.2f}")

    def calcular_total_pagado(self):
        return sum(self.citas)

    def mostrar_resumen(self):
        print("\n--- Resumen de Citas ---")
        for i, costo in enumerate(self.citas, start=1):
            print(f"Cita {i}: ${costo:,.2f}")
        print(f"Total pagado: ${self.calcular_total_pagado():,.2f}")


def main():
    sistema = SistemaCitas()

    while True:
        print("\n--- Menú ---")
        print("1. Agregar cita")
        print("2. Mostrar resumen de citas")
        print("3. Salir")
        opcion = input("Seleccione una opción: ")

        if opcion == "1":
            try:
                numero_cita = int(input("Ingrese el número de cita actual: "))
                sistema.agregar_cita(numero_cita)
            except ValueError:
                print("Error: Ingrese un número válido.")

        elif opcion == "2":
            sistema.mostrar_resumen()

        elif opcion == "3":
            print("Saliendo del sistema...")
            break

        else:
            print("Opción no válida. Intente de nuevo.")


if __name__ == "__main__":
    main()