from superhero_app import app
from flask import render_template, request, jsonify
import os
import requests




@app.route("/")
def landing_page():
    return render_template("index.html")

@app.route("/buscarhero", methods=['POST'])
def buscarhero():
    print(request.form, "QUIERO SABER QUE ENVIA MI FORMULARIO DE BUSQUEDA")
    print(os.environ.get("TOKEN_SUPERHEROE"))
    token = os.environ.get("TOKEN_SUPERHEROE")
    url = f"https://superheroapi.com/api/{token}/search/{request.form['criterio_busqueda']}"
    print(url)
    respuesta = requests.get(url)
    print(respuesta, "COMO SE VE LA RESPUESTA")
    print(respuesta.json(), "COMO SE VE EL STATUS CODE EN JSON")
    
    return jsonify(respuesta.json()) 