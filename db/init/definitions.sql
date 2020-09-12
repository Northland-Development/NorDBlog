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