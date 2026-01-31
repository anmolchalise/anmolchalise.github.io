<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anmol Chalise – Product Head</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="icon" type="image/png" href="image/anmicon.png">
    <style>
        /* Resetting margin, padding, and box-sizing */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        /* Tech Background Canvas */
        #tech-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }

        /* Basic styling for body */
        body {
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            overflow: hidden;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        /* Day Mode */
        body.day-mode {
            color: #333;
        }

        /* Dark Mode */
        body.dark-mode {
            color: #fff;
        }

        /* Styling for the container */
        .container {
            width: 100%;
            max-width: 1200px;
            padding: 60px 40px;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 12px;
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            z-index: 1;
        }

        body.dark-mode .container {
            background: rgba(51, 51, 51, 0.9);
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
        }

        /* Image Styling */
        img {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            margin-bottom: 30px;
            border: 5px solid #ddd;
        }

        /* Heading Styling */
        h1 {
            font-size: 48px;
            font-weight: 700;
            color: #333;
        }

        body.dark-mode h1 {
            color: #fff;
        }

        /* Changing title styling */
        .changing-title {
            font-size: 32px;
            font-weight: 600;
            color: #0073b1;
            display: block;
            margin-top: 15px;
        }

        /* Paragraph Styling */
        p {
            margin-top: 20px;
            font-size: 20px;
            color: #555;
            line-height: 1.8;
        }

        body.dark-mode p {
            color: #ddd;
        }

        /* Social Media Links */
        .social-links {
            margin-top: 35px;
            display: flex;
            justify-content: center;
            gap: 25px;
        }

        .social-links a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 70px;
            height: 70px;
            background: none;
            color: #fff;
            border-radius: 50%;
            transition: background 0.3s ease-in-out, transform 0.2s;
            text-decoration: none;
            font-size: 32px;
            font-weight: bold;
            border: 2px solid transparent;
        }

        /* Social Media Original Color Scheme */
        .social-links .facebook {
            background-color: #1877f2;
        }

        .social-links .instagram {
            background-color: #e4405f;
        }

        .social-links .linkedin {
            background-color: #0077b5;
        }

        .social-links .website {
            background-color: #25d366;
        }

        /* Hover Effect */
        .social-links a:hover {
            background-color: rgba(0, 0, 0, 0.1);
            transform: scale(1.1);
        }

        /* Chat Bot Styling */
        .chat-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 350px;
            z-index: 1000;
            transition: all 0.3s ease;
        }

        .chat-header {
            background: #0073b1;
            color: white;
            padding: 15px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .chat-body {
            height: 0;
            overflow: hidden;
            transition: height 0.3s ease;
            background: white;
            border: 1px solid #ddd;
        }

        body.dark-mode .chat-body {
            background: #444;
            border-color: #666;
        }

        .chat-open .chat-body {
            height: 400px;
            display: flex;
            flex-direction: column;
        }

        .chat-messages {
            flex: 1;
            padding: 15px;
            overflow-y: auto;
        }

        .message {
            margin-bottom: 15px;
            padding: 10px;
            border-radius: 10px;
            max-width: 80%;
            word-wrap: break-word;
        }

        .bot-message {
            background: #f1f1f1;
            align-self: flex-start;
            text-align: left;
        }

        body.dark-mode .bot-message {
            background: #555;
            color: white;
        }

        .user-message {
            background: #0073b1;
            color: white;
            align-self: flex-end;
            margin-left: auto;
            text-align: right;
        }

        .chat-input {
            display: flex;
            padding: 10px;
            border-top: 1px solid #ddd;
        }

        body.dark-mode .chat-input {
            border-top-color: #666;
        }

        .chat-input input {
            flex: 1;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 20px;
            margin-right: 10px;
        }

        body.dark-mode .chat-input input {
            background: #555;
            color: white;
            border-color: #666;
        }

        .chat-input button {
            background: #0073b1;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 20px;
            cursor: pointer;
        }

        /* Theme Toggle Button Styling */
        .theme-toggle-btn {
            background-color: #f1f1f1;
            color: #333;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 24px;
            transition: background-color 0.3s ease;
            position: absolute;
            top: 20px;
            right: 20px;
            z-index: 2;
        }

        body.dark-mode .theme-toggle-btn {
            background-color: #444;
            color: #fff;
        }

        /* Typing indicator */
        .typing-indicator {
            display: none;
            padding: 10px;
            background: #f1f1f1;
            border-radius: 10px;
            align-self: flex-start;
            margin-bottom: 15px;
        }

        body.dark-mode .typing-indicator {
            background: #555;
        }

        .typing-indicator span {
            height: 8px;
            width: 8px;
            float: left;
            margin: 0 1px;
            background-color: #9E9EA1;
            display: block;
            border-radius: 50%;
            opacity: 0.4;
        }

        .typing-indicator span:nth-of-type(1) {
            animation: typing 1s infinite;
        }

        .typing-indicator span:nth-of-type(2) {
            animation: typing 1s 0.33s infinite;
        }

        .typing-indicator span:nth-of-type(3) {
            animation: typing 1s 0.66s infinite;
        }

        @keyframes typing {
            0%, 100% {
                transform: translateY(0);
                opacity: 0.4;
            }
            50% {
                transform: translateY(-5px);
                opacity: 1;
            }
        }

        /* Media Queries for Mobile */
        @media only screen and (max-width: 768px) {
            body {
                padding: 10px;
            }

            .container {
                max-width: 100%;
                width: 100%;
            }

            img {
                width: 120px;
                height: 120px;
            }

            h1 {
                font-size: 28px;
            }

            .changing-title {
                font-size: 18px;
            }

            p {
                font-size: 14px;
                margin-top: 10px;
            }

            .social-links {
                margin-top: 25px;
                gap: 15px;
            }

            .social-links a {
                width: 50px;
                height: 50px;
                font-size: 24px;
            }

            .chat-container {
                width: 300px;
                right: 10px;
                bottom: 10px;
            }
        }

        /* Extra Small Screen Adjustments */
        @media only screen and (max-width: 480px) {
            h1 {
                font-size: 24px;
            }

            .changing-title {
                font-size: 16px;
            }

            p {
                font-size: 12px;
            }

            .social-links a {
                width: 40px;
                height: 40px;
                font-size: 18px;
            }

            .chat-container {
                width: calc(100% - 20px);
                right: 10px;
            }
        }
    </style>
</head>
<body class="dark-mode">
    <!-- Tech Background Canvas -->
    <canvas id="tech-bg"></canvas>
    
    <div class="container">
        <img src="image/anm.jpeg" alt="Anmol Chalise">
        <h1>Anmol Chalise</h1>
        <span id="changing-title" class="changing-title">Product Head</span>
        <p>With over a decade of experience in Computer Science and Information Technology, I am a seasoned Product Head who combines technical expertise with strong leadership to drive innovation across B2B, B2C, and B2G markets. Passionate about optimizing processes and delivering scalable solutions.</p>
        <div class="social-links">
            <a href="https://www.facebook.com/anmolchalise" target="_blank" class="facebook" title="Facebook">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/anmolchalise/" target="_blank" class="instagram" title="Instagram">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="https://np.linkedin.com/in/anmolchalise" target="_blank" class="linkedin" title="LinkedIn">
                <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://anmolchalise.com.np/" target="_blank" class="website" title="Website">
                <i class="fas fa-globe"></i>
            </a>
        </div>
    </div>

    <!-- Chat Bot -->
    <div class="chat-container">
        <div class="chat-header" id="chat-toggle">
            <span>Ask me about Anmol</span>
            <i class="fas fa-comment"></i>
        </div>
        <div class="chat-body" id="chat-body">
            <div class="chat-messages" id="chat-messages">
                <div class="message bot-message">
                    Hi there! I'm here to tell you about Anmol Chalise. You can ask me things like:<br>
                    - "What's your name?"<br>
                    - "Where do you work?"<br>
                    - "What are your skills?"<br>
                    - "Tell me about your experience"<br>
                    - "How can I contact you?"
                </div>
            </div>
            <div class="typing-indicator" id="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="chat-input">
                <input type="text" id="user-input" placeholder="Type your question...">
                <button id="send-btn"><i class="fas fa-paper-plane"></i></button>
            </div>
        </div>
    </div>

    <!-- Button for theme toggle -->
    <button id="theme-toggle" class="theme-toggle-btn">🌙</button>

    <script>
        document.addEventListener("DOMContentLoaded", function() {
            // Background Animation
            const canvas = document.getElementById('tech-bg');
            const ctx = canvas.getContext('2d');
            
            function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
            
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();
            
            // Tech background animation - circuit board inspired
            const nodes = [];
            const connections = [];
            const nodeCount = 50;
            
            // Create nodes
            for (let i = 0; i < nodeCount; i++) {
                nodes.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 2 + 1,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5
                });
            }
            
            // Create connections between nearby nodes
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    if (dist < 150) {
                        connections.push({
                            from: i,
                            to: j,
                            length: dist,
                            opacity: 1 - dist/150
                        });
                    }
                }
            }
            
            function drawTechBackground() {
                // Clear canvas with a slight transparency for trail effect
                ctx.fillStyle = document.body.classList.contains('dark-mode') ? 'rgba(25, 25, 35, 0.1)' : 'rgba(240, 240, 245, 0.1)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                // Update and draw nodes
                nodes.forEach(node => {
                    node.x += node.vx;
                    node.y += node.vy;
                    
                    // Bounce off walls
                    if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                    if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
                    
                    // Draw node
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                    ctx.fillStyle = document.body.classList.contains('dark-mode') ? 'rgba(0, 115, 177, 0.7)' : 'rgba(0, 115, 177, 0.5)';
                    ctx.fill();
                });
                
                // Draw connections
                connections.forEach(conn => {
                    const fromNode = nodes[conn.from];
                    const toNode = nodes[conn.to];
                    
                    const dx = fromNode.x - toNode.x;
                    const dy = fromNode.y - toNode.y;
                    const newDist = Math.sqrt(dx * dx + dy * dy);
                    
                    // Update opacity based on current distance
                    conn.opacity = 1 - newDist/150;
                    if (conn.opacity < 0) conn.opacity = 0;
                    
                    ctx.beginPath();
                    ctx.moveTo(fromNode.x, fromNode.y);
                    ctx.lineTo(toNode.x, toNode.y);
                    ctx.strokeStyle = document.body.classList.contains('dark-mode') ? 
                                     `rgba(100, 200, 255, ${conn.opacity * 0.5})` : 
                                     `rgba(0, 115, 177, ${conn.opacity * 0.3})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                });
                
                requestAnimationFrame(drawTechBackground);
            }
            
            drawTechBackground();
            
            // Changing title functionality
            const titles = ["Product Head", "Product Research & Development", "Product Innovation"];
            let index = 0;
            const titleElement = document.getElementById("changing-title");
            
            function changeTitle() {
                titleElement.textContent = titles[index];
                index = (index + 1) % titles.length;
            }
            
            setInterval(changeTitle, 2000);
            
            // Dark Mode / Day Mode Toggle
            const themeToggleButton = document.getElementById("theme-toggle");
            
            // Set default theme to dark mode
            document.body.classList.add("day-mode");
            document.body.classList.remove("dark-mode");
            themeToggleButton.textContent = "🌙";
            
            // Listen for theme toggle button click
            themeToggleButton.addEventListener("click", function() {
                // Toggle theme
                document.body.classList.toggle("day-mode");
                document.body.classList.toggle("dark-mode");
                
                // Save theme preference in localStorage
                if (document.body.classList.contains("dark-mode")) {
                    localStorage.setItem("theme", "dark");
                    themeToggleButton.textContent = "☀️";
                } else {
                    localStorage.setItem("theme", "light");
                    themeToggleButton.textContent = "🌙";
                }
            });
            
            // Chat functionality
            const chatToggle = document.getElementById("chat-toggle");
            const chatBody = document.getElementById("chat-body");
            const chatMessages = document.getElementById("chat-messages");
            const userInput = document.getElementById("user-input");
            const sendBtn = document.getElementById("send-btn");
            const typingIndicator = document.getElementById("typing-indicator");
            
            // Toggle chat window
            chatToggle.addEventListener("click", function() {
                chatBody.parentElement.classList.toggle("chat-open");
            });
            
            // Send message function
            function sendMessage() {
                const message = userInput.value.trim();
                if (message === "") return;
                
                // Add user message
                addMessage(message, "user");
                userInput.value = "";
                
                // Show typing indicator
                typingIndicator.style.display = "block";
                chatMessages.scrollTop = chatMessages.scrollHeight;
                
                // Process and respond
                setTimeout(() => {
                    typingIndicator.style.display = "none";
                    const response = generateResponse(message);
                    addMessage(response, "bot");
                    
                    // Auto-scroll to bottom
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 1000);
            }
            
            // Send message on button click or Enter key
            sendBtn.addEventListener("click", sendMessage);
            userInput.addEventListener("keypress", function(e) {
                if (e.key === "Enter") {
                    sendMessage();
                }
            });
            
            // Add message to chat
            function addMessage(text, sender) {
                const messageDiv = document.createElement("div");
                messageDiv.classList.add("message");
                messageDiv.classList.add(sender + "-message");
                messageDiv.textContent = text;
                chatMessages.appendChild(messageDiv);
                
                // Auto-scroll to bottom
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
            
            // Generate bot response
            function generateResponse(message) {
                const lowerMsg = message.toLowerCase();
                
                if (lowerMsg.includes("name") || lowerMsg.includes("who are you")) {
                    return "Anmol Chalise is a Product Head with over a decade of experience in Computer Science and Information Technology.";
                } else if (lowerMsg.includes("work") || lowerMsg.includes("where do you work")) {
                    return "Anmol Chalise currently works at Innovate Tech Pvt. Ltd., where he applies his extensive experience across B2B, B2C, and B2G markets. He combines deep technical expertise with strong leadership to drive innovation and has a proven track record of delivering both local and international projects.";
                } else if (lowerMsg.includes("skill") || lowerMsg.includes("what can you do") || lowerMsg.includes("expert")) {
                    return "Anmol specializes in product management, process optimization, scalable solutions, technical leadership, and innovation across various market segments. His technical skills include expertise in software development, system architecture, and emerging technologies.";
                } else if (lowerMsg.includes("experience") || lowerMsg.includes("background")) {
                    return "With over 10 years in tech, Anmol has developed expertise in driving product development, leading teams, and delivering solutions that meet market needs. He has successfully managed projects from conception to launch, working with both startups and established companies.";
                } else if (lowerMsg.includes("contact") || lowerMsg.includes("how to reach") || lowerMsg.includes("connect") || lowerMsg.includes("email")) {
                    return "You can contact Anmol via email at anmolchalise707@gmail.com or connect with him on LinkedIn. For more direct inquiries, his phone number can be provided upon request.";
                } else if (lowerMsg.includes("hello") || lowerMsg.includes("hi") || lowerMsg.includes("hey")) {
                    return "Hello! I can tell you about Anmol Chalise. Try asking about his experience, skills, or how to contact him.";
                } else if (lowerMsg.includes("project") || lowerMsg.includes("portfolio")) {
                    return "Anmol has worked on numerous projects across different industries. Some notable ones include enterprise SaaS platforms, e-commerce solutions, and government digital transformation initiatives. Would you like to know about any specific type of project?";
                } else if (lowerMsg.includes("education") || lowerMsg.includes("degree") || lowerMsg.includes("study")) {
                    return "Anmol holds a degree in Computer Science and Information Technology. He has continuously updated his skills through various certifications and professional development courses in product management and emerging technologies.";
                } else {
                    return "I'm not sure how to answer that. Try asking about Anmol's experience, skills, projects, education, or how to contact him.";
                }
            }
            
            // Customization questions for Anmol
            console.log("To further customize your chat bot, please provide answers to these questions:");
            console.log("1. What specific companies have you worked at?");
            console.log("2. What are your most notable achievements or projects?");
            console.log("3. Do you have any specific certifications or specializations?");
            console.log("4. What technologies or tools are you most proficient with?");
            console.log("5. Are there any specific services you offer (consulting, mentoring, etc.)?");
        });
    </script>
</body>
</html>
