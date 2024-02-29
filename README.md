<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Community Maker Space</title>
    <style>
        /* General Styles */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }
        .container {
            max-width: 1200px;
            margin: 20px auto;
            padding: 0 20px;
        }
        header {
            background-color: #333;
            color: #fff;
            padding: 20px;
            text-align: center;
            position: relative;
            z-index: 1;
        }
        nav {
            background-color: #444;
            color: #fff;
            padding: 10px;
            text-align: center;
        }
        nav a {
            color: #fff;
            text-decoration: none;
            margin: 0 10px;
            transition: color 0.3s ease;
        }
        nav a:hover {
            color: #ffc107;
        }
        footer {
            background-color: #333;
            color: #fff;
            padding: 20px;
            text-align: center;
        }

        /* Section Styles */
        section {
            background-color: #fff;
            padding: 40px;
            margin: 20px 0;
            border-radius: 8px;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
            transition: box-shadow 0.3s ease;
        }
        section:hover {
            box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
        }
        h2 {
            margin-top: 0;
        }

        /* About Section */
        #about {
            background-image: url('https://source.unsplash.com/1200x600/?workspace');
            background-size: cover;
            background-position: center;
            color: #fff;
            text-align: center;
            padding: 100px 0;
            position: relative;
            overflow: hidden;
        }
        #about:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: -1;
        }

        /* Services Section */
        #services {
            background-color: #f9f9f9;
            text-align: center;
        }
        .service-item {
            margin-bottom: 40px;
        }
        .service-icon {
            font-size: 48px;
            margin-bottom: 20px;
            color: #333;
        }

        /* Events Section */
        #events {
            background-color: #e6e6e6;
            text-align: center;
        }
        .event-item {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 40px;
        }
        .event-item img {
            max-width: 100%;
            border-radius: 8px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }
        .event-item img:hover {
            transform: scale(1.05);
        }

        /* Contact Section */
        #contact {
            background-color: #fff;
            text-align: center;
        }
        .contact-info {
            margin-top: 30px;
        }
        .contact-info i {
            font-size: 24px;
            margin-right: 10px;
        }

        /* Animation */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .animated {
            animation-duration: 1s;
            animation-fill-mode: both;
            opacity: 0;
        }
        .fadeInUp {
            animation-name: fadeInUp;
        }
    </style>
</head>
<body>
    <header>
        <h1>Community Maker Space</h1>
        <p>Welcome to our creative hub!</p>
    </header>
    <nav>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#events">Events</a>
        <a href="#contact">Contact</a>
    </nav>
    <div class="container">
        <section id="about" class="animated fadeInUp">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non velit non mauris malesuada ultricies.</p>
        </section>
        <section id="services" class="animated fadeInUp">
            <h2>Our Services</h2>
            <div class="service-item">
                <i class="fas fa-tools service-icon"></i>
                <h3>Tool Rental</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non velit non mauris malesuada ultricies.</p>
            </div>
            <div class="service-item">
                <i class="fas fa-chalkboard service-icon"></i>
                <h3>Workshops & Classes</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non velit non mauris malesuada ultricies.</p>
            </div>
            <div class="service-item">
                <i class="fas fa-users service-icon"></i>
                <h3>Community Projects</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non velit non mauris malesuada ultricies.</p>
            </div>
        </section>
        <section id="events" class="animated fadeInUp">
            <h2>Events</h2>
            <div class="event-item">
                <img src="https://source.unsplash.com/400x250/?workshop" alt="Workshop">
            </div>
            <div class="event-item">
                <img src="https://source.unsplash.com/400x250/?maker" alt="Maker Event">
            </div>
            <div class="event-item">
                <img src="https://source.unsplash.com/400x250/?community" alt="Community Event">
            </div>
        </section>
        <section id="contact" class="animated fadeInUp">
            <h2>Contact Us</h2>
            <div class="contact-info">
                <i class="fas fa-map-marker-alt"></i> 123 Maker Street, Cityville, USA
            </div>
            <div class="contact-info">
                <i class="
