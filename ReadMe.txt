---------------------------------------------------------------------

proyecto base de:
-Front: React
-Back:  Fastapi
-DB:    Mysql

-extra: docker y phpmyadmin

---------------------------------------------------------------------
-Para ejecutar con docker:

sudo docker-compose up --buid

-Para detener:

sudo docker-compose down

---------------------------------------------------------------------
Para ejecutar sin docker (ideal mientras se programa)

-Base de datos: con docker o usar un servidor mysql online

(Cambiar a la ruta de conexion comentada en la api)

----------------------------------------------------------------------

(tener node instalado)
-front: usar node

npm install

npm run start
(dentro de la carpeta del front)

-----------------------------------------------------------------------


-back: usar python y entorno virtual
(tener python instalado)

-crear entorno virtual
python3 -m venv venv

-entrar al entorno virtual (dentro de la carpeta con el back):

source venv/bin/activate

-(solo porciacaso):

pip install -r requirements.txt

-ejecutar fastapi con uvicorn:

uvicorn main:app --reload

------------------------------------------------------------------------
