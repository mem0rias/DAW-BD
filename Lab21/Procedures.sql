DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `AsignarProp`(IN `U_IdUsuario` INT, IN `U_IdPropiedad` INT, IN `U_FechaAsig` DATE, IN `U_IdRol` INT)
Insert into asignacion values(U_IdUsuario, U_IdPropiedad, U_FechaAsig, U_IdRol)$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `BorrarUsuario`(IN `U_IdUsuario` INT)
delete from usuario where IdUsuario = U_IdUsuario$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `CerrarTramite`(IN `U_IdPropiedad` INT)
update cliente_pc_prop set estatus = 1 where IdPropiedad = U_IdPropiedad$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Borrar_Propiedad`(IN `U_IdPropiedad` INT(11))
delete from propiedades
where IdPropiedad = U_IdPropiedad$$
DELIMITER ;