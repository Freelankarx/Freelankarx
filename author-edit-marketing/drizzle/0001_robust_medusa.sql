CREATE TABLE `contact_submissions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`genre` varchar(100) NOT NULL,
	`wordCount` varchar(50),
	`servicesNeeded` varchar(255) NOT NULL,
	`deadline` varchar(50),
	`message` text,
	`manuscriptUrl` varchar(500),
	`manuscriptFileName` varchar(255),
	`status` enum('new','contacted','in-progress','completed') NOT NULL DEFAULT 'new',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `contact_submissions_id` PRIMARY KEY(`id`)
);
