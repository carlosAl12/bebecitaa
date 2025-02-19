__author__ = "Carlos Julian Benavides Burbano"
__license__ = "GPL"
__version__ = "1.0.0"
__email__ = "carlos.benavidesbu@campusucc.edu.co"

class CalculoAreaTerreno:
    def __init__(self):
        self.BaseMayor=None
        self.BaseMenor=None
        self.Altura=None

    def IngreseValoresDeTerreno(self):
        self.BaseMayor=float(input("ingrese la base mayor de su terreno: "))
        self.BaseMenor=float(input("ingrese la base menor de su terreno: "))
        self.Altura=float(input("ingrese la base altura de su terreno: "))


        if(self.BaseMayor>0 and self.BaseMenor>0 and self.Altura>0):
            areaDelTerreno=((self.BaseMayor*self.Altura)+(self.BaseMenor*self.Altura))/2
            print(f'esta seria la area de su terreno {areaDelTerreno}')
        else:
            print("error en el sistema no proceso esos valores")

def mostrar_menu():
    print("\n--- Menú---")
    print("1. ingrese valores del terreno")
    print("2. salir")


def main():
    usuario = CalculoAreaTerreno()

    while True:
        mostrar_menu()
        opcion = input("Seleccione una opción: ")

        if opcion == "1":
            usuario.IngreseValoresDeTerreno()
        elif opcion== "2":
            print("saliendo de programa")
            break
        else:
            print("opcion no valida.")
if __name__ == "__main__":
    main()

    