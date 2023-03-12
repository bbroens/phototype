-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Server version: 8.0.32
-- PHP Version: 8.1.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phototype`
--

CREATE DATABASE IF NOT EXISTS `phototype`;
USE `phototype`;

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `comment_id` int NOT NULL,
  `post_id` int NOT NULL,
  `user_id` int NOT NULL,
  `created_at` datetime NOT NULL,
  `text` varchar(511) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `like_id` int NOT NULL,
  `user_id` int NOT NULL,
  `post_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `post_id` int NOT NULL,
  `user_id` int NOT NULL,
  `created_at` datetime NOT NULL,
  `text` varchar(511) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`post_id`, `user_id`, `created_at`, `text`, `img`) VALUES
(1, 1, '2023-03-10 21:21:09', 'Powered through the summer heat to get these shots. Worth it. 👀', 'i1.jpg, i2.jpg, i3.jpg'),
(2, 5, '2023-03-10 21:04:09', 'Not only is this sunset absolutely amazing, I was lucky enough to get some ducks in the shot. 😎 Ducks, or mallards? I should\'ve asked them...', 'i4.jpg'),
(3, 11, '2023-03-10 20:08:47', 'I might have to revisit this place. It\'s a bit of a drive but there\'s so much potential. Anyone wanna join us next time?', 'i2.jpg'),
(4, 6, '2023-03-10 20:08:47', 'Twelve trips around the sun with my camera, happy to share! 🌞 Creds: Annie helped me with my photo editing. Cheers!', 'i6.jpg, i2.jpg'),
(5, 12, '2023-03-10 20:13:42', 'Today is national photo day, let\'s celebrate! I might have made that up just to post a few shots. ☮️', 'i7.jpg, i1.jpg'),
(6, 8, '2023-03-10 20:13:42', 'Can someone suggest a decent LUT for the footage we recorded? Anything goes!', 'i5.jpg'),
(7, 1, '2023-03-10 20:17:34', 'I had a dream that I was mapped from an array. Felt surreal...', 'i3.jpg'),
(8, 1, '2023-03-10 20:17:34', 'Just a quick update. 🌈', 'i7.jpg, i6.jpg, i4.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int NOT NULL,
  `username` varchar(31) NOT NULL,
  `firstname` varchar(127) NOT NULL,
  `lastname` varchar(127) NOT NULL,
  `handle` varchar(31) NOT NULL,
  `profile_img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `cover_img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `password` varchar(127) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `firstname`, `lastname`, `handle`, `profile_img`, `cover_img`, `password`) VALUES
(1, 'johndoe', 'Jonathan', 'Doe', 'JonathanDoe', 'i4.jpg', 'i2.jpg', '$2a$10$RDwfM8Xtj2Yn5BbKFHHqLuoqwa6UbsNne6poazw61/fcMHhkj3XFO'),
(4, 'hannaseeres', 'Hanna', 'Seeres', 'HannaSeeres', 'i6.jpg', 'i2.jpg', '$2a$10$pGVgBw5X89BoNxwDekirpuKBSNdWD4rywxlQiHmqKAIbIFAK0kEJW'),
(5, 'williammeyer', 'William', 'Meyer', 'WilliamMeyer', 'i3.jpg', 'i1.jpg', '$2a$10$jSmC8TQ7xWvcCidMCFON2eshx75V5mF6p6ip3JHEWvxbDSvDN5hlK'),
(6, 'lucasdofer', 'Lucas', 'Dofer', 'LucasDofer', 'i1.jpg', 'i7.jpg', '$2a$10$wneUdyYrq7NHFyPGWYqeGudjiEMVQ5gr8/eKZZKukudi.8jns4bZ.'),
(7, 'juliannejohansen', 'Julianne', 'Johansen', 'JulianneJohansen', 'i3.jpg', 'i4.jpg', '$2a$10$3uJIi1jiYV8GgjrJ2aUaAOK.9zZmgcGwvL8BCudjL6gTMEJV1mBhG'),
(8, 'karansunnit', 'Karan', 'Sunnit', 'KaranSunnit', 'i2.jpg', 'i6.jpg', '$2a$10$jvp1yGErtdy3NvaFmKU5k.rzsVWMHZ0xFRd/cfoFqk5OqSe1ct2em'),
(9, 'shruthipriya', 'Shruthi', 'Priya', 'ShruthiPriya', 'i5.jpg', 'i2.jpg', '$2a$10$7MkCSGgx4mG0WK5Eeo1g.eP4lyJA9CvprBuIVdVyCHl.YOrBsMgim'),
(10, 'willemjanssen', 'Willem', 'Janssen', 'WillemJanssen', 'i7.jpg', 'i3.jpg', '$2a$10$zaE9TLlk1BuFExLRtLNLYulQBAbr.c/q5jU/mw.UaqrdnGshY1uLK'),
(11, 'simonedjourde', 'Simone', 'Djourde', 'SimoneDjourde', 'i2.jpg', 'i1.jpg', '$2a$10$Mr5j6LSBuuQy7bu6fRDI9OAjH77B0Qmu9UWdc1hkk46IfIboQsPp6'),
(12, 'henridebeuvre', 'Henri', 'Debeuvre', 'HenriDebeuvre', 'i1.jpg', 'i2.jpg', '$2a$10$fVlv.1MUqqV3RmlOwwZPceosRh96QuLzhZeZXTup8NVVIcSqoGReu');

-- --------------------------------------------------------

--
-- Table structure for table `user_relationships`
--

CREATE TABLE `user_relationships` (
  `relationship_id` int NOT NULL,
  `follower_user_id` int NOT NULL,
  `followed_user_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user_relationships`
--

INSERT INTO `user_relationships` (`relationship_id`, `follower_user_id`, `followed_user_id`) VALUES
(1, 1, 4),
(2, 1, 6),
(3, 1, 7),
(4, 1, 10),
(5, 1, 5),
(6, 1, 11),
(7, 1, 8),
(8, 1, 9),
(9, 1, 12);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `comment_post_cascade` (`post_id`),
  ADD KEY `comment_user_cascade` (`user_id`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`like_id`),
  ADD KEY `like_user_cascade` (`user_id`),
  ADD KEY `like_post_cascade` (`post_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `post_user_cascade` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `user_relationships`
--
ALTER TABLE `user_relationships`
  ADD PRIMARY KEY (`relationship_id`),
  ADD KEY `follower_user_cascade` (`follower_user_id`),
  ADD KEY `followed_user_cascade` (`followed_user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `comment_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `like_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `post_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `user_relationships`
--
ALTER TABLE `user_relationships`
  MODIFY `relationship_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comment_post_cascade` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comment_user_cascade` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `like_post_cascade` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `like_user_cascade` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `post_user_cascade` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_relationships`
--
ALTER TABLE `user_relationships`
  ADD CONSTRAINT `followed_user_cascade` FOREIGN KEY (`followed_user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `follower_user_cascade` FOREIGN KEY (`follower_user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
