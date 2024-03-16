INSERT INTO Cars (CarType, CarName, RegDate) VALUES
('Sedan', 'Toyota Camry', NOW()),
('SUV', 'Honda CR-V', NOW()),
('Hatchback', 'Volkswagen Golf', NOW()),
('Truck', 'Ford F-150', NOW()),
('Convertible', 'Mazda MX-5 Miata', NOW());

INSERT INTO Sensordata (time, ax, ay, az, gx, gy, gz) VALUES
('2024-03-17 08:00:00', 1.2, 2.3, 3.4, 1.2, 2.3, 3.4),
('2024-03-17 08:05:00', 1.1, 2.2, 3.3, 1.2, 2.3, 3.4),
('2024-03-17 08:10:00', 1.0, 2.1, 3.2, 1.2, 2.3, 3.4),
('2024-03-17 08:15:00', 0.9, 2.0, 3.1, 1.2, 2.3, 3.4),
('2024-03-17 08:20:00', 0.8, 1.9, 3.0, 1.2, 2.3, 3.4);


INSERT INTO Videodata (VideoURL) VALUES
("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")
;

INSERT INTO Users (UserId, Password, Name, Email, RegDate) VALUES
('user1', 'password1', 'John Doe', 'john.doe@example.com', NOW()),
('user2', 'password2', 'Jane Smith', 'jane.smith@example.com', NOW()),
('user3', 'password3', 'Bob Johnson', 'bob.johnson@example.com', NOW()),
('user4', 'password4', 'Alice Brown', 'alice.brown@example.com', NOW()),
('user5', 'password5', 'David Lee', 'david.lee@example.com', NOW());


INSERT INTO Usercarlinks (UserId, CarId) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

INSERT INTO Carvideodatalinks (CarId, VideoId) VALUES
(1, 1);
