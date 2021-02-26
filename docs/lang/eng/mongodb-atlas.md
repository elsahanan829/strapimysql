# Configure MongoDB Atlas

First we go to MongoDB Atlas, we log in and from the main menu we select a project. If you don't have a project, create one.

![MongoDB Atlas - Tutorial 1](./docs/images/1-mongodb-atlas-tutorial.png)

Then we go to the section **Database Access**.
![MongoDB Atlas - Tutorial 2](./docs/images/2-mongodb-atlas-tutorial.png)

We click on **Add New Database User**
![MongoDB Atlas - Tutorial 3](./docs/images/3-mongodb-atlas-tutorial.png)

We create a new user with the name and password. We must make sure to assign the necessary permissions to be able to read and write to the database. When finished we click on **Add User**
![MongoDB Atlas - Tutorial 4](./docs/images/4-mongodb-atlas-tutorial.png)

We return to the **Clusters** section and click on the **CONNECT** button
![MongoDB Atlas - Tutorial 5](./docs/images/5-mongodb-atlas-tutorial.png)

We select **Connect your application**
![MongoDB Atlas - Tutorial 6](./docs/images/6-mongodb-atlas-tutorial.png)

We configure the first field in **Node js** with version **3.0 or later** and copy the code provided below.
![MongoDB Atlas - Tutorial 7](./docs/images/7-mongodb-atlas-tutorial.png)

The following code will help us to configure strapi with MongoDB Atlas. Make sure to use yours, this is just an example.

```bash
mongodb+srv://strapi:<password>@main.hfhwg.mongodb.net/<dbname>?retryWrites=true&w=majority
```

The above code contains the following fields:

```bash
conection-type: mongodb+srv
host: main.hfhwg.mongodb.net
dbname: <dbname>
username: strapi
password: <password>
```

**Identify the same fields but with your code so that you can continue with the tutorial.**

For the **dbname** field, you will specify which is the database you want to connect to and for the **password** field it will be the password that you set for the user you created. **Follow the tutorial so you can see in detail how these fields are used**.
