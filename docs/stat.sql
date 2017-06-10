-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2017-06-10 19:38:00
-- 服务器版本： 5.7.17-0ubuntu0.16.04.1
-- PHP Version: 5.6.30-7+deb.sury.org~xenial+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stat`
--

-- --------------------------------------------------------

--
-- 表的结构 `log`
--

CREATE TABLE `log` (
  `id` int(11) NOT NULL COMMENT 'log id',
  `ip` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '访问者的ip',
  `log_text` text CHARACTER SET utf8 NOT NULL COMMENT '日志内容',
  `time` datetime NOT NULL COMMENT '日志记录时间'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `log`
--

INSERT INTO `log` (`id`, `ip`, `log_text`, `time`) VALUES
(1, '172.16.35.146', '::ffff:172.16.36.81 click id=8 name=海上钢琴声 at 2017-06-05 23:50:15', '2017-06-01 00:00:00'),
(2, '172.16.36.81', '::ffff:172.16.36.81 click 2 加勒比海盗 2017-06-05 23:45:41', '2017-06-02 00:00:00'),
(3, '172.16.36.81', '::ffff:172.16.36.81 click id=8 name=海上钢琴声 at 2017-06-05 23:50:15', '2017-06-01 06:18:22'),
(4, '172.16.36.81', '::ffff:172.16.36.81 click id=8 name=海上钢琴声 at 2017-06-05 23:50:15', '2017-06-01 10:25:31'),
(5, '172.16.36.16', '::ffff:172.16.36.81 click id=8 name=海上钢琴声 at 2017-06-05 23:50:15', '2017-06-01 08:25:20'),
(6, '172.16.36.16', '::ffff:172.16.36.81 click id=8 name=海上钢琴声 at 2017-06-05 23:50:15', '2017-06-02 08:20:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `log`
--
ALTER TABLE `log`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `log`
--
ALTER TABLE `log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'log id', AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
