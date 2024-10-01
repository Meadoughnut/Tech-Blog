# Tech-Blog


A CMS-style blog site similar to a WordPress site, built from scratch, where developers can publish their blog posts, share thoughts, and comment on others' posts. This application is created using the MVC (Model-View-Controller) paradigm and deployed on Render.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contributing](#contributing)
- [Contact](#contact)
- [Live URL](#live-url)

## Description

Tech Blog is a CMS-style blog site designed for developers who enjoy writing about technology. Users can create an account, write blog posts, comment on others' posts, and manage their own posts. The site is intuitive, easy to navigate, and allows a community of developers to share knowledge and insights.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:

   ```bash
   cd tech-blog
   ```
3. Install the required dependencies:

   ```bash
   npm install
   ```
4. Set up the environment variables:

   - Create a `.env` file in the root of the project and add your PostgreSQL connection information.

   ```env
   DB_NAME='your-database-name'
   DB_USER='your-database-username'
   DB_PASSWORD='your-database-password'
   ```
5. Create the database and tables:

   ```bash
   npm run seed
   ```
6. Start the application:

   ```bash
   npm start
   ```


### Commands

- `npm start` - Start the server.
- `npm run seed` - Seed the database.


## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, JavaScript
- **Templating Engine**: Handlebars.js
- **Database**: PostgreSQL with Sequelize ORM
- **Authentication**: express-session, bcrypt
- **Deployment**: Render



## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

For any questions or inquiries, feel free to reach out:

- **Email**: meadinmenbere488@gmail.com
- **LinkedIn**: [Meadin Menbere](https://www.linkedin.com/in/meadin-menbere/)
- **GitHub**: [Meadoughnut](https://github.com/Meadoughnut)

## Live URL

The deployed application is available at: [Tech Blog on Render](https://tech-blogsite.onrender.com)

