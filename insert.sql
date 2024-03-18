INSERT INTO Users (UserId, Password, Name, Email) 
VALUES 
('user1', 'password1', 'Alice', 'alice@example.com'),
('user2', 'password2', 'Bob', 'bob@example.com'),
('user3', 'password3', 'Charlie', 'charlie@example.com'),
('user4', 'password4', 'David', 'david@example.com'),
('user5', 'password5', 'Eve', 'eve@example.com');
INSERT INTO Drivelist (UserId, StartTime, EndTime, DrivingDistance, RecklessDriving, SuddenAccel, RapidAccel)
VALUES 
('user1', '2024-03-18 08:00:00', '2024-03-18 08:30:00', 20.5, 0, 1, 0),
('user1', '2024-03-18 09:00:00', '2024-03-18 09:45:00', 30.7, 1, 0, 2),
('user1', '2024-03-18 10:00:00', '2024-03-18 11:00:00', 50.2, 2, 1, 1),
('user1', '2024-03-18 11:30:00', '2024-03-18 12:15:00', 40.1, 0, 0, 1),
('user1', '2024-03-18 13:00:00', '2024-03-18 13:45:00', 35.0, 1, 1, 0);
INSERT INTO Sensordata (DrivelistId, time, ax, ay, az, gx, gy, gz)
VALUES 
(1, '2024-03-18 08:05:00', 0.1, 0.2, 0.3, 1.1, 0.8, 1.2),
(1, '2024-03-18 09:05:00', 0.2, 0.1, 0.4, 1.2, 0.9, 1.3),
(1, '2024-03-18 10:10:00', 0.3, 0.1, 0.5, 1.3, 1.0, 1.4),
(2, '2024-03-18 11:35:00', 0.2, 0.2, 0.3, 1.1, 0.9, 1.3),
(2, '2024-03-18 13:05:00', 0.1, 0.3, 0.2, 1.0, 0.8, 1.2);
INSERT INTO Videodata (DrivelistId, time, VideoURL, DrowsyDriving)
VALUES 
(1, '2024-03-18 08:10:00', 'https://example.com/video001', 0),
(1, '2024-03-18 09:10:00', 'https://example.com/video002', 1),
(1, '2024-03-18 10:15:00', 'https://example.com/video003', 0),
(2, '2024-03-18 11:40:00', 'https://example.com/video004', 1),
(2, '2024-03-18 13:10:00', 'https://example.com/video005', 0);
