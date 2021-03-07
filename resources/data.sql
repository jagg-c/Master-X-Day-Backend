INSERT INTO public.passenger (firstname,lastname) VALUES
	 ('alejandro','sanchez'),
	 ('cesar','oros'),
	 ('jhony','garcia'),
	 ('elias','sanchez');

INSERT INTO public.country (value) VALUES
	 ('MEXICO'),
	 ('COLOMBIA'),
	 ('EE.UU'),
	 ('CHILE');

INSERT INTO public.destination (value,countryid) VALUES
	 ('CDMX',1),
	 ('GUADALAJARA',1),
	 ('BOGOTÁ',2),
	 ('BOSTON',3),
	 ('CHILE',4);

INSERT INTO public.route (destinationid,duration,value,originid) VALUES
	 (5,'02:00:00',NULL,6),
	 (5,'05:00:00',NULL,7),
	 (7,'05:00:00',NULL,5),
	 (8,'08:00:00',NULL,9);

INSERT INTO public.flight (routeid,status,arrivaldate,exitdate,timeboarding) VALUES
	 (1,'delayed','2020-06-03',NULL,'13:00:00'),
	 (2,'boarding','2020-08-03',NULL,'14:00:00'),
	 (3,'cancelled','2020-03-13',NULL,'12:00:00'),
	 (4,'on-time','2020-06-03',NULL,'20:00:00'),
	 (3,'in-flight','2020-03-06',NULL,'16:00:00');

INSERT INTO public.ticket (passengerid,flightid,seat) VALUES
	 (5,1,50),
	 (6,2,25),
	 (7,1,50),
	 (8,5,25),
	 (6,5,12),
	 (7,3,100),
	 (8,4,25);