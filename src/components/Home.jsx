import { useState } from 'react';
import { Calendar, Users, BookOpen, Home, Menu, X, Clock, Ticket } from 'lucide-react';

const AuthStyles = {
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#d97706',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        padding: '20px',
    },
    card: {
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '16px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
        width: '100%',
        maxWidth: '400px',
    },
    header: {
        textAlign: 'center',
        marginBottom: '32px',
    },
    title: {
        fontSize: '28px',
        fontWeight: '700',
        color: '#111827',
        margin: '0 0 8px 0',
    },
    subtitle: {
        fontSize: '14px',
        color: '#6b7280',
        margin: 0,
    },
    formGroup: {
        marginBottom: '20px',
    },
    labelWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '8px',
    },
    label: {
        fontSize: '14px',
        fontWeight: '500',
        color: '#374151',
    },
    input: {
        width: '100%',
        padding: '12px 16px',
        borderRadius: '8px',
        border: '1px solid #d1d5db',
        fontSize: '15px',
        boxSizing: 'border-box',
        outline: 'none',
        transition: 'border-color 0.2s',
    },
    btnPrimary: {
        width: '100%',
        padding: '12px',
        backgroundColor: '#b45309',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        marginTop: '10px',
    },
    divider: {
        margin: '24px 0',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#9ca3af',
        fontSize: '12px',
    },
    dividerLine: {
        flex: 1,
        height: '1px',
        backgroundColor: '#e5e7eb',
    },
    footer: {
        marginTop: '24px',
        textAlign: 'center',
        fontSize: '14px',
        color: '#6b7280',
    },
    linkBtn: {
        background: 'none',
        border: 'none',
        color: '#2563eb',
        fontWeight: '600',
        cursor: 'pointer',
        padding: '0 4px',
        fontSize: '14px',
    }

};
const styles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    background: #f9fafb;
  }

  .navbar {
    background: #92400e;
    color: white;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
  }

  .navbar-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
  }

  .navbar-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    font-size: 1.25rem;
    font-weight: bold;
  }

  .navbar-links {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  .navbar-links button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    transition: color 0.3s;
  }

  .navbar-links button:hover {
    color: #fcd34d;
  }

  .login-btn {
    background: #d97706 !important;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }

  .login-btn:hover {
    background: #b45309 !important;
  }

  .mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }

  .mobile-menu {
    background: #b45309;
    padding: 1rem;
    display: none;
  }

  .mobile-menu button {
    display: block;
    width: 100%;
    text-align: left;
    padding: 0.5rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1rem;
  }

  .mobile-menu button:hover {
    background: #92400e;
    border-radius: 0.25rem;
  }

  @media (max-width: 768px) {
    .navbar-links {
      display: none;
    }
    .mobile-menu-btn {
      display: block;
    }
    .mobile-menu.open {
      display: block;
    }
  }

/* Modern Auth Styles */
.auth-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  /* Soft warm gradient to match your brand */
  background: radial-gradient(circle at top left, #fff7ed 0%, #ffedd5 100%);
  position: relative;
}

/* Optional background decoration */
.auth-wrapper::before {
  content: "";
  position: absolute;
  width: 300px;
  height: 300px;
  background: #fbbf24;
  filter: blur(80px);
  border-radius: 50%;
  top: 10%;
  left: 10%;
  opacity: 0.2;
}

.auth-card-modern {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 1.25rem;
  box-shadow: 0 25px 50px -12px rgba(146, 64, 14, 0.15);
  padding: 2.5rem;
  width: 100%;
  max-width: 440px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 1;
}

.auth-header {
  text-align: center;
  margin-bottom: 2rem;
}

.auth-title {
  font-size: 1.875rem;
  font-weight: 800;
  color: #78350f;
  letter-spacing: -0.025em;
  margin-bottom: 0.5rem;
}

.auth-subtitle {
  color: #6b7280;
  font-size: 0.95rem;
}

.label-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.forgot-password {
  background: none;
  border: none;
  color: #d97706;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
}

.forgot-password:hover {
  text-decoration: underline;
}

.form-input {
  width: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 0.875rem 1rem;
  font-size: 1rem;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  background: #fdfdfd;
}

