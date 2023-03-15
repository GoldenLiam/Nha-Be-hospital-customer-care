SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Cơ sở dữ liệu: `nhabehospitalcustomercaredatabase`
--

CREATE DATABASE IF NOT EXISTS `nhabehospitalcustomercaredatabase` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `nhabehospitalcustomercaredatabase`;


CREATE TABLE `Account`(
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `email` VARCHAR(256) NOT NULL UNIQUE,
	`password` VARCHAR(24) NOT NULL,
    `phone` VARCHAR(10) NOT NULL UNIQUE,
    `fullname` VARCHAR(128) NOT NULL,
    `role` VARCHAR(10) NOT NULL,
    `gender` VARCHAR(10) NOT NULL,
    `birthday` DATE NOT NULL,
    `address` VARCHAR(512) DEFAULT NULL,
    `avatar` VARCHAR(512) NOT NULL DEFAULT 'avatar-default.png',
    `joinDate` DATETIME DEFAULT NOW()
);

INSERT INTO `Account` (`email`, `password`, `phone`, `fullname`, `role`, `gender`, `birthday`, `address`) VALUES
('admin@gmail.com', '123456789', '0968472914', 'Quản trị viên', 'Admin', 'Male', '2000-10-24', 'Quận 7'),
('luuquangthang2k@gmail.com', '123456789', '0823456789', 'Lưu Quang Thắng', 'Customer', 'Male', '2000-10-24', 'Quận 7');

