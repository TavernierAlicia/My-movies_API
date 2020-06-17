# MySocialNetwork

## Overview
It's CRUDS api for managed users, groups, events, albums, chats and surveys

## USERS

### [POST] Create user
Allows the creation of a single user.

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | No               |
| Who can use it ?           | Owner and users  |
| Response formats           | application/json |

* HTTP request : POST → user/create

#### Parameters :
```javascript
{
  'first_name': 'Cyril', // optionnal
  'last_name': 'Vimard', // optionnal
  'email': 'xzen769@gmail.com', // required
  'password': '123456789', // required
  'age': 32, // optionnal
  'gender': 'm', // optionnal,
  'city': 'Paris', // optionnal
  'phone': '0606060606', // optionnal
  'image_profil': 'https://www.mediacritik.com/wp-content/uploads/2019/04/rs_1024x759-170407142939-1024.Peter-Dinklage-Game-of-Thrones.kg_.040717.jpg' // optionnal
}
```

#### Response :
```javascript
{
  'id': '12483hdhd2838',
  'first_name': 'Cyril',
  'last_name': 'Vimard',
  'email': 'xzen769@gmail.com',
  'password': '123456789',
  'age': 32,
  'gender': 'm',
  'city': 'Paris',
  'phone': '0606060606',
  'image_profil': 'https://www.mediacritik.com/wp-content/uploads/2019/04/rs_1024x759-170407142939-1024.Peter-Dinklage-Game-of-Thrones.kg_.040717.jpg'
}
```

### [GET] Show user
Get an user by id.

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | No               |
| Who can use it ?           | Owner and users  |
| Response formats           | application/json |

* HTTP request : GET → user/show/:id

#### Parameters :
```javascript
```

### [PUT] Update user
Put an user by id.

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | Yes              |
| Who can use it ?           | Owner            |
| Response formats           | application/json |

* HTTP request : PUT → user/show/:id

#### Parameters :
```javascript

```


### [DELETE] Delete user
Delete user by id.

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | Yes              |
| Who can use it ?           | Owner            |
| Response formats           | application/json |

* HTTP request : DELETE → user/show/:id

#### Parameters :
```javascript
{
  'id': '12483hdhd2838',
  'first_name': 'Cyril',
  'last_name': 'Vimard',
  'email': 'xzen769@gmail.com',
  'password': '123456789',
  'age': 32,
  'gender': 'm',
  'city': 'Paris',
  'phone': '0606060606',
  'image_profil': 'https://www.mediacritik.com/wp-content/uploads/2019/04/rs_1024x759-170407142939-1024.Peter-Dinklage-Game-of-Thrones.kg_.040717.jpg'
}
```
#### Response :
```javascript
{
  'id': '12483hdhd2838',
  'first_name': 'Cyril',
  'last_name': 'Vimard',
  'email': 'xzen769@gmail.com',
  'password': '123456789',
  'age': 32,
  'gender': 'm',
  'city': 'Paris',
  'phone': '0606060606',
  'image_profil': 'https://www.mediacritik.com/wp-content/uploads/2019/04/rs_1024x759-170407142939-1024.Peter-Dinklage-Game-of-Thrones.kg_.040717.jpg'
}
```