.form-input:focus {
  outline: none;
  border-color: #f59e0b;
  box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.1);
  background: white;
}

.btn-primary-modern {
  width: 100%;
  background: #d97706;
  color: white;
  padding: 0.875rem;
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 1rem;
  box-shadow: 0 4px 6px -1px rgba(217, 119, 6, 0.2);
}

.btn-primary-modern:hover {
  background: #b45309;
  transform: translateY(-1px);
  box-shadow: 0 10px 15px -3px rgba(217, 119, 6, 0.3);
}

.btn-primary-modern:active {
  transform: translateY(0);
}

  .form-group {
    margin-bottom: 1rem;
  }

  .form-label {
    display: block;
    color: #374151;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  .form-input {
    width: 100%;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    transition: all 0.3s;
  }

  .form-input:focus {
    outline: none;
    border-color: #d97706;
    box-shadow: 0 0 0 3px rgba(217, 119, 6, 0.1);
  }

  .btn-primary {
    width: 100%;
    background: #d97706;
    color: white;
    padding: 0.75rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s;
  }

  .btn-primary:hover {
    background: #b45309;
  }

  .auth-footer {
    text-align: center;
    margin-top: 1rem;
    color: #6b7280;
  }

  .auth-link {
    color: #d97706;
    font-weight: 600;
    background: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
  }

  .auth-link:hover {
    text-decoration: underline;
  }

  .hero-section {
    position: relative;
    height: 400px;
    background: url('https://upload.wikimedia.org/wikipedia/commons/a/a4/Mysore_Palace_Morning.jpg') center/cover;
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-content {
    text-align: center;
    color: white;
    padding: 1rem;
  }

  .hero-title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }

  .hero-btn {
    background: #d97706;
    color: white;
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.125rem;
    cursor: pointer;
    transition: background 0.3s;
  }

  .hero-btn:hover {
    background: #b45309;
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 1rem;
  }

  .section-title {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    color: #92400e;
    margin-bottom: 3rem;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .feature-card {
    background: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    text-align: center;
    transition: box-shadow 0.3s;
    border: 2px solid #d97706;
  }

  .feature-card:hover {
    box-shadow: 0 10px 15px rgba(0,0,0,0.15);
  }

  .feature-icon {
    margin: 0 auto 1rem;
    color: #d97706;
  }

  .feature-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .feature-desc {
    color: #6b7280;
  }

  .events-container {
    min-height: 100vh;
    background: #f9fafb;
    padding: 3rem 1rem;
  }

  .events-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    max-width: 1280px;
    margin: 0 auto;
  }

  .event-card {
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    overflow: hidden;
    transition: all 0.3s;
  }

  .event-card:hover {
    box-shadow: 0 20px 25px rgba(0,0,0,0.15);
    transform: translateY(-4px);
  }

  .event-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .event-content {
    padding: 1.5rem;
  }

  .event-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #92400e;
    margin-bottom: 0.75rem;
  }

  .event-detail {
    display: flex;
    align-items: center;
    color: #6b7280;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
  }

  .event-desc {
    color: #374151;
    margin: 1rem 0;
  }

  .btn-block {
    width: 100%;
    background: #d97706;
    color: white;
    padding: 0.5rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s;
  }

  .btn-block:hover {
    background: #b45309;
  }

  .details-container {
    min-height: 100vh;
    background: #f9fafb;
    padding: 3rem 1rem;
  }

  .details-card {
    max-width: 900px;
    margin: 0 auto;
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    overflow: hidden;
  }

  .details-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .details-content {
    padding: 2rem;
  }

  .details-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #92400e;
    margin-bottom: 1.5rem;
  }

  .details-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .info-item {
    display: flex;
    align-items: center;
    color: #374151;
    gap: 0.75rem;
  }

  .price-box {
    background: #fef3c7;
    padding: 1.5rem;
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .price-title {
    font-size: 1.25rem;
    font-weight: bold;
    color: #92400e;
    margin-bottom: 1rem;
  }

  .price-item {
    display: flex;
    justify-content: space-between;
    color: #374151;
    margin-bottom: 0.5rem;
  }

  .booking-container {
    min-height: 100vh;
    background: #f9fafb;
    padding: 3rem 1rem;
  }

  .booking-card {
    max-width: 600px;
    margin: 0 auto;
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    padding: 2rem;
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
    margin-bottom: 1rem;
  }

  .checkbox-label input {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  .total-box {
    background: #fef3c7;
    padding: 1.5rem;
    border-radius: 0.5rem;
    margin: 1.5rem 0;
  }

  .total-price {
    font-size: 2rem;
    font-weight: bold;
    color: #d97706;
  }

  .success-container {
    min-height: 100vh;
    background: #f9fafb;
    padding: 3rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .success-card {
    max-width: 600px;
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    padding: 2rem;
    text-align: center;
  }

  .success-icon {
    width: 80px;
    height: 80px;
    background: #10b981;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
  }

  .success-title {
    font-size: 2rem;
    font-weight: bold;
    color: #10b981;
    margin-bottom: 1rem;
  }

  .booking-details {
    background: #f9fafb;
    padding: 1.5rem;
    border-radius: 0.5rem;
    margin: 1.5rem 0;
    text-align: left;
  }

  .student-container {
    min-height: 100vh;
    background: #f9fafb;
    padding: 3rem 1rem;
  }

  .info-card {
    background: white;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    margin-bottom: 1.5rem;
  }

  .info-card.amber { background: #fef3c7; }
  .info-card.blue { background: #dbeafe; }
  .info-card.green { background: #d1fae5; }
  .info-card.red { background: #fee2e2; }

  .info-card h3 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .info-card.amber h3 { color: #92400e; }
  .info-card.blue h3 { color: #1e40af; }
  .info-card.green h3 { color: #065f46; }
  .info-card.red h3 { color: #991b1b; }

  .info-card ul {
    list-style: none;
  }

  .info-card li {
    color: #374151;
    margin-bottom: 0.5rem;
  }

  .admin-container {
    min-height: 100vh;
    background: #f9fafb;
    padding: 3rem 1rem;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .stat-card {
    background: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  .stat-label {
    color: #6b7280;
    margin-bottom: 0.5rem;
  }

  .stat-value {
    font-size: 2rem;
    font-weight: bold;
    color: #374151;
  }
    

  .admin-card {
    background: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  .admin-event {
    border: 1px solid #e5e7eb;
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .admin-event h3 {
    font-weight: bold;
    margin-bottom: 0.25rem;
  }

  .admin-event p {
    color: #6b7280;
    font-size: 0.875rem;
  }

  .admin-actions {
    display: flex;
    gap: 0.5rem;
  }

  .btn-edit {
    background: #3b82f6;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
  }

  .btn-delete {
    background: #ef4444;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
  }
`;

const mockEvents = [
    {
        id: 1,
        title: "Dasara Festival Celebration",
        date: "2025-10-05",
        time: "10:00 AM - 8:00 PM",
        description: "Experience the grandeur of Mysore Dasara with special cultural performances",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIzE2HN1aoastMzqDFF-nEJWFXgGxD_-y82Q&s",
        available: true,
        ticketPrice: { regular: 500, student: 250, withGuide: 750 }
    },
    {
        id: 3,
        title: "Jumbo Savari",
        date: "2025-10-05",
        time: "10:00 AM - 8:00 PM",
        description: "Royal elephant procession on Vijayadashami day as part of Dasara festivities",
        image: "https://media.assettype.com/deccanherald%2F2024-10-14%2Fbdbcstow%2FMYS23-Dasara-Festival-54.jpg?w=undefined&auto=format%2Ccompress&fit=max",
        available: true,
        ticketPrice: { regular: 500, student: 250, withGuide: 750 }
    },
    {
        id: 2,
        title: "Dasara Exhibition: ",
        date: "2025-01-20",
        time: "7:00 PM - 8:00 PM",
        description: "Traditional puja ceremonies at the palace during Dasara festival",
        image: "https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2F1721725301981_Mysore_Palace_seen_from_Chamundi_Hill_Viewpoint_at_night.jpg&w=1920&q=75",
        available: true,
        ticketPrice: { regular: 300, student: 150, withGuide: 450 }
    },

    {
        id: 4,
        title: "Sound & Light Show",
        date: "2025-01-20",
        time: "7:00 PM - 8:00 PM",
        description: "Witness the magnificent palace illuminated with spectacular light and sound",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbOUc4ZVh1xpaZm8HX09iNfws5IVO2_oIhdA&s",
        available: true,
        ticketPrice: { regular: 300, student: 150, withGuide: 450 }
    },

];

const Navbar = ({ currentPage, setCurrentPage, isLoggedIn, setIsLoggedIn }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <style>{styles}</style>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo" onClick={() => setCurrentPage('home')}>
                        <Home size={32} />
                        <span>Mysore Palace</span>
                    </div>

                    <div className="navbar-links">
                        <button onClick={() => setCurrentPage('home')}>Home</button>
                        <button onClick={() => setCurrentPage('events')}>Events</button>
                        <button onClick={() => setCurrentPage('studentEligibility')}>Student Info</button>
                        {isLoggedIn ? (
                            <>
                                <button onClick={() => setCurrentPage('dashboard')}>Dashboard</button>
                                <button onClick={() => setCurrentPage('login')}>Logout</button>
                            </>
                        ) : (
                            <button className="login-btn" onClick={() => setCurrentPage('login')}>Login</button>
                        )}
                    </div>

                    <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="mobile-menu open">
                        <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}>Home</button>
                        <button onClick={() => { setCurrentPage('events'); setMobileMenuOpen(false); }}>Events</button>
                        <button onClick={() => { setCurrentPage('studentEligibility'); setMobileMenuOpen(false); }}>Student Info</button>
                        {!isLoggedIn && <button onClick={() => { setCurrentPage('login'); setMobileMenuOpen(false); }}>Login</button>}
                    </div>
                )}
            </nav>
        </>
    );
};

//login component
const LoginPage = ({ setCurrentPage, setIsLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (email && password) {
            setIsLoggedIn(true);
            setCurrentPage('home');
        }
    };

    return (
        <div style={AuthStyles.wrapper}>
            <div style={AuthStyles.card}>
                <div style={AuthStyles.header}>
                    <h2 style={AuthStyles.title}>Welcome Back</h2>
                    <p style={AuthStyles.subtitle}>Please enter your details to sign in</p>
                </div>

                <form onSubmit={handleLogin}>
                    <div style={AuthStyles.formGroup}>
                        <label style={AuthStyles.label}>Email Address</label>
                        <input
                            type="email"
                            placeholder="name@company.com"
                            style={AuthStyles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div style={AuthStyles.formGroup}>
                        <div style={AuthStyles.labelWrapper}>
                            <label style={AuthStyles.label}>Password</label>
                            <button type="button" style={AuthStyles.linkBtn}>Forgot password?</button>
                        </div>
                        <input
                            type="password"
                            placeholder="••••••••"
                            style={AuthStyles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        style={AuthStyles.btnPrimary}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#d97706'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#b45309'}
                    >
                        Sign In
                    </button>
                </form>

                <div style={AuthStyles.divider}>
                    <div style={AuthStyles.dividerLine}></div>
                    <span style={{ padding: '0 10px' }}>OR</span>
                    <div style={AuthStyles.dividerLine}></div>
                </div>

                <p style={AuthStyles.footer}>
                    New here?
                    <button style={AuthStyles.linkBtn} onClick={() => setCurrentPage('signup')}>
                        Create an account
                    </button>
                </p>
            </div>
        </div>
    );
};

//signup component
const SignupPage = ({ setCurrentPage }) => {
    return (
        <div style={AuthStyles.wrapper}>
            <div style={AuthStyles.card}>
                <div style={AuthStyles.header}>
                    <h2 style={AuthStyles.title}>Get Started</h2>
                    <p style={AuthStyles.subtitle}>Create your account to join the community</p>
                </div>

                <form>
                    <div style={AuthStyles.formGroup}>
                        <label style={AuthStyles.label}>Full Name</label>
                        <input type="text" placeholder="John Doe" style={AuthStyles.input} required />
                    </div>
                    <div style={AuthStyles.formGroup}>
                        <label style={AuthStyles.label}>Email Address</label>
                        <input type="email" placeholder="name@company.com" style={AuthStyles.input} required />
                    </div>
                    <div style={AuthStyles.formGroup}>
                        <label style={AuthStyles.label}>Password</label>
                        <input type="password" placeholder="Min. 8 characters" style={AuthStyles.input} required />
                    </div>
                    <button
                        type="button"
                        style={AuthStyles.btnPrimary}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#d97706'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#b45309'}
                        onClick={() => setCurrentPage('home')}
                    >
                        Create Account
                    </button>
                </form>

                <p style={AuthStyles.footer}>
                    Already have an account?
                    <button style={AuthStyles.linkBtn} onClick={() => setCurrentPage('login')}>
                        Sign In
                    </button>
                </p>
            </div>
        </div>
    );
};

const HomePage = ({ setCurrentPage }) => {
    return (
        <div>
            <div className="hero-section">
                <div className="hero-overlay">
                    <div className="hero-content">
                        <h1 className="hero-title">Mysore Palace</h1>
                        <p className="hero-subtitle">Experience the Heritage of Karnataka</p>
                        <button className="hero-btn" onClick={() => setCurrentPage('events')}>Explore Events</button>
                    </div>
                </div>
            </div>

            <div className="container">
                <h2 className="section-title">Why Visit Mysore Palace?</h2>
                <div className="features-grid">
                    <div className="feature-card" onClick={() => setCurrentPage('events')}>
                        <Calendar size={48} className="feature-icon" />
                        <h3 className="feature-title">Special Events</h3>
                        <p className="feature-desc">Experience cultural festivals and celebrations throughout the year</p>
                    </div>
                    <div className="feature-card" onClick={() => setCurrentPage('studentEligibility')}>
                        <Users size={48} className="feature-icon" />
                        <h3 className="feature-title">Special Discounts</h3>
                        <p className="feature-desc">Expert guides to enrich your palace experience for students to explore</p>
                    </div>
                    <div className="feature-card" onClick={() => setCurrentPage('richHistory')}>
                        <BookOpen size={48} className="feature-icon" />
                        <h3 className="feature-title">Rich History</h3>
                        <p className="feature-desc">Explore centuries of royal heritage and architecture</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

const RichHistoryPage = ({ setCurrentPage }) => {
    const styles = {
        sectionWrapper: {
            padding: '40px 20px',
            backgroundColor: '#fffaf0', // Warm paper-like background
            borderRadius: '16px',
            color: '#2c1e1a',
            fontFamily: '"Georgia", serif', // Serif font for a historical feel
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '20px auto',
            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
            border: '1px solid #eaddca'
        },
        header: {
            textAlign: 'center',
            borderBottom: '2px solid #d4af37', // Gold accent
            paddingBottom: '15px',
            marginBottom: '25px',
        },
        title: {
            fontSize: '32px',
            margin: '0',
            color: '#8b0000', // Deep red for royalty
            textTransform: 'uppercase',
            letterSpacing: '1px'
        },
        eraCard: {
            marginBottom: '20px',
            padding: '15px',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            borderLeft: '5px solid #d4af37'
        },
        eraTitle: {
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#4a3728',
            display: 'block',
            marginBottom: '8px'
        },
        description: {
            fontSize: '16px',
            textAlign: 'justify'
        }
    };

    return (
        <div style={styles.sectionWrapper}>
            <header style={styles.header}>
                <h2 style={styles.title}>The Legacy of Amba Vilas</h2>
                <p style={{ fontStyle: 'italic', color: '#666' }}>History of the Mysore Palace</p>
            </header>

            <div style={styles.eraCard}>
                <span style={styles.eraTitle}>14th Century - The Beginning</span>
                <p style={styles.description}>
                    The original palace was built by the Yaduraya Wodeyar dynasty in the 14th century.
                    Originally constructed of wood, it served as the seat of the Kingdom of Mysore for centuries.
                </p>
            </div>

            <div style={styles.eraCard}>
                <span style={styles.eraTitle}>1897 - The Great Fire</span>
                <p style={styles.description}>
                    During the wedding of Princess Jayalakshmammanni, the old wooden palace caught fire
                    and was tragically burnt to ashes. The Royal family immediately commissioned British
                    architect <strong>Henry Irwin</strong> to design a grander, fireproof replacement.
                </p>
            </div>

            <div style={styles.eraCard}>
                <span style={styles.eraTitle}>1912 - Indo-Saracenic Marvel</span>
                <p style={styles.description}>
                    Completed in 1912 for the 24th Wodeyar Raja, the new palace became a masterpiece
                    of Indo-Saracenic architecture—blending Hindu, Mughal, Rajput, and Gothic styles.
                    It cost roughly 4.1 million Rupees at the time to build.
                </p>
            </div>

            <div style={styles.eraCard}>
                <span style={styles.eraTitle}>Modern Day - The City of Palaces</span>
                <p style={styles.description}>
                    Today, it is the second most visited monument in India after the Taj Mahal.
                    It is world-renowned for its Dussehra celebrations, during which the palace is
                    illuminated by nearly 97,000 light bulbs.
                </p>
            </div>
        </div>
    );
};

const EventsListPage = ({ setCurrentPage, setSelectedEvent }) => {
    return (
        <div className="events-container">
            <h1 className="section-title">Upcoming Events</h1>
            <div className="events-grid">
                {mockEvents.map(event => (
                    <div key={event.id} className="event-card">
                        <img src={event.image} alt={event.title} className="event-image" />
                        <div className="event-content">
                            <h3 className="event-title">{event.title}</h3>
                            <div className="event-detail">
                                <Calendar size={16} />
                                <span>{event.date}</span>
                            </div>
                            <div className="event-detail">
                                <Clock size={16} />
                                <span>{event.time}</span>
                            </div>
                            <p className="event-desc">{event.description}</p>
                            <button
                                className="btn-block"
                                onClick={() => { setSelectedEvent(event); setCurrentPage('eventDetails'); }}
                            >
                                View Details & Book
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const EventDetailsPage = ({ event, setCurrentPage }) => {
    if (!event) return <div>No event selected</div>;

    return (
        <div className="details-container">
            <div className="details-card">
                <img src={event.image} alt={event.title} className="details-image" />
                <div className="details-content">
                    <h1 className="details-title">{event.title}</h1>
                    <div className="details-info">
                        <div className="info-item">
                            <Calendar size={20} />
                            <span><strong>Date:</strong> {event.date}</span>
                        </div>
                        <div className="info-item">
                            <Clock size={20} />
                            <span><strong>Time:</strong> {event.time}</span>
                        </div>
                    </div>
                    <p style={{ fontSize: '1.125rem', color: '#374151', marginBottom: '1.5rem' }}>{event.description}</p>

                    <div className="price-box">
                        <h3 className="price-title">Ticket Prices</h3>
                        <div className="price-item">
                            <span>Regular Entry</span>
                            <span>₹{event.ticketPrice.regular}</span>
                        </div>
                        <div className="price-item">
                            <span>Student Entry</span>
                            <span>₹{event.ticketPrice.student}</span>
                        </div>
                        <div className="price-item">
                            <span>With Guide</span>
                            <span>₹{event.ticketPrice.withGuide}</span>
                        </div>
                    </div>

                    <button className="btn-block" style={{ padding: '1rem', fontSize: '1.125rem' }} onClick={() => setCurrentPage('booking')}>
                        Book Tickets Now
                    </button>
                </div>
            </div>
        </div>
    );
};

const TicketBookingPage = ({ event }) => {
    const [withGuide, setWithGuide] = useState(false);
    const [isStudent, setIsStudent] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
    const [booked, setBooked] = useState(false);

    const calculatePrice = () => {
        if (!event) return 0;
        if (isStudent) return withGuide ? event.ticketPrice.withGuide : event.ticketPrice.student;
        return withGuide ? event.ticketPrice.withGuide : event.ticketPrice.regular;
    };

    if (booked) {
        return (
            <div className="success-container">
                <div className="success-card">
                    <div className="success-icon">
                        <Ticket size={40} color="white" />
                    </div>
                    <h1 className="success-title">Booking Confirmed!</h1>
                    <p style={{ color: '#374151', marginBottom: '1.5rem' }}>
                        Your ticket has been booked successfully. A confirmation email has been sent to <strong>{formData.email}</strong>
                    </p>
                    <div className="booking-details">
                        <p style={{ marginBottom: '0.5rem' }}><strong>Booking Reference:</strong> MP{Math.floor(Math.random() * 100000)}</p>
                        <p style={{ marginBottom: '0.5rem' }}><strong>Name:</strong> {formData.name}</p>
                        <p style={{ marginBottom: '0.5rem' }}><strong>Event:</strong> {event?.title}</p>
                        <p style={{ marginBottom: '0.5rem' }}><strong>Total:</strong> ₹{calculatePrice()}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="booking-container">
            <div className="booking-card">
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#92400e', marginBottom: '1.5rem' }}>Book Your Ticket</h1>

                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        checked={isStudent}
                        onChange={(e) => setIsStudent(e.target.checked)}
                    />
                    <span>I am a student (Valid ID required)</span>
                </label>

                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        checked={withGuide}
                        onChange={(e) => setWithGuide(e.target.checked)}
                    />
                    <span>Add guided tour</span>
                </label>

                <div className="total-box">
                    <h3 className="price-title">Total Price</h3>
                    <p className="total-price">₹{calculatePrice()}</p>
                </div>

                <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                        type="tel"
                        className="form-input"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                </div>

                <button className="btn-primary" onClick={() => formData.name && formData.email && formData.phone && setBooked(true)}>
                    Proceed to Payment
                </button>
            </div>
        </div>
    );
};

const StudentEligibilityPage = () => {
    return (
        <div className="student-container">
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h1 className="section-title">Student Ticket Eligibility</h1>

                <div className="info-card amber">
                    <h3>Who is Eligible?</h3>
                    <ul>
                        <li>• Full-time students from recognized educational institutions</li>
                        <li>• Age limit: Under 25 years</li>
                        <li>• Valid student ID card is mandatory</li>
                        <li>• School students (Class 1-12)</li>
                        <li>• College and university students</li>
                    </ul>
                </div>

                <div className="info-card blue">
                    <h3>Required Documents</h3>
                    <ul>
                        <li>• Valid Student ID Card with photo</li>
                        <li>• Bonafide certificate (for college students)</li>
                        <li>• Any government-issued ID proof</li>
                    </ul>
                </div>

                <div className="info-card green">
                    <h3>Benefits</h3>
                    <ul>
                        <li>• 50% discount on entry tickets</li>
                        <li>• Special educational programs access</li>
                        <li>• Priority entry during off-peak hours</li>
                    </ul>
                </div>

                <div className="info-card red">
                    <h3>Important Notes</h3>
                    <ul>
                        <li>• Documents must be presented at entry</li>
                        <li>• Non-transferable tickets</li>
                        <li>• Subject to verification at the gate</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const AdminDashboard = () => {
    return (
        <div className="admin-container">
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#92400e', marginBottom: '2rem' }}>Admin Dashboard</h1>

                <div className="stats-grid">
                    <div className="stat-card">
                        <h3 className="stat-label">Total Bookings</h3>
                        <p className="stat-value">1,234</p>
                    </div>
                    <div className="stat-card">
                        <h3 className="stat-label">Active Events</h3>
                        <p className="stat-value">8</p>
                    </div>
                    <div className="stat-card">
                        <h3 className="stat-label">Revenue</h3>
                        <p className="stat-value">₹2.5L</p>
                    </div>
                </div>

                <div className="admin-card">
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#92400e', marginBottom: '1rem' }}>Event Management</h2>
                    <button className="btn-primary" style={{ width: 'auto', marginBottom: '1rem' }}>Add New Event</button>

                    {mockEvents.map(event => (
                        <div key={event.id} className="admin-event">
                            <div>
                                <h3>{event.title}</h3>
                                <p>{event.date} | {event.time}</p>
                            </div>
                            <div className="admin-actions">
                                <button className="btn-edit">Edit</button>
                                <button className="btn-delete">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Footer = () => {
    const styles = {
        footer: {
            backgroundColor: '#1a1a1b',
            color: '#ffffff',
            padding: '40px 20px',
            fontFamily: 'Segoe UI, Roboto, Helvetica, Arial, sans-serif',
            marginTop: 'auto',
        },
        container: {
            maxWidth: 'auto',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
        },
        topSection: {
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '100px',
        },
        collegeInfo: {
            flex: '1',
            minWidth: '250px',
            justifyContent: 'center',
            textAlign: 'center'
        },
        collegeName: {
            fontSize: '20px',
            fontWeight: '700',
            color: '#d4af37', // Gold accent
            marginBottom: '10px',
            justifyContent: 'center'
        },
        tableContainer: {
            overflowX: 'auto',
            flex: '2',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '14px',
            textAlign: 'left',
        },
        th: {
            borderBottom: '1px solid #444',
            padding: '5px',
            color: '#9ca3af',
            fontWeight: '400',
        },
        td: {
            padding: '5px',
            borderBottom: '1px solid #2d2d2e',
        },
        linkSection: {
            display: 'flex',
            gap: '20px',
            fontSize: '14px',
        },
        link: {
            color: '#9ca3af',
            textDecoration: 'none',
            transition: 'color 0.2s',
            cursor: 'pointer',
        },
        bottomBar: {
            borderTop: '1px solid #333',
            paddingTop: '20px',
            textAlign: 'center',
            fontSize: '12px',
            color: '#666',
        }
    };

    const students = [
        { name: "Subhashini", roll: "22", sem: "1st" },
        { name: "Vijayashree", roll: "53", sem: "1st" },
        { name: "Pratheeksha G N", roll: "52", sem: "1st" },
        { name: "Shreya M", roll: "9", sem: "1st" },
        { name: "Sanjitha V", roll: "3", sem: "1st" },
    ];

    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.topSection}>
                    {/* College & Links */}
                    <div style={styles.collegeInfo}>
                        <div style={styles.collegeName}>K.S.I.T, Bengaluru</div>
                        <p style={{ fontSize: '14px', color: '#9ca3af' }}>
                            Empowering students in technology and heritage studies.
                        </p>
                    </div>

                    {/* Student Contributors Table */}
                    <div style={styles.tableContainer}>
                        <h4 style={{ marginBottom: '15px', fontSize: '15px' }}>Project Contributors</h4>
                        <table style={styles.table}>
                            <thead>
                                <tr>
                                    <th style={styles.th}>Name</th>
                                    <th style={styles.th}>Roll No.</th>
                                    <th style={styles.th}>Sem</th>

                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student, index) => (
                                    <tr key={index}>
                                        <td style={styles.td}>{student.name}</td>
                                        <td style={styles.td}>{student.roll}</td>
                                        <td style={styles.td}>{student.sem}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div style={styles.bottomBar}>
                    © 2026 Mysore Heritage Project. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const renderPage = () => {
        switch (currentPage) {
            case 'login': return <LoginPage setCurrentPage={setCurrentPage} setIsLoggedIn={setIsLoggedIn} />;
            case 'signup': return <SignupPage setCurrentPage={setCurrentPage} />;
            case 'home': return <HomePage setCurrentPage={setCurrentPage} />;
            case 'events': return <EventsListPage setCurrentPage={setCurrentPage} setSelectedEvent={setSelectedEvent} />;
            case 'richHistory': return <RichHistoryPage setCurrentPage={setCurrentPage} />;
            case 'eventDetails': return <EventDetailsPage event={selectedEvent} setCurrentPage={setCurrentPage} />;
            case 'booking': return <TicketBookingPage event={selectedEvent} />;
            case 'studentEligibility': return <StudentEligibilityPage />;
            case 'dashboard': return <AdminDashboard setCurrentPage={setCurrentPage} />;
            case 'footer': return <Footer />;
            default: return <HomePage setCurrentPage={setCurrentPage} />;
        }
    };

    return (
        <div>
            {currentPage !== 'login' && currentPage !== 'signup' && (
                <Navbar
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                />
            )}
            {renderPage()}
        </div>
    );
};

export default App;