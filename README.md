## MERN Estate: Full-Stack Property Management System

A high-performance real estate marketplace built to master the complexities of the **MERN stack**, focusing on secure user authentication, optimized image handling, and scalable state management.

Project link: https://mern-estate-ashy-five.vercel.app/
---

## Architectural Case Study & Audit
* Beyond the implementation, I performed a technical audit to identify production-level bottlenecks and scalability constraints.*

### **Engineering Decisions**
*   **Hybrid Storage Strategy:** Utilized **MongoDB** for flexible property schemas while offloading heavy binary image data to **Firebase Storage**. This ensures the primary database remains lean and performant for queries.
*   **Authentication Flow:** Implemented a dual-layered security model using **Firebase Social Auth** for seamless onboarding and custom **JWT/HttpOnly Cookie** middleware for private API route protection.
*   **State Management:** Leveraged **Redux Toolkit** to manage complex global states (user sessions, search filters), reducing unnecessary re-renders in a data-heavy environment.

---

##  The "Engineering Audit" (Lessons Learned)
While building this system, I identified key areas where a standard MERN implementation requires further enhancements:

1.  **Search Indexing:** Direct MongoDB queries for fuzzy text search become inefficient as listings grow. I can transition to **ElasticSearch** or **Algolia** to provide millisecond, typo-tolerant search results.
2.  **Real-Time Engagement:** The current polling-based inquiry system is a candidate for **Socket.io** integration to enable instant buyer-seller notifications.

---

##  Tech Stack
*   **Frontend:** React.js, Tailwind CSS, Redux Toolkit
*   **Backend:** Node.js, Express.js
*   **Database:** MongoDB Atlas
*   **Storage & Auth:** Firebase (Storage & Google OAuth)

---

##  Key Features
*   **Advanced CRUD:** Users can create, update, and manage property listings with multi-image support.
*   **Dynamic Search:** Filter properties by type (rent/sale), amenities, and price range.
*   **Secure Profile Management:** Personal dashboards for users to track their listings.
*   **Responsive UI:** Optimized for all devices using Tailwind's mobile-first utility classes.

---

##  Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/betheashvin/mern-estate.git
   ```
2. **Install dependencies:**
   ```bash
   # For Backend
   npm install
   # For Frontend
   cd client && npm install
   ```
3. **Environment Variables:**
   Create a `.env` file in the root directory and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   

4. **Run the application:**
   ```bash
   # From root 
   npm run dev
   ```
