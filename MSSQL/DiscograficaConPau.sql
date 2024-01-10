--Listar todos los artistas por Discogr�fica, ordenados por el nombre del artista
SELECT a.nombre AS artista, d.nombre AS discografica
FROM discografica d
JOIN artista a ON d.id = a.discografica_id
ORDER BY a.nombre;

--Qu� Discogr�fica NO tiene artistas?
SELECT d.nombre
FROM discografica d
left JOIN artista a ON d.id = a.discografica_id
WHERE a.id IS NULL

--Listar el n�mero de canciones por artista en orden descendente
SELECT a.nombre AS artista, COUNT(c.id) AS Cantidad
FROM artista a
 JOIN album al ON a.id = al.artista_id
 JOIN canciones c ON al.id = c.album_id
GROUP BY a.nombre
ORDER BY CANTIDAD DESC

--Qu� artista grab� el mayor n�mero de canciones?
SELECT TOP 1 a.nombre AS artista, COUNT(c.id) AS Cantidad
FROM artista a
 JOIN album al ON a.id = al.artista_id
 JOIN canciones c ON al.id = c.album_id
GROUP BY a.nombre
ORDER BY CANTIDAD DESC


-- Por cada artista y cada �lbum, �cu�ntas canciones tienen menos de 5 minutos de duraci�n?
SELECT a.nombre, al.nombre, COUNT(c.id) as cantidad
FROM artista a
JOIN album al ON a.id = al.artista_id
JOIN canciones c ON al.id = c.album_id
WHERE c.duracion < 5
GROUP BY A.nombre, al.nombre
ORDER BY A.nombre

--6
-- En relaci�n con la consulta anterior, muestra tambi�n las canciones y su duraci�n

SELECT a.nombre, al.nombre, c.nombre, c.duracion
FROM artista a
JOIN album al ON a.id = al.artista_id
JOIN canciones c ON al.id = c.album_id
WHERE c.duracion < 5
GROUP BY A.nombre, al.nombre, c.nombre, c.duracion
ORDER BY A.nombre

--7
--�Qu� artistas grabaron canciones m�s largas que 5 minutos, y cu�ntas canciones fueron?
SELECT a.nombre AS artista, COUNT(c.id) AS numero_canciones_mas_largas
FROM artista a
JOIN album al ON a.id = al.artista_id
JOIN canciones c ON al.id = c.album_id AND c.duracion > 5
GROUP BY a.id, a.nombre
HAVING COUNT(c.id) > 0;


--8
-- En que a�o se grabaron la mayor�a de las canciones?
SELECT TOP 1 anio, COUNT(c.id) AS numero_canciones
FROM album a
JOIN canciones c ON a.id = c.album_id
GROUP BY anio
ORDER BY numero_canciones DESC



--9
-- Mostrar el ranking de los 5 artistas, album, canci�n y a�o con las canciones m�s largas
select top 5 a.nombre, al.nombre, c.nombre, al.anio, c.duracion
from artista a
JOIN album al ON a.id = al.artista_id
JOIN canciones c ON al.id = c.album_id
order by c.duracion desc

--10
--Duraci�n total de todas las canciones grabadas por cada artista en orden descendente
select a.nombre, ROUND(sum(c.duracion), 2) As Duracion
from artista a
JOIN album al ON a.id = al.artista_id
JOIN canciones c ON al.id = c.album_id
group by a.id, a.nombre
ORDER BY Duracion DESC

--11
--Qu� artistas y �lbum no tienen canciones de menos de 5 minutos

select a.nombre, al.nombre
FROM artista a
JOIN album al ON a.id = al.artista_id
JOIN canciones c ON al.id = c.album_id
--WHERE c.duracion <5
WHERE al.id NOT IN (
    SELECT album_id FROM canciones WHERE duracion < 5)
group by a.nombre, al.nombre


--12
--Mostrar el top 3 de artistas con el promedio de duraci�n de las canciones, en orden descendente con la canci�n m�s larga primero
SELECT top 3 a.nombre, round(avg(c.duracion),2) AS promedio
FROM artista a
JOIN album al ON a.id = al.artista_id
JOIN canciones c ON al.id = c.album_id
GROUP BY a.nombre
ORDER BY promedio DESC

--13 
-- Qu� artistas no lanzaron un album durante la decada de 1980 y 1990? 

SELECT artista.nombre as artista
FROM artista
LEFT JOIN album ON album.artista_id = artista.id AND album.anio BETWEEN 1980 AND 1989
WHERE album.anio IS NULL

--14 
-- Duraci�n total del album Sgt. Pepper's de los Beatles (mostrar en minutos y segundos)

SELECT 
    album.nombre, 
    CAST(SUM(canciones.duracion) AS INT) AS 'Minutos',
	(SUM(canciones.duracion) - CAST(SUM(canciones.duracion) AS INT))*60 AS Seconds
FROM album
INNER JOIN canciones ON canciones.album_id = album.id
INNER JOIN artista ON artista.id = album.artista_id
WHERE album.id = 13
GROUP BY album.nombre;