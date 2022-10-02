-- 2) tipo 1
select nombre from pelicula p, elenco e 
where p.titulo = e.titulo and idproductor = 'mgm' and año = '1995'

-- tipo 2

select nombre from elenco
where titulo IN (select titulo from pelcula where nomestudio = 'mgm' and año = '1995')

-- 3) tipo 1

-- De otra forma, llamen a dios

select titulo from pelicula
where duracion IN (select titulo from pelicula
where duracion > (select duracion from pelicula where titulo = "Lo que el viento se llevo"))
-- Subconsulta
select titulo from pelicula
where duracion > (select duracion from pelicula where titulo = "Lo que el viento se llevo")

-- 4) tipo 1

-- Directish
select nombre from productor
group by nombre
having COUNT(*) > (select count(idproductor) from pelicula a, productor b where a.idproductor = b.idproductor and nombre = 'George Lucas' )


-- subconsulta
select nombre from productor
group by nombre
having COUNT(idproductor) > (select count(idproductor) from pelicula a, productor b where a.idproductor = b.idproductor and nombre = 'George Lucas' )

-- 5) tipo 1


-- Directishhhh

select prod.nombre from pelicula p, productor prod, elenco a
where p.idproductor = prod.idproductor and p.titulo = a.titulo and a.nombre = 'Sharon Stone'

-- Subconsult

select nombre from productor
where idproductor = (select idproductor from pelicula where titulo = (select titulo from elenco where nombre = 'Sharon Stone') )

-- 6) tipo 1

-- Directo, sera este el fin del hombre que araña?

select titulo from pelicula
group by titulo
having count(titulo) > 1

-- Subconsultas

select titulo from pelicula
where titulo IN (select titulo from pelcula where count(titulo) > 1)

