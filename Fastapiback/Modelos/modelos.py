#aqui van todos los json que se resiven
from pydantic import BaseModel

class Ejemplo(BaseModel):
    username: str
    email: str
    age: int


class Item(BaseModel):
    columna1: int
    columna2: int
    columna3: int
    columna4: int

