--Listar todos los artistas por Discográfica, ordenados por el nombre del artista
SELECT a.nombre AS artista, d.nombre AS discografica
FROM discografica d
JOIN artista a ON d.id = a.discografica_id
ORDER BY a.nombre;

--Qué Discográfica NO tiene artistas?
SELECT d.nombre
FROM discografica d
left JOIN artista a ON d.id = a.discografica_id
WHERE a.id IS NULL

--Listar el número de canciones por artista en orden descendente
SELECT a.nombre AS artista, COUNT(c.id) AS Cantidad
FROM artista a
 JOIN album al ON a.id = al.artista_id
 JOIN canciones c ON al.id = c.album_id
GROUP BY a.nombre
ORDER BY CANTIDAD DESC

--Qué artista grabó el mayor número de canciones?
SELECT TOP 1 a.nombre AS artista, COUNT(c.id) AS Cantidad
FROM artista a
 JOIN album al ON a.id = al.artista_id
 JOIN canciones c ON al.id = c.album_id
GROUP BY a.nombre
ORDER BY CANTIDAD DESC


-- Por cada artista y cada álbum, ¿cuántas canciones tienen menos de 5 minutos de duración?
SELECT a.nombre, al.nombre, COUNT(c.id) as cantidad
FROM artista a
JOIN album al ON a.id = al.artista_id
JOIN canciones c ON al.id = c.album_id
WHERE c.duracion < 5
GROUP BY A.nombre, al.nombre
ORDER BY A.nombre

--6
-- En relación con la consulta anterior, muestra también las canciones y su duración

SELECT a.nombre, al.nombre, c.nombre, c.duracion
FROM artista a
JOIN album al ON a.id = al.artista_id
JOIN canciones c ON al.id = c.album_id
WHERE c.duracion < 5
GROUP BY A.nombre, al.nombre, c.nombre, c.duracion
ORDER BY A.nombre

--7
--¿Qué artistas grabaron canciones más largas que 5 minutos, y cuántas canciones fueron?
SELECT a.nombre AS artista, COUNT(c.id) AS numero_canciones_mas_largas
FROM artista a
JOIN album al ON a.id = al.artista_id
JOIN canciones c ON al.id = c.album_id AND c.duracion > 5
GROUP BY a.id, a.nombre
HAVING COUNT(c.id) > 0;


--8
-- En que año se grabaron la mayoría de las canciones?
SELECT TOP 1 anio, COUNT(c.id) AS numero_canciones
FROM album a
JOIN canciones c ON a.id = c.album_id
GROUP BY anio
ORDER BY numero_canciones DESC



--9
-- Mostrar el ranking de los 5 artistas, album, canción y año con las canciones más largas
select top 5 a.nombre, al.nombre, c.nombre, al.anio, c.duracion
from artista a
JOIN album al ON a.id = al.artista_id
JOIN canciones c ON al.id = c.album_id
order by c.duracion desc

--10
--Duración total de todas las canciones grabadas por cada artista en orden descendente
select a.nombre, ROUND(sum(c.duracion), 2) As Duracion
from artista a
JOIN album al ON a.id = al.artista_id
JOIN canciones c ON al.id = c.album_id
group by a.id, a.nombre
ORDER BY Duracion DESC

--11
--Qué artistas y álbum no tienen canciones de menos de 5 minutos

select a.nombre, al.nombre
FROM artista a
JOIN album al ON a.id = al.artista_id
JOIN canciones c ON al.id = c.album_id
--WHERE c.duracion <5
WHERE al.id NOT IN (
    SELECT album_id FROM canciones WHERE duracion < 5)
group by a.nombre, al.nombre


--12
--Mostrar el top 3 de artistas con el promedio de duración de las canciones, en orden descendente con la canción más larga primero
SELECT top 3 a.nombre, round(avg(c.duracion),2) AS promedio
FROM artista a
JOIN album al ON a.id = al.artista_id
JOIN canciones c ON al.id = c.album_id
GROUP BY a.nombre
ORDER BY promedio DESC

--13 
-- Qué artistas no lanzaron un album durante la decada de 1980 y 1990? 

SELECT artista.nombre as artista
FROM artista
LEFT JOIN album ON album.artista_id = artista.id AND album.anio BETWEEN 1980 AND 1989
WHERE album.anio IS NULL

--14 
-- Duración total del album Sgt. Pepper's de los Beatles (mostrar en minutos y segundos)

SELECT 
    album.nombre, 
    CAST(SUM(canciones.duracion) AS INT) AS 'Minutos',
	(SUM(canciones.duracion) - CAST(SUM(canciones.duracion) AS INT))*60 AS Seconds
FROM album
INNER JOIN canciones ON canciones.album_id = album.id
INNER JOIN artista ON artista.id = album.artista_id
WHERE album.id = 13
GROUP BY album.nombre;