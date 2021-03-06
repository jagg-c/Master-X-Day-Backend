# Aero Plazti

## Descriptión
AeroPlatzi wants you to build a platform that allows them to manage administer the approximately 10,000 daily flights, a key goal for the company.

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
select r.destination, count(p.id)
from route r
inner join flight f
   on f.route = r.id
inner join ticket t
   on t.flightId = f.id
inner join passenger p
   on p.id = t.passengerId
where f.date > current_date - interval '7 days'
order by r.destination
```

