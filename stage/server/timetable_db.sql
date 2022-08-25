CREATE DATABASE `timetable_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `timetable_db`;

CREATE TABLE `admin` (
  `nom` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`nom`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT INTO `admin` VALUES("admin","admin");

CREATE TABLE `jours` (
  `jour` varchar(45) NOT NULL,
  PRIMARY KEY (`jour`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT INTO `jours` VALUES("Lundi"),("mardi"),("mercredi"),("jeudi"),("vendredi"),("samedi");

CREATE TABLE `annees` (
  `id` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `profs` (
  `matricule` varchar(45) NOT NULL,
  `nom` varchar(45) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`matricule`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `emploi_profs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_prof` varchar(45) NOT NULL,
  `id_jour` varchar(45) NOT NULL,
  `seance1` varchar(45) DEFAULT NULL,
  `seance2` varchar(45) DEFAULT NULL,
  `seance3` varchar(45) DEFAULT NULL,
  `seance4` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idprof_idx` (`id_prof`),
  KEY `idjour_idx` (`id_jour`),
  CONSTRAINT `idjour` FOREIGN KEY (`id_jour`) REFERENCES `jours` (`jour`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `idprof` FOREIGN KEY (`id_prof`) REFERENCES `profs` (`matricule`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `filieres` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) DEFAULT NULL,
  `nmbr_niveaux` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `niveaux` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_filiere` int(11) NOT NULL,
  `ordonnancement` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idfiliere_idx` (`id_filiere`),
  CONSTRAINT `idfiliere` FOREIGN KEY (`id_filiere`) REFERENCES `filieres` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `modules` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_niveau` int(11) NOT NULL,
  `id_prof` varchar(45) DEFAULT NULL,
  `semestre` int(11) DEFAULT NULL,
  `nom` varchar(45) DEFAULT NULL,
  `nmbr_ss_modules` int(11) DEFAULT NULL,
  `nmbr_semaines` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idniveau_idx` (`id_niveau`),
  KEY `idprof_idx` (`id_prof`),
  CONSTRAINT `idniveau` FOREIGN KEY (`id_niveau`) REFERENCES `niveaux` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `idproff` FOREIGN KEY (`id_prof`) REFERENCES `profs` (`matricule`) ON DELETE SET NULL ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `ss_modules` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_module` int(11) NOT NULL,
  `id_prof` varchar(45) DEFAULT NULL,
  `nom` varchar(45) DEFAULT NULL,
  `nmbr_semaines` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idmodule_idx` (`id_module`),
  KEY `idprofff_idx` (`id_prof`),
  CONSTRAINT `idmodule` FOREIGN KEY (`id_module`) REFERENCES `modules` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `idprofff` FOREIGN KEY (`id_prof`) REFERENCES `profs` (`matricule`) ON DELETE SET NULL ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `seances` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_prof` varchar(45) DEFAULT NULL,
  `id_ss_module` int(11) DEFAULT NULL,
  `id_module` int(11) DEFAULT NULL,
  `nom_filiere` varchar(45) DEFAULT NULL,
  `niveau` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `prof_idx` (`id_prof`),
  KEY `ss_module_idx` (`id_ss_module`),
  KEY `module_idx` (`id_module`),
  CONSTRAINT `module` FOREIGN KEY (`id_module`) REFERENCES `modules` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `prof` FOREIGN KEY (`id_prof`) REFERENCES `profs` (`matricule`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `ssmodule` FOREIGN KEY (`id_ss_module`) REFERENCES `ss_modules` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `emploi_niveaux` (
  `id` int(11) NOT NULL,
  `id_niveau` int(11) NOT NULL,
  `id_jour` varchar(45) NOT NULL,
  `seance1` varchar(45) DEFAULT NULL,
  `seance2` varchar(45) DEFAULT NULL,
  `seance3` varchar(45) DEFAULT NULL,
  `seance4` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `niv_idx` (`id_niveau`),
  KEY `jour_idx` (`id_jour`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/* */


