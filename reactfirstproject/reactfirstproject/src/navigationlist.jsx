export default function Navbar({ currentPage, setPage }) {
    const goTo = (page) => {
      setPage(page);
      window.history.pushState({ page }, '', `/${page}`);
    };
    
    const CurrentUser = JSON.parse(localStorage.getItem("CurrentUser"))||"";

    
    return (
      <nav className="d-flex justify-content-between align-items-center p-3 bg-light shadow-sm">
        <h1>🛒 Welcome to Our Grocery Website 🥦</h1>
        <div className="btn-group">
          <button
            className={`btn ${currentPage === 'home' ? 'btn-primary text-white' : ''}`}
            onClick={() => goTo('home')}
          >
            Home
          </button>
          <button
            className={`btn ${currentPage === 'buy' ? 'btn-primary text-white' : ''}`}
            onClick={() => goTo('buy')}
          >
            Buy
          </button>
          <button
            className={`btn ${currentPage === 'cart' ? 'btn-primary text-white' : ''}`}
            onClick={() => goTo('cart')}
          >
            MyCart
          </button>

          {CurrentUser && (
          <>
              <button className={`btn ${currentPage === 'profile' ? 'btn-primary text-white' : ''}`} onClick={() => goTo('profile')}>👤Profile</button>
              <button   className="btn"  onClick={() => {
              localStorage.removeItem("CurrentUser"); // 清除登录状态
              goTo('login'); // 跳回登录页
            }}>Logout
            </button>
          </>
        )}

        {!CurrentUser && (
          <>
             <button className="btn" onClick={() => goTo('login')}>Login</button>
          </>
        )}
        </div>
      </nav>
    );
  }
  