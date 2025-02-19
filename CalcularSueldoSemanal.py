__author__ = "Carlos Julian Benavides Burbano"
__license__ = "GPL"
__version__ = "1.0.0"
__email__ = "carlos.benavidesbu@campusucc.edu.co"


class CalcularSueldoSemanal:
    def __init__(self):
        self.horas=None
        self.PagoporHora=None

    def SueldoSemanal(self):
        try:
            self.horas=float(input("ingrese las horas que a trabajado: "))
            self.PagoporHora=float(input("ingrese pago por horas: "))
            if self.PagoporHora>0 and self.horas>0:
                sueldoSemanal=self.PagoporHora*self.horas
                print(f'tu sueldo semanal es {sueldoSemanal}')
                return sueldoSemanal
            else:
                print("error en el sistemana: no ingresaste valores validos")
        except ValueError:
            print("error: ingrese valor numerico valido")

def mostrar_menu():
    print("\n--- Menú ---")
    print("1. Calcular tu sueldo en esta semanas")
    print("2. Salir")


def main():
    usuario = CalcularSueldoSemanal()

    while True:
        mostrar_menu()
        opcion = input("Seleccione una opción: ")

        if opcion == "1":
            usuario.SueldoSemanal()
        elif  opcion == "2":
            print("Saliendo del programa.")
            break
        else:
            print("opcion no valida")

if __name__=="__main__":
    main()
