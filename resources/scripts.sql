-- How many users have travelled in the last 7 days, organized by destination routes.--
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