# Get AWS S3 credentials

The project is configured to use an AWS S3 bucket so we will go to AWS to create one and obtain the credentials for the static files such as images, videos, etc.

<br>

## Create the bucket

First [sign in](https://signin.aws.amazon.com/signin) to your AWS account. If you don't have one, [create it](https://portal.aws.amazon.com/billing/signup).

In the search bar enter s3 and click on the first result.

![How to create a aws s3 bucket - 01](../../images/aws-s3-01.png)

Now click on Create Bucket

![How to create a aws s3 bucket - 02](../../images/aws-s3-02.png)

We will start to configure our bucket. The first field is to put the name of the bucket. The second is to select the region. The values ​​will depend on the needs of your project.

![How to create a aws s3 bucket - 03](../../images/aws-s3-03.png)

We go down to the next step and we will only select the last two options. This is important so that the public url of static files can be accessed.

![How to create a aws s3 bucket - 04](../../images/aws-s3-04.png)

Don't forget to check this box

![How to create a aws s3 bucket - 05](../../images/aws-s3-05.png)

We omit the rest of the options and we are going to click on the "create a bucket" button at the bottom of the page.

![How to create a aws s3 bucket - 06](../../images/aws-s3-06.png)

Once the bucket is created it will appear in our panel.

![How to create a aws s3 bucket - 07](../../images/aws-s3-07.png)

As you can see, it is showing us two values. The name of the bucket and the region.

So we have already obtained two variables:

`AWS_REGION=us-east-1`

`AWS_BUCKET=mybucket-test-24124`

Remember to put your data. The above are for example only.

<br>

## Create a policy in IAM

Now we will look for the IAM service so we put it in the search engine and click on the first result.

![How to create a aws s3 bucket - 08](../../images/aws-s3-08.png)

Once the panel loads we click on policies

![How to create a aws s3 bucket - 09](../../images/aws-s3-09.png)

We click on the button "create policy"

![How to create a aws s3 bucket - 10](../../images/aws-s3-10.png)

In the first option called service we will select S3

![How to create a aws s3 bucket - 11](../../images/aws-s3-11.png)

We open the resources option and select "any"

![How to create a aws s3 bucket - 12](../../images/aws-s3-12.png)

Then we click on "add ARN"

![How to create a aws s3 bucket - 13](../../images/aws-s3-13.png)

We insert the name of our bucket that we created previously and click on add

![How to create a aws s3 bucket - 14](../../images/aws-s3-14.png)

Once the RNA is added we click on the "Next: Tags" button at the bottom of the page.

![How to create a aws s3 bucket - 15](../../images/aws-s3-15.png)

This step is optional, so we can skip unless you need to add tags to it.

![How to create a aws s3 bucket - 16](../../images/aws-s3-16.png)

In the last step it will ask us to insert a name to the policy. I recommend that you put a name like the following: `S3BucketAccessTotal_mybucket`.

Replace `mybucket` with the name of your bucket name.

![How to create a aws s3 bucket - 17](../../images/aws-s3-17.png)

To finish we simply click on the create policy button that is at the end of the page

![How to create a aws s3 bucket - 18](../../images/aws-s3-18.png)

With this we will have our policy created.

![How to create a aws s3 bucket - 19](../../images/aws-s3-19.png)

<br>

## Create a user in IAM

We already have the policy. Now we need to create a user to assign that policy to if we go to our IAM panel, we go to the users section and click on add user.

![How to create a aws s3 bucket - 20](../../images/aws-s3-20.png)

In the first field we assign a name to it. Then in Select AWS Access Type we select Programmatic Access. We click Next: Permissions

![How to create a aws s3 bucket - 21](../../images/aws-s3-21.png)

In this step we will select the option Attach Existing Policies Directly and we will look for the policy that we created. We simply check the policy box and click Next: Tags

![How to create a aws s3 bucket - 22](../../images/aws-s3-22.png)

We can skip this step unless we need to add tags.

![How to create a aws s3 bucket - 23](../../images/aws-s3-23.png)

Here it will only ask us to review the configuration of the user that we are creating. If everything is correct we click on Create User.

![How to create a aws s3 bucket - 24](../../images/aws-s3-24.png)

In this last step we will obtain the Access Key ID and Secret Access Key values ​​which we will place in the environment variables: `AWS_ACCESS_KEY_ID` y `AWS_ACCESS_SECRET `.

![How to create a aws s3 bucket - 25](../../images/aws-s3-25.png)

With this we already have all the environment variables that we needed to configure AWS S3.
