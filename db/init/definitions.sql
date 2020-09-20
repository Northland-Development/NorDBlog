-- CREATE SCHEMA IF NOT EXISTS `nordblog` DEFAULT CHARACTER SET utf8;

CREATE TABLE IF NOT EXISTS `nordblog`.`user` (
  `display_name` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(32) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`));

CREATE TABLE IF NOT EXISTS `nordblog`.`blog` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(500) NOT NULL,
  `user_id` INT NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL,
  `deleted_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `nordblog`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);

INSERT INTO `nordblog`.`user` (`display_name`, `email`, `password`) VALUES ('brandon', 'brandon@example.com', 'password');
INSERT INTO `nordblog`.`user` (`display_name`, `email`, `password`) VALUES ('adam', 'adam@example.com', 'password');
INSERT INTO `nordblog`.`user` (`display_name`, `email`, `password`) VALUES ('lexi', 'lexi@example.com', 'password');
INSERT INTO `nordblog`.`user` (`display_name`, `email`, `password`) VALUES ('tammie', 'tammie@example.com', 'password');
INSERT INTO `nordblog`.`user` (`display_name`, `email`, `password`) VALUES ('guy', 'guy@example.com', 'password');
INSERT INTO `nordblog`.`user` (`display_name`, `email`, `password`) VALUES ('shawn', 'shawn@example.com', 'password');
INSERT INTO `nordblog`.`user` (`display_name`, `email`, `password`) VALUES ('amanda', 'amanda@example.com', 'password');

INSERT INTO `nordblog`.`blog` (`text`, `user_id`) VALUES ('1 Lorem ipsum dolor sit amet, fugit conceptam forensibus an eos, ex pri noster maluisset definiebas, paulo scripta nonumes ius ex. In duo eros harum, te eam ullum intellegat. Facete dolorem id ius, ex consulatu tincidunt pri. Insolens postulant est ea.', '1');
INSERT INTO `nordblog`.`blog` (`text`, `user_id`) VALUES ('2 Lorem ipsum dolor sit amet, fugit conceptam forensibus an eos, ex pri noster maluisset definiebas, paulo scripta nonumes ius ex. In duo eros harum, te eam ullum intellegat. Facete dolorem id ius, ex consulatu tincidunt pri. Insolens postulant est ea.', '1');
INSERT INTO `nordblog`.`blog` (`text`, `user_id`) VALUES ('3 Lorem ipsum dolor sit amet, fugit conceptam forensibus an eos, ex pri noster maluisset definiebas, paulo scripta nonumes ius ex. In duo eros harum, te eam ullum intellegat. Facete dolorem id ius, ex consulatu tincidunt pri. Insolens postulant est ea.', '2');
INSERT INTO `nordblog`.`blog` (`text`, `user_id`) VALUES ('4 Lorem ipsum dolor sit amet, fugit conceptam forensibus an eos, ex pri noster maluisset definiebas, paulo scripta nonumes ius ex. In duo eros harum, te eam ullum intellegat. Facete dolorem id ius, ex consulatu tincidunt pri. Insolens postulant est ea.', '2');
INSERT INTO `nordblog`.`blog` (`text`, `user_id`) VALUES ('5 Lorem ipsum dolor sit amet, fugit conceptam forensibus an eos, ex pri noster maluisset definiebas, paulo scripta nonumes ius ex. In duo eros harum, te eam ullum intellegat. Facete dolorem id ius, ex consulatu tincidunt pri. Insolens postulant est ea.', '3');
INSERT INTO `nordblog`.`blog` (`text`, `user_id`) VALUES ('6 Lorem ipsum dolor sit amet, fugit conceptam forensibus an eos, ex pri noster maluisset definiebas, paulo scripta nonumes ius ex. In duo eros harum, te eam ullum intellegat. Facete dolorem id ius, ex consulatu tincidunt pri. Insolens postulant est ea.', '3');
INSERT INTO `nordblog`.`blog` (`text`, `user_id`) VALUES ('7 Lorem ipsum dolor sit amet, fugit conceptam forensibus an eos, ex pri noster maluisset definiebas, paulo scripta nonumes ius ex. In duo eros harum, te eam ullum intellegat. Facete dolorem id ius, ex consulatu tincidunt pri. Insolens postulant est ea.', '4');


-- CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` 
-- SQL SECURITY DEFINER VIEW `blog_user` AS 
-- select 
--   `blog`.`id` AS `id`
--   ,`blog`.`text` AS `text`
--   ,`blog`.`user_id` AS `user_id`
--   ,`blog`.`created_at` AS `created_at`
--   ,`blog`.`updated_at` AS `updated_at`
--   ,`blog`.`deleted_at` AS `deleted_at`
--   ,`user`.`display_name` AS `display_name` 
-- from (
--   `blog` 
--   left join `user` on((`user`.`id` = `blog`.`user_id`))
-- )