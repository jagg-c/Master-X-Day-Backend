# Aero Plazti

## Descriptión
AeroPlatzi wants you to build a platform that allows them to manage administer the approximately 10,000 daily flights, a key goal for the company.


## Front
[AeroPlatzi](http://35.226.180.202:3000/front/)

## Swagger
[Api Docs](http://35.226.180.202:3000/api-docs/)

## Relational database

### Database Diagram
![alt text](/resources/DataBaseDiagram.png "AeroPlatzi Database Diagram")

### Script of queries of database

```sql
CREATE TABLE passenger (
    passengerId serial NOT NULL,
    firstName varchar(255) NOT NULL,
    lastName varchar(255) not null,
    PRIMARY KEY (passengerId)
);

CREATE TABLE ticket (
    ticketId serial NOT NULL,
    passengerId int,
    flightId int,
    seat int,
    PRIMARY KEY (ticketId)
);

create table flight (
    flightId serial NOT NULL,
    routeId int,
    status varchar(30),
    arrivalDate date,
    exitDate Date,
    timeBoarding time,
    PRIMARY KEY (flightId)
)

create table route(
    id serial not null,
    passengerId int NOT NULL,
    destinationId int not NULL,
    Duration time,
    PRIMARY KEY (id)
)

create table destination(
    destinationId serial not null,
    value varchar(30),
    PRIMARY KEY (destinationId)
)
```

### Query between tables


How many users have travelled in the last 7 days, organized by destination routes.
```sql
-- routes with highest traffic
SELECT 
       (SELECT count(t.ticketid) FROM ticket t WHERE flightid = f.flightid) AS "tickets",
       r2.value 
       f.timeboarding 
  FROM flight f  
       INNER JOIN route r2 ON r2.routeid = f.routeid 
ORDER BY "tickets" DESC LIMIT 3;

-- Least frequent routs of the last 8 hours

SELECT 
      d.value 
 FROM route r 
      INNER JOIN flight f 		ON f.routeid = r.routeid
      INNER JOIN destination d	ON d.destinationid = f.routeid 
WHERE f.arrivaldate > (SELECT (NOW() - interval '8 hour'));

-- How many users have travelled in the last 7 days, organized by destination routes.
SELECT 
       p.firstname ,
       p.lastname ,
       t.ticketid,
       t.seat ,
       f.arrivaldate ,
       f.exitdate ,
       f.status ,
       f.timeboarding ,
       d.value 
  FROM passenger p 
INNER JOIN ticket t ON t.ticketid = p.ticketid
INNER JOIN flight f ON f.flightid = t.flightid 
INNER JOIN route r2 ON r2.routeid = f.routeid 
INNER JOIN destination d ON d.destinationid = r2.destinationid 
WHERE f.arrivaldate > (SELECT (NOW() - interval '7 day'))
ORDER BY d.value;
```

