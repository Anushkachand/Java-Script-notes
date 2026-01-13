# Date object to get the current date and time:

### example
```
var currentDate = new Date();
console.log(currentDate);

Output: Thu Jan 14 2021 15:15:38 GMT+0530 (India Standard Time)
```
#### setDate() method to set the day of the month, and the setFullYear() method to set the year.
```
var date = new Date();
date.setDate(15);
date.setFullYear(2022);
console.log(date);
```

### toLocaleString() method, which allows you to specify the format and time zone.

```
var date = new Date();
console.log(date.toLocaleString());
console.log(date.toLocaleString('en-US', {timeZone: 'UTC'}));
```