## Get AWS S3 credentials

The following environment variables that we need to run the image will be obtained with the digitalocean spaces microservice. To achieve this, first we go to our digitalocean panel, click on the green button that says create and select Spaces.

![Digitalocean create a space tutorial 1](./docs/images/do-space-01.png)

<br>

We select the region of the datacenter of our preference.

![Digitalocean create a space tutorial 2](./docs/images/do-space-02.png)

<br>
We will enable the Content Delivery Network so that our static files are served from multiple servers. For this step you need to add your domain to digitalocean and select it in the "Use a custom subdomain" field. You can use the domain directly or if you specify a subdomain digitalocean will create it for you.

In the option "Allow file listing?" It is advisable to select "Restrict File Listing" so that only our proprietary applications can list the contents of the space.

![Digitalocean create a space tutorial 3](./docs/images/do-space-03.png)

<br>

To finish we simply give a name to our space. We select the project and click on the create button. (I get the message in red because I already had it created)

![Digitalocean create a space tutorial 4](./docs/images/do-space-04.png)

<br>

### AWS_ACCESS_KEY_ID y AWS_ACCESS_SECRET

To obtain the value of this variable we go to **Account> API** in the menu on the left.

![Digitalocean create a space tutorial 11](./docs/images/do-space-11.png)

Then we click on **Generate New Key**
![Digitalocean create a space tutorial 12](./docs/images/do-space-12.png)

And we will get the two values. The first is the key and the second is the secret.

![Digitalocean create a space tutorial 13](./docs/images/do-space-13.png)

### AWS_REGION

To obtain the region we simply go to our in **Settings > Endpoint** and it will show us the region. Just take what's before .digitaloceanspaces.com.

![Digitalocean create a space tutorial 15](./docs/images/do-space-15.png)

### AWS_ENDPOINT

Now copy the entire endpoint as shown in the image and paste it in the environment variable.

![Digitalocean create a space tutorial 7](./docs/images/do-space-07.png)

### AWS_BUCKET

Finally we need the bucket that is the name of our space.

![Digitalocean create a space tutorial 8](./docs/images/do-space-08.png)
