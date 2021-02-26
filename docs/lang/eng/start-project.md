# Initialize a strapi the project

Run the following command to initialize the project. Change **my-project** to the actual name of your project.

```bash
npx create-strapi-app my-project
```

Then select the option **Custom (manual settings)**

```bash
? Choose your installation type
 Quickstart (recommended)
> Custom (manual settings)
```

Now select **mongo**

```bash
? Choose your default database client
 sqlite
 postgres
 mysql
> mongo
```

Insert the name of the database. **If it doesn't exist, a new one will be created with the name you provide.**

```bash
? Database name: strapi
```

The host is found in the code we got from MongoDB Atlas (**See the prerequisites above**). **Make sure to place yours, the following is an example.**

```bash
? Host: main.hfhwg.mongodb.net
```

We put **true** since it was indicated in the MongoDB Atlas code that the **connection-type** is **mongodb + srv**

```bash
? +srv connection: true
```

The default port in mongodb is **27017**

```bash
? Port (It will be ignored if you enable +srv): 27017
```

Now we will put the username we created in MongoDB Atlas. Make sure to use yours.

```bash
? Username: strapi
```

Then we put the password for the user that we used previously.

```bash
? Password: ****
```

Here we will only press enter since we will select the second option which is blank

```bash
? Authentication database (Maybe "admin" or blank):
```

Finally we will put **y** to enable a connection through ssl

```bash
? Enable SSL connection: y
```

Ready. We wait for the project to finish installing and we can access the following url where the strapi panel will be.

[http://localhost:1337](http://localhost:1337)
