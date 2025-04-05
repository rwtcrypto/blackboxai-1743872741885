// Community Module
const community = {
    // Initialize community features
    init: function() {
        this.setupChatbot();
        this.loadForumThreads();
        this.setupEventListeners();
    },

    // Setup chatbot functionality
    setupChatbot: function() {
        const chatWindow = document.getElementById('chatWindow');
        const chatInput = document.querySelector('input[type="text"]');
        const chatButton = document.querySelector('button.bg-blue-500');

        if (chatButton && chatInput) {
            chatButton.addEventListener('click', () => {
                const message = chatInput.value.trim();
                if (message) {
                    this.addUserMessage(message);
                    this.generateBotResponse(message);
                    chatInput.value = '';
                }
            });
        }
    },

    // Add user message to chat
    addUserMessage: function(message) {
        const chatWindow = document.getElementById('chatWindow');
        if (chatWindow) {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'chat-message user-message mb-3 text-right';
            messageDiv.innerHTML = `<p class="text-sm bg-blue-500 p-2 rounded inline-block">${message}</p>`;
            chatWindow.appendChild(messageDiv);
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }
    },

    // Generate bot response
    generateBotResponse: function(userMessage) {
        const chatWindow = document.getElementById('chatWindow');
        if (!chatWindow) return;

        // Simple keyword matching for mock responses
        const responses = {
            'help': 'I can help with video editing tips, script ideas, and technical issues. What do you need help with?',
            'tutorial': 'We have tutorials on our YouTube channel. Would you like me to send you a link?',
            'error': 'Try refreshing the page. If the problem persists, contact support@example.com',
            'default': 'Thanks for your message! Our team will get back to you soon.'
        };

        let response = responses.default;
        userMessage = userMessage.toLowerCase();

        if (userMessage.includes('help')) {
            response = responses.help;
        } else if (userMessage.includes('tutorial')) {
            response = responses.tutorial;
        } else if (userMessage.includes('error') || userMessage.includes('problem')) {
            response = responses.error;
        }

        // Add slight delay for realistic response time
        setTimeout(() => {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'chat-message bot-message mb-3';
            messageDiv.innerHTML = `<p class="text-sm bg-gray-600 p-2 rounded">${response}</p>`;
            chatWindow.appendChild(messageDiv);
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }, 1000);
    },

    // Load forum threads (mock data)
    loadForumThreads: function() {
        const threads = [
            {
                title: 'Best practices for video SEO',
                author: 'creatorPro',
                date: '1 week ago',
                replies: 12,
                content: 'Sharing my experience with optimizing videos for search...'
            },
            {
                title: 'How to create engaging thumbnails?',
                author: 'user123',
                date: '2 days ago',
                replies: 5,
                content: 'Looking for tips on creating thumbnails that get more clicks...'
            }
        ];

        const forumSection = document.querySelector('.space-y-4');
        if (forumSection) {
            forumSection.innerHTML = threads.map(thread => `
                <div class="bg-gray-700 p-4 rounded-lg">
                    <div class="flex justify-between items-start">
                        <div>
                            <h3 class="font-medium">${thread.title}</h3>
                            <p class="text-sm text-gray-300">Posted by ${thread.author} • ${thread.date}</p>
                        </div>
                        <span class="bg-blue-500 text-xs px-2 py-1 rounded">${thread.replies} replies</span>
                    </div>
                    <p class="mt-2 text-sm">${thread.content}</p>
                    <button class="mt-3 text-blue-400 text-sm">View Discussion</button>
                </div>
            `).join('');
        }
    },

    // Setup event listeners
    setupEventListeners: function() {
        // New thread button
        const newThreadBtn = document.querySelector('button.bg-blue-500');
        if (newThreadBtn) {
            newThreadBtn.addEventListener('click', this.showNewThreadForm);
        }

        // Webinar registration buttons
        document.querySelectorAll('button.bg-blue-500.text-sm').forEach(btn => {
            btn.addEventListener('click', this.registerForWebinar);
        });
    },

    // Show new thread form
    showNewThreadForm: function() {
        alert('In a complete implementation, this would show a form to create a new forum thread.');
    },

    // Register for webinar
    registerForWebinar: function() {
        const webinarTitle = this.closest('div').querySelector('h3').textContent;
        alert(`You've registered for: ${webinarTitle}`);
    }
};

// Initialize community when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    community.init();
});