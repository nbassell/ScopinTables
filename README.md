# Scopin'Tables

[![forthebadge](https://forthebadge.com/images/badges/made-with-ruby.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

[Live Demo][heroku]

[heroku]: https://scopin-tables.herokuapp.com/#/

Scopin'Tables is a web application based on the popular restaurant reservation site OpenTable. It features search for available reservations by restaurant name and cuisine. The app runs on React/Redux for the frontend and Rails/PostgreSQL for the backend.

## Features

### Splash Page / User Authentication
The application features end-to-end user authentication utilizing a login modal. This modal is also invoked via backend validation when a user attempts to access a protected function (i.e. viewing a profile or trying to create a reservation while not logged in). 

### Restaurant Search
Scopin'Tables features dual-search functionality, allowing for responsive frontend search that renders links to specific restaurants, as well as backend search upon form submission that displays an index of more robust restaurant information.

![restaurant_search](/app/assets/images/restaurant_search.png)

The challenge here was to get the correct restaurants displaying in my autocomplete, which I accomplished using a stringIncludeKey function as follows:

```javascript
  stringIncludeKey(string, key) {
    if (key === '') return true;
    if (string === "") return false;
    if (string[0].toLowerCase() === key[0].toLowerCase()) {
      return this.stringIncludeKey(string.slice(1), key.slice(1));
    }
    else if (string.length > 1) {
      return this.stringIncludeKey(string.slice(1), key);
    }
    return false;
  } 
```
### Reservations
Users make reservations for the specified restaurant via the restaurant show page. These are validated in the backend based on whether the current user has any other reservations within an hour on either end of the hour-long reservation. A check is also made to ensure that the restaurant is open, and reservation timeslots are generated based on the opening and closing times of the restaurant. These checks took some mildly odd datetime manipulation:
```ruby
  def while_restaurant_open
    unless (start_datetime <= (restaurant.closing_time - 1.hour).change(
        day: start_datetime.day, month: start_datetime.month, year: start_datetime.year
      )) && (
        start_datetime >= restaurant.opening_time.change(
          day: start_datetime.day, month: start_datetime.month, year: start_datetime.year
      ))
        errors[:reservation] << "Must be while restaurant is open"
    end
  end
```

### UI/UX
Scopin'Tables manages errors across slices of state, allowing for precise feedback upon user action. The overal design very closely resembles that of OpenTable itself.

## Future Directions
* Map with restaurant locations
* Filter search result via various options
* User profile page displaying saved restaurants and reservations
* Showing users available reservation time slots on restaurant search