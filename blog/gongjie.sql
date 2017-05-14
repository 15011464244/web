/*
Navicat MySQL Data Transfer

Source Server         : gtigy
Source Server Version : 100121
Source Host           : localhost:3306
Source Database       : gongjie

Target Server Type    : MYSQL
Target Server Version : 100121
File Encoding         : 65001

Date: 2017-05-14 21:37:06
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for haha
-- ----------------------------
DROP TABLE IF EXISTS `haha`;
CREATE TABLE `haha` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
SET FOREIGN_KEY_CHECKS=1;
