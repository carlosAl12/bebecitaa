__author__ = "Carlos Julian Benavides Burbano"
__license__ = "GPL"
__version__ = "1.0.0"
__email__ = "carlos.benavidesbu@campusucc.edu.co"

import time
import smtplib
from email.message import EmailMessage
from datetime import datetime, timedelta

# Configuración del remitente
REMITENTE = "carlos.benavidesbu@gmail.com"
CLAVE = "chan ipte tivn gums"


tareas = []

def enviarCorreo(destinatario, asunto, mensaje):
    msg = EmailMessage()
    msg.set_content(mensaje)
    msg["Subject"] = asunto
    msg["From"] = REMITENTE
    msg["To"] = destinatario

    try:
        server = smtplib.SMTP_SSL("smtp.gmail.com", 465)
        server.login(REMITENTE, CLAVE)
        server.send_message(msg)
        server.quit()
        print(f"✅ Correo enviado con éxito a {destinatario}.")
    except Exception as e:
        print(f"❌ Error al enviar el correo: {e}")


class TareasPersonales:
    def __init__(self, nombre="", apellido="", correo="", tareaPersonal="", nombreTareaPersonal=""):
        self.nombre = nombre
        self.apellido = apellido
        self.correo = correo
        self.tareaPersonal = tareaPersonal
        self.nombreTareaPersonal = nombreTareaPersonal
        self.fechaDeVencimiento = None

    def ingreseUsuario(self):
        self.nombre = input("Ingrese nombre: ")
        self.apellido = input("Ingrese apellido: ")
        self.correo = input("Ingrese correo electrónico: ")

    def NombreTareaPersonal(self):
        self.nombreTareaPersonal = input("Coloque nombre de tarea personal: ")
        self.tareaPersonal = input("Ingrese la tarea personal a realizar: ")
        fecha_vencimiento = input("Ingrese la fecha de vencimiento (YYYY-MM-DD HH:MM): ")
        try:
            self.fechaDeVencimiento = datetime.strptime(fecha_vencimiento, "%Y-%m-%d %H:%M")
        except ValueError:
            print("🥵🥵🥵🥵🥵🥵Formato de fecha inválido. Usa YYYY-MM-DD HH:MM.")
            return

        nueva_tarea = {
            "usuario": self.nombre,
            "correo": self.correo,
            "tarea": self.nombreTareaPersonal,
            "fecha_vencimiento": self.fechaDeVencimiento,
            "completada": False
        }
        tareas.append(nueva_tarea)

        mensaje = f"Hola {self.nombre}, has creado un recordatorio para:\n\nTarea: {self.nombreTareaPersonal}\nFecha límite: {self.fechaDeVencimiento}\n\nRecibirás otro recordatorio un día antes de la fecha límite."
        enviarCorreo(self.correo, "Confirmación de Recordatorio", mensaje)

    def EditarTareaPersonal(self):
        nombre_tarea = input("Ingrese el nombre de la tarea a editar: ")
        for tarea in tareas:
            if tarea["tarea"] == nombre_tarea:
                nueva_tarea = input("Edita tu tarea personal: ")
                tarea["tarea"] = nueva_tarea
                print(f'Tarea {nombre_tarea} editada correctamente.')
                return
        print("No se encontró la tarea.")

    def EliminarTareaPersonal(self):
        nombre_tarea = input("Ingrese el nombre de la tarea a eliminar: ")
        for tarea in tareas:
            if tarea["tarea"] == nombre_tarea:
                tareas.remove(tarea)
                print(f'Tarea {nombre_tarea} eliminada correctamente.')
                return
        print("No se encontró la tarea.")

    def tareaCompletada(self):
        nombre_tarea = input("Ingrese el nombre de la tarea completada: ")
        for tarea in tareas:
            if tarea["tarea"] == nombre_tarea:
                tarea["completada"] = True
                print(f'¡Felicitaciones! Has completado {nombre_tarea}.')
                return
        print(f'La tarea {nombre_tarea} no se encontró. Lo siento.')

    def establecerFechaVencimiento(self):
        fecha_vencimiento = input("Ingrese la fecha de vencimiento (YYYY-MM-DD HH:MM): ")
        try:
            self.fechaDeVencimiento = datetime.strptime(fecha_vencimiento, "%Y-%m-%d %H:%M")
        except ValueError:
            print(" Formato de fecha inválido. Usa YYYY-MM-DD HH:MM.")

    def RecordatorioVencimiento(self):
        for tarea in tareas:
            if tarea["fecha_vencimiento"] and datetime.now() >= tarea["fecha_vencimiento"]:
                mensaje = f'La tarea {tarea["tarea"]} acaba de vencer en la fecha {tarea["fecha_vencimiento"]}.'
                enviarCorreo(tarea["correo"], "Recordatorio de Vencimiento", mensaje)

    def RecordatorioUnDiaAntes(self):
        for tarea in tareas:
            if tarea["fecha_vencimiento"]:
                FechaRecordatorio = tarea["fecha_vencimiento"] - timedelta(days=1)
                if FechaRecordatorio <= datetime.now() < tarea["fecha_vencimiento"]:
                    mensaje = f'Se le recuerda que falta un día para {tarea["tarea"]} antes de que se venza.'
                    enviarCorreo(tarea["correo"], "Recordatorio de Vencimiento", mensaje)


def mostrar_menu():
    print("\n--- Menú de Tareas Personales ---")
    print("1. Ingresar Usuario")
    print("2. Crear Tarea Personal")
    print("3. Editar Tarea Personal")
    print("4. Eliminar Tarea Personal")
    print("5. Marcar Tarea como Completada")
    print("6. Establecer Fecha de Vencimiento")
    print("7. Verificar Recordatorio de Vencimiento")
    print("8. Verificar Recordatorio Un Día Antes")
    print("9. Salir")


def main():
    usuario = TareasPersonales()

    while True:
        mostrar_menu()
        opcion = input("Seleccione una opción: ")

        if opcion == "1":
            usuario.ingreseUsuario()
        elif opcion == "2":
            usuario.NombreTareaPersonal()
        elif opcion == "3":
            usuario.EditarTareaPersonal()
        elif opcion == "4":
            usuario.EliminarTareaPersonal()
        elif opcion == "5":
            usuario.tareaCompletada()
        elif opcion == "6":
            usuario.establecerFechaVencimiento()
        elif opcion == "7":
            usuario.RecordatorioVencimiento()
        elif opcion == "8":
            usuario.RecordatorioUnDiaAntes()
        elif opcion == "9":
            print("Saliendo del programa...")
            break
        else:
            print("Opción no válida. Por favor, seleccione una opción del 1 al 9.")

if __name__ == "__main__":
    main()



    


        