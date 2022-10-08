/*
Materiales(Clave, Descripción, Precio, Impuesto)
Proveedores(RFC, RazonSocial)
Proyectos(Numero, Denominacion)
Entregan(Clave, RFC, Numero, Fecha, Cantidad)
*/
-- Consulta 1

select SUM(Cantidad) as 'Total de Unidades', SUM(Precio+Impuesto) as 'Total costo'
from materiales m, entregan e
where m.clave = e.clave and fecha between '1997/01/01' and '1997/12/31'

/*
Materiales(Clave, Descripción, Precio, Impuesto)
Proveedores(RFC, RazonSocial)
Proyectos(Numero, Denominacion)
Entregan(Clave, RFC, Numero, Fecha, Cantidad)
*/

-- Consulta 2

select RazonSocial, count(e.numero) as 'Numero de entregas', sum(Precio+Impuesto) as 'Total Costos'
from entregan e, proveedores pr, materiales m, proyectos pro
where e.clave = m.clave and e.numero = pro.numero and pr.rfc = e.rfc
group by razonsocial

-- Consulta 3

/*
Materiales(Clave, Descripción, Precio, Impuesto)
Proveedores(RFC, RazonSocial)
Proyectos(Numero, Denominacion)
Entregan(Clave, RFC, Numero, Fecha, Cantidad)
*/

select m.clave, descripcion, sum(cantidad) as 'Total Entregado', min(cantidad) as 'Minima Entrega', max(cantidad) as 'Maxima Entrega', sum(Cantidad*(Precio+Impuesto)) as 'Precio Total'
from entregan e, materiales m
where e.clave = m.clave
group by m.clave, descripcion
HAVING avg(cantidad) > 400

-- Consulta 4

/*
Materiales(Clave, Descripción, Precio, Impuesto)
Proveedores(RFC, RazonSocial)
Proyectos(Numero, Denominacion)
Entregan(Clave, RFC, Numero, Fecha, Cantidad)
*/

select RazonSocial, avg(cantidad), e.clave, descripcion
from entregan e, proveedores pr, materiales m
where e.clave = m.clave and pr.rfc = e.rfc
group by razonsocial
having avg(cantidad) < 500

-- Consulta 5

/*
Materiales(Clave, Descripción, Precio, Impuesto)
Proveedores(RFC, RazonSocial)
Proyectos(Numero, Denominacion)
Entregan(Clave, RFC, Numero, Fecha, Cantidad)
*/

(select RazonSocial, avg(cantidad), e.clave, descripcion
from entregan e, proveedores pr, materiales m
where e.clave = m.clave and pr.rfc = e.rfc
group by razonsocial
having avg(cantidad) > 500)
union
(select RazonSocial, avg(cantidad), e.clave, descripcion
from entregan e, proveedores pr, materiales m
where e.clave = m.clave and pr.rfc = e.rfc
group by razonsocial
having avg(cantidad) < 350)



-- Insert de 5 elementos
INSERT INTO `materiales`(`clave`, `descripcion`, `precio`, `impuesto`) VALUES
(1069, 'Varilla alfa', 100, 10),
(1422, 'Varilla beta', 115, 11.5),
(1337, 'Varilla tehtea', 130, 13),
(4204, 'Varilla prime', 145, 14.5)

-- Consulta 6

/*
Materiales(Clave, Descripción, Precio, Impuesto)
Proveedores(RFC, RazonSocial)
Proyectos(Numero, Denominacion)
Entregan(Clave, RFC, Numero, Fecha, Cantidad)
*/

select clave, descripcion
from materiales
except
(select DISTINCT m.clave, descripcion from entregan e, materiales m
 where m.clave = e.clave)

-- Consulta 7
/*
Materiales(Clave, Descripción, Precio, Impuesto)
Proveedores(RFC, RazonSocial)
Proyectos(Numero, Denominacion)
Entregan(Clave, RFC, Numero, Fecha, Cantidad)
*/

(select distinct razonsocial
from proveedores pro, entregan e, proyectos pr
where e.rfc = pro.rfc and e.numero and pr.numero and pr.denominacion = 'Queretaro Limpio')
intersect
(select distinct razonsocial
from proveedores pro, entregan e, proyectos pr
where e.rfc = pro.rfc and e.numero and pr.numero and pr.denominacion = 'Vamos Mexico')

-- Consulta 8
/*
Materiales(Clave, Descripción, Precio, Impuesto)
Proveedores(RFC, RazonSocial)
Proyectos(Numero, Denominacion)
Entregan(Clave, RFC, Numero, Fecha, Cantidad)
*/

select descripcion FROM
materiales 
except
(select m.clave FROM
materiales m, proyectos pr, entregan e
where m.clave = e.clave and pr.numero = e.numero and pr.denominacion = 'CIT Yucatan')

-- Consulta 9

/*
Materiales(Clave, Descripción, Precio, Impuesto)
Proveedores(RFC, RazonSocial)
Proyectos(Numero, Denominacion)
Entregan(Clave, RFC, Numero, Fecha, Cantidad)
*/

select razonsocial, avg(cantidad) as 'Promedio Entregas' from
entregan e, proveedores pro
where e.rfc = pro.rfc 
group by razonsocial
having avg(cantidad) > 
(select avg(cantidad) as 'Promedio'  FROM
entregan e, proveedores pro
where e.rfc = pro.rfc and e.rfc = 'VAGO780901')

-- Consulta 10

/*
Materiales(Clave, Descripción, Precio, Impuesto)
Proveedores(RFC, RazonSocial)
Proyectos(Numero, Denominacion)
Entregan(Clave, RFC, Numero, Fecha, Cantidad)
*/

-- Esta demasiado loca esta consulta pero funciona. Cuenta con las cantidades TOTALES

select c.razonsocial, c.rfc from (
select a.razonsocial, a.rfc, Cantidad2000, Cantidad2001
from (select razonsocial, e.rfc, sum(cantidad) as 'Cantidad2000', pro.denominacion FROM
entregan e, proyectos pro, proveedores pr
where e.rfc = pr.rfc and pro.numero = e.numero and fecha between '2000/01/01' and '2000/12/31'
group by e.rfc) a, 

(select razonsocial, e.rfc, sum(cantidad) as 'Cantidad2001', pro.denominacion FROM entregan e, proyectos pro, proveedores pr
where e.rfc = pr.rfc and pro.numero = e.numero and fecha between '2001/01/01' and '2001/12/31'
group by e.rfc) b

where a.razonsocial = b.razonsocial and (a.denominacion = 'Infonavit Durango' or b.denominacion = 'Infonavit Durango')
group by razonsocial
having a.Cantidad2000 > b.Cantidad2001) busc, proveedores c
where busc.rfc = c.rfc

-- La que hizo el profe 

select p.rfc, razonsocial, sum(cantidad) as 'Total'
from entregan e, proveedores p, proyectos prwhere e.rfc = p.rfc and pr.numero = e.numero
and pr.denominacion = 'Infonavit Durango'
and fecha between '2001/01/01' and '2001/12/31'
group by p.rfc, razonsocial
having sum(cantidad) > (select sum(cantidad)
                        from entregan e, proveedores p, proyectos pr
                        where e.rfc = p.rfc and pr.numero = e.numero
                        and pr.denominacion = 'Infonavit Durango'
                        and fecha between '2000/01/01' and '2000/12/31')
