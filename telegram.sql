-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 28 Feb 2021 pada 03.06
-- Versi server: 10.4.14-MariaDB
-- Versi PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `telegram`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `auth`
--

CREATE TABLE `auth` (
  `user_id` int(11) NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `photo` varchar(200) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `bio` varchar(200) DEFAULT NULL,
  `location` varchar(300) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `status` enum('ON','OFF') NOT NULL DEFAULT 'OFF'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `auth`
--

INSERT INTO `auth` (`user_id`, `username`, `email`, `password`, `photo`, `phone_number`, `bio`, `location`, `created_at`, `updated_at`, `status`) VALUES
(1, 'Alex', 'ilhamhafsyah15@gmail.com', '$2b$10$ogDvyJg5UveTgF1EuHB0Uu3MpmkMNEfPZWkuOZ/YR/yY54D5iw3dG', '2021-01-24T04-05-27.536Z-badminton-logo-lagi.jpg', '0813426654', 'Alhamdulillah', 'Jakarta', '2021-01-23 23:44:12', '2021-01-24 04:05:27', 'OFF'),
(2, 'Ilham Hafsyah', 'ilham@gmail.com', '$2b$10$ATzbBcftgUbK4cgT9IpTzO0YV6TawfZBhjsaVNQyskVNt0za9YXaK', '[object Object]', '0812233434', 'Avalaible', '-6.178306', '2021-01-24 00:33:47', '2021-02-25 13:37:54', 'ON'),
(3, 'John', 'mino@gmail.com', '$2b$10$v0hFOoydEThA8shtd0SiJOrLBnM0qLTnu2lvh81H3SsPmE5UdIbjG', '[object Object]', '08227272723', 'Busy', '', '2021-01-26 01:09:09', '2021-02-24 01:25:18', 'ON'),
(4, 'Ahmad', 'ahmad@gmail.com', '$2b$10$K5fD1Y1DbDE8GlZfmOs8iuOQxGq9aj8hu4c1dRajCbjbffp8RG2q2', '', '', '', '', '2021-01-26 04:55:03', '2021-01-26 11:55:03', 'OFF');

-- --------------------------------------------------------

--
-- Struktur dari tabel `chat`
--

CREATE TABLE `chat` (
  `chat_id` int(20) NOT NULL,
  `id_room` int(10) DEFAULT NULL,
  `message` varchar(500) DEFAULT NULL,
  `sender_id` int(10) DEFAULT NULL,
  `receiver_id` int(10) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `read_status` enum('ON','OFF') NOT NULL DEFAULT 'OFF'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `chat`
--

INSERT INTO `chat` (`chat_id`, `id_room`, `message`, `sender_id`, `receiver_id`, `created_at`, `read_status`) VALUES
(1, 2941, 'hai', 4, 2, '2021-01-26 04:58:33', 'OFF'),
(2, 2941, 'apa', 2, 4, '2021-01-26 04:58:57', 'ON'),
(3, 2941, '', 2, 4, '2021-02-21 02:48:14', 'ON'),
(4, 2941, '', 2, 4, '2021-02-21 02:48:15', 'ON'),
(5, 2941, 'oo', 2, 4, '2021-02-21 05:00:31', 'ON'),
(6, 9017, 'Hello', 2, 3, '2021-02-22 23:15:27', 'ON'),
(7, 9017, 'Hello! What\'s up?', 3, 2, '2021-02-22 23:17:47', 'ON'),
(8, 9017, 'John! How are you? It\'s been a long time since we last met.', 2, 3, '2021-02-22 23:36:36', 'ON'),
(9, 9017, 'Oh, hi Ilham! I have got a new job now and is going great. How about you?', 3, 2, '2021-02-22 23:37:17', 'ON'),
(57, 7067, 'lex', 2, 1, '2021-02-24 07:31:13', 'ON'),
(121, 9017, 'bro', 3, 2, '2021-02-25 10:10:36', 'ON'),
(123, 9513, 'lex!!!!!', 3, 1, '2021-02-25 10:20:22', 'OFF'),
(124, 9017, 'apa bro', 2, 3, '2021-02-25 10:29:47', 'ON'),
(125, 9017, 'dimana', 3, 2, '2021-02-25 10:30:12', 'ON'),
(126, 9017, 'bro', 3, 2, '2021-02-25 11:04:50', 'ON'),
(127, 9017, 'cek', 3, 2, '2021-02-25 12:34:27', 'ON'),
(128, 9017, 'cek lagi', 2, 3, '2021-02-25 12:34:46', 'ON'),
(129, 9017, 'test', 3, 2, '2021-02-25 13:36:57', 'ON'),
(130, 9017, 'cek test', 2, 3, '2021-02-25 13:37:09', 'ON');

-- --------------------------------------------------------

--
-- Struktur dari tabel `friend`
--

CREATE TABLE `friend` (
  `user_id` int(20) DEFAULT NULL,
  `friend_email` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `friend`
--

INSERT INTO `friend` (`user_id`, `friend_email`) VALUES
(2, 'mino@gmail.com'),
(2, 'ilhamhafsyah15@gmail.com'),
(2, 'ilhamhafsyah15@gmail.com'),
(3, 'ilhamhafsyah15@gmail.com');

-- --------------------------------------------------------

--
-- Struktur dari tabel `room_chat`
--

CREATE TABLE `room_chat` (
  `room_id_uniq` int(20) NOT NULL,
  `id_room` int(10) DEFAULT NULL,
  `user_a` int(10) DEFAULT NULL,
  `user_b` int(10) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `room_chat`
--

INSERT INTO `room_chat` (`room_id_uniq`, `id_room`, `user_a`, `user_b`, `created_at`, `updated_at`) VALUES
(3, 9017, 2, 3, '2021-02-22 22:32:13', '2021-02-23 05:32:13'),
(4, 9017, 3, 2, '2021-02-22 22:32:13', '2021-02-23 05:32:13'),
(5, 9513, 3, 1, '2021-02-24 07:16:05', '2021-02-24 14:16:05'),
(6, 9513, 1, 3, '2021-02-24 07:16:05', '2021-02-24 14:16:06'),
(7, 7067, 2, 1, '2021-02-24 12:20:29', '2021-02-24 19:20:30'),
(8, 7067, 1, 2, '2021-02-24 12:20:29', '2021-02-24 19:20:30');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `auth`
--
ALTER TABLE `auth`
  ADD PRIMARY KEY (`user_id`);

--
-- Indeks untuk tabel `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`chat_id`);

--
-- Indeks untuk tabel `room_chat`
--
ALTER TABLE `room_chat`
  ADD PRIMARY KEY (`room_id_uniq`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `auth`
--
ALTER TABLE `auth`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `chat`
--
ALTER TABLE `chat`
  MODIFY `chat_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=131;

--
-- AUTO_INCREMENT untuk tabel `room_chat`
--
ALTER TABLE `room_chat`
  MODIFY `room_id_uniq` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
