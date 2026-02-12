from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
# CORS permite que tu HTML (que está en una ruta) hable con Python (que está en otra)
CORS(app)

@app.route('/login', methods=['POST'])
def login():
    # Recibimos los datos que envía el archivo script.js
    datos = request.json
    usuario = datos.get('carnet')
    password = datos.get('password')

    print(f"DEBUG: Intento de login recibido - Carnet: {usuario}")

    # --- AQUÍ IRÁ EL CÓDIGO DE WEB SCRAPING MÁS ADELANTE ---
    # Por ahora, simulamos una respuesta exitosa
    if usuario == "221085": # Puedes poner tu carnet real aquí para probar
        return jsonify({
            "success": True, 
            "message": "Conexión exitosa",
            "datos": {
                "nombre": "Estudiante de Ingeniería",
                "universidad": "UdeM"
            }
        })
    else:
        return jsonify({"success": False, "message": "Carnet no reconocido"})

if __name__ == '__main__':
    # Iniciamos el servidor en el puerto 5000
    app.run(debug=True, port=5000)