-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 02, 2022 at 08:08 PM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `timetable_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `nom` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`nom`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`nom`, `password`) VALUES
('admin', '0000');

-- --------------------------------------------------------


--
-- Table structure for table `emploi_niveaux`
--

DROP TABLE IF EXISTS `emploi_niveaux`;
CREATE TABLE IF NOT EXISTS `emploi_niveaux` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_niveau` int(11) NOT NULL,
  `id_jour` varchar(45) NOT NULL,
  `seance1` int(11) DEFAULT NULL,
  `seance2` int(11) DEFAULT NULL,
  `seance3` int(11) DEFAULT NULL,
  `seance4` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `niv_idx` (`id_niveau`),
  KEY `jour_idx` (`id_jour`),
  KEY `ss1_idx` (`seance1`),
  KEY `ss2_idx` (`seance2`),
  KEY `ss3_idx` (`seance3`),
  KEY `ss4_idx` (`seance4`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4;


-- --------------------------------------------------------

--
-- Table structure for table `emploi_profs`
--

DROP TABLE IF EXISTS `emploi_profs`;
CREATE TABLE IF NOT EXISTS `emploi_profs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_prof` varchar(45) NOT NULL,
  `id_jour` varchar(45) NOT NULL,
  `seance1` int(11) DEFAULT NULL,
  `seance2` int(11) DEFAULT NULL,
  `seance3` int(11) DEFAULT NULL,
  `seance4` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idprof_idx` (`id_prof`),
  KEY `idjour_idx` (`id_jour`),
  KEY `s1_idx` (`seance1`),
  KEY `s2_idx` (`seance2`),
  KEY `s3_idx` (`seance3`),
  KEY `s4_idx` (`seance4`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;


-- --------------------------------------------------------

--
-- Table structure for table `filieres`
--

DROP TABLE IF EXISTS `filieres`;
CREATE TABLE IF NOT EXISTS `filieres` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) DEFAULT NULL,
  `nmbr_niveaux` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;



-- --------------------------------------------------------

--
-- Table structure for table `infos`
--

DROP TABLE IF EXISTS `infos`;
CREATE TABLE IF NOT EXISTS `infos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `remplissage_des_emplois` int(11) DEFAULT '0',
  `semestre` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `infos`
--

INSERT INTO `infos` (`id`, `remplissage_des_emplois`, `semestre`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `jours`
--

DROP TABLE IF EXISTS `jours`;
CREATE TABLE IF NOT EXISTS `jours` (
  `jour` varchar(45) NOT NULL,
  PRIMARY KEY (`jour`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jours`
--

INSERT INTO `jours` (`jour`) VALUES
('Jeudi'),
('Lundi'),
('Mardi'),
('Mercredi'),
('Samedi'),
('Vendredi');

-- --------------------------------------------------------

--
-- Table structure for table `modules`
--

DROP TABLE IF EXISTS `modules`;
CREATE TABLE IF NOT EXISTS `modules` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_niveau` int(11) NOT NULL,
  `id_prof` varchar(45) DEFAULT NULL,
  `semestre` int(11) DEFAULT NULL,
  `nom` varchar(45) DEFAULT NULL,
  `nmbr_ss_modules` int(11) DEFAULT NULL,
  `nmbr_semaines` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idniveau_idx` (`id_niveau`),
  KEY `idprof_idx` (`id_prof`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4;


-- --------------------------------------------------------

--
-- Table structure for table `niveaux`
--

DROP TABLE IF EXISTS `niveaux`;
CREATE TABLE IF NOT EXISTS `niveaux` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_filiere` int(11) NOT NULL,
  `ordonnancement` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idfiliere_idx` (`id_filiere`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4;



-- --------------------------------------------------------

--
-- Table structure for table `profs`
--

DROP TABLE IF EXISTS `profs`;
CREATE TABLE IF NOT EXISTS `profs` (
  `matricule` varchar(45) NOT NULL,
  `nom` varchar(45) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`matricule`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- --------------------------------------------------------

--
-- Table structure for table `seances`
--

DROP TABLE IF EXISTS `seances`;
CREATE TABLE IF NOT EXISTS `seances` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_prof` varchar(45) DEFAULT NULL,
  `id_ss_module` int(11) DEFAULT NULL,
  `id_module` int(11) DEFAULT NULL,
  `nom_filiere` varchar(45) DEFAULT NULL,
  `niveau` int(11) DEFAULT NULL,
  `idniveau` int(11) DEFAULT NULL,
  `semestre` int(11) DEFAULT NULL,
  `is_selected` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `prof_idx` (`id_prof`),
  KEY `ss_module_idx` (`id_ss_module`),
  KEY `module_idx` (`id_module`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4;


-- --------------------------------------------------------

--
-- Table structure for table `ss_modules`
--

DROP TABLE IF EXISTS `ss_modules`;
CREATE TABLE IF NOT EXISTS `ss_modules` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_module` int(11) NOT NULL,
  `id_prof` varchar(45) DEFAULT NULL,
  `nom` varchar(45) DEFAULT NULL,
  `nmbr_semaines` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idmodule_idx` (`id_module`),
  KEY `idprofff_idx` (`id_prof`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4;


--
-- Constraints for dumped tables
--

--
-- Constraints for table `emploi_niveaux`
--
ALTER TABLE `emploi_niveaux`
  ADD CONSTRAINT `idjou` FOREIGN KEY (`id_jour`) REFERENCES `jours` (`jour`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `idniv` FOREIGN KEY (`id_niveau`) REFERENCES `niveaux` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `ss1` FOREIGN KEY (`seance1`) REFERENCES `seances` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `ss2` FOREIGN KEY (`seance2`) REFERENCES `seances` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `ss3` FOREIGN KEY (`seance3`) REFERENCES `seances` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `ss4` FOREIGN KEY (`seance4`) REFERENCES `seances` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `emploi_profs`
--
ALTER TABLE `emploi_profs`
  ADD CONSTRAINT `idjour` FOREIGN KEY (`id_jour`) REFERENCES `jours` (`jour`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `idprof` FOREIGN KEY (`id_prof`) REFERENCES `profs` (`matricule`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `s1` FOREIGN KEY (`seance1`) REFERENCES `seances` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION,
  ADD CONSTRAINT `s2` FOREIGN KEY (`seance2`) REFERENCES `seances` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION,
  ADD CONSTRAINT `s3` FOREIGN KEY (`seance3`) REFERENCES `seances` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION,
  ADD CONSTRAINT `s4` FOREIGN KEY (`seance4`) REFERENCES `seances` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

--
-- Constraints for table `modules`
--
ALTER TABLE `modules`
  ADD CONSTRAINT `idniveau` FOREIGN KEY (`id_niveau`) REFERENCES `niveaux` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `idproff` FOREIGN KEY (`id_prof`) REFERENCES `profs` (`matricule`) ON DELETE SET NULL ON UPDATE NO ACTION;

--
-- Constraints for table `niveaux`
--
ALTER TABLE `niveaux`
  ADD CONSTRAINT `idfiliere` FOREIGN KEY (`id_filiere`) REFERENCES `filieres` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `seances`
--
ALTER TABLE `seances`
  ADD CONSTRAINT `module` FOREIGN KEY (`id_module`) REFERENCES `modules` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `prof` FOREIGN KEY (`id_prof`) REFERENCES `profs` (`matricule`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `ssmodule` FOREIGN KEY (`id_ss_module`) REFERENCES `ss_modules` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `ss_modules`
--
ALTER TABLE `ss_modules`
  ADD CONSTRAINT `idmodule` FOREIGN KEY (`id_module`) REFERENCES `modules` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `idprofff` FOREIGN KEY (`id_prof`) REFERENCES `profs` (`matricule`) ON DELETE SET NULL ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
