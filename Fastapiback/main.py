from fastapi import FastAPI, HTTPException
from fastapi.exceptions import HTTPException
from Modelos.modelos import Ejemplo,Item
from sqlalchemy import create_engine,text
from sqlalchemy.engine import ResultProxy
from typing import Dict
from sqlalchemy.orm import sessionmaker

# Crea una instancia de la aplicación FastAPI
app = FastAPI()

#base de datos
#des mutea para ejecutarlo en localhost
#DATABASE_URL = 'mysql+pymysql://alfajor:alfajor@localhost/inventario'

#vercion que funciona con docker
DATABASE_URL = 'mysql+pymysql://alfajor:alfajor@mysql/inventario'


engine = create_engine(DATABASE_URL)
Session = sessionmaker(bind=engine)

#aux base de datos
def execute_query(query: str, params: Dict[str, int]) -> ResultProxy:
    with engine.connect() as conn:
        result = conn.execute(text(query), params)
        print(result)
    return result

@app.get("/")
def RutaPorDefecto():
    return {"mensaje": "Hola, si quieres ver las rutas ve a /docs"}

@app.post("/ejemploxd/")
async def rutarandom(user: Ejemplo):
    # Código para crear un usuario
    return {"message": f"Usuario {user.username} creado exitosamente"}

#ejemplo get
@app.get("/ayudantes/resolucion/{item_id}/")
def BuscarEnDB(item_id: int):
    query = "SELECT columna1,columna2 FROM prueba WHERE columna2 = :item_id"
    result = execute_query(query, {"item_id": item_id})
    items = result.fetchall()
    if not items:
        raise HTTPException(status_code=404, detail="No items found for this ID")
    
    items_list = []
    for item in items:
        item_dict = {
            "columna1": item[0],
            "columna2": item[1],
        }
        items_list.append(item_dict)
    
    return items_list

#crear nuevo item
@app.post("/ejemplo/")
def CrearEnDB(item: Item):
    query = text("INSERT INTO prueba (columna1, columna2, columna3, columna4) VALUES (:columna1, :columna2, :columna3, :columna4)")
    with Session.begin() as session:
        session.execute(query, {"columna1": item.columna1, "columna2": item.columna2, "columna3": item.columna3, "columna4": item.columna4})
    return {"message": "Item created successfully"}

# Actualizar un item existente
@app.put("/ejemplo/{item_id}/")
def ActualizarEnDB(item_id: int, item: Item):
    #el id antes era la columna1 pero esto quedo asi sin arreglar xd
    query = text("UPDATE prueba SET columna1 = :columna1, columna2 = :columna2 WHERE columna1 = :item_id")
    with Session.begin() as session:
        session.execute(query, {"item_id": item_id, "columna1": item.columna1, "columna2": item.columna2})
    return {"item_id": item_id, **item.dict()}

# Borrar un item existente
@app.delete("/ejemplo/{item_id}/")
def BorrarEnDB(item_id: int):
    query = text("DELETE FROM prueba WHERE columna1 = :item_id")
    with Session.begin() as session:
        session.execute(query, {"item_id": item_id})
    return {"message": "Item deleted successfully"}

