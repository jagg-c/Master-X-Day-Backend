-- TABLE PASSENGER --
CREATE TABLE passenger (
    passengerId serial NOT NULL,
    firstName varchar(255) NOT NULL,
    lastName varchar(255) not null,
    PRIMARY KEY (passengerId)
);

-- TABLE TICKET --
CREATE TABLE ticket (
    ticketId serial NOT NULL,
    passengerId int,
    flightId int,
    seat int,
    PRIMARY KEY (ticketId)
);

-- TABLE FLIGHT --
create table flight (
    flightId serial NOT NULL,
    routeId int,
    status varchar(30),
    arrivalDate date,
    exitDate Date,
    timeBoarding time,
    PRIMARY KEY (flightId)
)

-- TABLE ROUTE --
create table route(
    id serial not null,
    passengerId int NOT NULL,
    destinationId int not NULL,
    Duration time,
    PRIMARY KEY (id)
)

-- TABLE DESTINATION --
create table destination(
    destinationId serial not null,
    value varchar(30),
    PRIMARY KEY (destinationId)
)

-- ALTER TABLE 
ALTER TABLE destination 
ADD COLUMN countryid int;

-- ADD PRIMARY KEY TO COUNTRY--
ALTER TABLE country 
ADD CONSTRAINT Pk_country
PRIMARY KEY (countryid) 

-- ADD FOREIGNS KEY´S--
ALTER TABLE flight 
ADD CONSTRAINT fk_flight_route
FOREIGN KEY (routeid) 
REFERENCES route (routeid);

ALTER TABLE ticket 
ADD CONSTRAINT fk_ticket_flight
FOREIGN KEY (flightid) 
REFERENCES flight (flightid);

ALTER TABLE ticket 
ADD CONSTRAINT fk_ticket_passenger
FOREIGN KEY (passengerid) 
REFERENCES passenger (passengerid);

ALTER TABLE route 
ADD CONSTRAINT fk_route_destination
FOREIGN KEY (destinationid) 
REFERENCES destination (destinationid);

ALTER TABLE destination 
ADD CONSTRAINT fk_destination_country
FOREIGN KEY (countryid) 
REFERENCES country (countryid);
